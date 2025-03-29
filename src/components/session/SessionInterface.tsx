
import React, { useState, useEffect } from 'react';
import { useAppSelector } from '@/hooks';
import { Clock, Calendar, Video, ArrowLeft, Lock, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import TherapistSummary from './TherapistSummary';
import ChatInterface from './ChatInterface';
import VideoCall from './VideoCall';
import { toast } from "sonner";
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SessionInterface: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'chat' | 'video'>('chat');
  const [isSubscribed, setIsSubscribed] = useState<boolean>(true); // Default to true for demo
  const { selectedTherapist } = useAppSelector(state => state.therapist);
  const { sessionType } = useAppSelector(state => state.session);
  const navigate = useNavigate();
  const { user } = useAuth();
  
  useEffect(() => {
    if (!selectedTherapist) {
      toast.error("Please select a therapist first");
      navigate('/connect');
    }
  }, [selectedTherapist, navigate]);

  // If we don't have a therapist, show a fallback UI
  if (!selectedTherapist) {
    return (
      <div className="container mx-auto px-4 py-8 mt-20 text-center">
        <h2 className="text-2xl font-bold mb-4">No therapist selected</h2>
        <p className="mb-8">Please select a therapist to start a session.</p>
        <Button onClick={() => navigate('/connect')}>
          Browse Therapists
        </Button>
      </div>
    );
  }

  const handleSubscribe = () => {
    setIsSubscribed(true);
    toast.success("You've subscribed to this therapist!");
  };

  // Set default session type if none is selected
  const currentSessionType = sessionType || 'chat';

  // Set default values for display
  const sessionDetails = {
    type: currentSessionType,
    therapyType: 'individual',
    selectedDate: 'Scheduled by therapist',
    selectedTime: 'To be determined'
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <div className="mb-6">
        <button 
          onClick={() => navigate('/connect')} 
          className="flex items-center text-foreground/70 hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Connect
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left sidebar with therapist info */}
        <div className="lg:col-span-1">
          <TherapistSummary 
            therapist={selectedTherapist} 
            sessionType={sessionDetails.type}
            therapyType={sessionDetails.therapyType}
            selectedDate={sessionDetails.selectedDate}
            selectedTime={sessionDetails.selectedTime}
            isSubscribed={isSubscribed}
            onSubscribe={handleSubscribe}
          />
        </div>
        
        {/* Right side with chat/video interface */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-foreground/10 overflow-hidden">
          {!isSubscribed ? (
            <div className="h-[600px] flex flex-col items-center justify-center p-8 text-center">
              <div className="bg-foreground/5 p-6 rounded-full mb-6">
                <Lock className="w-12 h-12 text-foreground/40" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Session Locked</h3>
              <p className="text-foreground/70 mb-6 max-w-md">
                You need to subscribe to this therapist to access the {currentSessionType} session.
              </p>
              <button 
                onClick={handleSubscribe}
                className="py-3 px-8 rounded-full bg-green text-white font-medium hover:bg-green/90 transition-colors"
              >
                Subscribe Now
              </button>
            </div>
          ) : (
            <>
              <div className="flex border-b border-foreground/10">
                <button
                  className={`flex-1 py-4 text-center font-medium ${
                    activeTab === 'chat' 
                      ? 'text-green border-b-2 border-green' 
                      : 'text-foreground/60 hover:text-foreground/80'
                  }`}
                  onClick={() => setActiveTab('chat')}
                >
                  Chat Session
                </button>
                <button
                  className={`flex-1 py-4 text-center font-medium ${
                    activeTab === 'video' 
                      ? 'text-green border-b-2 border-green' 
                      : 'text-foreground/60 hover:text-foreground/80'
                  }`}
                  onClick={() => setActiveTab('video')}
                >
                  Video Session
                </button>
              </div>
              
              {activeTab === 'chat' ? (
                <ChatInterface therapist={selectedTherapist} />
              ) : (
                <VideoCall therapist={selectedTherapist} />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SessionInterface;
