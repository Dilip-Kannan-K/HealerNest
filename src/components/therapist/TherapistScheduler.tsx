
import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '@/hooks';
import { MessageCircle, Video, Calendar, Clock, Calendar as CalendarIcon, CheckCircle, MessageSquare } from 'lucide-react';
import { 
  setSessionType, 
  setTherapyType, 
  setSelectedDate, 
  setSelectedTime 
} from '@/store/sessionSlice';
import { setSchedulerOpen } from '@/store/therapistSlice';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const TherapistScheduler: React.FC = () => {
  const dispatch = useAppDispatch();
  const { selectedTherapist, isSchedulerOpen } = useAppSelector(state => state.therapist);
  const { sessionType, therapyType, selectedDate, selectedTime } = useAppSelector(state => state.session);
  
  if (!selectedTherapist) return null;

  const handleCloseScheduler = () => {
    dispatch(setSchedulerOpen(false));
  };

  const handleTherapyTypeSelect = (type: 'individual' | 'couples' | 'family') => {
    dispatch(setTherapyType(type));
  };

  const handleSessionTypeSelect = (type: 'chat' | 'video' | 'inperson') => {
    dispatch(setSessionType(type));
  };

  const handleDateSelect = (date: string) => {
    dispatch(setSelectedDate(date));
  };

  const handleTimeSelect = (time: string) => {
    dispatch(setSelectedTime(time));
  };

  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const times = ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'];
  const therapyTypes = ['Individual Therapy', 'Couples Therapy', 'Family Therapy'];
  const sessionTypes = ['Video Call', 'Chat Session', 'In-Person'];

  return (
    <Dialog open={isSchedulerOpen} onOpenChange={(open) => dispatch(setSchedulerOpen(open))}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Schedule with {selectedTherapist.name}</DialogTitle>
          <DialogDescription>
            Choose your preferred options and schedule your session.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Choose therapy type:</h4>
              <div className="grid grid-cols-1 gap-3">
                {therapyTypes.map((type, i) => (
                  <button 
                    key={i}
                    className={`py-2 px-4 rounded-full text-center text-sm border ${
                      (i === 0 && therapyType === 'individual') || 
                      (i === 1 && therapyType === 'couples') || 
                      (i === 2 && therapyType === 'family')
                        ? 'bg-green/10 border-green text-green font-medium' 
                        : 'border-lilac/30 text-foreground/70 hover:bg-lilac/10'
                    }`}
                    onClick={() => handleTherapyTypeSelect(
                      i === 0 ? 'individual' : i === 1 ? 'couples' : 'family'
                    )}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Choose session format:</h4>
              <div className="grid grid-cols-1 gap-3">
                {sessionTypes.map((type, i) => (
                  <button 
                    key={i}
                    className={`py-2 px-4 rounded-full text-center text-sm border ${
                      (i === 0 && sessionType === 'video') || 
                      (i === 1 && sessionType === 'chat') || 
                      (i === 2 && sessionType === 'inperson')
                        ? 'bg-green/10 border-green text-green font-medium' 
                        : 'border-lilac/30 text-foreground/70 hover:bg-lilac/10'
                    }`}
                    onClick={() => handleSessionTypeSelect(
                      i === 0 ? 'video' : i === 1 ? 'chat' : 'inperson'
                    )}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <div className="mb-6">
              <h4 className="font-semibold mb-3">When would you like to meet?</h4>
              <div className="grid grid-cols-7 gap-2 mb-4">
                {days.map((day, i) => (
                  <div key={i} className="text-center">
                    <div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto cursor-pointer
                        ${selectedDate === `${day}` ? 'bg-green text-white' : 'bg-foreground/5 hover:bg-lilac/20'}`}
                      onClick={() => handleDateSelect(day)}
                    >
                      {day}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                {times.map((time, i) => (
                  <button 
                    key={i}
                    className={`py-2 rounded-full text-center text-sm ${
                      selectedTime === time
                        ? 'bg-green/10 border border-green text-green font-medium' 
                        : 'bg-foreground/5 text-foreground/70 hover:bg-lilac/20'
                    }`}
                    onClick={() => handleTimeSelect(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
            
            <button 
              className={`primary-button w-full ${
                !sessionType || !therapyType || !selectedDate || !selectedTime
                  ? 'opacity-70 cursor-not-allowed'
                  : ''
              }`}
              disabled={!sessionType || !therapyType || !selectedDate || !selectedTime}
            >
              Continue to Checkout
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TherapistScheduler;
