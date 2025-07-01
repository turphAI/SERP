import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SearchPanelProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  enableFeatures?: {
    typeAhead?: boolean;
    spellcheck?: boolean;
    enhancedInput?: boolean;
  };
}

export default function SearchPanel({ 
  onSearch, 
  placeholder = "Search..."
}: SearchPanelProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="flex-1"
        />
        <Button type="submit">Search</Button>
      </form>
      {/* Feature-specific enhancements will be added here */}
    </div>
  );
} 