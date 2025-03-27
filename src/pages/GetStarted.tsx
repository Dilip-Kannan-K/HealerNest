
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Clock, Users, BookOpen, Heart } from "lucide-react";

const GetStarted = () => {
  const steps = [
    {
      id: 1,
      title: "Create Your Account",
      description: "Sign up for an account to access all of our services and personalized recommendations.",
      icon: <Users className="w-12 h-12 text-green" />,
      time: "2 minutes",
      link: "/register"
    },
    {
      id: 2,
      title: "Complete Assessment",
      description: "Take our quick assessment to help us understand your needs and match you with the right resources.",
      icon: <BookOpen className="w-12 h-12 text-green" />,
      time: "5 minutes",
      link: "#assessment"
    },
    {
      id: 3,
      title: "Browse Available Services",
      description: "Explore our range of services including therapy sessions, workshops, and self-help resources.",
      icon: <Heart className="w-12 h-12 text-green" />,
      time: "Any time",
      link: "/services"
    },
    {
      id: 4,
      title: "Book Your First Session",
      description: "Schedule your first session with one of our qualified therapists or join an upcoming workshop.",
      icon: <Clock className="w-12 h-12 text-green" />,
      time: "3 minutes",
      link: "/connect"
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Get Started with HealerNest</h1>
          <p className="text-foreground/70 text-lg">
            Your journey to better mental health and personal growth starts here. Follow these simple steps to begin.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="healer-card p-8 mb-8 hover-lift"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="mb-6 md:mb-0 md:mr-8">{step.icon}</div>
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <div className="flex items-center text-sm text-foreground/60 mt-2 md:mt-0">
                      <Clock className="w-4 h-4 mr-1" />
                      {step.time}
                    </div>
                  </div>
                  <p className="text-foreground/70 mb-6">{step.description}</p>
                  <Link 
                    to={step.link}
                    className="inline-flex items-center text-green font-medium hover:underline"
                  >
                    Continue <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link 
            to="/connect" 
            className="primary-button inline-flex items-center"
          >
            Book Your First Session <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </motion.div>

        <motion.div 
          className="mt-20 bg-lilac/10 rounded-3xl p-10 md:p-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Need help getting started?</h2>
              <p className="text-foreground/70 text-lg mb-6">
                Schedule a free 15-minute consultation with one of our care coordinators who can guide you through the process.
              </p>
              <Link 
                to="/connect" 
                className="inline-flex items-center primary-button"
              >
                Request Free Consultation
              </Link>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <Users className="w-24 h-24 text-lilac/50" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GetStarted;
