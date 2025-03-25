
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, Clock, ChevronRight, ArrowRight } from "lucide-react";

interface RecentArticle {
  id: number;
  title: string;
  category: string;
  date: string;
  readTime: string;
}

interface RecentArticlesProps {
  articles: RecentArticle[];
}

export const RecentArticles = ({ articles }: RecentArticlesProps) => {
  return (
    <motion.div
      className="lg:col-span-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <h2 className="text-2xl font-bold mb-8">Recent Articles</h2>
      <div className="space-y-6">
        {articles.map((article) => (
          <div 
            key={article.id}
            className="healer-card p-6 hover:border-green/50 transition-all duration-300"
          >
            <div className="flex items-start">
              <div className="p-2 bg-lilac/10 rounded-full mr-4">
                <BookOpen className="w-5 h-5 text-lilac" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <span className="px-3 py-1 bg-lilac/10 text-foreground/80 text-xs font-medium rounded-full mb-2">
                    {article.category}
                  </span>
                  <div className="flex items-center text-sm text-foreground/60">
                    <Clock className="w-4 h-4 mr-1" />
                    {article.readTime}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-1">{article.title}</h3>
                <p className="text-sm text-foreground/60 mb-3">{article.date}</p>
                <Link 
                  to={`/articles/${article.id}`}
                  className="inline-flex items-center text-green font-medium hover:underline text-sm"
                >
                  Read Article <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a 
          href="#" 
          className="primary-button inline-flex items-center"
        >
          View All Articles <ArrowRight className="ml-2 w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
};
