
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageCircle, Video, Calendar, Star, ArrowRight } from "lucide-react";

const Connect = () => {
  // Sample therapist data
  const therapists = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      speciality: "Anxiety & Depression",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      reviews: 127,
      available: true
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      speciality: "Relationship Therapy",
      image: "https://images.unsplash.com/photo-1565464027194-7957a2295fb7?auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      reviews: 94,
      available: true
    },
    {
      id: 3,
      name: "Dr. Emily Williams",
      speciality: "Trauma Recovery",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      reviews: 83,
      available: false
    },
    {
      id: 4,
      name: "Dr. Robert Davis",
      speciality: "Teen & Adolescent Therapy",
      image: "https://images.unsplash.com/photo-1553867745-6e038d085e86?auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      reviews: 106,
      available: true
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

        {/* Session Types */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="healer-card p-8 hover:border-green/50 transition-all duration-300">
            <div className="p-3 bg-lilac/20 rounded-full w-fit mb-4">
              <MessageCircle className="w-6 h-6 text-lilac" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Chat Sessions</h3>
            <p className="text-foreground/70 mb-6">
              Convenient text-based therapy sessions you can attend from anywhere.
            </p>
            <p className="text-green font-semibold">From $35 per session</p>
          </div>
          
          <div className="healer-card p-8 hover:border-green/50 transition-all duration-300">
            <div className="p-3 bg-lilac/20 rounded-full w-fit mb-4">
              <Video className="w-6 h-6 text-lilac" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Video Sessions</h3>
            <p className="text-foreground/70 mb-6">
              Face-to-face video therapy from the comfort of your home.
            </p>
            <p className="text-green font-semibold">From $65 per session</p>
          </div>
          
          <div className="healer-card p-8 hover:border-green/50 transition-all duration-300">
            <div className="p-3 bg-lilac/20 rounded-full w-fit mb-4">
              <Calendar className="w-6 h-6 text-lilac" />
            </div>
            <h3 className="text-xl font-semibold mb-2">In-Person Meetups</h3>
            <p className="text-foreground/70 mb-6">
              Traditional in-office therapy sessions at partner locations.
            </p>
            <p className="text-green font-semibold">From $85 per session</p>
          </div>
        </motion.div>

        <motion.h2 
          className="text-2xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Available Therapists
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {therapists.map((therapist, index) => (
            <motion.div
              key={therapist.id}
              className="healer-card overflow-hidden hover-lift"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index + 0.3 }}
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
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link 
            to="/services" 
            className="inline-flex items-center text-green font-medium hover:underline"
          >
            View all our therapy services <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Connect;
