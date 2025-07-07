'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import ResultsPage from '@/features/related-questions/v3/ResultsPage';

function ResultsPageWithParams() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  return <ResultsPage searchQuery={query} />;
}

export default function RelatedQuestionsV3ResultsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultsPageWithParams />
    </Suspense>
  );
} 