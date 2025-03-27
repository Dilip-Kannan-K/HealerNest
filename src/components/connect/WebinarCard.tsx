
import React from 'react';
import { Calendar, Clock, Users, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent,
  CardFooter,
  CardDescription
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface WebinarData {
  id: number;
  title: string;
  date: string;
  time: string;
  speaker: string;
  category: string;
  seats: number;
  totalSeats: number;
  description: string;
}

interface WebinarCardProps {
  webinar: WebinarData;
  onRegister: (webinarId: number) => void;
}

const WebinarCard: React.FC<WebinarCardProps> = ({ webinar, onRegister }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border border-foreground/10">
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
          onClick={() => onRegister(webinar.id)}
        >
          <Video className="w-4 h-4 mr-1" />
          Register for Webinar
        </Button>
      </CardFooter>
    </Card>
  );
};

export default WebinarCard;
