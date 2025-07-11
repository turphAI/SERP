import React from 'react';
import { Badge } from '@/components/ui/badge';

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
          &ldquo;{snippet}&rdquo; 
          <Badge variant="outline" className="ml-2 align-middle gap-0.5">
            <img 
              src="/images/source-icon.png" 
              alt="Source" 
              width="16" 
              height="16" 
              className="inline-block"
            />
            Source
          </Badge>
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