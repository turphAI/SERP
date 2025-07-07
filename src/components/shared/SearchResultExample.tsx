import React from 'react';
import SearchResult, { AssetType } from './SearchResult';

// Example data structure for the new SearchResult component
interface SearchResultData {
  id: number;
  title: string;
  assetType: AssetType;
  snippet: string;
}

export default function SearchResultExample() {
  // Updated search results data with assetType instead of url
  const searchResultsData: SearchResultData[] = [
    {
      id: 1,
      title: "React – A JavaScript library for building user interfaces",
      assetType: "Guide",
      snippet: "The library for web and native user interfaces. React lets you build user interfaces out of individual pieces called components..."
    },
    {
      id: 2, 
      title: "React (JavaScript library) - Wikipedia",
      assetType: "Article",
      snippet: "React is a free and open-source front-end JavaScript library for building user interfaces based on components..."
    },
    {
      id: 3,
      title: "React Component Tutorial Video",
      assetType: "Video",
      snippet: "Learn how to build React components from scratch with this comprehensive video tutorial covering props, state, and lifecycle methods."
    }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">Integration Example</h2>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-medium mb-2 text-sm text-gray-700">Before (with URLs):</h3>
        <div className="text-sm text-gray-600 font-mono bg-white p-2 rounded">
          {`{searchResults.map((result) => (
  <div key={result.id} className="border-b border-gray-200 pb-4">
    <h3 className="text-lg font-medium text-blue-600 hover:underline cursor-pointer">
      {result.title}
    </h3>
    <p className="text-sm text-green-700 mb-1">{result.url}</p>
    <p className="text-gray-600">{result.snippet}</p>
  </div>
))}`}
        </div>
      </div>
      
      <div className="bg-green-50 p-4 rounded-lg">
        <h3 className="font-medium mb-2 text-sm text-green-700">After (with SearchResult component):</h3>
        <div className="text-sm text-gray-600 font-mono bg-white p-2 rounded mb-4">
          {`{searchResults.map((result) => (
  <SearchResult
    key={result.id}
    id={result.id}
    title={result.title}
    assetType={result.assetType}
    snippet={result.snippet}
  />
))}`}
        </div>
        
        <h4 className="font-medium mb-2 text-sm text-green-700">Live Example:</h4>
        <div className="bg-white p-4 rounded border">
          {searchResultsData.map((result) => (
            <SearchResult
              key={result.id}
              id={result.id}
              title={result.title}
              assetType={result.assetType}
              snippet={result.snippet}
            />
          ))}
        </div>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-medium mb-2 text-sm text-blue-700">Data Structure Change:</h3>
        <div className="text-sm text-gray-600 space-y-2">
          <div className="bg-white p-2 rounded font-mono">
            <div className="text-red-600">- url: "https://react.dev"</div>
            <div className="text-green-600">+ assetType: "Guide"</div>
          </div>
          <p className="text-xs">Simply replace the URL field with an assetType field using one of the 9 supported asset types.</p>
        </div>
      </div>
    </div>
  );
}

export type { SearchResultData }; 