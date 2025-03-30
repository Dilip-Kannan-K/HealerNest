
import { motion } from "framer-motion";
import { Star as StarIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const EMagazinePromo = () => {
  const navigate = useNavigate();

  const handleSubscribe = () => {
    const subscription = {
      type: 'subscription',
      title: 'Premium E-Magazine Subscription',
      price: 4.99,
      duration: 'Monthly',
      description: 'Monthly curated content from top mental health professionals, downloadable worksheets and resources, and an ad-free reading experience.',
      image: 'https://images.unsplash.com/photo-1585828922344-85c9daa264b0?auto=format&fit=crop&w=400&q=80'
    };

    navigate('/checkout', { state: { item: subscription } });
  };

  return (
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
              <StarIcon className="w-5 h-5 text-yellow-500 mt-1 mr-3" />
              <span>Monthly curated content from top mental health professionals</span>
            </li>
            <li className="flex items-start">
              <StarIcon className="w-5 h-5 text-yellow-500 mt-1 mr-3" />
              <span>Downloadable worksheets and resources for your journey</span>
            </li>
            <li className="flex items-start">
              <StarIcon className="w-5 h-5 text-yellow-500 mt-1 mr-3" />
              <span>Ad-free reading experience with beautiful layout</span>
            </li>
          </ul>
          <div className="flex items-center gap-6">
            <button 
              onClick={handleSubscribe}
              className="primary-button"
            >
              Subscribe Now
            </button>
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
  );
};
