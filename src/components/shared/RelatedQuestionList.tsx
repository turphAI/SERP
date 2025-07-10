import React from 'react';
import { Button } from '@/components/ui/button';

interface RelatedQuestionListProps {
  className?: string;
  onQuestionClick?: () => void;
}

export default function RelatedQuestionList({ className = '', onQuestionClick }: RelatedQuestionListProps) {
  const relatedQuestions = [
    "What is the difference between 401(k) and 403(b) plans?",
    "How much should I contribute to my retirement plan?",
    "When can I start taking withdrawals from my 401(k)?",
    "How do I choose investments for my retirement account?",
    "What happens to my retirement plan if I change jobs?"
  ];

  return (
    <div className={`space-y-4 ${className}`}>
      <h2 className="text-lg font-semibold text-gray-900">Related questions</h2>
      <div className="flex flex-col space-y-2 items-start">
        {relatedQuestions.map((question, index) => (
          <Button 
            key={index}
            variant="conversation-gray"
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