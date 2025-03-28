
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
import { Link } from "react-router-dom";
import { setSchedulerOpen } from "@/store/therapistSlice";
import { Button } from "@/components/ui/button";
import { User, Calendar } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

const Connect = () => {
  const dispatch = useAppDispatch();
  const { selectedTherapist, isSchedulerOpen } = useAppSelector(state => state.therapist);
  const { sessionType, therapyType, selectedDate, selectedTime } = useAppSelector(state => state.session);
  const { user, isAuthenticated } = useAuth();
  
  // Handler for requesting a session
  const handleRequestSession = () => {
    if (isAuthenticated) {
      // Show success message
      toast.success("Your session request has been submitted! We'll contact you soon to confirm.", {
        duration: 5000,
      });
      
      // Reset scheduler state
      setTimeout(() => {
        dispatch(setSchedulerOpen(false));
      }, 500);
    } else {
      // Prompt to log in
      toast.error("Please log in to request a session", {
        duration: 3000,
        action: {
          label: "Log in",
          onClick: () => window.location.href = "/login"
        }
      });
    }
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
            Our licensed professionals are here to support you through your healing journey. Request a session in the format that works best for you.
          </p>
          
          {isAuthenticated ? (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => dispatch(setSchedulerOpen(true))}
                className="bg-green hover:bg-green/90 text-white"
              >
                <Calendar className="mr-2 h-4 w-4" /> Request a Session
              </Button>
              
              <Link to="/profile">
                <Button variant="outline" className="border-lilac text-lilac hover:bg-lilac/10">
                  <User className="mr-2 h-4 w-4" /> View Your Profile
                </Button>
              </Link>
            </div>
          ) : (
            <Link to="/login">
              <Button className="bg-green hover:bg-green/90 text-white">
                Log in to Request a Session
              </Button>
            </Link>
          )}
        </motion.div>

        {/* Reordered sections as requested */}
        <SessionTypes />
        <TherapistList />
        <WebinarSessions />
        <AppFeatures />
        <ClientDashboardPreview />
        <CommunicationPlatform />
        
        {/* Render therapist profile and scheduler components */}
        {selectedTherapist && <TherapistProfile />}
        
        {/* Modified TherapistScheduler component with onSubmit prop */}
        {isSchedulerOpen && (
          <TherapistScheduler onSubmit={handleRequestSession} />
        )}
      </div>
    </div>
  );
};

export default Connect;
