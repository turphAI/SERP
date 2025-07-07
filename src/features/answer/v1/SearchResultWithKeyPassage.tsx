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
  // Check if this asset type should have the key passage treatment
  const shouldShowKeyPassage = assetType === 'Article' || assetType === 'Page' || assetType === 'Assistant';
  
  return (
    <div key={id} className={`border-b border-gray-200 pb-4 ${className}`}>
      <h3 className="text-lg font-medium text-blue-600 hover:underline cursor-pointer">
        {title}
      </h3>
      <p className="text-sm text-green-700 mb-1">{assetType}</p>
      <p className="text-gray-600">
        {shouldShowKeyPassage && (
          <span style={{ color: '#7f7f7f' }}>Key passage: </span>
        )}
        {snippet}
      </p>
    </div>
  );
}

export type { AssetType, SearchResultWithKeyPassageProps }; 