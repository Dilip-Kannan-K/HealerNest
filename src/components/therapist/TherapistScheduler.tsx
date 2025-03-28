
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, X, Check } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { setSchedulerOpen } from '@/store/therapistSlice';
import { setSessionType, setTherapyType, setSelectedDate, setSelectedTime } from '@/store/sessionSlice';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface TherapistSchedulerProps {
  onSubmit: () => void;
}

const TherapistScheduler: React.FC<TherapistSchedulerProps> = ({ onSubmit }) => {
  const dispatch = useAppDispatch();
  const { selectedTherapist } = useAppSelector(state => state.therapist);
  
  const [sessionType, setLocalSessionType] = useState<'chat' | 'video' | 'inperson'>('video');
  const [therapyType, setLocalTherapyType] = useState<'individual' | 'couples' | 'family'>('individual');
  const [notes, setNotes] = useState('');
  
  const handleCloseScheduler = () => {
    dispatch(setSchedulerOpen(false));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Store session details in Redux
    dispatch(setSessionType(sessionType));
    dispatch(setTherapyType(therapyType));
    
    // In this simplified version, we don't collect date/time from the user
    // Instead, set placeholder values and let the therapist determine these
    dispatch(setSelectedDate('To be determined'));
    dispatch(setSelectedTime('To be determined'));
    
    // Call the onSubmit callback to handle success and closure
    onSubmit();
  };

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
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Request a Session</h2>
            <button 
              className="p-2 rounded-full hover:bg-foreground/5"
              onClick={handleCloseScheduler}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {selectedTherapist && (
            <div className="flex items-center mb-6 p-4 bg-foreground/5 rounded-lg">
              <img 
                src={selectedTherapist.image} 
                alt={selectedTherapist.name} 
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="font-semibold">{selectedTherapist.name}</h3>
                <p className="text-foreground/70">{selectedTherapist.speciality}</p>
              </div>
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Session Type</label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    className={`p-3 rounded-lg border text-center flex flex-col items-center justify-center transition-colors ${
                      sessionType === 'chat' 
                        ? 'border-green bg-green/10' 
                        : 'border-foreground/20 hover:border-green/50'
                    }`}
                    onClick={() => setLocalSessionType('chat')}
                  >
                    <span className="text-sm font-medium">Chat</span>
                    <span className="text-xs text-foreground/70 mt-1">$35/session</span>
                  </button>
                  
                  <button
                    type="button"
                    className={`p-3 rounded-lg border text-center flex flex-col items-center justify-center transition-colors ${
                      sessionType === 'video' 
                        ? 'border-green bg-green/10' 
                        : 'border-foreground/20 hover:border-green/50'
                    }`}
                    onClick={() => setLocalSessionType('video')}
                  >
                    <span className="text-sm font-medium">Video</span>
                    <span className="text-xs text-foreground/70 mt-1">$65/session</span>
                  </button>
                  
                  <button
                    type="button"
                    className={`p-3 rounded-lg border text-center flex flex-col items-center justify-center transition-colors ${
                      sessionType === 'inperson' 
                        ? 'border-green bg-green/10' 
                        : 'border-foreground/20 hover:border-green/50'
                    }`}
                    onClick={() => setLocalSessionType('inperson')}
                  >
                    <span className="text-sm font-medium">In-Person</span>
                    <span className="text-xs text-foreground/70 mt-1">$85/session</span>
                  </button>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Therapy Type</label>
                <Select
                  value={therapyType}
                  onValueChange={(value: 'individual' | 'couples' | 'family') => setLocalTherapyType(value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select therapy type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="individual">Individual Therapy</SelectItem>
                    <SelectItem value="couples">Couples Therapy</SelectItem>
                    <SelectItem value="family">Family Therapy</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Notes (optional)</label>
                <textarea
                  className="healer-input w-full min-h-[100px]"
                  placeholder="Briefly describe what you'd like to discuss..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                ></textarea>
              </div>
              
              <div className="p-4 bg-lilac/10 rounded-lg text-center">
                <p className="text-sm font-medium">Your therapist will contact you with available time slots within 24 hours.</p>
              </div>
              
              <div className="pt-4">
                <button 
                  type="submit"
                  className="w-full py-3 rounded-full bg-green text-white font-medium hover:bg-green/90"
                >
                  <Check className="w-4 h-4 inline-block mr-2" />
                  Request Session
                </button>
              </div>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TherapistScheduler;
