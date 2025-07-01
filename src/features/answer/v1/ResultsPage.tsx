'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '@/components/core/Layout';
import BasicInput from '@/components/shared/BasicInput';
import TabRow from '@/components/shared/TabRow';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ResultsPageProps {
  searchQuery: string;
}

export default function ResultsPage({ searchQuery }: ResultsPageProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('All');

  const handleNewSearch = (query: string) => {
    router.push(`/answer/v1/results?q=${encodeURIComponent(query)}`);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // In a real app, this would trigger a new search with the selected tab filter
    console.log(`Tab changed to: ${tab}`);
  };

  // Mock data - this will be replaced with real data later
  const answerCard = {
    title: "What is React?",
    answer: "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies.",
    confidence: "High",
    sources: ["Official React Documentation", "MDN Web Docs"]
  };

  const searchResults = [
    {
      id: 1,
      title: "React – A JavaScript library for building user interfaces",
      url: "https://react.dev",
      snippet: "The library for web and native user interfaces. React lets you build user interfaces out of individual pieces called components..."
    },
    {
      id: 2, 
      title: "React (JavaScript library) - Wikipedia",
      url: "https://en.wikipedia.org/wiki/React_(JavaScript_library)",
      snippet: "React is a free and open-source front-end JavaScript library for building user interfaces based on components..."
    }
  ];

  return (
    <Layout variant="results">
      <div className="max-w-4xl mx-auto">
        {/* Search Input at top of results */}
        <div className="mb-4 bg-white rounded-lg shadow p-6">
          <BasicInput
            value={searchQuery}
            placeholder="Search for anything..."
            onSearch={handleNewSearch}
          />
        </div>

        {/* Tab Row outside the card */}
        <div className="mb-6">
          <TabRow onTabChange={handleTabChange} />
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-600">
            Search results for: <span className="font-medium">&ldquo;{searchQuery}&rdquo;</span> in <span className="font-medium">{activeTab}</span>
          </p>
        </div>

        {/* Answer Card - The main feature being tested */}
        <Card className="mb-6 border-blue-200 bg-blue-50">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">{answerCard.title}</CardTitle>
              <Badge variant="secondary">{answerCard.confidence} Confidence</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-800 mb-4">{answerCard.answer}</p>
            <div className="text-sm text-gray-600">
              <span className="font-medium">Sources: </span>
              {answerCard.sources.join(', ')}
            </div>
          </CardContent>
        </Card>

        {/* Regular search results */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Web Results</h2>
          {searchResults.map((result) => (
            <div key={result.id} className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium text-blue-600 hover:underline cursor-pointer">
                {result.title}
              </h3>
              <p className="text-sm text-green-700 mb-1">{result.url}</p>
              <p className="text-gray-600">{result.snippet}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
} 