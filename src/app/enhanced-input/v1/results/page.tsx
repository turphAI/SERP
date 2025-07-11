'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import ResultsPage from '@/features/enhanced-input/v1/ResultsPage';

function ResultsPageWithParams() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  return <ResultsPage searchQuery={query} />;
}

export default function EnhancedInputV1ResultsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultsPageWithParams />
    </Suspense>
  );
} 