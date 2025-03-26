
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { selectTherapist, setSchedulerOpen } from '@/store/therapistSlice';
import { Therapist } from '@/store/therapistSlice';

interface TherapistCardProps {
  therapist: Therapist;
  index: number;
}

const TherapistCard: React.FC<TherapistCardProps> = ({ therapist, index }) => {
  const dispatch = useAppDispatch();

  const handleTherapistSelect = () => {
    dispatch(selectTherapist(therapist.id));
  };

  const handleScheduleSession = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (therapist.available) {
      dispatch(selectTherapist(therapist.id));
      dispatch(setSchedulerOpen(true));
    }
  };
  
  return (
    <motion.div
      className="healer-card overflow-hidden hover-lift cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index + 0.6 }}
      onClick={handleTherapistSelect}
    >
      <div className="relative">
        <img 
          src={therapist.image} 
          alt={therapist.name} 
          className="w-full h-48 object-cover"
        />
        {!therapist.available && (
          <div className="absolute top-0 right-0 bg-foreground/80 text-white px-3 py-1 text-sm">
            Fully Booked
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold">{therapist.name}</h3>
          <div className="flex items-center text-sm">
            <Star className="w-4 h-4 text-yellow-500 mr-1" />
            <span>{therapist.rating}</span>
            <span className="text-foreground/50 ml-1">({therapist.reviews})</span>
          </div>
        </div>
        <p className="text-foreground/70 text-sm mb-4">{therapist.speciality}</p>
        <button 
          className={`w-full py-2 rounded-full font-medium transition-all duration-200 ${
            therapist.available 
              ? "bg-green/90 hover:bg-green text-foreground" 
              : "bg-lilac/40 text-foreground/50 cursor-not-allowed"
          }`}
          disabled={!therapist.available}
          onClick={handleScheduleSession}
        >
          {therapist.available ? "Schedule Session" : "Join Waitlist"}
        </button>
      </div>
    </motion.div>
  );
};

export default TherapistCard;
