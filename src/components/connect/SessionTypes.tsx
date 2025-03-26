
import { motion } from "framer-motion";
import { MessageCircle, Video, Calendar, CheckCircle } from "lucide-react";

const SessionTypes = () => {
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
  );
};

export default SessionTypes;
