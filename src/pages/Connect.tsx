
import { motion } from "framer-motion";
import { useAppSelector, useAppDispatch } from "@/hooks";
import TherapistProfile from "@/components/therapist/TherapistProfile";
import TherapistScheduler from "@/components/therapist/TherapistScheduler";
import ClientDashboardPreview from "@/components/connect/ClientDashboardPreview";
import AppFeatures from "@/components/connect/AppFeatures";
import SessionTypes from "@/components/connect/SessionTypes";
import CommunicationPlatform from "@/components/connect/CommunicationPlatform";
import TherapistList from "@/components/connect/TherapistList";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { setSchedulerOpen } from "@/store/therapistSlice";

const Connect = () => {
  const dispatch = useAppDispatch();
  const { selectedTherapist, isSchedulerOpen } = useAppSelector(state => state.therapist);
  const { sessionType, therapyType, selectedDate, selectedTime } = useAppSelector(state => state.session);
  const navigate = useNavigate();
  
  // If a user has selected all required session details, redirect to the session interface
  useEffect(() => {
    if (selectedTherapist && sessionType && therapyType && selectedDate && selectedTime && !isSchedulerOpen) {
      // Close the scheduler if it's open before navigating
      if (isSchedulerOpen) {
        dispatch(setSchedulerOpen(false));
      }
      navigate('/session');
    }
  }, [selectedTherapist, sessionType, therapyType, selectedDate, selectedTime, isSchedulerOpen, navigate, dispatch]);

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
          <p className="text-foreground/70 text-lg">
            Our licensed professionals are here to support you through your healing journey. Schedule a session in the format that works best for you.
          </p>
        </motion.div>

        <ClientDashboardPreview />
        <AppFeatures />
        <SessionTypes />
        <CommunicationPlatform />
        <TherapistList />

        {/* Render therapist profile and scheduler components */}
        {selectedTherapist && <TherapistProfile />}
        <TherapistScheduler />
      </div>
    </div>
  );
};

export default Connect;
