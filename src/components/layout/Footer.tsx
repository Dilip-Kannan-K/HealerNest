
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Leaf, Instagram, Twitter, Facebook, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-lilac/10 pt-16 pb-8"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="w-6 h-6 text-green" />
              <span className="font-bold text-xl">HealerNest</span>
            </div>
            <p className="text-foreground/70 max-w-xs">
              A safe place to learn and grow. Your journey to peace and healing begins here.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-foreground/70 hover:text-green transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-green transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-green transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-green transition-colors duration-200">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/partners" className="text-foreground/70 hover:text-green transition-colors duration-200">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-foreground/70 hover:text-green transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-foreground/70 hover:text-green transition-colors duration-200">
                  Articles
                </Link>
              </li>
              <li>
                <Link to="/affiliates" className="text-foreground/70 hover:text-green transition-colors duration-200">
                  Affiliates
                </Link>
              </li>
              <li>
                <Link to="/connect" className="text-foreground/70 hover:text-green transition-colors duration-200">
                  Connect
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-foreground/70 hover:text-green transition-colors duration-200">
                  Mental Health Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-green transition-colors duration-200">
                  Self-Care Tips
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-green transition-colors duration-200">
                  Find a Therapist
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-green transition-colors duration-200">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-green transition-colors duration-200">
                  Crisis Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-center space-x-2 text-foreground/70">
                <Mail className="w-4 h-4 text-green" />
                <span>support@healernest.com</span>
              </p>
              <p className="text-foreground/70">
                123 Healing Street<br />
                Wellness City, WC 12345
              </p>
              <Link 
                to="/get-started" 
                className="inline-block mt-2 px-5 py-2 rounded-full bg-green text-foreground shadow-sm hover:shadow-md hover:bg-green/90 transition-all duration-200"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-lilac/20 mt-12 pt-8 text-center text-foreground/60 text-sm">
          <p>© {new Date().getFullYear()} HealerNest. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-3">
            <a href="#" className="hover:text-green transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-green transition-colors duration-200">Terms of Service</a>
            <a href="#" className="hover:text-green transition-colors duration-200">Cookie Policy</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
