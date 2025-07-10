'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '@/components/core/Layout';
import BasicInput from '@/components/shared/BasicInput';
import TabRow from '@/components/shared/TabRow';
import SearchResult from '@/components/shared/SearchResult';
import BestMatchResult from '@/components/shared/BestMatchResult';
import RelatedQuestionList from '@/components/shared/RelatedQuestionList';
import ChatbotModal from '@/components/shared/ChatbotModal';


interface ResultsPageProps {
  searchQuery: string;
}

export default function ResultsPage({ searchQuery }: ResultsPageProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('All');
  const [showChatbot, setShowChatbot] = useState(false);

  const handleNewSearch = (query: string) => {
    router.push(`/enhanced-input/v1/results?q=${encodeURIComponent(query)}`);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // In a real app, this would trigger a new search with the selected tab filter
    console.log(`Tab changed to: ${tab}`);
  };

  const handleQuestionClick = () => {
    setShowChatbot(true);
  };

  const handleChatbotClose = () => {
    setShowChatbot(false);
  };




  const searchResults = [
    {
      id: 1,
      title: "401(k) vs 403(b): Understanding Your Retirement Plan Options",
      assetType: "Article" as const,
      snippet: "Comprehensive comparison of employer-sponsored retirement plans including contribution limits, vesting schedules, and investment options to help you make informed decisions."
    },
    {
      id: 2, 
      title: "Retirement Plan Enrollment Form",
      assetType: "Form" as const,
      snippet: "Complete your retirement plan enrollment including beneficiary designation, contribution percentage, and investment allocations for your 401(k) or 403(b) account."
    },
    {
      id: 3,
      title: "Complete Guide to IRA Rollover Strategies",
      assetType: "Guide" as const,
      snippet: "Step-by-step instructions for rolling over your 401(k) to an IRA, including tax implications, timing considerations, and investment options."
    },
    {
      id: 4,
      title: "Retirement Savings Challenge: Catch-Up Contributions",
      assetType: "Learning Challenge" as const,
      snippet: "Interactive financial planning exercise for employees 50+ to maximize catch-up contributions and accelerate retirement savings in the final working years."
    },
    {
      id: 5,
      title: "Social Security Benefits Timeline",
      assetType: "Infographic" as const,
      snippet: "Visual guide showing optimal Social Security claiming strategies by age, including early retirement penalties and delayed retirement credits through age 70."
    },
    {
      id: 6,
      title: "Roth vs Traditional IRA Comparison",
      assetType: "Page" as const,
      snippet: "Detailed comparison of Roth and Traditional IRA features including tax treatment, contribution limits, income restrictions, and withdrawal rules."
    },
    {
      id: 7,
      title: "Retirement Planning for Millennials",
      assetType: "Video" as const,
      snippet: "45-minute educational video covering retirement planning basics for younger workers, including compound interest benefits and early savings strategies."
    },
    {
      id: 8,
      title: "Pre-Retirement Planning Workshop",
      assetType: "Webinar" as const,
      snippet: "Live workshop for employees within 10 years of retirement covering Social Security optimization, healthcare planning, and withdrawal strategies."
    },
    {
      id: 9,
      title: "Retirement Calculator Assistant",
      assetType: "Assistant" as const,
      snippet: "AI-powered retirement planning tool that analyzes your current savings, projects future needs, and recommends contribution adjustments to meet your goals."
    },
    {
      id: 10,
      title: "Target-Date Funds: Set It and Forget It Investing",
      assetType: "Article" as const,
      snippet: "In-depth explanation of target-date funds, including how they automatically adjust asset allocation as you approach retirement and their role in 401(k) plans."
    },
    {
      id: 11,
      title: "Hardship Withdrawal Request Form",
      assetType: "Form" as const,
      snippet: "Submit a hardship withdrawal request from your retirement plan for qualifying financial emergencies, including required documentation and tax implications."
    },
    {
      id: 12,
      title: "Estate Planning for Retirement Accounts",
      assetType: "Guide" as const,
      snippet: "Comprehensive guide to naming beneficiaries, understanding inheritance rules, and minimizing taxes on retirement account transfers to heirs."
    },
    {
      id: 13,
      title: "Asset Allocation Challenge by Age",
      assetType: "Learning Challenge" as const,
      snippet: "Interactive tool to practice optimal asset allocation strategies for different life stages, from aggressive growth in your 20s to conservative preservation near retirement."
    },
    {
      id: 14,
      title: "Retirement Income Sources Breakdown",
      assetType: "Infographic" as const,
      snippet: "Visual representation of the three-legged stool of retirement: Social Security, employer-sponsored plans, and personal savings with recommended percentages."
    },
    {
      id: 15,
      title: "Required Minimum Distributions (RMD) Rules",
      assetType: "Page" as const,
      snippet: "Complete documentation of RMD requirements for traditional IRAs and 401(k)s, including calculation methods, timing, and penalties for missed distributions."
    },
    {
      id: 16,
      title: "Understanding Pension Plan Benefits",
      assetType: "Video" as const,
      snippet: "Educational video series explaining defined benefit pension plans, including vesting requirements, payout options, and how to maximize your pension benefits."
    },
    {
      id: 17,
      title: "Women and Retirement Planning",
      assetType: "Webinar" as const,
      snippet: "Expert discussion addressing unique retirement challenges for women, including longer lifespans, career breaks, and strategies to overcome the retirement savings gap."
    },
    {
      id: 18,
      title: "HSA Retirement Strategy Assistant",
      assetType: "Assistant" as const,
      snippet: "Intelligent tool that demonstrates how Health Savings Accounts can serve as powerful retirement planning vehicles with triple tax advantages."
    },
    {
      id: 19,
      title: "Early Retirement: FIRE Movement Strategies",
      assetType: "Article" as const,
      snippet: "Comprehensive article covering Financial Independence, Retire Early (FIRE) strategies including extreme savings rates, geographic arbitrage, and withdrawal methods."
    },
    {
      id: 20,
      title: "Beneficiary Designation Update Form",
      assetType: "Form" as const,
      snippet: "Update beneficiary information for your retirement accounts including primary and contingent beneficiaries with proper legal names and percentages."
    },
    {
      id: 21,
      title: "Small Business Retirement Plan Setup Guide",
      assetType: "Guide" as const,
      snippet: "Complete guide for small business owners to establish retirement plans including SEP-IRAs, Simple IRAs, and solo 401(k) options with cost comparisons."
    },
    {
      id: 22,
      title: "Retirement Planning Literacy Quiz",
      assetType: "Learning Challenge" as const,
      snippet: "Test your knowledge of retirement planning fundamentals including contribution limits, tax rules, and investment basics with detailed explanations."
    },
    {
      id: 23,
      title: "Medicare and Retirement Healthcare Costs",
      assetType: "Infographic" as const,
      snippet: "Visual guide to Medicare enrollment, coverage options, and estimated healthcare costs in retirement including supplemental insurance recommendations."
    },
    {
      id: 24,
      title: "Retirement Plan Fee Disclosure",
      assetType: "Page" as const,
      snippet: "Detailed breakdown of retirement plan fees including administrative costs, investment expense ratios, and how fees impact long-term retirement savings growth."
    },
    {
      id: 25,
      title: "Creating a Retirement Budget",
      assetType: "Video" as const,
      snippet: "Step-by-step video tutorial on building a realistic retirement budget, estimating expenses, and ensuring your savings will last throughout retirement."
    }
  ];

  // Helper functions to split results with edge case handling
  const bestMatchResult = searchResults.length > 0 ? searchResults[0] : null;
  const remainingResults = searchResults.length > 1 ? searchResults.slice(1) : [];

  return (
    <Layout variant="results">
      <div className="max-w-4xl mx-auto pb-24">
        {/* Page heading */}
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Search results</h1>
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
          <RelatedQuestionList onQuestionClick={handleQuestionClick} />
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

      {/* Fixed bottom search input */}
      <div className="fixed bottom-12 left-1/2 transform -translate-x-1/2 w-full max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-2xl p-6">
          <BasicInput
            placeholder="Ask a follow up..."
            onSearch={handleNewSearch}
          />
        </div>
      </div>

      {/* Chatbot Modal */}
      <ChatbotModal isOpen={showChatbot} onClose={handleChatbotClose} />
    </Layout>
  );
} 