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

  // Roth IRA specific mock data for this prototype
  const searchResults = [
    {
      id: 1,
      title: "2025 Roth IRA Contribution Limits: Complete Guide",
      assetType: "Article" as const,
      snippet: "Comprehensive guide to 2025 Roth IRA contribution limits, including income phase-out ranges, catch-up contributions for those 50+, and how to calculate your maximum contribution."
    },
    {
      id: 2,
      title: "Roth IRA Contribution Calculator",
      assetType: "Form" as const,
      snippet: "Interactive calculator to determine your maximum Roth IRA contribution based on your age, income, and filing status for 2025 tax year."
    },
    {
      id: 3,
      title: "Roth IRA Planning Assistant",
      assetType: "Assistant" as const,
      snippet: "AI-powered assistant that helps you maximize your Roth IRA contributions, plan for retirement, and navigate contribution limits based on your financial situation."
    },
    {
      id: 4,
      title: "Roth IRA vs Traditional IRA: Contribution Limits Comparison",
      assetType: "Infographic" as const,
      snippet: "Visual comparison of contribution limits, tax benefits, and withdrawal rules between Roth and Traditional IRAs for 2025."
    },
    {
      id: 5,
      title: "Income Phase-Out Ranges for Roth IRA Contributions",
      assetType: "Page" as const,
      snippet: "Detailed breakdown of income limits for Roth IRA contributions in 2025, including phase-out ranges for single filers, married filing jointly, and head of household."
    },
    {
      id: 6,
      title: "Catch-Up Contributions: Maximizing Your Roth IRA After 50",
      assetType: "Article" as const,
      snippet: "Learn how to take advantage of catch-up contributions to boost your Roth IRA savings when you're 50 or older, including the additional $1,000 limit for 2025."
    },
    {
      id: 7,
      title: "Roth IRA Contribution Deadline Tracker",
      assetType: "Assistant" as const,
      snippet: "Smart assistant that tracks contribution deadlines, monitors your progress toward the annual limit, and sends reminders to maximize your Roth IRA contributions."
    },
    {
      id: 8,
      title: "Roth IRA Contribution Strategies for High Earners",
      assetType: "Guide" as const,
      snippet: "Advanced strategies for high-income earners to work around Roth IRA contribution limits, including backdoor Roth IRA conversions and alternative retirement accounts."
    },
    {
      id: 9,
      title: "Roth IRA vs 401(k): Contribution Limits and Benefits",
      assetType: "Video" as const,
      snippet: "30-minute comparison of Roth IRA and 401(k) contribution limits, tax advantages, and how to coordinate both accounts for maximum retirement savings."
    },
    {
      id: 10,
      title: "Roth IRA Contribution Planning for Different Life Stages",
      assetType: "Article" as const,
      snippet: "Age-specific strategies for Roth IRA contributions, from early career to retirement, including how contribution limits affect your long-term financial planning."
    },
    {
      id: 11,
      title: "Roth IRA Excess Contribution Calculator",
      assetType: "Form" as const,
      snippet: "Tool to calculate and resolve excess Roth IRA contributions, including penalties and correction methods for contributions that exceed annual limits."
    },
    {
      id: 12,
      title: "Roth IRA Contribution Limits: Historical Trends",
      assetType: "Infographic" as const,
      snippet: "Visual timeline showing how Roth IRA contribution limits have changed over the years, including inflation adjustments and legislative changes."
    },
    {
      id: 13,
      title: "Roth IRA Contribution Assistant for Self-Employed",
      assetType: "Assistant" as const,
      snippet: "Specialized assistant for self-employed individuals to navigate Roth IRA contribution limits while also considering SEP-IRA and Solo 401(k) options."
    },
    {
      id: 14,
      title: "Roth IRA Contribution Limits: Tax Law Updates",
      assetType: "Article" as const,
      snippet: "Latest updates on Roth IRA contribution limits and related tax law changes, including potential legislative proposals and their impact on retirement planning."
    },
    {
      id: 15,
      title: "Roth IRA Contribution Optimization Challenge",
      assetType: "Learning Challenge" as const,
      snippet: "Interactive 12-week challenge to optimize your Roth IRA contributions, track progress toward annual limits, and develop consistent saving habits."
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
