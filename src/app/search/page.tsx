'use client';

import React, { useState } from 'react';
import Layout from '@/components/core/Layout';
import BasicInput from '@/components/shared/BasicInput';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Mock search results for demonstration
    setSearchResults([
      `Results for "${query}" - Result 1`,
      `Results for "${query}" - Result 2`, 
      `Results for "${query}" - Result 3`
    ]);
  };

  const handleClear = () => {
    setSearchResults([]);
  };

  return (
    <Layout variant="results">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Base Search Page
          </h1>
          <p className="text-gray-600">
            Testing ground for search components
          </p>
        </div>

        {/* Search Input Examples */}
        <div className="space-y-8">
          {/* Large Search Input */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Large Search Input</h2>
            <BasicInput
              size="lg"
              placeholder="What would you like to search for?"
              onSearch={handleSearch}
              onClear={handleClear}
              autoFocus
            />
          </div>

          {/* Medium Search Input */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Medium Search Input (Default)</h2>
            <BasicInput
              placeholder="Search products, services, or topics..."
              onSearch={handleSearch}
              onClear={handleClear}
            />
          </div>

          {/* Small Search Input */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Small Search Input</h2>
            <BasicInput
              size="sm"
              placeholder="Quick search"
              onSearch={handleSearch}
              onClear={handleClear}
            />
          </div>

          {/* Input without Search Button */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Input Only (No Search Button)</h2>
            <BasicInput
              placeholder="Press Enter to search..."
              onSearch={handleSearch}
              onClear={handleClear}
              showSearchButton={false}
            />
            <div className="flex items-center justify-center mt-2">
              <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                Enter key still works for search
              </div>
            </div>
          </div>

          {/* Controlled Input */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Controlled Input</h2>
            <BasicInput
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Controlled input example"
              onSearch={handleSearch}
              onClear={handleClear}
            />
            <p className="text-sm text-gray-500 mt-2">
              Current value: "{searchQuery}"
            </p>
          </div>

          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4">Search Results</h2>
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

        {/* Component Documentation */}
        <div className="bg-white rounded-lg shadow p-6 mt-8">
          <h2 className="text-lg font-semibold mb-4">BasicInput Component Features</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Three sizes: small (sm), medium (md), large (lg)</li>
            <li>• Optional search button</li>
            <li>• Clear button (X) when there's text</li>
            <li>• Enter key to search</li>
            <li>• Controlled or uncontrolled modes</li>
            <li>• Customizable placeholder text</li>
            <li>• Auto-focus support</li>
            <li>• Custom styling via className</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
} 