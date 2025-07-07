'use client';

import React from 'react';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
  variant?: 'home' | 'results' | 'landing';
  className?: string;
}

export default function Layout({ children, variant = 'home', className = '' }: LayoutProps) {
  // Map our layout variants to header variants
  const headerVariant = variant === 'home' ? 'full' : 'short';
  
  // Add more spacing for results pages since the header is shorter
  const mainPadding = variant === 'results' ? 'pt-8' : 'pt-4';
  
  // Don't render header for landing variant
  const shouldRenderHeader = variant !== 'landing';
  
  return (
    <div className="min-h-screen" style={{ background: '#f9f7f5' }}>
      {shouldRenderHeader && (
        <Header 
          variant={headerVariant}
          onLogout={() => console.log('Logout clicked')}
          onNavSelect={(navKey) => console.log('Nav selected:', navKey)}
          onSmartSuggestOpen={() => console.log('Smart suggest opened')}
        />
      )}
      <main className={`${mainPadding} ${className}`}>
        {children}
      </main>
    </div>
  );
} 