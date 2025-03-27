
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Calendar, Clock, Users, Video, ExternalLink } from "lucide-react";
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableRow, 
  TableHead, 
  TableCell 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent 
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

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

      <Card className="border border-foreground/10 shadow-md">
        <CardHeader className="bg-foreground/5 border-b border-foreground/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <CardTitle>Upcoming Webinars</CardTitle>
            <Tabs defaultValue="all" value={selectedCategory} onValueChange={setSelectedCategory}>
              <TabsList>
                <TabsTrigger value="all">All Topics</TabsTrigger>
                <TabsTrigger value="anxiety">Anxiety</TabsTrigger>
                <TabsTrigger value="mindfulness">Mindfulness</TabsTrigger>
                <TabsTrigger value="relationships">Relationships</TabsTrigger>
                <TabsTrigger value="wellness">Wellness</TabsTrigger>
                <TabsTrigger value="parenting">Parenting</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Webinar</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Speaker</TableHead>
                <TableHead>Availability</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredWebinars.map((webinar) => (
                <TableRow key={webinar.id}>
                  <TableCell className="font-medium">
                    <div>
                      <p className="font-semibold">{webinar.title}</p>
                      <p className="text-sm text-foreground/70 mt-1">{webinar.description}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-green" />
                      {webinar.date}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-green" />
                      {webinar.time}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-green" />
                      {webinar.speaker}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="text-sm">
                        {webinar.seats} of {webinar.totalSeats} seats available
                      </div>
                      <div className="w-full bg-foreground/10 rounded-full h-2 mt-1">
                        <div 
                          className="bg-green h-2 rounded-full" 
                          style={{ width: `${(webinar.seats / webinar.totalSeats) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button 
                      size="sm" 
                      className="bg-green hover:bg-green/90 text-white"
                      onClick={() => handleRegister(webinar.id)}
                    >
                      <Video className="w-4 h-4 mr-1" />
                      Register
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

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
