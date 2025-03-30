
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Plus, LogOut } from "lucide-react";
import UserProfileButton from "../profile/UserProfileButton";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Track scroll position for header transparency
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrollPosition > 10 || isOpen
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 bg-green rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">HJ</span>
            </div>
            <span className="font-bold text-xl">HealingJourney</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/partners"
              className="nav-link relative text-foreground/70 hover:text-foreground transition-colors"
            >
              Partners
            </Link>
            <Link
              to="/services"
              className="nav-link relative text-foreground/70 hover:text-foreground transition-colors"
            >
              Services
            </Link>
            <Link
              to="/articles"
              className="nav-link relative text-foreground/70 hover:text-foreground transition-colors"
            >
              Articles
            </Link>
            <Link
              to="/affiliates"
              className="nav-link relative text-foreground/70 hover:text-foreground transition-colors"
            >
              Affiliates
            </Link>
            <Link
              to="/connect"
              className="nav-link relative text-foreground/70 hover:text-foreground transition-colors"
            >
              Connect
            </Link>
          </nav>

          {/* User menu / Auth buttons */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <UserProfileButton />
            ) : (
              <div className="hidden sm:flex items-center space-x-3">
                <Button asChild variant="outline" size="sm">
                  <Link to="/login">Login</Link>
                </Button>
                <Button asChild className="bg-green hover:bg-green/90 text-white" size="sm">
                  <Link to="/register">
                    <Plus className="mr-1 h-4 w-4" />
                    Sign Up
                  </Link>
                </Button>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-foreground focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background border-t"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
              <Link to="/partners" className="py-2 text-foreground/70 hover:text-foreground transition-colors">
                Partners
              </Link>
              <Link to="/services" className="py-2 text-foreground/70 hover:text-foreground transition-colors">
                Services
              </Link>
              <Link to="/articles" className="py-2 text-foreground/70 hover:text-foreground transition-colors">
                Articles
              </Link>
              <Link to="/affiliates" className="py-2 text-foreground/70 hover:text-foreground transition-colors">
                Affiliates
              </Link>
              <Link to="/connect" className="py-2 text-foreground/70 hover:text-foreground transition-colors">
                Connect
              </Link>
              
              {isAuthenticated ? (
                <>
                  <Link to="/profile" className="py-2 text-foreground/70 hover:text-foreground transition-colors">
                    My Profile
                  </Link>
                  <Link to="/settings" className="py-2 text-foreground/70 hover:text-foreground transition-colors">
                    Settings
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="py-2 text-destructive hover:text-destructive/80 transition-colors flex items-center"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Log Out
                  </button>
                </>
              ) : (
                <div className="pt-4 flex flex-col space-y-3">
                  <Button asChild variant="outline">
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button asChild className="bg-green hover:bg-green/90 text-white">
                    <Link to="/register">
                      <Plus className="mr-1 h-4 w-4" />
                      Sign Up
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
