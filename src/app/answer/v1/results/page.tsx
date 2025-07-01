'use client';

import { useSearchParams } from 'next/navigation';
import ResultsPage from '@/features/answer/v1/ResultsPage';

export default function AnswerV1ResultsPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  return <ResultsPage searchQuery={query} />;
} 