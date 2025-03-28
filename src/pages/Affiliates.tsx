
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Components
import ProductCard from "@/components/affiliates/ProductCard";
import CategoryFilter from "@/components/affiliates/CategoryFilter";
import CartDrawer from "@/components/affiliates/CartDrawer";
import AffiliateInfo from "@/components/affiliates/AffiliateInfo";

// Data and Context
import { products, categories } from "@/components/affiliates/ProductData";
import { CartProvider } from "@/contexts/CartContext";

const Affiliates = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  
  // Filter products based on selected category
  const filteredProducts = selectedCategory === "All Products" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <CartProvider>
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Self-Care Products</h1>
            <p className="text-foreground/70 text-lg">
              Explore our curated collection of high-quality products to support your healing journey.
            </p>
          </motion.div>

          <CategoryFilter 
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link 
              to="#" 
              className="inline-flex items-center primary-button"
            >
              View All Products <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>

          <AffiliateInfo />
        </div>
      </div>
      
      <CartDrawer />
    </CartProvider>
  );
};

export default Affiliates;
