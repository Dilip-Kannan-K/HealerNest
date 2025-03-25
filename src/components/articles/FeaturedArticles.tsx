
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, ChevronRight } from "lucide-react";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

interface FeaturedArticlesProps {
  articles: Article[];
}

export const FeaturedArticles = ({ articles }: FeaturedArticlesProps) => {
  return (
    <div className="mb-16">
      <motion.h2 
        className="text-2xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Featured Articles
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <motion.div
            key={article.id}
            className="healer-card overflow-hidden hover-lift"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          >
            <div className="relative h-56">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 m-4">
                <span className="px-3 py-1 bg-green/90 text-white text-xs font-medium rounded-full">
                  {article.category}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 line-clamp-2">{article.title}</h3>
              <p className="text-foreground/70 mb-4 line-clamp-3">{article.excerpt}</p>
              <div className="flex justify-between items-center text-sm text-foreground/60 mb-4">
                <span>{article.author}</span>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {article.readTime}
                </div>
              </div>
              <Link 
                to={`/articles/${article.id}`}
                className="inline-flex items-center text-green font-medium hover:underline"
              >
                Read More <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
