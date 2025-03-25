
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Users, Lightbulb, BookOpen, CalendarDays, Headphones, ChevronRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Individual Therapy",
      description: "One-on-one sessions tailored to your personal needs and growth journey. Our licensed therapists create a safe space for you to explore emotions, overcome challenges, and develop healthy coping strategies.",
      icon: <Heart className="w-12 h-12 text-green" />,
      price: "From $65 per session",
      features: [
        "Personalized treatment plans",
        "Flexible scheduling options",
        "Choice of therapist specializations",
        "Available in-person or virtual"
      ]
    },
    {
      id: 2,
      title: "Couple Therapy",
      description: "Strengthen your relationship with guided sessions for both partners. Our relationship experts help couples improve communication, resolve conflicts, and deepen their connection.",
      icon: <Users className="w-12 h-12 text-green" />,
      price: "From $85 per session",
      features: [
        "Joint and individual sessions",
        "Evidence-based relationship techniques",
        "Conflict resolution strategies",
        "Pre-marital counseling available"
      ]
    },
    {
      id: 3,
      title: "Teen Therapy",
      description: "Specialized support for adolescents facing unique challenges. Our youth counselors create an engaging and non-judgmental environment where teens can express themselves and develop resilience.",
      icon: <Lightbulb className="w-12 h-12 text-green" />,
      price: "From $60 per session",
      features: [
        "Age-appropriate therapeutic techniques",
        "Parent consultation sessions",
        "Academic and social support",
        "Digital-friendly approaches"
      ]
    },
    {
      id: 4,
      title: "Group Therapy",
      description: "Connect with others on similar healing journeys in a supportive group setting. Share experiences, gain insights, and build a community of mutual support under professional guidance.",
      icon: <Users className="w-12 h-12 text-green" />,
      price: "From $40 per session",
      features: [
        "Topic-focused groups",
        "Maximum 8 participants per group",
        "Weekly or bi-weekly sessions",
        "Mix of structured activities and open discussion"
      ]
    },
    {
      id: 5,
      title: "Workshops & Webinars",
      description: "Educational sessions on mental health topics led by experts in the field. Learn practical skills and deepen your understanding of mental wellness in an interactive group format.",
      icon: <BookOpen className="w-12 h-12 text-green" />,
      price: "From $25 per workshop",
      features: [
        "Live Q&A with mental health experts",
        "Take-home resources and exercises",
        "Certificate of completion",
        "Access to recording for 30 days"
      ]
    },
    {
      id: 6,
      title: "Guided Audio Sessions",
      description: "Therapeutic audio content for meditation, relaxation, and skill-building. Perfect for incorporating mental wellness practices into your daily routine on your own schedule.",
      icon: <Headphones className="w-12 h-12 text-green" />,
      price: "From $10 per month",
      features: [
        "Library of 100+ guided sessions",
        "New content added weekly",
        "Downloadable for offline use",
        "Categories for sleep, anxiety, focus, and more"
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-foreground/70 text-lg">
            Discover the perfect support system for your unique journey to wellness and personal growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="healer-card overflow-hidden hover-lift"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="p-8">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-foreground/70 mb-6">{service.description}</p>
                <p className="font-semibold text-green mb-6">{service.price}</p>
                
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <ChevronRight className="w-4 h-4 text-green mt-1 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/connect" 
                  className="block w-full py-3 text-center rounded-full bg-green text-foreground font-medium hover:bg-green/90 transition-all duration-300"
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-20 bg-lilac/10 rounded-3xl p-10 md:p-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Not sure which service is right for you?</h2>
              <p className="text-foreground/70 text-lg mb-6">
                Schedule a free 15-minute consultation with one of our care coordinators to get personalized recommendations.
              </p>
              <Link 
                to="/connect" 
                className="inline-flex items-center primary-button"
              >
                Request Free Consultation
              </Link>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <CalendarDays className="w-24 h-24 text-lilac/50" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
