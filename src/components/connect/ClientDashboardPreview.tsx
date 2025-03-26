
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const ClientDashboardPreview = () => {
  return (
    <motion.div
      className="mb-16 overflow-hidden rounded-xl healer-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 w-fit mb-4">
              <h3 className="text-blue-600 font-semibold">Client Dashboard</h3>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Track your progress and manage your therapy journey</h2>
            <p className="text-foreground/70 mb-6">
              Our personalized client dashboard helps you monitor your progress, manage appointments, access resources, and stay connected with your therapist.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green mr-3" />
                <span>Track therapy goals and progress</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green mr-3" />
                <span>Schedule and manage appointments</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green mr-3" />
                <span>Access session recordings and notes</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green mr-3" />
                <span>Communicate securely with your therapist</span>
              </li>
            </ul>
            <button className="primary-button">
              Explore Dashboard Features
            </button>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/lovable-uploads/71f1ca0e-c40e-4b1c-b08e-0b19ed4ff703.png" 
              alt="Client Dashboard" 
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ClientDashboardPreview;
