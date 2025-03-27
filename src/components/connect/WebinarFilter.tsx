
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface WebinarFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const WebinarFilter: React.FC<WebinarFilterProps> = ({ 
  selectedCategory, 
  onCategoryChange 
}) => {
  return (
    <Tabs 
      defaultValue="all" 
      value={selectedCategory} 
      onValueChange={onCategoryChange} 
      className="w-fit mb-6"
    >
      <TabsList className="mb-4">
        <TabsTrigger value="all">All Topics</TabsTrigger>
        <TabsTrigger value="anxiety">Anxiety</TabsTrigger>
        <TabsTrigger value="mindfulness">Mindfulness</TabsTrigger>
        <TabsTrigger value="relationships">Relationships</TabsTrigger>
        <TabsTrigger value="wellness">Wellness</TabsTrigger>
        <TabsTrigger value="parenting">Parenting</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default WebinarFilter;
