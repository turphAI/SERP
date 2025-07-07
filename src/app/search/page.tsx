'use client';

import React, { useState } from 'react';
import Layout from '@/components/core/Layout';
import BasicInput from '@/components/shared/BasicInput';
import TabRow from '@/components/shared/TabRow';
import SearchResult from '@/components/shared/SearchResult';
import SearchResultExample from '@/components/shared/SearchResultExample';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState('All');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Mock search results for demonstration
    setSearchResults([
      `Results for &ldquo;${query}&rdquo; in ${activeTab} - Result 1`,
      `Results for &ldquo;${query}&rdquo; in ${activeTab} - Result 2`, 
      `Results for &ldquo;${query}&rdquo; in ${activeTab} - Result 3`
    ]);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // If there's a current search, re-run it with the new tab
    if (searchQuery) {
      setSearchResults([
        `Results for &ldquo;${searchQuery}&rdquo; in ${tab} - Result 1`,
        `Results for &ldquo;${searchQuery}&rdquo; in ${tab} - Result 2`, 
        `Results for &ldquo;${searchQuery}&rdquo; in ${tab} - Result 3`
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
              Current value: &ldquo;{searchQuery}&rdquo; | Active tab: &ldquo;{activeTab}&rdquo;
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
              <div className="space-y-2">
                {searchResults.map((result, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded border-l-4 border-blue-500">
                    {result}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Integration Example */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Integration Example</h2>
            <p className="text-gray-600 mb-6">
              How to replace existing search results with the new SearchResult component
            </p>
            <SearchResultExample />
          </div>

          {/* SearchResult Component Demo */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">SearchResult Component Demo - 25 Results</h2>
            <p className="text-gray-600 mb-6">
              25 SearchResult components with varied asset types demonstrating real-world usage
            </p>
            <div className="space-y-4">
              <SearchResult
                id="1"
                title="How to Build React Components"
                assetType="Article"
                snippet="Learn the fundamentals of building reusable React components with this comprehensive guide covering props, state, and lifecycle methods."
              />
              <SearchResult
                id="2"
                title="Project Registration Form"
                assetType="Form"
                snippet="Complete this form to register your new project and get access to development resources and team collaboration tools."
              />
              <SearchResult
                id="3"
                title="Getting Started with TypeScript"
                assetType="Guide"
                snippet="A step-by-step guide to setting up TypeScript in your project, configuring the compiler, and writing type-safe code."
              />
              <SearchResult
                id="4"
                title="Advanced React Patterns Challenge"
                assetType="Learning Challenge"
                snippet="Test your knowledge of advanced React patterns including render props, higher-order components, and custom hooks."
              />
              <SearchResult
                id="5"
                title="Component Architecture Overview"
                assetType="Infographic"
                snippet="Visual breakdown of modern frontend component architecture showing data flow, state management, and component relationships."
              />
              <SearchResult
                id="6"
                title="API Documentation"
                assetType="Page"
                snippet="Complete reference documentation for our REST API endpoints, authentication methods, and response formats."
              />
              <SearchResult
                id="7"
                title="Building Scalable Applications"
                assetType="Video"
                snippet="45-minute video tutorial covering best practices for building scalable React applications with proper state management."
              />
              <SearchResult
                id="8"
                title="Modern Frontend Development"
                assetType="Webinar"
                snippet="Join our live webinar discussing the latest trends in frontend development including performance optimization and developer tools."
              />
              <SearchResult
                id="9"
                title="Code Review Assistant"
                assetType="Assistant"
                snippet="AI-powered assistant that helps review your code, suggests improvements, and identifies potential bugs or performance issues."
              />
              <SearchResult
                id="10"
                title="JavaScript Fundamentals for Beginners"
                assetType="Article"
                snippet="Master the basics of JavaScript programming with this comprehensive article covering variables, functions, and control structures."
              />
              <SearchResult
                id="11"
                title="Contact Information Update Form"
                assetType="Form"
                snippet="Use this form to update your contact information, preferences, and notification settings in your account profile."
              />
              <SearchResult
                id="12"
                title="Database Design Best Practices"
                assetType="Guide"
                snippet="Learn how to design efficient and scalable databases with proper normalization, indexing, and relationship management."
              />
              <SearchResult
                id="13"
                title="CSS Grid Layout Mastery Challenge"
                assetType="Learning Challenge"
                snippet="Put your CSS Grid skills to the test with this interactive challenge featuring complex layout scenarios and responsive design."
              />
              <SearchResult
                id="14"
                title="Development Workflow Diagram"
                assetType="Infographic"
                snippet="Visual representation of the complete software development lifecycle from planning to deployment and maintenance."
              />
              <SearchResult
                id="15"
                title="Team Collaboration Guidelines"
                assetType="Page"
                snippet="Essential guidelines for effective team collaboration including communication protocols, code review processes, and project management."
              />
              <SearchResult
                id="16"
                title="Introduction to Machine Learning"
                assetType="Video"
                snippet="60-minute introductory video explaining machine learning concepts, algorithms, and practical applications in modern technology."
              />
              <SearchResult
                id="17"
                title="Cloud Architecture Strategies"
                assetType="Webinar"
                snippet="Expert-led webinar discussing cloud migration strategies, cost optimization, and security best practices for enterprise applications."
              />
              <SearchResult
                id="18"
                title="Documentation Generator Assistant"
                assetType="Assistant"
                snippet="Intelligent assistant that automatically generates comprehensive documentation for your codebase including API references and examples."
              />
              <SearchResult
                id="19"
                title="Performance Optimization Techniques"
                assetType="Article"
                snippet="Detailed article covering advanced performance optimization techniques for web applications including caching, lazy loading, and code splitting."
              />
              <SearchResult
                id="20"
                title="Bug Report Submission Form"
                assetType="Form"
                snippet="Submit detailed bug reports with this comprehensive form including steps to reproduce, environment details, and severity classification."
              />
              <SearchResult
                id="21"
                title="Security Implementation Handbook"
                assetType="Guide"
                snippet="Complete handbook for implementing security measures in web applications covering authentication, authorization, and data protection."
              />
              <SearchResult
                id="22"
                title="Node.js Performance Challenge"
                assetType="Learning Challenge"
                snippet="Advanced challenge focusing on Node.js performance optimization including memory management, event loop understanding, and profiling."
              />
              <SearchResult
                id="23"
                title="API Integration Flow Chart"
                assetType="Infographic"
                snippet="Step-by-step visual guide showing the complete API integration process from authentication to error handling and rate limiting."
              />
              <SearchResult
                id="24"
                title="Release Notes and Updates"
                assetType="Page"
                snippet="Latest software release notes featuring new features, bug fixes, performance improvements, and migration instructions."
              />
              <SearchResult
                id="25"
                title="Advanced Docker Containerization"
                assetType="Video"
                snippet="Comprehensive video tutorial covering advanced Docker concepts including multi-stage builds, orchestration, and production deployment strategies."
              />
            </div>
          </div>
        </div>

        {/* Component Features */}
        <div className="bg-white rounded-lg shadow p-6 mt-8">
          <h2 className="text-lg font-semibold mb-4">Updated Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            <div>
              <h3 className="font-medium mb-2">SearchResult Component</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Asset type labels instead of URLs</li>
                <li>• 9 supported asset types</li>
                <li>• Consistent visual design</li>
                <li>• Non-interactive labels</li>
                <li>• TypeScript support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 