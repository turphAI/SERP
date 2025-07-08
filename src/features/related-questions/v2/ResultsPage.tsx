'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '@/components/core/Layout';
import BasicInput from '@/components/shared/BasicInput';
import TabRow from '@/components/shared/TabRow';
import SearchResult from '@/components/shared/SearchResult';
import BestMatchResult from '@/components/shared/BestMatchResult';
import RelatedQuestionListBranded from './RelatedQuestionListBranded';
import ChatbotModal from '@/components/shared/ChatbotModal';


interface ResultsPageProps {
  searchQuery: string;
}

export default function ResultsPage({ searchQuery }: ResultsPageProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('All');
  const [showChatbot, setShowChatbot] = useState(false);

  const handleNewSearch = (query: string) => {
    router.push(`/related-questions/v2/results?q=${encodeURIComponent(query)}`);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // In a real app, this would trigger a new search with the selected tab filter
    console.log(`Tab changed to: ${tab}`);
  };

  const handleQuestionClick = (question: string) => {
    router.push(`/related-questions/v2/results?q=${encodeURIComponent(question)}`);
  };

  const handleChatbotClose = () => {
    setShowChatbot(false);
  };




  const searchResults = [
    {
      id: 1,
      title: "Advanced JavaScript Programming Techniques",
      assetType: "Article" as const,
      snippet: "Master advanced JavaScript concepts including closures, prototypes, async/await, and modern ES6+ features for professional development."
    },
    {
      id: 2, 
      title: "Employee Onboarding Form",
      assetType: "Form" as const,
      snippet: "Complete new employee registration form including personal details, department assignment, and system access requests."
    },
    {
      id: 3,
      title: "Complete Guide to DevOps Implementation",
      assetType: "Guide" as const,
      snippet: "Step-by-step guide to implementing DevOps practices including CI/CD pipelines, containerization, and monitoring strategies."
    },
    {
      id: 4,
      title: "Python Data Structures Challenge",
      assetType: "Learning Challenge" as const,
      snippet: "Interactive coding challenge focusing on implementing and optimizing data structures like trees, graphs, and hash tables in Python."
    },
    {
      id: 5,
      title: "Microservices Architecture Diagram",
      assetType: "Infographic" as const,
      snippet: "Visual breakdown of microservices architecture showing service communication, data flow, and deployment patterns."
    },
    {
      id: 6,
      title: "API Security Best Practices",
      assetType: "Page" as const,
      snippet: "Comprehensive documentation covering API security measures including authentication, rate limiting, and vulnerability prevention."
    },
    {
      id: 7,
      title: "React State Management Deep Dive",
      assetType: "Video" as const,
      snippet: "90-minute video tutorial exploring Redux, Context API, and Zustand for managing complex application state in React."
    },
    {
      id: 8,
      title: "Agile Project Management Workshop",
      assetType: "Webinar" as const,
      snippet: "Live workshop covering agile methodologies, sprint planning, and team collaboration techniques for successful project delivery."
    },
    {
      id: 9,
      title: "Code Quality Assistant",
      assetType: "Assistant" as const,
      snippet: "AI-powered tool that analyzes code quality, suggests refactoring opportunities, and ensures adherence to coding standards."
    },
    {
      id: 10,
      title: "Understanding Design Patterns",
      assetType: "Article" as const,
      snippet: "Comprehensive article explaining common design patterns including Singleton, Observer, and Factory patterns with practical examples."
    },
    {
      id: 11,
      title: "Project Budget Request Form",
      assetType: "Form" as const,
      snippet: "Submit detailed budget requests for new projects including resource allocation, timeline, and cost justification."
    },
    {
      id: 12,
      title: "Mobile App Development Guide",
      assetType: "Guide" as const,
      snippet: "Complete guide to mobile app development covering native, hybrid, and cross-platform approaches with React Native and Flutter."
    },
    {
      id: 13,
      title: "Algorithm Optimization Challenge",
      assetType: "Learning Challenge" as const,
      snippet: "Advanced challenge focusing on algorithm optimization techniques including time complexity analysis and space efficiency."
    },
    {
      id: 14,
      title: "Cloud Migration Strategy Flowchart",
      assetType: "Infographic" as const,
      snippet: "Decision tree and process flow for migrating legacy applications to cloud infrastructure with risk assessment."
    },
    {
      id: 15,
      title: "Database Performance Tuning",
      assetType: "Page" as const,
      snippet: "Technical documentation for optimizing database performance including indexing strategies, query optimization, and caching."
    },
    {
      id: 16,
      title: "Kubernetes Container Orchestration",
      assetType: "Video" as const,
      snippet: "Comprehensive video series covering Kubernetes fundamentals, deployment strategies, and production management techniques."
    },
    {
      id: 17,
      title: "Digital Transformation Strategies",
      assetType: "Webinar" as const,
      snippet: "Expert panel discussion on digital transformation strategies for enterprises including technology adoption and change management."
    },
    {
      id: 18,
      title: "Test Automation Assistant",
      assetType: "Assistant" as const,
      snippet: "Intelligent assistant that generates automated test cases, identifies test gaps, and optimizes testing workflows."
    },
    {
      id: 19,
      title: "Web Performance Optimization",
      assetType: "Article" as const,
      snippet: "In-depth article covering web performance optimization techniques including lazy loading, code splitting, and CDN implementation."
    },
    {
      id: 20,
      title: "Time Off Request Form",
      assetType: "Form" as const,
      snippet: "Employee vacation and leave request form with approval workflow and calendar integration for team scheduling."
    },
    {
      id: 21,
      title: "Machine Learning Implementation Guide",
      assetType: "Guide" as const,
      snippet: "Practical guide to implementing machine learning solutions including data preprocessing, model selection, and deployment."
    },
    {
      id: 22,
      title: "Frontend Framework Comparison Challenge",
      assetType: "Learning Challenge" as const,
      snippet: "Hands-on challenge comparing React, Vue, and Angular by building the same application in each framework."
    },
    {
      id: 23,
      title: "Software Development Lifecycle Overview",
      assetType: "Infographic" as const,
      snippet: "Visual representation of the complete SDLC process from requirements gathering to maintenance and support."
    },
    {
      id: 24,
      title: "Version Control Best Practices",
      assetType: "Page" as const,
      snippet: "Guidelines for effective version control using Git including branching strategies, commit conventions, and collaboration workflows."
    },
    {
      id: 25,
      title: "Cybersecurity Fundamentals",
      assetType: "Video" as const,
      snippet: "Essential cybersecurity training covering threat identification, risk assessment, and security protocol implementation."
    }
  ];

  // Helper functions to split results with edge case handling
  const bestMatchResult = searchResults.length > 0 ? searchResults[0] : null;
  const remainingResults = searchResults.length > 1 ? searchResults.slice(1) : [];

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

        {/* Page heading */}
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Search Results</h1>
          <p className="text-sm text-gray-600">
            Search results for: <span className="font-medium">&ldquo;{searchQuery}&rdquo;</span> in <span className="font-medium">{activeTab}</span>
          </p>
        </div>

        {/* Tab Row */}
        <div className="mb-6">
          <TabRow onTabChange={handleTabChange} />
        </div>

        {/* Best Match Result - Only show if we have results */}
        {bestMatchResult && (
          <div className="mb-6">
            <BestMatchResult
              id={bestMatchResult.id}
              title={bestMatchResult.title}
              assetType={bestMatchResult.assetType}
              snippet={bestMatchResult.snippet}
            />
          </div>
        )}

        {/* Related Questions */}
        <div className="mb-6">
          <RelatedQuestionListBranded onQuestionClick={handleQuestionClick} />
        </div>

        {/* Regular search results */}
        {remainingResults.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">Site assets</h2>
            {remainingResults.map((result) => (
              <SearchResult
                key={result.id}
                id={result.id}
                title={result.title}
                assetType={result.assetType}
                snippet={result.snippet}
              />
            ))}
          </div>
        )}
      </div>

      {/* Chatbot Modal */}
      <ChatbotModal isOpen={showChatbot} onClose={handleChatbotClose} />
    </Layout>
  );
} 