'use client';

import React, { useState } from 'react';
import Layout from '@/components/core/Layout';
import BasicInput from '@/components/shared/BasicInput';
import TabRow from '@/components/shared/TabRow';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState('All');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Mock search results for demonstration
    setSearchResults([
      `Results for "${query}" in ${activeTab} - Result 1`,
      `Results for "${query}" in ${activeTab} - Result 2`, 
      `Results for "${query}" in ${activeTab} - Result 3`
    ]);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // If there's a current search, re-run it with the new tab
    if (searchQuery) {
      setSearchResults([
        `Results for "${searchQuery}" in ${tab} - Result 1`,
        `Results for "${searchQuery}" in ${tab} - Result 2`, 
        `Results for "${searchQuery}" in ${tab} - Result 3`
      ]);
    }
  };

  return (
    <Layout variant="results">
      <div className="container mx-auto px-4 pt-24 pb-8 max-w-4xl">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Search Interface with Tabs
          </h1>
          <p className="text-gray-600">
            BasicInput + shadcn Tabs components
          </p>
        </div>

        {/* Search Input Examples */}
        <div className="space-y-8">
          {/* Main Search Input with Tab Row */}
          <div>
            <div className="bg-white rounded-lg shadow p-8 mb-4">
              <h2 className="text-lg font-semibold mb-6 text-center">Search Input</h2>
              <div className="max-w-2xl mx-auto">
                <BasicInput
                  placeholder="Search for anything..."
                  onSearch={handleSearch}
                  autoFocus
                />
              </div>
            </div>
            {/* Tabs outside the card */}
            <div>
              <TabRow onTabChange={handleTabChange} />
            </div>
          </div>

          {/* Controlled Input Example */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Controlled Input</h2>
            <BasicInput
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Type to see controlled behavior..."
              onSearch={handleSearch}
            />
            <p className="text-sm text-gray-500 mt-2">
              Current value: "{searchQuery}" | Active tab: "{activeTab}"
            </p>
          </div>

          {/* Different Tab Configuration */}
          <div>
            <div className="bg-white rounded-lg shadow p-6 mb-4">
              <h2 className="text-lg font-semibold mb-4">Custom Tab Configuration</h2>
              <BasicInput
                placeholder="Custom tabs example..."
                onSearch={handleSearch}
                className="max-w-md mx-auto"
              />
            </div>
            {/* Custom tabs outside the card */}
            <div>
              <TabRow 
                tabs={['All', 'News', 'Learn', 'Videos', 'Images']}
                onTabChange={handleTabChange}
              />
            </div>
          </div>

          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4">Search Results ({activeTab})</h2>
              <div className="space-y-2">
                {searchResults.map((result, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded border-l-4 border-blue-500">
                    {result}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Component Features */}
        <div className="bg-white rounded-lg shadow p-6 mt-8">
          <h2 className="text-lg font-semibold mb-4">Updated Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-2">BasicInput Features</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Clean, minimal design with rounded shape</li>
                <li>• Search icon on the right side</li>
                <li>• Enter key to search</li>
                <li>• Controlled or uncontrolled modes</li>
                <li>• Auto-focus support</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">TabRow Features (shadcn)</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Built with shadcn Tabs component</li>
                <li>• Professional design system</li>
                <li>• Grid layout for equal width tabs</li>
                <li>• Accessible and keyboard navigable</li>
                <li>• Positioned outside search cards</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 