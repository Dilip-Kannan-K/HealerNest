
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '@/hooks';
import SessionInterface from '@/components/session/SessionInterface';

const Session = () => {
  const navigate = useNavigate();
  const { selectedTherapist } = useAppSelector(state => state.therapist);
  const { sessionType, therapyType, selectedDate, selectedTime } = useAppSelector(state => state.session);

  // Check if session data exists, otherwise redirect to connect page
  useEffect(() => {
    if (!selectedTherapist || !sessionType || !selectedDate || !selectedTime) {
      navigate('/connect');
    }
  }, [selectedTherapist, sessionType, selectedDate, selectedTime, navigate]);

  return (
    <div>
      <SessionInterface />
    </div>
  );
};

export default Session;
