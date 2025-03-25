
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingBag, ChevronRight, Star, ArrowRight } from "lucide-react";

const Affiliates = () => {
  const products = [
    {
      id: 1,
      name: "Calming Essential Oil Blend",
      description: "A soothing blend of lavender, chamomile, and bergamot to promote relaxation and reduce anxiety.",
      price: "$24.99",
      rating: 4.8,
      reviews: 126,
      image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
      category: "Aromatherapy"
    },
    {
      id: 2,
      name: "Meditation Cushion Set",
      description: "Ergonomically designed meditation cushion and mat for comfortable, supported meditation practice.",
      price: "$59.99",
      rating: 4.7,
      reviews: 83,
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80",
      category: "Meditation"
    },
    {
      id: 3,
      name: "Wellness Journal",
      description: "Guided journal with prompts for gratitude, self-reflection, and personal growth tracking.",
      price: "$18.95",
      rating: 4.9,
      reviews: 214,
      image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=800&q=80",
      category: "Mindfulness"
    },
    {
      id: 4,
      name: "Sleep Sound Machine",
      description: "Create a peaceful sleep environment with white noise, nature sounds, and gentle melodies.",
      price: "$45.99",
      rating: 4.6,
      reviews: 97,
      image: "https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?auto=format&fit=crop&w=800&q=80",
      category: "Sleep"
    },
    {
      id: 5,
      name: "Herbal Stress Relief Tea",
      description: "Organic blend of adaptogenic herbs to support your body's response to stress and promote calm.",
      price: "$15.99",
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1565799511371-2ac19066297e?auto=format&fit=crop&w=800&q=80",
      category: "Herbal Wellness"
    },
    {
      id: 6,
      name: "Weighted Blanket",
      description: "Premium weighted blanket that provides gentle, comforting pressure to improve sleep quality.",
      price: "$89.99",
      rating: 4.8,
      reviews: 243,
      image: "https://images.unsplash.com/photo-1572978122938-5dc1023b1f95?auto=format&fit=crop&w=800&q=80",
      category: "Sleep"
    }
  ];

  const categories = [
    "All Products", "Aromatherapy", "Meditation", "Mindfulness", 
    "Sleep", "Herbal Wellness", "Books", "Digital Products"
  ];

  return (
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

        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={`px-4 py-2 rounded-full text-sm transition-colors duration-200 ${
                category === "All Products" 
                  ? "bg-green text-foreground"
                  : "bg-white/70 backdrop-blur-sm border border-lilac/20 hover:bg-lilac/10"
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="healer-card overflow-hidden hover-lift"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="px-3 py-1 bg-lilac/10 text-foreground/80 text-xs font-medium rounded-full">
                    {product.category}
                  </span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-xs text-foreground/60 ml-1">({product.reviews})</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-foreground/70 mb-4 text-sm">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">{product.price}</span>
                  <button className="flex items-center justify-center w-10 h-10 bg-green rounded-full text-foreground hover:bg-green/90 transition-colors duration-200">
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
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

        {/* Affiliate Information */}
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
      </div>
    </div>
  );
};

export default Affiliates;
