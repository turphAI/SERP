import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface RelatedQuestionsAccordionProps {
  className?: string;
  onQuestionClick?: () => void;
}

export default function RelatedQuestionsAccordion({ className = '', onQuestionClick }: RelatedQuestionsAccordionProps) {
  const faqItems = [
    {
      id: "item-1",
      question: "How do I optimize React performance?",
      answer: "To optimize React performance, you can use techniques like memoization with React.memo(), useMemo(), and useCallback(). Also consider code splitting, lazy loading, and avoiding unnecessary re-renders by properly managing state and props."
    },
    {
      id: "item-2", 
      question: "What are the best practices for API security?",
      answer: "API security best practices include implementing proper authentication and authorization, using HTTPS, rate limiting, input validation, API versioning, and monitoring. Always validate inputs, use secure headers, and implement proper error handling."
    },
    {
      id: "item-3",
      question: "How to implement responsive design patterns?",
      answer: "Responsive design can be implemented using flexible grids, media queries, relative units (rem, em, %), and mobile-first design approach. Consider using CSS frameworks like Tailwind CSS or CSS Grid and Flexbox for layout."
    },
    {
      id: "item-4",
      question: "What is the difference between REST and GraphQL?",
      answer: "REST uses multiple endpoints and standard HTTP methods, while GraphQL uses a single endpoint with a query language. GraphQL allows clients to request specific data, reducing over-fetching, while REST is simpler and more cacheable."
    },
    {
      id: "item-5",
      question: "How to set up continuous deployment pipelines?",
      answer: "Set up CI/CD pipelines using tools like GitHub Actions, Jenkins, or GitLab CI. Include automated testing, code quality checks, security scanning, and deployment stages. Use infrastructure as code and environment-specific configurations."
    }
  ];

  return (
    <div className={`space-y-4 ${className}`}>
      <h2 className="text-lg font-semibold text-gray-900">Related Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger 
              className="text-left"
              onClick={() => onQuestionClick?.()}
            >
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
} 