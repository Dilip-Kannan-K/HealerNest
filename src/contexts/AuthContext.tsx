
import React, { createContext, useContext, useState, useEffect } from "react";

interface Therapist {
  id: string;
  name: string;
  specialty: string;
  avatar: string;
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
    therapist?: {
      id: string;
      name: string;
      specialty: string;
      avatar: string;
    };
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
        therapist: {
          id: "therapist456",
          name: "Dr. Emily Wilson",
          specialty: "Cognitive Behavioral Therapy",
          avatar: "https://randomuser.me/api/portraits/women/68.jpg"
        }
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
    getSessionRequests
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
