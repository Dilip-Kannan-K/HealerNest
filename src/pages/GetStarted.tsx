
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, User, Mail, CalendarDays, Users } from "lucide-react";
import { toast } from "sonner";

// Define question types
type QuestionType = {
  id: number;
  question: string;
  type: "text" | "email" | "select" | "radio" | "checkbox";
  options?: string[];
  placeholder?: string;
};

// Initial user data
type UserData = {
  name: string;
  email: string;
  age: string;
  gender: string;
  primaryConcern: string;
  therapyBefore: string;
  subscriptionPlan: string;
};

const GetStarted = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userData, setUserData] = useState<UserData>({
    name: "",
    email: "",
    age: "",
    gender: "",
    primaryConcern: "",
    therapyBefore: "",
    subscriptionPlan: "",
  });
  
  // Basic information (Step 1)
  const basicInfo = [
    {
      id: 1,
      label: "Full Name",
      name: "name",
      type: "text",
      placeholder: "Enter your full name",
      icon: <User className="h-5 w-5 text-foreground/40" />,
      required: true
    },
    {
      id: 2,
      label: "Email Address",
      name: "email",
      type: "email",
      placeholder: "your@email.com",
      icon: <Mail className="h-5 w-5 text-foreground/40" />,
      required: true
    },
    {
      id: 3,
      label: "Age",
      name: "age",
      type: "text",
      placeholder: "Your age",
      icon: <CalendarDays className="h-5 w-5 text-foreground/40" />,
      required: true
    },
    {
      id: 4,
      label: "Gender",
      name: "gender",
      type: "select",
      options: ["Male", "Female", "Non-binary", "Prefer not to say"],
      icon: <Users className="h-5 w-5 text-foreground/40" />,
      required: true
    }
  ];
  
  // Questionnaire (Step 2)
  const questions: QuestionType[] = [
    {
      id: 1,
      question: "What brings you to therapy today?",
      type: "select",
      options: [
        "Anxiety or stress",
        "Depression or low mood",
        "Relationship issues",
        "Self-improvement",
        "Trauma recovery",
        "Work-related stress",
        "Other"
      ],
    },
    {
      id: 2,
      question: "Have you been to therapy before?",
      type: "radio",
      options: ["Yes", "No"],
    },
    {
      id: 3,
      question: "Which subscription plan interests you?",
      type: "radio",
      options: ["Monthly ($79)", "2 Months ($150)", "3 Months ($210)", "6 Months ($390)", "Yearly ($750)"],
    }
  ];
  
  // Handle basic information change
  const handleBasicInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  
  // Handle questionnaire answer
  const handleQuestionAnswer = (answer: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    
    // Update the corresponding user data field based on the question
    switch (currentQuestion.id) {
      case 1:
        setUserData({ ...userData, primaryConcern: answer });
        break;
      case 2:
        setUserData({ ...userData, therapyBefore: answer });
        break;
      case 3:
        setUserData({ ...userData, subscriptionPlan: answer });
        break;
      default:
        break;
    }
    
    // Move to the next question or to the review step
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Move to step 3 (review) after all questions are answered
      setStep(3);
    }
  };
  
  // Handle next step
  const handleNextStep = () => {
    // Basic validation for step 1
    if (step === 1) {
      if (!userData.name || !userData.email || !userData.age || !userData.gender) {
        toast.error("Please fill in all required fields");
        return;
      }
      
      // Simple email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(userData.email)) {
        toast.error("Please enter a valid email address");
        return;
      }
      
      setStep(2);
    }
  };
  
  // Handle submit
  const handleSubmit = () => {
    // In a real app, you would send the data to your backend here
    console.log("Submitting user data:", userData);
    
    // Show success message
    toast.success("Registration successful! Redirecting to connect with therapists...");
    
    // Simulate API call delay then redirect
    setTimeout(() => {
      navigate("/connect");
    }, 2000);
  };
  
  // Get current question
  const currentQuestion = questions[currentQuestionIndex];
  
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-2xl mx-auto">
          {/* Progress indicator */}
          <div className="mb-10">
            <div className="flex items-center justify-between">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center">
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                      step === i 
                        ? "bg-green text-foreground" 
                        : step > i 
                          ? "bg-green/80 text-foreground" 
                          : "bg-lilac/30 text-foreground/70"
                    }`}
                  >
                    {step > i ? <Check className="w-5 h-5" /> : i}
                  </div>
                  <div className={`text-sm ml-2 ${step >= i ? "text-foreground" : "text-foreground/50"}`}>
                    {i === 1 ? "Your Info" : i === 2 ? "Questionnaire" : "Review"}
                  </div>
                  {i < 3 && (
                    <div 
                      className={`w-12 md:w-24 h-1 mx-2 rounded ${
                        step > i ? "bg-green/80" : "bg-lilac/30"
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Content based on current step */}
          <motion.div 
            className="glass-panel p-8 md:p-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              {/* Step 1: Basic Information */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-2">Tell us about yourself</h2>
                    <p className="text-foreground/70">
                      Let's start with some basic information
                    </p>
                  </div>
                  
                  <form className="space-y-5">
                    {basicInfo.map((field) => (
                      <div key={field.id} className="space-y-2">
                        <label htmlFor={field.name} className="block text-sm font-medium">
                          {field.label} {field.required && <span className="text-red-500">*</span>}
                        </label>
                        
                        {field.type === "select" ? (
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              {field.icon}
                            </div>
                            <select
                              id={field.name}
                              name={field.name}
                              value={(userData as any)[field.name]}
                              onChange={handleBasicInfoChange}
                              className="healer-input pl-10 w-full appearance-none"
                              required={field.required}
                            >
                              <option value="">Select {field.label}</option>
                              {field.options?.map((option) => (
                                <option key={option} value={option}>
                                  {option}
                                </option>
                              ))}
                            </select>
                          </div>
                        ) : (
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              {field.icon}
                            </div>
                            <input
                              type={field.type}
                              id={field.name}
                              name={field.name}
                              className="healer-input pl-10 w-full"
                              placeholder={field.placeholder}
                              value={(userData as any)[field.name]}
                              onChange={handleBasicInfoChange}
                              required={field.required}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                    
                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="primary-button w-full flex items-center justify-center"
                      >
                        Continue <ArrowRight className="ml-2 w-4 h-4" />
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}
              
              {/* Step 2: Questionnaire */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="text-center"
                >
                  <h2 className="text-2xl font-bold mb-8">Questionnaire</h2>
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentQuestion.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-8"
                    >
                      <h3 className="text-xl font-medium">{currentQuestion.question}</h3>
                      
                      <div className="space-y-3">
                        {currentQuestion.type === "radio" && (
                          <div className="space-y-3">
                            {currentQuestion.options?.map((option) => (
                              <button
                                key={option}
                                type="button"
                                onClick={() => handleQuestionAnswer(option)}
                                className="w-full text-left p-4 rounded-lg border border-lilac/30 hover:border-green/70 hover:bg-green/5 transition-colors duration-200"
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        )}
                        
                        {currentQuestion.type === "select" && (
                          <div className="space-y-3">
                            {currentQuestion.options?.map((option) => (
                              <button
                                key={option}
                                type="button"
                                onClick={() => handleQuestionAnswer(option)}
                                className="w-full text-left p-4 rounded-lg border border-lilac/30 hover:border-green/70 hover:bg-green/5 transition-colors duration-200"
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                      
                      <div className="text-sm text-foreground/60">
                        Question {currentQuestionIndex + 1} of {questions.length}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                  
                  <div className="mt-8 flex">
                    <button
                      type="button"
                      onClick={() => {
                        if (currentQuestionIndex > 0) {
                          setCurrentQuestionIndex(currentQuestionIndex - 1);
                        } else {
                          setStep(1);
                        }
                      }}
                      className="outline-button mr-4"
                    >
                      <ArrowLeft className="mr-2 w-4 h-4" /> Back
                    </button>
                  </div>
                </motion.div>
              )}
              
              {/* Step 3: Review */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-2">Review Your Information</h2>
                    <p className="text-foreground/70">
                      Please review your information before submitting
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-lilac/10 p-6 rounded-lg">
                      <h3 className="font-medium mb-4">Personal Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-foreground/70">Full Name</p>
                          <p className="font-medium">{userData.name}</p>
                        </div>
                        <div>
                          <p className="text-sm text-foreground/70">Email</p>
                          <p className="font-medium">{userData.email}</p>
                        </div>
                        <div>
                          <p className="text-sm text-foreground/70">Age</p>
                          <p className="font-medium">{userData.age}</p>
                        </div>
                        <div>
                          <p className="text-sm text-foreground/70">Gender</p>
                          <p className="font-medium">{userData.gender}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green/10 p-6 rounded-lg">
                      <h3 className="font-medium mb-4">Questionnaire Responses</h3>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-foreground/70">Primary Concern</p>
                          <p className="font-medium">{userData.primaryConcern}</p>
                        </div>
                        <div>
                          <p className="text-sm text-foreground/70">Previous Therapy Experience</p>
                          <p className="font-medium">{userData.therapyBefore}</p>
                        </div>
                        <div>
                          <p className="text-sm text-foreground/70">Selected Subscription Plan</p>
                          <p className="font-medium">{userData.subscriptionPlan}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                      <button
                        type="button"
                        onClick={() => setCurrentQuestionIndex(questions.length - 1) || setStep(2)}
                        className="outline-button sm:flex-1"
                      >
                        <ArrowLeft className="mr-2 w-4 h-4" /> Back
                      </button>
                      <button
                        type="button"
                        onClick={handleSubmit}
                        className="primary-button sm:flex-1"
                      >
                        Complete Registration <ArrowRight className="ml-2 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          
          {/* Bottom link */}
          <div className="text-center mt-6">
            <Link to="/" className="text-foreground/70 hover:text-green transition-colors duration-200">
              <ArrowLeft className="w-4 h-4 inline mr-1" /> Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
