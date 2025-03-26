
import React from 'react';
import { Clock, Calendar, Star, MessageSquare, Video } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Therapist } from '@/store/therapistSlice';

interface TherapistSummaryProps {
  therapist: Therapist;
  sessionType: 'chat' | 'video' | 'inperson' | null;
  therapyType: 'individual' | 'couples' | 'family' | null;
  selectedDate: string | null;
  selectedTime: string | null;
}

const TherapistSummary: React.FC<TherapistSummaryProps> = ({
  therapist,
  sessionType,
  therapyType,
  selectedDate,
  selectedTime
}) => {
  // Calculate session price based on session type
  const getSessionPrice = () => {
    switch (sessionType) {
      case 'chat':
        return '$35';
      case 'video':
        return '$65';
      case 'inperson':
        return '$85';
      default:
        return '$0';
    }
  };

  // Get formatted session type
  const getFormattedSessionType = () => {
    switch (sessionType) {
      case 'chat':
        return 'Chat Session';
      case 'video':
        return 'Video Session';
      case 'inperson':
        return 'In-Person Session';
      default:
        return '';
    }
  };

  // Get formatted therapy type
  const getFormattedTherapyType = () => {
    switch (therapyType) {
      case 'individual':
        return 'Individual Therapy';
      case 'couples':
        return 'Couples Therapy';
      case 'family':
        return 'Family Therapy';
      default:
        return '';
    }
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-2">
          <h3 className="text-xl font-semibold">Your Session</h3>
        </CardHeader>
        <CardContent>
          <div className="flex items-start mb-4">
            <img 
              src={therapist.image} 
              alt={therapist.name} 
              className="w-16 h-16 rounded-full object-cover mr-4" 
            />
            <div>
              <h4 className="font-medium">{therapist.name}</h4>
              <p className="text-sm text-foreground/70">{therapist.speciality}</p>
              <div className="flex items-center mt-1">
                <Star className="h-4 w-4 text-yellow-500 mr-1" />
                <span className="text-sm">{therapist.rating}</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-3 pt-3 border-t border-foreground/10">
            <div className="flex items-center">
              {sessionType === 'chat' ? (
                <MessageSquare className="h-4 w-4 text-green mr-2" />
              ) : sessionType === 'video' ? (
                <Video className="h-4 w-4 text-green mr-2" />
              ) : (
                <Calendar className="h-4 w-4 text-green mr-2" />
              )}
              <span className="text-sm">{getFormattedSessionType()}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 text-green mr-2" />
              <span className="text-sm">{getFormattedTherapyType()}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 text-green mr-2" />
              <span className="text-sm">Date: {selectedDate}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 text-green mr-2" />
              <span className="text-sm">Time: {selectedTime}</span>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <h3 className="text-xl font-semibold">Subscription Details</h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Session Price:</span>
              <span className="font-medium">{getSessionPrice()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Plan Type:</span>
              <span className="font-medium">Pay Per Session</span>
            </div>
            <div className="pt-3 border-t border-foreground/10">
              <button className="w-full py-2 bg-green text-white rounded-full text-sm font-medium hover:bg-green/90 transition-colors">
                Upgrade to Monthly Plan
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="text-sm text-foreground/60 mt-4">
        <p>Need help? <a href="#" className="text-green hover:underline">Contact Support</a></p>
      </div>
    </div>
  );
};

export default TherapistSummary;
