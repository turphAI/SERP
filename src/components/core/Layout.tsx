'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
  variant?: 'home' | 'results' | 'landing';
  className?: string;
}

export default function Layout({ children, variant = 'home', className = '' }: LayoutProps) {
  const pathname = usePathname();
  
  // Map our layout variants to header variants
  const headerVariant = variant === 'home' ? 'full' : 'short';
  
  // Add more spacing for results pages since the header is shorter
  const mainPadding = variant === 'results' ? 'pt-8' : 'pt-4';
  
  // Don't render header for landing variant
  const shouldRenderHeader = variant !== 'landing';
  
  // Determine the feature homepage based on current route
  const getFeatureHomepage = () => {
    // If on the main landing page, return "/"
    if (pathname === '/') return '/';
    
    // Extract feature and version from pathname like "/answer/v1" or "/answer/v1/results"
    const pathSegments = pathname.split('/').filter(Boolean);
    
    if (pathSegments.length >= 2) {
      const feature = pathSegments[0];
      const version = pathSegments[1];
      return `/${feature}/${version}`;
    }
    
    // Fallback to main landing page
    return '/';
  };
  
  return (
    <div className="min-h-screen" style={{ background: '#f9f7f5' }}>
      {shouldRenderHeader && (
        <Header 
          variant={headerVariant}
          onLogout={() => console.log('Logout clicked')}
          onNavSelect={(navKey) => console.log('Nav selected:', navKey)}
          onSmartSuggestOpen={() => console.log('Smart suggest opened')}
          homeHref={getFeatureHomepage()}
        />
      )}
      <main className={`${mainPadding} ${className}`}>
        {children}
      </main>
    </div>
  );
} 