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

interface SearchResultWithKeyPassageProps {
  id: string | number;
  title: string;
  assetType: AssetType;
  snippet: string;
  className?: string;
}

export default function SearchResultWithKeyPassage({
  id,
  title,
  assetType,
  snippet,
  className = ''
}: SearchResultWithKeyPassageProps) {
  // Check if this asset type should have quotation marks and source icon
  const shouldShowQuotes = assetType === 'Article' || assetType === 'Page' || assetType === 'Assistant';
  
  return (
    <div key={id} className={`border-b border-gray-200 pb-4 ${className}`}>
      <h3 className="text-lg font-medium text-blue-600 hover:underline cursor-pointer">
        {title}
      </h3>
      <p className="text-sm text-green-700 mb-1">{assetType}</p>
      
      {shouldShowQuotes ? (
        <p className="text-gray-600">
          "{snippet}" 
          <span className="inline-block w-4 h-4 bg-pink-500 rounded-sm ml-2 align-middle">
            <span className="block w-2 h-2 bg-white rounded-full m-1"></span>
          </span>
        </p>
      ) : (
        <p className="text-gray-600">
          {snippet}
        </p>
      )}
    </div>
  );
}

export type { AssetType, SearchResultWithKeyPassageProps }; 