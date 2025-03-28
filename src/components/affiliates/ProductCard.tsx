
import { motion } from "framer-motion";
import { Star, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    description: string;
    price: string;
    rating: number;
    reviews: number;
    image: string;
    category: string;
  };
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
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
          <button 
            className="flex items-center justify-center w-10 h-10 bg-green rounded-full text-foreground hover:bg-green/90 transition-colors duration-200"
            onClick={() => addToCart(product)}
          >
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
