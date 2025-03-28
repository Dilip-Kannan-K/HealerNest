
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAppSelector, useAppDispatch } from '@/hooks';
import { setSchedulerOpen } from '@/store/therapistSlice';
import { setSessionType, setTherapyType, setSelectedDate, setSelectedTime } from '@/store/sessionSlice';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { MessageCircle, Video, User, Clock } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

interface TherapistSchedulerProps {
  onSubmit?: () => void;
}

const TherapistScheduler: React.FC<TherapistSchedulerProps> = ({ onSubmit }) => {
  const dispatch = useAppDispatch();
  const { selectedTherapist, isSchedulerOpen } = useAppSelector(state => state.therapist);
  const { sessionType, therapyType, selectedDate, selectedTime } = useAppSelector(state => state.session);
  
  const [currentStep, setCurrentStep] = useState(1);
  
  if (!isSchedulerOpen) return null;
  
  const handleCloseScheduler = () => {
    dispatch(setSchedulerOpen(false));
  };
  
  const handleSessionTypeSelect = (type: 'chat' | 'video' | 'inperson') => {
    dispatch(setSessionType(type));
    setCurrentStep(2);
  };
  
  const handleTherapyTypeSelect = (type: string) => {
    dispatch(setTherapyType(type));
    setCurrentStep(3);
  };
  
  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      dispatch(setSelectedDate(date.toISOString()));
      setCurrentStep(4);
    }
  };
  
  const handleTimeSelect = (time: string) => {
    dispatch(setSelectedTime(time));
    setCurrentStep(5);
  };
  
  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit();
    } else {
      dispatch(setSchedulerOpen(false));
    }
  };
  
  // Available time slots
  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', 
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];
  
  // Therapy types
  const therapyTypes = [
    'Anxiety', 'Depression', 'Stress Management', 
    'Relationships', 'Self-Esteem', 'Trauma', 'Grief',
    'Life Transitions'
  ];
  
  return (
    <motion.div
      className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Request a Session</h2>
            <button 
              className="p-2 rounded-full hover:bg-foreground/10 transition-colors"
              onClick={handleCloseScheduler}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map(step => (
                  <div 
                    key={step}
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-medium ${
                      currentStep === step 
                        ? 'bg-green text-white' 
                        : currentStep > step 
                          ? 'bg-green/20 text-green' 
                          : 'bg-foreground/10 text-foreground/50'
                    }`}
                  >
                    {step}
                  </div>
                ))}
              </div>
              <span className="text-sm text-foreground/50">Step {currentStep} of 5</span>
            </div>
            
            {/* Step 1: Session Type */}
            {currentStep === 1 && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Choose Session Type</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div 
                    className={`healer-card p-4 cursor-pointer ${sessionType === 'chat' ? 'border-green' : ''}`}
                    onClick={() => handleSessionTypeSelect('chat')}
                  >
                    <div className="flex flex-col items-center text-center">
                      <MessageCircle className="w-10 h-10 text-green mb-2" />
                      <h4 className="font-semibold mb-1">Chat Session</h4>
                      <p className="text-sm text-foreground/70">Text-based therapy</p>
                      <p className="text-green font-medium mt-2">$35/session</p>
                    </div>
                  </div>
                  
                  <div 
                    className={`healer-card p-4 cursor-pointer ${sessionType === 'video' ? 'border-green' : ''}`}
                    onClick={() => handleSessionTypeSelect('video')}
                  >
                    <div className="flex flex-col items-center text-center">
                      <Video className="w-10 h-10 text-green mb-2" />
                      <h4 className="font-semibold mb-1">Video Session</h4>
                      <p className="text-sm text-foreground/70">Face-to-face online</p>
                      <p className="text-green font-medium mt-2">$65/session</p>
                    </div>
                  </div>
                  
                  <div 
                    className={`healer-card p-4 cursor-pointer ${sessionType === 'inperson' ? 'border-green' : ''}`}
                    onClick={() => handleSessionTypeSelect('inperson')}
                  >
                    <div className="flex flex-col items-center text-center">
                      <User className="w-10 h-10 text-green mb-2" />
                      <h4 className="font-semibold mb-1">In-Person</h4>
                      <p className="text-sm text-foreground/70">Office visit</p>
                      <p className="text-green font-medium mt-2">$85/session</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Step 2: Therapy Type */}
            {currentStep === 2 && (
              <div>
                <h3 className="text-lg font-semibold mb-4">What would you like to focus on?</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {therapyTypes.map(type => (
                    <div 
                      key={type} 
                      className={`p-3 border rounded-lg text-center cursor-pointer transition-all ${
                        therapyType === type ? 'border-green bg-green/10 text-green' : 'border-foreground/20 hover:border-green/30'
                      }`}
                      onClick={() => handleTherapyTypeSelect(type)}
                    >
                      {type}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Step 3: Select Date */}
            {currentStep === 3 && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Select a Date</h3>
                <div className="flex justify-center">
                  <Calendar
                    mode="single"
                    selected={selectedDate ? new Date(selectedDate) : undefined}
                    onSelect={handleDateSelect}
                    className="rounded-md border"
                    disabled={(date) => {
                      // Disable dates in the past and weekends for this example
                      return date < new Date() || date.getDay() === 0 || date.getDay() === 6
                    }}
                  />
                </div>
              </div>
            )}
            
            {/* Step 4: Select Time */}
            {currentStep === 4 && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Select a Time</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {timeSlots.map(time => (
                    <div 
                      key={time}
                      className={`py-3 rounded-lg text-center cursor-pointer transition-all ${
                        selectedTime === time 
                          ? 'bg-green/10 border border-green text-green font-medium' 
                          : 'bg-foreground/5 hover:bg-foreground/10'
                      }`}
                      onClick={() => handleTimeSelect(time)}
                    >
                      <div className="flex items-center justify-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {time}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Step 5: Review and Submit */}
            {currentStep === 5 && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Review Your Request</h3>
                <div className="healer-card p-4 mb-6">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-foreground/70">Therapist:</span>
                      <span className="font-medium">{selectedTherapist?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/70">Session Type:</span>
                      <span className="font-medium capitalize">{sessionType} Session</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/70">Focus Area:</span>
                      <span className="font-medium">{therapyType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/70">Date:</span>
                      <span className="font-medium">
                        {selectedDate && new Date(selectedDate).toLocaleDateString('en-US', {
                          weekday: 'long',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/70">Time:</span>
                      <span className="font-medium">{selectedTime}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-foreground/70 text-sm mb-6">
                  By submitting this request, you're expressing interest in scheduling a session. 
                  Our team will contact you shortly to confirm availability and provide next steps.
                </p>
              </div>
            )}
          </div>
          
          <div className="flex justify-between">
            {currentStep > 1 ? (
              <Button 
                variant="outline"
                onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
              >
                Back
              </Button>
            ) : (
              <Button 
                variant="outline"
                onClick={handleCloseScheduler}
              >
                Cancel
              </Button>
            )}
            
            {currentStep < 5 ? (
              <Button 
                className="bg-green hover:bg-green/90 text-white"
                disabled={
                  (currentStep === 1 && !sessionType) ||
                  (currentStep === 2 && !therapyType) ||
                  (currentStep === 3 && !selectedDate) ||
                  (currentStep === 4 && !selectedTime)
                }
                onClick={() => setCurrentStep(prev => Math.min(5, prev + 1))}
              >
                Next
              </Button>
            ) : (
              <Button 
                className="bg-green hover:bg-green/90 text-white"
                onClick={handleSubmit}
              >
                Submit Request
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TherapistScheduler;
