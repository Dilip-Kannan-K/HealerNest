import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Search, BookOpen, Heart, Clock, ChevronRight, Star } from "lucide-react";

const Articles = () => {
  const featuredArticles = [
    {
      id: 1,
      title: "Understanding Anxiety: Signs, Symptoms, and Coping Strategies",
      excerpt: "Learn how to recognize anxiety and discover effective techniques to manage it in your daily life.",
      category: "Mental Health",
      author: "Dr. Sarah Johnson",
      date: "June 15, 2023",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "The Power of Mindfulness: Simple Practices for Everyday Life",
      excerpt: "Explore how mindfulness can transform your mental well-being with these practical exercises.",
      category: "Wellness",
      author: "Dr. Michael Chen",
      date: "July 3, 2023",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Building Resilience: How to Bounce Back from Life's Challenges",
      excerpt: "Discover the key factors that help people recover from setbacks and emerge stronger than before.",
      category: "Personal Growth",
      author: "Dr. Emily Williams",
      date: "August 21, 2023",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const recentArticles = [
    {
      id: 4,
      title: "The Role of Sleep in Mental Health Recovery",
      category: "Wellness",
      date: "September 5, 2023",
      readTime: "5 min read"
    },
    {
      id: 5,
      title: "Communication Techniques for Healthier Relationships",
      category: "Relationships",
      date: "September 2, 2023",
      readTime: "7 min read"
    },
    {
      id: 6,
      title: "Managing Work Stress: Finding Balance in a Busy World",
      category: "Stress Management",
      date: "August 28, 2023",
      readTime: "6 min read"
    },
    {
      id: 7,
      title: "Parenting Through Difficult Times: Supporting Your Children's Mental Health",
      category: "Parenting",
      date: "August 22, 2023",
      readTime: "9 min read"
    }
  ];

  const categories = [
    "Mental Health", "Wellness", "Personal Growth", 
    "Relationships", "Stress Management", "Mindfulness", 
    "Parenting", "Trauma Recovery", "Self-Care"
  ];

  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Articles & Resources</h1>
          <p className="text-foreground/70 text-lg">
            Explore our collection of expert-written articles on mental health, wellness, and personal growth.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-2xl mx-auto mb-16 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              className="healer-input pl-12 pr-4 py-4 w-full rounded-full shadow-sm"
            />
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-foreground/40" />
            </div>
          </div>
          <div className="flex flex-wrap justify-center mt-4 gap-2">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className="px-4 py-1 bg-white/70 backdrop-blur-sm border border-lilac/20 rounded-full text-sm hover:bg-lilac/10 transition-colors duration-200"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

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
            {featuredArticles.map((article, index) => (
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-8">Recent Articles</h2>
            <div className="space-y-6">
              {recentArticles.map((article) => (
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="healer-card p-8">
              <h3 className="text-xl font-semibold mb-6">Write for Us</h3>
              <p className="text-foreground/70 mb-6">
                Have knowledge to share? Submit your article and become a contributor to our growing community.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Heart className="w-4 h-4 text-green mt-1 mr-2" />
                  <span className="text-sm">Share your expertise and insights</span>
                </li>
                <li className="flex items-start">
                  <Heart className="w-4 h-4 text-green mt-1 mr-2" />
                  <span className="text-sm">Get published in our monthly e-magazine</span>
                </li>
                <li className="flex items-start">
                  <Heart className="w-4 h-4 text-green mt-1 mr-2" />
                  <span className="text-sm">Connect with a community of healing</span>
                </li>
              </ul>
              <a 
                href="#" 
                className="block w-full py-3 text-center rounded-full bg-green text-foreground font-medium hover:bg-green/90 transition-all duration-300"
              >
                Submit Your Article
              </a>
            </div>

            <div className="healer-card p-8 mt-8">
              <h3 className="text-xl font-semibold mb-6">Subscribe to Our Newsletter</h3>
              <p className="text-foreground/70 mb-6">
                Get the latest articles and resources delivered straight to your inbox.
              </p>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="healer-input w-full"
                />
                <button 
                  className="block w-full py-3 text-center rounded-full bg-lilac text-foreground font-medium hover:bg-lilac/90 transition-all duration-300"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="bg-gradient-to-r from-lilac/30 to-green/30 rounded-xl p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-2/3 mb-8 lg:mb-0">
              <div className="bg-white/30 text-green rounded-full px-4 py-1 text-sm font-semibold w-fit mb-4">
                Premium Content
              </div>
              <h3 className="text-2xl font-bold mb-4">Subscribe to Our Premium E-Magazine</h3>
              <p className="text-lg mb-6">
                Unlock exclusive content, in-depth analyses, and expert advice not available in our free articles.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-yellow-500 mt-1 mr-3" />
                  <span>Monthly curated content from top mental health professionals</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-yellow-500 mt-1 mr-3" />
                  <span>Downloadable worksheets and resources for your journey</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-yellow-500 mt-1 mr-3" />
                  <span>Ad-free reading experience with beautiful layout</span>
                </li>
              </ul>
              <div className="flex items-center gap-6">
                <a 
                  href="#" 
                  className="primary-button"
                >
                  Subscribe Now
                </a>
                <span className="text-xl font-bold">$4.99/month</span>
              </div>
            </div>
            <div className="lg:w-1/3 relative">
              <div className="absolute -inset-4 bg-white/30 rounded-lg blur-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1585828922344-85c9daa264b0?auto=format&fit=crop&w=400&q=80" 
                alt="E-Magazine Preview" 
                className="relative rounded-lg shadow-lg mx-auto"
              />
              <div className="absolute top-0 right-0 bg-green/90 text-white rounded-full px-4 py-1 text-sm font-bold m-4">
                New Issue!
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Articles;
