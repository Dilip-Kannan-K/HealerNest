
import { motion } from "framer-motion";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const CategoryFilter = ({ categories, selectedCategory, setSelectedCategory }: CategoryFilterProps) => {
  return (
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
            category === selectedCategory 
              ? "bg-green text-foreground"
              : "bg-white/70 backdrop-blur-sm border border-lilac/20 hover:bg-lilac/10"
          }`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default CategoryFilter;
