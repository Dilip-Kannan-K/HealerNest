
import { motion } from "framer-motion";
import { Star, ShoppingBag } from "lucide-react";

const AffiliateInfo = () => {
  return (
    <motion.div 
      className="mt-20 bg-gradient-to-r from-lilac/20 to-green/20 rounded-3xl p-10 md:p-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.9 }}
    >
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">About Our Affiliate Program</h2>
        <p className="text-lg text-foreground/80 mb-8">
          We've carefully selected these products from trusted partners to complement your healing journey. Every purchase supports our mission to provide accessible mental health resources.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="bg-white/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-green" />
            </div>
            <h3 className="font-semibold mb-2">Quality Assured</h3>
            <p className="text-foreground/70 text-sm">Every product is tested and approved by our team</p>
          </div>
          <div>
            <div className="bg-white/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="w-8 h-8 text-green" />
            </div>
            <h3 className="font-semibold mb-2">Ethical Sourcing</h3>
            <p className="text-foreground/70 text-sm">We partner only with companies that share our values</p>
          </div>
          <div>
            <div className="bg-white/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                <line x1="15" y1="9" x2="15.01" y2="9"></line>
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Customer Satisfaction</h3>
            <p className="text-foreground/70 text-sm">30-day happiness guarantee on all products</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AffiliateInfo;
