
import React, { useState } from 'react';
import { Mic, MicOff, Video as VideoIcon, VideoOff, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Therapist } from '@/store/therapistSlice';

interface VideoCallProps {
  therapist: Therapist;
}

const VideoCall: React.FC<VideoCallProps> = ({ therapist }) => {
  const [isMicOn, setIsMicOn] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isCallStarted, setIsCallStarted] = useState(false);
  
  const toggleMic = () => setIsMicOn(!isMicOn);
  const toggleVideo = () => setIsVideoOn(!isVideoOn);
  
  const startCall = () => setIsCallStarted(true);
  const endCall = () => setIsCallStarted(false);
  
  return (
    <div className="h-[600px] flex flex-col">
      <div className="flex-1 bg-foreground/5 relative">
        {!isCallStarted ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <img 
              src={therapist.image} 
              alt={therapist.name} 
              className="w-24 h-24 rounded-full object-cover mb-4" 
            />
            <h3 className="text-xl font-semibold mb-1">{therapist.name}</h3>
            <p className="text-foreground/70 mb-6">{therapist.speciality}</p>
            <Button 
              onClick={startCall}
              className="bg-green hover:bg-green/90 text-white px-8"
            >
              Start Video Session
            </Button>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center relative">
            {/* Therapist video (simulated) */}
            <div className="h-full w-full bg-foreground/10 flex items-center justify-center">
              {isVideoOn ? (
                <img 
                  src={therapist.image} 
                  alt={therapist.name} 
                  className="w-full h-full object-cover" 
                />
              ) : (
                <div className="text-center">
                  <div className="w-20 h-20 bg-foreground/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl font-semibold text-foreground/70">
                      {therapist.name.charAt(0)}
                    </span>
                  </div>
                  <p className="text-foreground/70 font-medium">{therapist.name}</p>
                </div>
              )}
            </div>
            
            {/* User video (simulated) */}
            <div className="absolute bottom-4 right-4 w-32 h-24 bg-foreground/20 rounded-lg shadow-lg overflow-hidden border border-foreground/10">
              {isVideoOn ? (
                <div className="bg-foreground/30 h-full w-full flex items-center justify-center">
                  <span className="text-white text-opacity-70">Your camera</span>
                </div>
              ) : (
                <div className="h-full w-full flex items-center justify-center bg-foreground/40">
                  <VideoOff className="w-6 h-6 text-white text-opacity-70" />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      
      <div className="bg-foreground/10 p-4 flex items-center justify-center space-x-4">
        <Button 
          onClick={toggleMic}
          variant="outline" 
          size="icon" 
          className={`rounded-full ${!isMicOn ? 'bg-destructive text-white hover:bg-destructive/90' : ''}`}
        >
          {isMicOn ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
        </Button>
        
        <Button 
          onClick={toggleVideo}
          variant="outline" 
          size="icon" 
          className={`rounded-full ${!isVideoOn ? 'bg-destructive text-white hover:bg-destructive/90' : ''}`}
        >
          {isVideoOn ? <VideoIcon className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
        </Button>
        
        {isCallStarted ? (
          <Button 
            onClick={endCall}
            variant="destructive" 
            size="icon" 
            className="rounded-full"
          >
            <Phone className="h-5 w-5" />
          </Button>
        ) : (
          <Button 
            onClick={startCall}
            className="rounded-full bg-green hover:bg-green/90"
          >
            Start Call
          </Button>
        )}
        
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full"
        >
          <MessageSquare className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="p-2 text-xs text-foreground/50 text-center">
        Your session will end in {isCallStarted ? '45:00' : '60:00'} minutes
      </div>
    </div>
  );
};

export default VideoCall;
