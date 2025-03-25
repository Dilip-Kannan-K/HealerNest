import { motion } from "framer-motion";
import { Search, Heart } from "lucide-react";
import { FeaturedArticles } from "@/components/articles/FeaturedArticles";
import { RecentArticles } from "@/components/articles/RecentArticles";
import { EMagazinePromo } from "@/components/articles/EMagazinePromo";

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

        <FeaturedArticles articles={featuredArticles} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <RecentArticles articles={recentArticles} />

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

        <EMagazinePromo />
      </div>
    </div>
  );
};

export default Articles;
