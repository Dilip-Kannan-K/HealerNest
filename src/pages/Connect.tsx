
import { motion } from "framer-motion";
import { useAppSelector, useAppDispatch } from "@/hooks";
import TherapistProfile from "@/components/therapist/TherapistProfile";
import TherapistScheduler from "@/components/therapist/TherapistScheduler";
import ClientDashboardPreview from "@/components/connect/ClientDashboardPreview";
import AppFeatures from "@/components/connect/AppFeatures";
import SessionTypes from "@/components/connect/SessionTypes";
import CommunicationPlatform from "@/components/connect/CommunicationPlatform";
import TherapistList from "@/components/connect/TherapistList";
import WebinarSessions from "@/components/connect/WebinarSessions";
import { useNavigate } from "react-router-dom";
import { setSchedulerOpen } from "@/store/therapistSlice";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Connect = () => {
  const dispatch = useAppDispatch();
  const { selectedTherapist, isSchedulerOpen } = useAppSelector(state => state.therapist);
  const { sessionType, therapyType, selectedDate, selectedTime } = useAppSelector(state => state.session);
  const navigate = useNavigate();
  
  // Check if a session is already scheduled and ready to go
  const isSessionReady = selectedTherapist && sessionType && therapyType && selectedDate && selectedTime;
  
  const goToSession = () => {
    navigate('/session');
  };

  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Connect with Our Therapists</h1>
          <p className="text-foreground/70 text-lg mb-6">
            Our licensed professionals are here to support you through your healing journey. Schedule a session in the format that works best for you.
          </p>
          
          {isSessionReady && (
            <Button 
              onClick={goToSession}
              className="bg-green hover:bg-green/90 text-white"
            >
              Go to Your Scheduled Session <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </motion.div>

        <ClientDashboardPreview />
        <AppFeatures />
        <SessionTypes />
        <CommunicationPlatform />
        
        {/* Add Webinar Sessions section */}
        <WebinarSessions />
        
        <TherapistList />

        {/* Render therapist profile and scheduler components */}
        {selectedTherapist && <TherapistProfile />}
        <TherapistScheduler />
      </div>
    </div>
  );
};

export default Connect;
