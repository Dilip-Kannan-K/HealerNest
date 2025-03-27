
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Calendar, Clock, Users, Video, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent,
  CardFooter,
  CardDescription
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const WebinarSessions = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const webinars = [
    {
      id: 1,
      title: "Managing Anxiety in Uncertain Times",
      date: "June 15, 2023",
      time: "2:00 PM - 3:30 PM EST",
      speaker: "Dr. Sarah Johnson",
      category: "anxiety",
      seats: 48,
      totalSeats: 100,
      description: "Learn practical techniques to manage anxiety and build resilience during uncertain times.",
    },
    {
      id: 2,
      title: "Mindfulness for Busy Professionals",
      date: "June 18, 2023",
      time: "12:00 PM - 1:00 PM EST",
      speaker: "Dr. Michael Chen",
      category: "mindfulness",
      seats: 25,
      totalSeats: 75,
      description: "Quick and effective mindfulness practices that can be integrated into your busy workday.",
    },
    {
      id: 3,
      title: "Healing from Relationship Trauma",
      date: "June 22, 2023",
      time: "6:00 PM - 7:30 PM EST",
      speaker: "Lisa Martinez, LMFT",
      category: "relationships",
      seats: 32,
      totalSeats: 60,
      description: "Understanding relationship patterns and pathways to healing from past relationship trauma.",
    },
    {
      id: 4,
      title: "Sleep Hygiene and Mental Health",
      date: "June 25, 2023",
      time: "5:00 PM - 6:30 PM EST",
      speaker: "Dr. James Williams",
      category: "wellness",
      seats: 51,
      totalSeats: 80,
      description: "The connection between quality sleep and mental wellbeing, with actionable steps to improve your sleep.",
    },
    {
      id: 5,
      title: "Parenting Through Challenging Behaviors",
      date: "June 29, 2023",
      time: "7:00 PM - 8:30 PM EST",
      speaker: "Dr. Emily Rodriguez",
      category: "parenting",
      seats: 15,
      totalSeats: 50,
      description: "Strategies for parents to navigate challenging behaviors in children and strengthen family connections.",
    },
    {
      id: 6,
      title: "Digital Detox: Finding Balance with Technology",
      date: "July 2, 2023",
      time: "1:00 PM - 2:00 PM EST",
      speaker: "Alex Thompson, LCSW",
      category: "wellness",
      seats: 65,
      totalSeats: 120,
      description: "Creating a healthier relationship with technology and social media for improved mental wellbeing.",
    }
  ];

  const filteredWebinars = selectedCategory === "all" 
    ? webinars 
    : webinars.filter(webinar => webinar.category === selectedCategory);

  const handleRegister = (webinarId: number) => {
    console.log(`Registered for webinar ID: ${webinarId}`);
    // In a real app, you would handle the registration process here
  };

  return (
    <motion.div
      className="mb-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold mb-3">Webinar Sessions</h2>
          <p className="text-foreground/70 max-w-2xl">
            Join our interactive webinars led by expert speakers on various mental health topics. 
            Learn, engage and grow from anywhere in the world.
          </p>
        </div>
      </div>

      <Tabs defaultValue="all" value={selectedCategory} onValueChange={setSelectedCategory} className="w-fit mb-6">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Topics</TabsTrigger>
          <TabsTrigger value="anxiety">Anxiety</TabsTrigger>
          <TabsTrigger value="mindfulness">Mindfulness</TabsTrigger>
          <TabsTrigger value="relationships">Relationships</TabsTrigger>
          <TabsTrigger value="wellness">Wellness</TabsTrigger>
          <TabsTrigger value="parenting">Parenting</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWebinars.map((webinar) => (
          <Card key={webinar.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 border border-foreground/10">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <Badge variant="outline" className="bg-green/10 text-green border-green mb-2 hover:bg-green/20">
                  {webinar.category.charAt(0).toUpperCase() + webinar.category.slice(1)}
                </Badge>
                <Badge variant="outline" className="bg-lilac/10 text-foreground border-lilac">
                  <Users className="w-3 h-3 mr-1" />
                  {webinar.seats} seats left
                </Badge>
              </div>
              <CardTitle className="text-xl">{webinar.title}</CardTitle>
              <CardDescription className="mt-2">{webinar.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 pb-4">
              <div className="flex items-center text-sm">
                <Calendar className="w-4 h-4 mr-2 text-green" />
                {webinar.date}
              </div>
              <div className="flex items-center text-sm">
                <Clock className="w-4 h-4 mr-2 text-green" />
                {webinar.time}
              </div>
              <div className="flex items-center text-sm">
                <Users className="w-4 h-4 mr-2 text-green" />
                {webinar.speaker}
              </div>
              <div className="w-full bg-foreground/10 rounded-full h-2 mt-1">
                <div 
                  className="bg-green h-2 rounded-full" 
                  style={{ width: `${(webinar.seats / webinar.totalSeats) * 100}%` }}
                ></div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-green hover:bg-green/90 text-white"
                onClick={() => handleRegister(webinar.id)}
              >
                <Video className="w-4 h-4 mr-1" />
                Register for Webinar
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-foreground/70">
          All webinars are recorded and available for replay to registered participants. 
          <a href="#" className="text-green ml-1 inline-flex items-center">
            View past webinars <ExternalLink className="w-3 h-3 ml-1" />
          </a>
        </p>
      </div>
    </motion.div>
  );
};

export default WebinarSessions;
