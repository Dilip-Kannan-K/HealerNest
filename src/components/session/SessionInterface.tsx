
import React, { useState, useEffect } from 'react';
import { useAppSelector } from '@/hooks';
import { Clock, Calendar, Video, ArrowLeft, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import TherapistSummary from './TherapistSummary';
import ChatInterface from './ChatInterface';
import VideoCall from './VideoCall';
import { toast } from "sonner";

const SessionInterface: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'chat' | 'video'>('chat');
  const [isSubscribed, setIsSubscribed] = useState<boolean>(true); // Default to true for demo
  const { selectedTherapist } = useAppSelector(state => state.therapist);
  const { sessionType, therapyType, selectedDate, selectedTime } = useAppSelector(state => state.session);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!selectedTherapist || !sessionType || !selectedDate || !selectedTime) {
      toast.error("Missing session information");
      navigate('/connect');
    }
  }, [selectedTherapist, sessionType, selectedDate, selectedTime, navigate]);

  // If we don't have required data and the above useEffect hasn't redirected yet
  if (!selectedTherapist || !sessionType || !selectedDate || !selectedTime) {
    return null;
  }

  const handleSubscribe = () => {
    setIsSubscribed(true);
    toast.success("You've subscribed to this therapist!");
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
            sessionType={sessionType}
            therapyType={therapyType}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
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
                You need to subscribe to this therapist to access the {sessionType} session.
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
