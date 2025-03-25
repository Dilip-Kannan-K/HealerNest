
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Clock, Heart, Users, Lightbulb, BookOpen, CalendarDays, Headphones } from "lucide-react";

const IndexPage = () => {
  const services = [
    {
      title: "Individual Therapy",
      description: "One-on-one sessions tailored to your personal needs and growth journey.",
      icon: <Heart className="w-8 h-8 text-green" />,
      link: "/services"
    },
    {
      title: "Couple Therapy",
      description: "Strengthen your relationship with guided sessions for both partners.",
      icon: <Users className="w-8 h-8 text-green" />,
      link: "/services"
    },
    {
      title: "Teen Therapy",
      description: "Specialized support for adolescents facing unique challenges.",
      icon: <Lightbulb className="w-8 h-8 text-green" />,
      link: "/services"
    }
  ];

  const features = [
    {
      title: "Expert Therapists",
      description: "Connect with licensed professionals specialized in various therapeutic approaches.",
      icon: <BookOpen className="w-6 h-6 text-lilac" />
    },
    {
      title: "Flexible Sessions",
      description: "Choose between chat, video calls, or in-person meetings based on your comfort.",
      icon: <CalendarDays className="w-6 h-6 text-lilac" />
    },
    {
      title: "24/7 Support",
      description: "Access resources and emergency support whenever you need it.",
      icon: <Clock className="w-6 h-6 text-lilac" />
    },
    {
      title: "Audio Sessions",
      description: "Guided meditations and therapeutic audio content for your healing journey.",
      icon: <Headphones className="w-6 h-6 text-lilac" />
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="pt-28 pb-16">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-lilac/10 to-transparent -z-10"></div>
        <div className="container mx-auto px-6 md:px-12 py-12 md:py-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Your <span className="text-green">nest</span> to rest,<br />
                <span className="text-lilac">heal</span>, and grow
              </motion.h1>
              <motion.p 
                className="text-lg text-foreground/80 mb-8 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                Begin your journey to emotional wellness with our caring community of therapists and healers. At HealerNest, we create a safe space for you to explore, heal, and thrive.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <Link 
                  to="/get-started"
                  className="primary-button flex items-center justify-center sm:justify-start"
                >
                  Begin Your Journey <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link 
                  to="/connect"
                  className="outline-button flex items-center justify-center sm:justify-start"
                >
                  Meet Our Therapists
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1518495973542-4542c06a5843" 
                  alt="Peaceful nature scene" 
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                  <p className="text-xl font-semibold">Your journey to peace begins here</p>
                </div>
              </div>
              
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-green/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-lilac/20 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-foreground/70 max-w-xl mx-auto">
              Discover the perfect support system for your unique journey to wellness and personal growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="healer-card service-card p-8 flex flex-col h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-foreground/70 mb-6 flex-grow">{service.description}</p>
                <Link 
                  to={service.link} 
                  className="inline-flex items-center text-green font-medium hover:underline mt-auto"
                >
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Banner */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-lilac/20 -z-10"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="rounded-3xl overflow-hidden shadow-xl relative">
            <img 
              src="https://images.unsplash.com/photo-1501854140801-50d01698950b" 
              alt="Peaceful landscape" 
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/40 to-transparent flex items-center">
              <div className="p-12 md:p-20 max-w-xl">
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold text-white mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  Your journey to peace begins here
                </motion.h2>
                <motion.p 
                  className="text-white/90 mb-8 text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  We provide a nurturing environment where healing happens naturally. Let us guide you on your path to wellness.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Link 
                    to="/get-started" 
                    className="primary-button inline-flex items-center"
                  >
                    Start Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose HealerNest?</h2>
            <p className="text-foreground/70 max-w-xl mx-auto">
              We combine expertise, compassion, and technology to provide you with the best healing experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-lilac/20 shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-3 bg-lilac/10 rounded-full w-fit mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            className="bg-gradient-to-r from-lilac/30 to-green/30 rounded-3xl p-12 md:p-16 text-center shadow-lg overflow-hidden relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-green/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-lilac/20 rounded-full blur-3xl"></div>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Ready to begin your healing journey?
            </motion.h2>
            <motion.p 
              className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Join thousands of individuals who have found peace, growth, and healing with HealerNest. Your journey begins with a single step.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative z-10"
            >
              <Link 
                to="/get-started" 
                className="primary-button inline-flex items-center"
              >
                Get Started Today <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IndexPage;
