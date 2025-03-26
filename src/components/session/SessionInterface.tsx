
import React, { useState } from 'react';
import { useAppSelector } from '@/hooks';
import { Clock, Calendar, Video, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import TherapistSummary from './TherapistSummary';
import ChatInterface from './ChatInterface';
import VideoCall from './VideoCall';

const SessionInterface: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'chat' | 'video'>('chat');
  const { selectedTherapist } = useAppSelector(state => state.therapist);
  const { sessionType, therapyType, selectedDate, selectedTime } = useAppSelector(state => state.session);
  const navigate = useNavigate();
  
  if (!selectedTherapist || !sessionType || !selectedDate || !selectedTime) {
    navigate('/connect');
    return null;
  }

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
          />
        </div>
        
        {/* Right side with chat/video interface */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-foreground/10 overflow-hidden">
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
        </div>
      </div>
    </div>
  );
};

export default SessionInterface;
