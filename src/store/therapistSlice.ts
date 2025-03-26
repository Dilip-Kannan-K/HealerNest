
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Therapist {
  id: number;
  name: string;
  speciality: string;
  image: string;
  rating: number;
  reviews: number;
  available: boolean;
  experience: string;
  approach: string[];
  education: string;
  bio: string;
}

interface TherapistState {
  therapists: Therapist[];
  selectedTherapist: Therapist | null;
  isSchedulerOpen: boolean;
}

const initialState: TherapistState = {
  therapists: [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      speciality: "Anxiety & Depression",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      reviews: 127,
      available: true,
      experience: "8 years",
      approach: ["Cognitive Behavioral Therapy", "Mindfulness", "Trauma-Informed Care"],
      education: "Ph.D. in Clinical Psychology, Stanford University",
      bio: "I help clients overcome anxiety, depression, and life transitions using evidence-based approaches. My therapy style is warm, collaborative, and focused on practical solutions."
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      speciality: "Relationship Therapy",
      image: "https://images.unsplash.com/photo-1565464027194-7957a2295fb7?auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      reviews: 94,
      available: true,
      experience: "12 years",
      approach: ["Emotionally Focused Therapy", "Gottman Method", "Solution-Focused Brief Therapy"],
      education: "Ph.D. in Marriage and Family Therapy, Columbia University",
      bio: "Specializing in relationship issues, I help couples and individuals improve communication, resolve conflicts, and rebuild trust. My approach is compassionate yet direct."
    },
    {
      id: 3,
      name: "Dr. Emily Williams",
      speciality: "Trauma Recovery",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      reviews: 83,
      available: false,
      experience: "10 years",
      approach: ["EMDR", "Somatic Experiencing", "Attachment-Based Therapy"],
      education: "Psy.D. in Clinical Psychology, University of California",
      bio: "I specialize in helping individuals heal from trauma and develop resilience. My gentle approach creates a safe space for processing difficult experiences and discovering pathways to healing."
    },
    {
      id: 4,
      name: "Dr. Robert Davis",
      speciality: "Teen & Adolescent Therapy",
      image: "https://images.unsplash.com/photo-1553867745-6e038d085e86?auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      reviews: 106,
      available: true,
      experience: "15 years",
      approach: ["Strength-Based Approach", "Motivational Interviewing", "Play Therapy"],
      education: "Ph.D. in Child Psychology, University of Michigan",
      bio: "Working with teens and adolescents, I help young people navigate the challenges of growing up. My interactive style engages youth and builds on their natural strengths and resilience."
    }
  ],
  selectedTherapist: null,
  isSchedulerOpen: false
};

export const therapistSlice = createSlice({
  name: 'therapist',
  initialState,
  reducers: {
    selectTherapist: (state, action: PayloadAction<number>) => {
      const therapist = state.therapists.find(t => t.id === action.payload);
      state.selectedTherapist = therapist || null;
    },
    clearSelectedTherapist: (state) => {
      state.selectedTherapist = null;
    },
    setSchedulerOpen: (state, action: PayloadAction<boolean>) => {
      state.isSchedulerOpen = action.payload;
    }
  }
});

export const { selectTherapist, clearSelectedTherapist, setSchedulerOpen } = therapistSlice.actions;
export default therapistSlice.reducer;
