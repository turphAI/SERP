'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '@/components/core/Layout';
import BasicInput from '@/components/shared/BasicInput';
import TabRow from '@/components/shared/TabRow';
import SearchResultWithKeyPassage from './SearchResultWithKeyPassage';
import SERP_Answer from './SERP_Answer';

interface ResultsPageProps {
  searchQuery: string;
}

export default function ResultsPage({ searchQuery }: ResultsPageProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('All');

  const handleNewSearch = (query: string) => {
    router.push(`/answer/v2/results?q=${encodeURIComponent(query)}`);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // In a real app, this would trigger a new search with the selected tab filter
    console.log(`Tab changed to: ${tab}`);
  };

  const searchResults = [
    {
      id: 1,
      title: "The Complete Guide to Starting Your First Budget",
      assetType: "Article" as const,
      snippet: "Learn the fundamentals of budgeting including the 50/30/20 rule, tracking expenses, and setting realistic financial goals for beginners."
    },
    {
      id: 2, 
      title: "Monthly Budget Worksheet Template",
      assetType: "Form" as const,
      snippet: "Download our comprehensive monthly budget worksheet to track income, expenses, and savings goals with built-in calculators."
    },
    {
      id: 3,
      title: "Smart Budget Planning Assistant",
      assetType: "Assistant" as const,
      snippet: "AI-powered assistant that helps you create personalized budgets based on your income, expenses, and financial goals with step-by-step guidance."
    },
    {
      id: 4,
      title: "Budget Challenge: Track Every Expense for 30 Days",
      assetType: "Learning Challenge" as const,
      snippet: "Interactive 30-day challenge to build the habit of expense tracking using both digital tools and traditional methods."
    },
    {
      id: 5,
      title: "Expense Categorization Assistant",
      assetType: "Assistant" as const,
      snippet: "Intelligent assistant that automatically categorizes your expenses and identifies spending patterns to optimize your budget allocation."
    },
    {
      id: 6,
      title: "Emergency Fund Planning Strategies",
      assetType: "Page" as const,
      snippet: "Comprehensive guide to building your emergency fund as the foundation of any budget, with tips for different income levels."
    },
    {
      id: 7,
      title: "Budgeting Apps Comparison Video",
      assetType: "Video" as const,
      snippet: "45-minute comparison of popular budgeting apps including Mint, YNAB, EveryDollar, and PocketGuard with hands-on demonstrations."
    },
    {
      id: 8,
      title: "Debt Payoff Strategy Assistant",
      assetType: "Assistant" as const,
      snippet: "Smart assistant that analyzes your debts and creates personalized payoff strategies using snowball or avalanche methods within your budget."
    },
    {
      id: 9,
      title: "Budget Optimization Assistant",
      assetType: "Assistant" as const,
      snippet: "AI-powered budgeting assistant that analyzes spending patterns, suggests optimizations, and helps automate your budget tracking."
    },
    {
      id: 10,
      title: "Common Budgeting Mistakes to Avoid",
      assetType: "Article" as const,
      snippet: "Learn about the most common budgeting pitfalls including unrealistic expectations, ignoring small expenses, and not planning for irregular costs."
    },
    {
      id: 11,
      title: "Savings Goal Assistant",
      assetType: "Assistant" as const,
      snippet: "Interactive assistant that helps you set realistic savings goals, calculate timelines, and adjust your budget to achieve financial milestones."
    },
    {
      id: 12,
      title: "Family Budget Planning Guide",
      assetType: "Guide" as const,
      snippet: "Complete guide to family budgeting including childcare costs, education savings, and involving kids in financial planning."
    },
    {
      id: 13,
      title: "Bill Negotiation Assistant",
      assetType: "Assistant" as const,
      snippet: "AI assistant that helps you identify bills to negotiate, provides scripts and strategies, and tracks savings to update your budget."
    },
    {
      id: 14,
      title: "Debt Snowball vs Avalanche Method",
      assetType: "Infographic" as const,
      snippet: "Compare debt payoff strategies within your budget framework, showing mathematical and psychological benefits of each approach."
    },
    {
      id: 15,
      title: "Budget Variance Analysis Assistant",
      assetType: "Assistant" as const,
      snippet: "Smart assistant that compares your planned vs actual spending, identifies trends, and suggests budget adjustments for better accuracy."
    },
    {
      id: 16,
      title: "Budget Meal Planning Strategies",
      assetType: "Video" as const,
      snippet: "Comprehensive video series on reducing food costs through meal planning, bulk buying, and cooking at home while maintaining nutrition."
    },
    {
      id: 17,
      title: "Small Business Budget Planning",
      assetType: "Webinar" as const,
      snippet: "Expert discussion on creating budgets for small businesses including cash flow management, expense categorization, and growth planning."
    },
    {
      id: 18,
      title: "Budget Tracking Assistant",
      assetType: "Assistant" as const,
      snippet: "Intelligent assistant that monitors spending, sends alerts for budget overages, and provides personalized money-saving suggestions."
    },
    {
      id: 19,
      title: "Annual Budget Review and Planning",
      assetType: "Article" as const,
      snippet: "In-depth guide to conducting yearly budget reviews, adjusting for life changes, and setting financial goals for the coming year."
    },
    {
      id: 20,
      title: "Emergency Budget Assistant",
      assetType: "Assistant" as const,
      snippet: "Crisis management assistant that helps you quickly adjust your budget during unexpected financial hardships or income changes."
    },
    {
      id: 21,
      title: "Envelope Budgeting Method Guide",
      assetType: "Guide" as const,
      snippet: "Traditional envelope budgeting method updated for modern banking, including digital envelope systems and cash management strategies."
    },
    {
      id: 22,
      title: "Budget vs Actual Spending Challenge",
      assetType: "Learning Challenge" as const,
      snippet: "Real-world challenge to compare planned vs actual spending across different budget categories and improve estimation skills."
    },
    {
      id: 23,
      title: "Investment Budget Assistant",
      assetType: "Assistant" as const,
      snippet: "Specialized assistant that helps you allocate budget for investments, balancing risk tolerance with financial goals and timelines."
    },
    {
      id: 24,
      title: "Budget Maintenance Best Practices",
      assetType: "Page" as const,
      snippet: "Guidelines for keeping your budget up-to-date, handling unexpected expenses, and making seasonal adjustments to stay on track."
    },
    {
      id: 25,
      title: "College Budget Planning Assistant",
      assetType: "Assistant" as const,
      snippet: "Student-focused assistant that helps create budgets for tuition, textbooks, housing, and part-time income while building financial literacy."
    }
  ];

  return (
    <Layout variant="results">
      <div className="max-w-4xl mx-auto">
        {/* Search Results Header */}
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Search Results</h1>
        
        {/* Search Input at top of results */}
        <div className="mb-4 bg-white rounded-lg shadow p-6">
          <BasicInput
            value={searchQuery}
            placeholder="Search for anything..."
            onSearch={handleNewSearch}
          />
        </div>

        {/* SERP Answer Component */}
        <div className="mb-6">
          <SERP_Answer
            answer="In 2025, you can contribute $7,000 to your Roth IRA if you're under age 50, or $8,000 if you're age 50 or over, as long as your taxable income is under the yearly IRS limits to make the maximum contribution.*"
            source={{
              type: "ARTICLE",
              title: "Excess IRA Contributions | Rules & Options"
            }}
            isTruncated={true}
            onShowMore={() => console.log('Show more clicked')}
            onShowLess={() => console.log('Show less clicked')}
            onThumbsUp={() => console.log('Thumbs up clicked')}
            onThumbsDown={() => console.log('Thumbs down clicked')}
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

        {/* Regular search results */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Site assets</h2>
          {searchResults.map((result) => (
            <SearchResultWithKeyPassage
              key={result.id}
              id={result.id}
              title={result.title}
              assetType={result.assetType}
              snippet={result.snippet}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
