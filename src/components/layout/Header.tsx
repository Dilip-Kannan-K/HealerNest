
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Leaf, Menu, X } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import UserProfileButton from "@/components/profile/UserProfileButton";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Partners", path: "/partners" },
    { name: "Services", path: "/services" },
    { name: "Articles", path: "/articles" },
    { name: "Affiliates", path: "/affiliates" },
    { name: "Connect", path: "/connect" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-white/80 backdrop-blur-lg shadow-sm"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ rotate: -10 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Leaf className="w-8 h-8 text-green" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-bold text-2xl"
            >
              HealerNest
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <Link to={item.path} className="nav-link">
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <UserProfileButton />
              ) : (
                <>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                  >
                    <Link
                      to="/login"
                      className="px-5 py-2 rounded-full border-2 border-lilac text-foreground hover:bg-lilac/10 transition-all duration-200"
                    >
                      Login
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 }}
                  >
                    <Link
                      to="/get-started"
                      className="px-5 py-2 rounded-full bg-green text-foreground shadow-sm hover:shadow-md hover:bg-green/90 transition-all duration-200"
                    >
                      Get Started
                    </Link>
                  </motion.div>
                </>
              )}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white/95 backdrop-blur-md shadow-md"
        >
          <div className="container mx-auto px-6 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="py-2 nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-2">
                {isAuthenticated ? (
                  <Link
                    to="/profile"
                    className="py-2 px-4 text-center rounded-full border-2 border-green text-foreground hover:bg-green/10 transition-all duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    My Profile
                  </Link>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="py-2 px-4 text-center rounded-full border-2 border-lilac text-foreground hover:bg-lilac/10 transition-all duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      to="/get-started"
                      className="py-2 px-4 text-center rounded-full bg-green text-foreground shadow-sm hover:shadow-md hover:bg-green/90 transition-all duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get Started
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        </motion.div>
      )}
      
      {/* Tagline */}
      <div className="container mx-auto text-center mt-1">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-sm font-light italic text-foreground/70"
        >
          A safe place to learn and grow
        </motion.p>
      </div>
    </header>
  );
};

export default Header;
