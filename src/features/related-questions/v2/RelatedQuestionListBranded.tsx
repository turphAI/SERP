import React from 'react';
import { Button } from '@/components/ui/button';

interface RelatedQuestionListBrandedProps {
  className?: string;
  onQuestionClick?: () => void;
}

export default function RelatedQuestionListBranded({ className = '', onQuestionClick }: RelatedQuestionListBrandedProps) {
  const relatedQuestions = [
    "How do I optimize React performance?",
    "What are the best practices for API security?",
    "How to implement responsive design patterns?",
    "What is the difference between REST and GraphQL?",
    "How to set up continuous deployment pipelines?"
  ];

  return (
    <div className={`space-y-4 ${className}`}>
      <h2 className="text-lg font-semibold text-gray-900">Related Questions</h2>
      <div className="flex flex-col space-y-2 items-start">
        {relatedQuestions.map((question, index) => (
          <Button 
            key={index}
            variant="conversation-branded"
            className="h-auto py-3 px-4"
            onClick={() => onQuestionClick?.()}
          >
            {question}
          </Button>
        ))}
      </div>
    </div>
  );
} 