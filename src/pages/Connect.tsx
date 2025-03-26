
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageCircle, Video, Calendar, Star, ArrowRight, CheckCircle, Clock, Calendar as CalendarIcon, Phone, MessageSquare, BarChart, Shield } from "lucide-react";
import { useAppSelector, useAppDispatch } from "@/hooks";
import TherapistCard from "@/components/therapist/TherapistCard";
import TherapistProfile from "@/components/therapist/TherapistProfile";
import TherapistScheduler from "@/components/therapist/TherapistScheduler";

const Connect = () => {
  const { therapists, selectedTherapist } = useAppSelector(state => state.therapist);

  const sessionTypes = [
    {
      id: "chat",
      title: "Chat Sessions",
      description: "Convenient text-based therapy sessions you can attend from anywhere.",
      icon: <MessageCircle className="w-6 h-6 text-lilac" />,
      price: "From $35 per session",
      benefits: [
        "Available 24/7",
        "Respond at your own pace",
        "Review conversation history",
        "Share multimedia resources"
      ]
    },
    {
      id: "video",
      title: "Video Sessions",
      description: "Face-to-face video therapy from the comfort of your home.",
      icon: <Video className="w-6 h-6 text-lilac" />,
      price: "From $65 per session",
      benefits: [
        "Real-time visual interaction",
        "Scheduled 50-minute sessions",
        "Screen sharing for resources",
        "HD video quality"
      ]
    },
    {
      id: "inperson",
      title: "In-Person Meetups",
      description: "Traditional in-office therapy sessions at partner locations.",
      icon: <Calendar className="w-6 h-6 text-lilac" />,
      price: "From $85 per session",
      benefits: [
        "Face-to-face interaction",
        "Distraction-free environment",
        "Multiple office locations",
        "Evening appointments available"
      ]
    }
  ];

  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Connect with Our Therapists</h1>
          <p className="text-foreground/70 text-lg">
            Our licensed professionals are here to support you through your healing journey. Schedule a session in the format that works best for you.
          </p>
        </motion.div>

        {/* Client Dashboard Preview */}
        <motion.div
          className="mb-16 overflow-hidden rounded-xl healer-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 w-fit mb-4">
                  <h3 className="text-blue-600 font-semibold">Client Dashboard</h3>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Track your progress and manage your therapy journey</h2>
                <p className="text-foreground/70 mb-6">
                  Our personalized client dashboard helps you monitor your progress, manage appointments, access resources, and stay connected with your therapist.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green mr-3" />
                    <span>Track therapy goals and progress</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green mr-3" />
                    <span>Schedule and manage appointments</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green mr-3" />
                    <span>Access session recordings and notes</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green mr-3" />
                    <span>Communicate securely with your therapist</span>
                  </li>
                </ul>
                <button className="primary-button">
                  Explore Dashboard Features
                </button>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="/lovable-uploads/71f1ca0e-c40e-4b1c-b08e-0b19ed4ff703.png" 
                  alt="Client Dashboard" 
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* App Features */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Everything You Need For Your Mental Health Journey</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="healer-card p-6 hover:border-green/50 transition-all duration-300">
              <div className="p-3 bg-lilac/20 rounded-full w-fit mb-4">
                <CalendarIcon className="w-6 h-6 text-lilac" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Easy Scheduling</h3>
              <p className="text-foreground/70">
                Book appointments with your therapist at times that work for you, with flexible options for rescheduling.
              </p>
            </div>
            
            <div className="healer-card p-6 hover:border-green/50 transition-all duration-300">
              <div className="p-3 bg-lilac/20 rounded-full w-fit mb-4">
                <Phone className="w-6 h-6 text-lilac" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Multi-Platform Support</h3>
              <p className="text-foreground/70">
                Connect through our web app or mobile application with seamless integration across all your devices.
              </p>
            </div>
            
            <div className="healer-card p-6 hover:border-green/50 transition-all duration-300">
              <div className="p-3 bg-lilac/20 rounded-full w-fit mb-4">
                <BarChart className="w-6 h-6 text-lilac" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Progress Tracking</h3>
              <p className="text-foreground/70">
                Visualize your therapy journey with interactive charts and goal-tracking features to celebrate your growth.
              </p>
            </div>
            
            <div className="healer-card p-6 hover:border-green/50 transition-all duration-300">
              <div className="p-3 bg-lilac/20 rounded-full w-fit mb-4">
                <Shield className="w-6 h-6 text-lilac" />
              </div>
              <h3 className="text-lg font-semibold mb-3">HIPAA Compliant</h3>
              <p className="text-foreground/70">
                End-to-end encryption and secure infrastructure keep your therapy sessions and personal data completely private.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Session Types */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {sessionTypes.map((session, index) => (
            <div 
              key={session.id}
              className="healer-card p-8 hover:border-green/50 transition-all duration-300"
            >
              <div className="p-3 bg-lilac/20 rounded-full w-fit mb-4">
                {session.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{session.title}</h3>
              <p className="text-foreground/70 mb-4">
                {session.description}
              </p>
              <ul className="space-y-2 mb-6">
                {session.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green mr-2 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <p className="text-green font-semibold">{session.price}</p>
            </div>
          ))}
        </motion.div>

        {/* Messaging and Communication */}
        <motion.div
          className="mt-16 mb-16 healer-card p-8 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
              <h3 className="text-2xl font-bold mb-6">Secure Communication Platform</h3>
              <p className="text-foreground/70 mb-6">
                Our integrated messaging system allows you to stay connected with your therapist between sessions, share resources, and maintain a therapeutic relationship.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="p-2 bg-green/10 rounded-full mr-3 mt-1">
                    <CheckCircle className="w-5 h-5 text-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold">End-to-End Encryption</h4>
                    <p className="text-sm text-foreground/70">All communications are secured with enterprise-grade encryption.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="p-2 bg-green/10 rounded-full mr-3 mt-1">
                    <CheckCircle className="w-5 h-5 text-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Multimedia Support</h4>
                    <p className="text-sm text-foreground/70">Share images, documents, and audio recordings with your therapist.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="p-2 bg-green/10 rounded-full mr-3 mt-1">
                    <CheckCircle className="w-5 h-5 text-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Session Recordings</h4>
                    <p className="text-sm text-foreground/70">Access recordings of your therapy sessions for review (with mutual consent).</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="p-2 bg-green/10 rounded-full mr-3 mt-1">
                    <CheckCircle className="w-5 h-5 text-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Urgent Support</h4>
                    <p className="text-sm text-foreground/70">Direct line to crisis resources when immediate help is needed.</p>
                  </div>
                </li>
              </ul>
              
              <button className="primary-button">
                Explore Communication Features
              </button>
            </div>
            
            <div className="lg:w-1/2">
              <img 
                src="/lovable-uploads/ab9cd241-1456-4d94-8ece-d74a37cb5488.png" 
                alt="Messaging Platform" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </motion.div>

        <motion.h2 
          className="text-2xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Available Therapists
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {therapists.map((therapist, index) => (
            <TherapistCard 
              key={therapist.id} 
              therapist={therapist} 
              index={index} 
            />
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link 
            to="/services" 
            className="inline-flex items-center text-green font-medium hover:underline"
          >
            View all our therapy services <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </motion.div>

        {/* Render therapist profile and scheduler components */}
        {selectedTherapist && <TherapistProfile />}
        <TherapistScheduler />
      </div>
    </div>
  );
};

export default Connect;
