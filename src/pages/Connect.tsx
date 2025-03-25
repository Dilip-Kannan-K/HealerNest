
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageCircle, Video, Calendar, Star, ArrowRight, CheckCircle, Clock, Calendar as CalendarIcon, Phone, MessageSquare, BarChart, Shield } from "lucide-react";
import { useState } from "react";

const Connect = () => {
  const [selectedTherapist, setSelectedTherapist] = useState(null);

  // Sample therapist data
  const therapists = [
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
  ];

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

  const renderTherapistProfile = () => {
    if (!selectedTherapist) return null;
    const therapist = therapists.find(t => t.id === selectedTherapist);
    if (!therapist) return null;

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
              onClick={() => setSelectedTherapist(null)}
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
                    src={therapist.image} 
                    alt={therapist.name} 
                    className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover"
                  />
                </div>
                
                <div className="mt-6 md:mt-0 flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <h2 className="text-2xl font-bold">{therapist.name}</h2>
                      <p className="text-foreground/70">{therapist.speciality}</p>
                      <div className="flex items-center mt-2">
                        <Star className="w-5 h-5 text-yellow-500" />
                        <span className="ml-1 font-semibold">{therapist.rating}</span>
                        <span className="text-foreground/50 ml-1">({therapist.reviews} reviews)</span>
                      </div>
                      <p className="mt-1">{therapist.experience} experience</p>
                    </div>
                    
                    {therapist.available ? (
                      <button className="mt-4 md:mt-0 primary-button">
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
                    <p className="text-foreground/80">{therapist.bio}</p>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-3">Education</h3>
                    <p className="text-foreground/80">{therapist.education}</p>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-3">Therapeutic Approach</h3>
                    <div className="flex flex-wrap gap-2">
                      {therapist.approach.map((item, index) => (
                        <span key={index} className="px-3 py-1 bg-lilac/10 rounded-full text-sm">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="healer-card p-4 flex flex-col items-center text-center">
                      <MessageSquare className="w-6 h-6 text-green mb-2" />
                      <h4 className="font-semibold">Chat Session</h4>
                      <p className="text-sm text-foreground/70 mb-2">$35/session</p>
                      <button className="text-green text-sm font-medium">Book Now</button>
                    </div>
                    
                    <div className="healer-card p-4 flex flex-col items-center text-center">
                      <Video className="w-6 h-6 text-green mb-2" />
                      <h4 className="font-semibold">Video Session</h4>
                      <p className="text-sm text-foreground/70 mb-2">$65/session</p>
                      <button className="text-green text-sm font-medium">Book Now</button>
                    </div>
                    
                    <div className="healer-card p-4 flex flex-col items-center text-center">
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

        {/* Appointment Booking Section */}
        <motion.div 
          className="mb-16 healer-card p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
              <h3 className="text-2xl font-bold mb-6">Schedule Your Appointment</h3>
              <p className="text-foreground/70 mb-6">
                Choose your preferred therapy type, select a therapist, and find a time that works for you. Your journey to better mental health is just a few clicks away.
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Choose therapy type:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {['Individual Therapy', 'Couples Therapy', 'Family Therapy'].map((type, i) => (
                    <button 
                      key={i}
                      className={`py-2 px-4 rounded-full text-center text-sm border ${
                        i === 0 
                          ? 'bg-green/10 border-green text-green font-medium' 
                          : 'border-lilac/30 text-foreground/70 hover:bg-lilac/10'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Choose session format:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {['Video Call', 'Chat Session', 'In-Person'].map((format, i) => (
                    <button 
                      key={i}
                      className={`py-2 px-4 rounded-full text-center text-sm border ${
                        i === 0 
                          ? 'bg-green/10 border-green text-green font-medium' 
                          : 'border-lilac/30 text-foreground/70 hover:bg-lilac/10'
                      }`}
                    >
                      {format}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="font-semibold mb-3">When would you like to meet?</h4>
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                    <div key={i} className="text-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto 
                        ${i === 1 ? 'bg-green text-white' : 'bg-foreground/5 hover:bg-lilac/20 cursor-pointer'}`}>
                        {day}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  {['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'].map((time, i) => (
                    <button 
                      key={i}
                      className={`py-2 rounded-full text-center text-sm ${
                        i === 1 
                          ? 'bg-green/10 border border-green text-green font-medium' 
                          : 'bg-foreground/5 text-foreground/70 hover:bg-lilac/20'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
              
              <button className="primary-button w-full">
                Continue to Checkout
              </button>
            </div>
            
            <div className="lg:w-1/2 lg:pl-8 border-t lg:border-t-0 lg:border-l border-lilac/20 pt-8 lg:pt-0">
              <h3 className="text-xl font-semibold mb-6">What to Expect</h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4 p-2 bg-lilac/10 rounded-full h-fit">
                    <Clock className="w-5 h-5 text-lilac" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Session Duration</h4>
                    <p className="text-foreground/70 text-sm">
                      Individual sessions typically last 50 minutes, with longer options available for couples and family therapy.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 p-2 bg-lilac/10 rounded-full h-fit">
                    <CalendarIcon className="w-5 h-5 text-lilac" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Scheduling Flexibility</h4>
                    <p className="text-foreground/70 text-sm">
                      Appointments can be rescheduled up to 24 hours in advance without incurring any fees.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 p-2 bg-lilac/10 rounded-full h-fit">
                    <Video className="w-5 h-5 text-lilac" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Technical Requirements</h4>
                    <p className="text-foreground/70 text-sm">
                      For video sessions, you'll need a stable internet connection and a device with a camera and microphone.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 p-2 bg-lilac/10 rounded-full h-fit">
                    <MessageSquare className="w-5 h-5 text-lilac" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">First Session</h4>
                    <p className="text-foreground/70 text-sm">
                      Your first session typically focuses on building rapport and understanding your needs and goals for therapy.
                    </p>
                  </div>
                </div>
              </div>
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
            <motion.div
              key={therapist.id}
              className="healer-card overflow-hidden hover-lift cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index + 0.6 }}
              onClick={() => setSelectedTherapist(therapist.id)}
            >
              <div className="relative">
                <img 
                  src={therapist.image} 
                  alt={therapist.name} 
                  className="w-full h-48 object-cover"
                />
                {!therapist.available && (
                  <div className="absolute top-0 right-0 bg-foreground/80 text-white px-3 py-1 text-sm">
                    Fully Booked
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">{therapist.name}</h3>
                  <div className="flex items-center text-sm">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    <span>{therapist.rating}</span>
                    <span className="text-foreground/50 ml-1">({therapist.reviews})</span>
                  </div>
                </div>
                <p className="text-foreground/70 text-sm mb-4">{therapist.speciality}</p>
                <button 
                  className={`w-full py-2 rounded-full font-medium transition-all duration-200 ${
                    therapist.available 
                      ? "bg-green/90 hover:bg-green text-foreground" 
                      : "bg-lilac/40 text-foreground/50 cursor-not-allowed"
                  }`}
                  disabled={!therapist.available}
                >
                  {therapist.available ? "Schedule Session" : "Join Waitlist"}
                </button>
              </div>
            </motion.div>
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

        {renderTherapistProfile()}

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
      </div>
    </div>
  );
};

export default Connect;
