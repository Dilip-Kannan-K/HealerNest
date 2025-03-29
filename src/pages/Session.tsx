
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '@/hooks';
import SessionInterface from '@/components/session/SessionInterface';
import { selectTherapist } from '@/store/therapistSlice';
import { setSessionType } from '@/store/sessionSlice';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
