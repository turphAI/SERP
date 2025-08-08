'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

interface SERP_AnswerProps {
  answer: string;
  source?: {
    type: string;
    title: string;
    url?: string;
  };
  isTruncated?: boolean;
  onShowMore?: () => void;
  onShowLess?: () => void;
  onThumbsUp?: () => void;
  onThumbsDown?: () => void;
  className?: string;
}

export default function SERP_Answer({
  answer,
  source,
  isTruncated = false,
  onShowMore,
  onShowLess,
  onThumbsUp,
  onThumbsDown,
  className = ''
}: SERP_AnswerProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleShowMore = () => {
    setIsExpanded(true);
    onShowMore?.();
  };

  const handleShowLess = () => {
    setIsExpanded(false);
    onShowLess?.();
  };

  const displayAnswer = isTruncated && !isExpanded 
    ? answer.slice(0, 300) + '...' 
    : answer;

  return (
    <div className={`bg-white rounded-lg shadow-sm border p-6 ${className}`}>
      {/* Answer and Source Section - Side by Side */}
      <div className="flex gap-6">
        {/* Answer Section */}
        <div className="flex-1">
          <div className="text-lg text-gray-900 leading-relaxed">
            {displayAnswer}
          </div>
          
          {/* Show More/Less Control */}
          {isTruncated && (
            <div className="mt-2">
              {!isExpanded ? (
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-blue-600 hover:text-blue-800"
                  onClick={handleShowMore}
                >
                  Show more
                </Button>
              ) : (
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-blue-600 hover:text-blue-800"
                  onClick={handleShowLess}
                >
                  Show less
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Source Section */}
        {source && (
          <div className="w-48 p-3 bg-gray-50 rounded-md">
            <div>
              <h4 className="text-sm font-medium text-blue-600 hover:underline cursor-pointer">
                {source.title}
              </h4>
            </div>
          </div>
        )}
      </div>

      {/* Actions Section */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200 mt-4">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onThumbsUp}
            className="text-gray-600 hover:text-green-600"
          >
            <ThumbsUp className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onThumbsDown}
            className="text-gray-600 hover:text-red-600"
          >
            <ThumbsDown className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
