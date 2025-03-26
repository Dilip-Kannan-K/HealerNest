
import { motion } from "framer-motion";
import { Calendar as CalendarIcon, Phone, BarChart, Shield } from "lucide-react";

const AppFeatures = () => {
  return (
    <motion.div 
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="text-2xl font-bold mb-8 text-center">Everything You Need For Your Mental Health Journey</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="healer-card p-6 hover:border-green/50 transition-all duration-300">
          <div className="p-3 bg-lilac/20 rounded-full w-fit mb-4">
            <CalendarIcon className="w-6 h-6 text-lilac" />
          </div>
          <h3 className="text-lg font-semibold mb-3">Easy Scheduling</h3>
          <p className="text-foreground/70">
            Book appointments with your therapist at times that work for you, with flexible options for rescheduling.
          </p>
        </div>
        
        <div className="healer-card p-6 hover:border-green/50 transition-all duration-300">
          <div className="p-3 bg-lilac/20 rounded-full w-fit mb-4">
            <Phone className="w-6 h-6 text-lilac" />
          </div>
          <h3 className="text-lg font-semibold mb-3">Multi-Platform Support</h3>
          <p className="text-foreground/70">
            Connect through our web app or mobile application with seamless integration across all your devices.
          </p>
        </div>
        
        <div className="healer-card p-6 hover:border-green/50 transition-all duration-300">
          <div className="p-3 bg-lilac/20 rounded-full w-fit mb-4">
            <BarChart className="w-6 h-6 text-lilac" />
          </div>
          <h3 className="text-lg font-semibold mb-3">Progress Tracking</h3>
          <p className="text-foreground/70">
            Visualize your therapy journey with interactive charts and goal-tracking features to celebrate your growth.
          </p>
        </div>
        
        <div className="healer-card p-6 hover:border-green/50 transition-all duration-300">
          <div className="p-3 bg-lilac/20 rounded-full w-fit mb-4">
            <Shield className="w-6 h-6 text-lilac" />
          </div>
          <h3 className="text-lg font-semibold mb-3">HIPAA Compliant</h3>
          <p className="text-foreground/70">
            End-to-end encryption and secure infrastructure keep your therapy sessions and personal data completely private.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AppFeatures;
