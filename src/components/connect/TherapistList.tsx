
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useAppSelector } from "@/hooks";
import TherapistCard from "@/components/therapist/TherapistCard";

const TherapistList = () => {
  const { therapists } = useAppSelector(state => state.therapist);

  return (
    <>
      <motion.h2 
        className="text-2xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Available Therapists
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {therapists.map((therapist, index) => (
          <TherapistCard 
            key={therapist.id} 
            therapist={therapist} 
            index={index} 
          />
        ))}
      </div>

      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Link 
          to="/services" 
          className="inline-flex items-center text-green font-medium hover:underline"
        >
          View all our therapy services <ArrowRight className="ml-1 w-4 h-4" />
        </Link>
      </motion.div>
    </>
  );
};

export default TherapistList;
