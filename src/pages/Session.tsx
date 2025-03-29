
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '@/hooks';
import SessionInterface from '@/components/session/SessionInterface';
import { selectTherapist } from '@/store/therapistSlice';
import { setSessionType } from '@/store/sessionSlice';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';

const Session = () => {
  const { therapistId, sessionType } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { therapists } = useAppSelector(state => state.therapist);
  
  useEffect(() => {
    // Redirect to login if not authenticated
    if (!isAuthenticated) {
      navigate('/login', { replace: true });
      return;
    }
    
    // Set session type from URL parameter if provided
    if (sessionType && (sessionType === 'chat' || sessionType === 'video' || sessionType === 'inperson')) {
      dispatch(setSessionType(sessionType));
    }
    
    // Select therapist from URL parameter if provided
    if (therapistId && therapists.length > 0) {
      const therapistIdNum = parseInt(therapistId, 10);
      if (!isNaN(therapistIdNum)) {
        dispatch(selectTherapist(therapistIdNum));
      } else {
        // If therapistId is not a valid number, try to find by other means
        // For example, if therapistId is a string ID or name
        const foundTherapist = therapists.find(t => t.id.toString() === therapistId);
        if (foundTherapist) {
          dispatch(selectTherapist(foundTherapist.id));
        }
      }
    }
  }, [therapistId, sessionType, dispatch, isAuthenticated, navigate, therapists]);
  
  return <SessionInterface />;
};

export default Session;
