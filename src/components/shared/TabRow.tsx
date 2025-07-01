import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface TabRowProps {
  tabs?: string[];
  defaultActiveTab?: string;
  onTabChange?: (tab: string) => void;
  className?: string;
}

export default function TabRow({
  tabs = ['All', 'News', 'Learn'],
  defaultActiveTab = 'All',
  onTabChange,
  className = ''
}: TabRowProps) {
  return (
    <Tabs 
      defaultValue={defaultActiveTab.toLowerCase()} 
      onValueChange={(value) => {
        const tab = tabs.find(t => t.toLowerCase() === value) || defaultActiveTab;
        onTabChange?.(tab);
      }}
      className={className}
    >
      <TabsList className="grid w-full grid-cols-3">
        {tabs.map((tab) => (
          <TabsTrigger 
            key={tab} 
            value={tab.toLowerCase()}
            className="capitalize"
          >
            {tab}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
} 