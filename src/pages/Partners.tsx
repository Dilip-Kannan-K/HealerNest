
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building, Users, Award, GraduationCap, ArrowRight, ChevronRight } from "lucide-react";

const Partners = () => {
  const partners = [
    {
      id: 1,
      name: "Mindful Health Institute",
      description: "Leading research center focused on mindfulness-based therapies and mental health interventions.",
      logo: <Building className="w-16 h-16 text-green" />,
      type: "Research Institute"
    },
    {
      id: 2,
      name: "Wellness Alliance Network",
      description: "Global network of mental health professionals dedicated to accessible and affordable care.",
      logo: <Users className="w-16 h-16 text-green" />,
      type: "Professional Network"
    },
    {
      id: 3,
      name: "Healing Hearts Foundation",
      description: "Non-profit organization providing mental health support to underserved communities.",
      logo: <Award className="w-16 h-16 text-green" />,
      type: "Non-Profit Organization"
    },
    {
      id: 4,
      name: "Cognitive Health University",
      description: "Leading academic institution specialized in psychology and mental health education.",
      logo: <GraduationCap className="w-16 h-16 text-green" />,
      type: "Academic Institution"
    }
  ];

  const benefits = [
    {
      title: "Access to Expertise",
      description: "Tap into a diverse network of specialists across various therapeutic approaches and mental health specialties."
    },
    {
      title: "Research-Backed Resources",
      description: "Utilize the latest evidence-based techniques and resources developed by our academic partners."
    },
    {
      title: "Continuous Education",
      description: "Benefit from ongoing training and professional development opportunities for our therapists."
    },
    {
      title: "Community Outreach",
      description: "Join forces with our non-profit partners to extend mental health support to underserved communities."
    }
  ];

  const testimonials = [
    {
      quote: "Our partnership with HealerNest has allowed us to translate our research into practical applications that directly benefit clients. Together, we're bridging the gap between science and real-world mental health support.",
      author: "Dr. James Miller",
      role: "Director, Mindful Health Institute"
    },
    {
      quote: "The collaborative approach that HealerNest brings to our network has enhanced the quality of care we can provide. Their technology platform combined with our clinical expertise creates a powerful healing environment.",
      author: "Sarah Thompson",
      role: "President, Wellness Alliance Network"
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Trusted Partners</h1>
          <p className="text-foreground/70 text-lg">
            We collaborate with leading institutions and organizations to bring you the highest quality mental health resources and support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              className="healer-card p-8 flex flex-col md:flex-row items-start gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="p-4 bg-lilac/10 rounded-xl">
                {partner.logo}
              </div>
              <div>
                <div className="mb-2">
                  <span className="px-3 py-1 bg-green/10 text-green text-xs font-medium rounded-full">
                    {partner.type}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{partner.name}</h3>
                <p className="text-foreground/70 mb-4">{partner.description}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-green font-medium hover:underline"
                >
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="bg-gradient-to-r from-lilac/30 to-green/30 rounded-3xl p-10 md:p-16 mb-16 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-green/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-lilac/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">How Our Partnerships Benefit You</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white/30">
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-foreground/70">{benefit.description}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Link 
                to="/connect" 
                className="primary-button inline-flex items-center"
              >
                Connect With a Therapist <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Partner Testimonials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="healer-card p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
              >
                <div className="text-3xl text-lilac mb-4">"</div>
                <p className="text-foreground/80 italic mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green/20 flex items-center justify-center mr-3">
                    <span className="font-bold text-green">{testimonial.author.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-foreground/60">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="bg-white/70 backdrop-blur-md border border-lilac/30 rounded-3xl p-10 md:p-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Become a HealerNest Partner</h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-3xl mx-auto">
            Are you a mental health organization, academic institution, or wellness provider interested in partnering with HealerNest? We're always looking to expand our network of trusted collaborators.
          </p>
          <Link 
            to="#" 
            className="primary-button inline-flex items-center"
          >
            Explore Partnership Opportunities <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Partners;
