import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Heart, Users, Lightbulb, BookOpen, CalendarDays, Headphones, ChevronRight, Check } from "lucide-react";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

const Services = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  // State for subscription plan selection
  const [selectedPlan, setSelectedPlan] = useState("basic");
  const [selectedDuration, setSelectedDuration] = useState("1 month");
  
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

  const subscriptionPlans = [
    {
      id: "basic",
      name: "Essential Healing",
      sessions: 2,
      description: "Two therapy sessions per month with a dedicated therapist.",
      features: [
        "Choose from our network of therapists",
        "Messaging between sessions",
        "Self-guided resources library",
        "Therapy notes and progress tracking"
      ],
      pricing: [
        { duration: "1 month", price: "$120", discount: null, numericPrice: 120 },
        { duration: "3 months", price: "$340", discount: "5%", numericPrice: 340 },
        { duration: "6 months", price: "$650", discount: "10%", numericPrice: 650 },
        { duration: "Annual", price: "$1,200", discount: "15%", numericPrice: 1200 }
      ]
    },
    {
      id: "premium",
      name: "Premium Healing",
      sessions: 4,
      description: "Four therapy sessions per month for comprehensive support.",
      features: [
        "Priority scheduling with top therapists",
        "Unlimited messaging support",
        "Personalized wellness plan",
        "Monthly progress review",
        "Crisis support access"
      ],
      pricing: [
        { duration: "1 month", price: "$220", discount: null, numericPrice: 220 },
        { duration: "3 months", price: "$620", discount: "6%", numericPrice: 620 },
        { duration: "6 months", price: "$1,180", discount: "11%", numericPrice: 1180 },
        { duration: "Annual", price: "$2,200", discount: "17%", numericPrice: 2200 }
      ]
    }
  ];
  
  // Helper function to get current pricing
  const getCurrentPricing = () => {
    const plan = subscriptionPlans.find(p => p.id === selectedPlan);
    if (!plan) return null;
    
    return plan.pricing.find(p => p.duration === selectedDuration);
  };
  
  // Handle subscription selection
  const handleChoosePlan = () => {
    const currentPlan = subscriptionPlans.find(p => p.id === selectedPlan);
    const currentPricing = getCurrentPricing();
    
    if (!currentPlan || !currentPricing) return;
    
    if (isAuthenticated && user?.subscription?.status === "Active") {
      // Show warning toast if user already has active subscription
      toast.warning("You already have an active subscription. Please manage your subscription from your profile page.", {
        duration: 5000,
        action: {
          label: "View Profile",
          onClick: () => navigate("/profile")
        }
      });
    } else {
      // Proceed to checkout
      navigate("/checkout", {
        state: {
          item: {
            type: 'subscription',
            title: currentPlan.name,
            price: currentPricing.numericPrice,
            duration: currentPricing.duration,
            description: currentPlan.description
          }
        }
      });
    }
  };
  
  // Handle service booking
  const handleBookService = (service) => {
    navigate("/checkout", {
      state: {
        item: {
          type: 'service',
          title: service.title,
          price: parseInt(service.price.match(/\d+/)[0]), // Extract number from price string
          description: service.description
        }
      }
    });
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-foreground/70 text-lg">
            Discover the perfect support system for your unique journey to wellness and personal growth.
          </p>
        </motion.div>

        {/* Subscription Plans Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Subscription Plans</h2>
          <p className="text-foreground/70 text-lg mb-10 text-center max-w-3xl mx-auto">
            Choose a plan that fits your needs with flexible duration options and save with longer commitments.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {subscriptionPlans.map((plan) => (
              <motion.div
                key={plan.id}
                className={`healer-card overflow-hidden hover-lift ${selectedPlan === plan.id ? 'border-2 border-green' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                onClick={() => setSelectedPlan(plan.id)}
              >
                <div className="p-8">
                  <div className="bg-lilac/20 rounded-full w-fit px-4 py-2 mb-4">
                    <span className="text-lilac font-medium">{plan.sessions} Sessions/Month</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>
                  <p className="text-foreground/70 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Plan includes:</h4>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="w-5 h-5 text-green mt-0.5 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Duration selection and plan selection button */}
          <div className="max-w-md mx-auto">
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Choose your commitment:</label>
              <Select
                value={selectedDuration}
                onValueChange={setSelectedDuration}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1 month">1 month</SelectItem>
                  <SelectItem value="3 months">3 months (Save 5-6%)</SelectItem>
                  <SelectItem value="6 months">6 months (Save 10-11%)</SelectItem>
                  <SelectItem value="Annual">Annual (Save 15-17%)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="mb-6 p-4 bg-green/10 rounded-lg text-center">
              <p className="text-lg font-bold text-green">
                {getCurrentPricing()?.price}
                <span className="text-sm font-normal text-foreground/70"> for {selectedDuration}</span>
              </p>
              {getCurrentPricing()?.discount && (
                <p className="text-sm text-green mt-1">You save {getCurrentPricing()?.discount}</p>
              )}
            </div>
            
            <Button 
              className="w-full bg-green hover:bg-green/90 text-white font-medium py-6"
              onClick={handleChoosePlan}
            >
              Choose This Plan
            </Button>
          </div>
        </motion.div>

        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Individual Services</h2>

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
                
                <Button 
                  className="w-full py-3 text-center rounded-full bg-green text-foreground font-medium hover:bg-green/90 transition-all duration-300"
                  onClick={() => handleBookService(service)}
                >
                  Book Now
                </Button>
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
