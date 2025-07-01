import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface BasicInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (query: string) => void;
  className?: string;
  autoFocus?: boolean;
}

export default function BasicInput({
  placeholder = "Search...",
  value: controlledValue,
  onChange,
  onSearch,
  className = '',
  autoFocus = false
}: BasicInputProps) {
  const [internalValue, setInternalValue] = useState('');
  
  // Use controlled value if provided, otherwise use internal state
  const value = controlledValue !== undefined ? controlledValue : internalValue;
  const setValue = controlledValue !== undefined ? onChange! : setInternalValue;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSearch && value.trim()) {
      onSearch(value.trim());
    }
  };

  const handleSearchClick = () => {
    if (onSearch && value.trim()) {
      onSearch(value.trim());
    }
  };

  return (
    <div className={`relative w-full ${className}`}>
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        autoFocus={autoFocus}
        className="pr-12 h-12 text-base rounded-full border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      />
      <button
        type="button"
        onClick={handleSearchClick}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600 transition-colors"
        aria-label="Search"
      >
        <Search className="w-5 h-5" />
      </button>
    </div>
  );
} 