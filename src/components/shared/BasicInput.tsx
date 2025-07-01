import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface BasicInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (query: string) => void;
  onClear?: () => void;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showClearButton?: boolean;
  showSearchButton?: boolean;
  autoFocus?: boolean;
}

export default function BasicInput({
  placeholder = "Search...",
  value: controlledValue,
  onChange,
  onSearch,
  onClear,
  size = 'md',
  className = '',
  showClearButton = true,
  showSearchButton = true,
  autoFocus = false
}: BasicInputProps) {
  const [internalValue, setInternalValue] = useState('');
  
  // Use controlled value if provided, otherwise use internal state
  const value = controlledValue !== undefined ? controlledValue : internalValue;
  const setValue = controlledValue !== undefined ? onChange! : setInternalValue;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSearch) {
      onSearch(value);
    }
  };

  const handleClear = () => {
    setValue('');
    onClear?.();
  };

  const handleSearchClick = () => {
    if (onSearch && value.trim()) {
      onSearch(value.trim());
    }
  };

  // Size variants
  const sizeClasses = {
    sm: 'h-8 text-sm',
    md: 'h-10 text-base',
    lg: 'h-12 text-lg'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5', 
    lg: 'w-6 h-6'
  };

  return (
    <div className={`relative flex items-center ${className}`}>
      <div className="relative flex-1">
        <Search 
          className={`absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground ${iconSizes[size]}`}
        />
        <Input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus={autoFocus}
          className={`pl-10 pr-10 ${sizeClasses[size]}`}
        />
        {showClearButton && value && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClear}
            className={`absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 p-0 hover:bg-gray-100`}
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>
      
      {onSearch && showSearchButton && (
        <Button
          onClick={handleSearchClick}
          className="ml-2"
          disabled={!value.trim()}
        >
          Search
        </Button>
      )}
    </div>
  );
} 