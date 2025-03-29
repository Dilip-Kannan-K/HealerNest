
import React, { createContext, useContext, useState, useEffect } from "react";

interface Therapist {
  id: string;
  name: string;
  specialty: string;
  avatar: string;
}

interface WebinarSession {
  id: string;
  title: string;
  date: string;
  time: string;
  host: {
    name: string;
    avatar: string;
  };
  status: 'upcoming' | 'completed' | 'cancelled';
}

interface SessionRequest {
  id: string;
  therapist: Therapist;
  type: 'chat' | 'video' | 'inperson';
  focusArea: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  subscription?: {
    plan: string;
    status: string;
    nextBilling?: string;
    webinarSessions?: WebinarSession[];
  };
  sessionRequests?: SessionRequest[];
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  addSessionRequest: (request: Omit<SessionRequest, 'id' | 'createdAt' | 'status'>) => void;
  getSessionRequests: () => SessionRequest[];
  bookWebinar: (webinar: Omit<WebinarSession, 'id' | 'status'>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing user session on load
  useEffect(() => {
    const checkAuth = () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      setIsLoading(false);
    };
    
    checkAuth();
  }, []);

  // Mock login function
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock user data
    const mockUser: User = {
      id: "user123",
      name: "Jane Doe",
      email: email,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      subscription: {
        plan: "Premium Healing",
        status: "Active",
        nextBilling: "2023-12-01",
        webinarSessions: [
          {
            id: "webinar-1",
            title: "Mindfulness Meditation",
            date: "2023-11-15",
            time: "10:00 AM",
            host: {
              name: "Dr. Sarah Johnson",
              avatar: "https://randomuser.me/api/portraits/women/28.jpg"
            },
            status: "upcoming"
          }
        ]
      },
      sessionRequests: []
    };
    
    // Store in localStorage for persistence
    localStorage.setItem("user", JSON.stringify(mockUser));
    setUser(mockUser);
    setIsLoading(false);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  // Add a new session request to the user's profile
  const addSessionRequest = (request: Omit<SessionRequest, 'id' | 'createdAt' | 'status'>) => {
    if (!user) return;

    const newRequest: SessionRequest = {
      ...request,
      id: `request-${Date.now()}`,
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    const updatedUser = {
      ...user,
      sessionRequests: [...(user.sessionRequests || []), newRequest]
    };

    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  // Book a webinar session
  const bookWebinar = (webinar: Omit<WebinarSession, 'id' | 'status'>) => {
    if (!user || !user.subscription) return;

    const newWebinar: WebinarSession = {
      ...webinar,
      id: `webinar-${Date.now()}`,
      status: 'upcoming'
    };

    const updatedUser = {
      ...user,
      subscription: {
        ...user.subscription,
        webinarSessions: [...(user.subscription.webinarSessions || []), newWebinar]
      }
    };

    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  // Get all session requests
  const getSessionRequests = (): SessionRequest[] => {
    return user?.sessionRequests || [];
  };

  const value = {
    user,
    isLoading,
    login,
    logout,
    isAuthenticated: !!user,
    addSessionRequest,
    getSessionRequests,
    bookWebinar
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
