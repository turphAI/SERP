import React from 'react';

type AssetType = 
  | 'Article'
  | 'Form'
  | 'Guide'
  | 'Learning Challenge'
  | 'Infographic'
  | 'Page'
  | 'Video'
  | 'Webinar'
  | 'Assistant';

interface SearchResultProps {
  id: string | number;
  title: string;
  assetType: AssetType;
  snippet: string;
  className?: string;
}

export default function SearchResult({
  id,
  title,
  assetType,
  snippet,
  className = ''
}: SearchResultProps) {
  return (
    <div key={id} className={`border-b border-gray-200 pb-4 ${className}`}>
      <h3 className="text-lg font-medium text-blue-600 hover:underline cursor-pointer">
        {title}
      </h3>
      <p className="text-sm text-green-700 mb-1">{assetType}</p>
      <p className="text-gray-600">{snippet}</p>
    </div>
  );
}

export type { AssetType, SearchResultProps }; 