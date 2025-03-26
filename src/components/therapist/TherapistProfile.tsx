
import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare, Video, Calendar } from 'lucide-react';
import { useAppSelector, useAppDispatch } from '@/hooks';
import { clearSelectedTherapist, setSchedulerOpen } from '@/store/therapistSlice';

const TherapistProfile: React.FC = () => {
  const dispatch = useAppDispatch();
  const { selectedTherapist } = useAppSelector(state => state.therapist);
  
  if (!selectedTherapist) return null;

  const handleCloseProfile = () => {
    dispatch(clearSelectedTherapist());
  };

  const handleScheduleSession = (type: 'chat' | 'video' | 'inperson') => {
    dispatch(setSchedulerOpen(true));
  };

  return (
    <motion.div
      className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
      >
        <div className="relative">
          <button 
            className="absolute top-4 right-4 bg-white/80 p-2 rounded-full z-10"
            onClick={handleCloseProfile}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <div className="h-40 bg-gradient-to-r from-lilac/30 to-green/30 rounded-t-xl"></div>
          
          <div className="px-8 pb-8">
            <div className="flex flex-col md:flex-row -mt-16">
              <div className="md:mr-8">
                <img 
                  src={selectedTherapist.image} 
                  alt={selectedTherapist.name} 
                  className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover"
                />
              </div>
              
              <div className="mt-6 md:mt-0 flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h2 className="text-2xl font-bold">{selectedTherapist.name}</h2>
                    <p className="text-foreground/70">{selectedTherapist.speciality}</p>
                    <div className="flex items-center mt-2">
                      <Star className="w-5 h-5 text-yellow-500" />
                      <span className="ml-1 font-semibold">{selectedTherapist.rating}</span>
                      <span className="text-foreground/50 ml-1">({selectedTherapist.reviews} reviews)</span>
                    </div>
                    <p className="mt-1">{selectedTherapist.experience} experience</p>
                  </div>
                  
                  {selectedTherapist.available ? (
                    <button 
                      className="mt-4 md:mt-0 primary-button"
                      onClick={() => dispatch(setSchedulerOpen(true))}
                    >
                      Schedule Session
                    </button>
                  ) : (
                    <button className="mt-4 md:mt-0 py-3 px-6 rounded-full bg-lilac/40 text-foreground/50 cursor-not-allowed">
                      Join Waitlist
                    </button>
                  )}
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-3">About</h3>
                  <p className="text-foreground/80">{selectedTherapist.bio}</p>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-3">Education</h3>
                  <p className="text-foreground/80">{selectedTherapist.education}</p>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-3">Therapeutic Approach</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedTherapist.approach.map((item, index) => (
                      <span key={index} className="px-3 py-1 bg-lilac/10 rounded-full text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div 
                    className="healer-card p-4 flex flex-col items-center text-center cursor-pointer hover:border-green/50 transition-all"
                    onClick={() => handleScheduleSession('chat')}
                  >
                    <MessageSquare className="w-6 h-6 text-green mb-2" />
                    <h4 className="font-semibold">Chat Session</h4>
                    <p className="text-sm text-foreground/70 mb-2">$35/session</p>
                    <button className="text-green text-sm font-medium">Book Now</button>
                  </div>
                  
                  <div 
                    className="healer-card p-4 flex flex-col items-center text-center cursor-pointer hover:border-green/50 transition-all"
                    onClick={() => handleScheduleSession('video')}
                  >
                    <Video className="w-6 h-6 text-green mb-2" />
                    <h4 className="font-semibold">Video Session</h4>
                    <p className="text-sm text-foreground/70 mb-2">$65/session</p>
                    <button className="text-green text-sm font-medium">Book Now</button>
                  </div>
                  
                  <div 
                    className="healer-card p-4 flex flex-col items-center text-center cursor-pointer hover:border-green/50 transition-all"
                    onClick={() => handleScheduleSession('inperson')}
                  >
                    <Calendar className="w-6 h-6 text-green mb-2" />
                    <h4 className="font-semibold">In-Person</h4>
                    <p className="text-sm text-foreground/70 mb-2">$85/session</p>
                    <button className="text-green text-sm font-medium">Book Now</button>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Upcoming Availability</h3>
                  <div className="grid grid-cols-7 gap-2 mb-4">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                      <div key={i} className="text-center">
                        <p className="text-sm text-foreground/70">{day}</p>
                        <div className={`mt-1 w-10 h-10 rounded-full flex items-center justify-center mx-auto 
                          ${i === 1 ? 'bg-green text-white' : 'bg-foreground/5'}`}>
                          {20 + i}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'].map((time, i) => (
                      <button 
                        key={i}
                        className={`py-2 rounded-full text-center text-sm ${
                          i === 1 
                            ? 'bg-green/10 border border-green text-green font-medium' 
                            : 'bg-foreground/5 text-foreground/70'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TherapistProfile;
