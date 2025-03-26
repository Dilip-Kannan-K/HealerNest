
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const CommunicationPlatform = () => {
  return (
    <motion.div
      className="mt-16 mb-16 healer-card p-8 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.9 }}
    >
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
          <h3 className="text-2xl font-bold mb-6">Secure Communication Platform</h3>
          <p className="text-foreground/70 mb-6">
            Our integrated messaging system allows you to stay connected with your therapist between sessions, share resources, and maintain a therapeutic relationship.
          </p>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <div className="p-2 bg-green/10 rounded-full mr-3 mt-1">
                <CheckCircle className="w-5 h-5 text-green" />
              </div>
              <div>
                <h4 className="font-semibold">End-to-End Encryption</h4>
                <p className="text-sm text-foreground/70">All communications are secured with enterprise-grade encryption.</p>
              </div>
            </li>
            
            <li className="flex items-start">
              <div className="p-2 bg-green/10 rounded-full mr-3 mt-1">
                <CheckCircle className="w-5 h-5 text-green" />
              </div>
              <div>
                <h4 className="font-semibold">Multimedia Support</h4>
                <p className="text-sm text-foreground/70">Share images, documents, and audio recordings with your therapist.</p>
              </div>
            </li>
            
            <li className="flex items-start">
              <div className="p-2 bg-green/10 rounded-full mr-3 mt-1">
                <CheckCircle className="w-5 h-5 text-green" />
              </div>
              <div>
                <h4 className="font-semibold">Session Recordings</h4>
                <p className="text-sm text-foreground/70">Access recordings of your therapy sessions for review (with mutual consent).</p>
              </div>
            </li>
            
            <li className="flex items-start">
              <div className="p-2 bg-green/10 rounded-full mr-3 mt-1">
                <CheckCircle className="w-5 h-5 text-green" />
              </div>
              <div>
                <h4 className="font-semibold">Urgent Support</h4>
                <p className="text-sm text-foreground/70">Direct line to crisis resources when immediate help is needed.</p>
              </div>
            </li>
          </ul>
          
          <button className="primary-button">
            Explore Communication Features
          </button>
        </div>
        
        <div className="lg:w-1/2">
          <img 
            src="/lovable-uploads/ab9cd241-1456-4d94-8ece-d74a37cb5488.png" 
            alt="Messaging Platform" 
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default CommunicationPlatform;
