import React from 'react';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
  variant?: 'home' | 'results';
  className?: string;
}

export default function Layout({ children, variant = 'home', className = '' }: LayoutProps) {
  // Map our layout variants to header variants
  const headerVariant = variant === 'home' ? 'full' : 'short';
  
  return (
    <div className="min-h-screen" style={{ background: '#f9f7f5' }}>
      <Header 
        variant={headerVariant}
        onLogout={() => console.log('Logout clicked')}
        onNavSelect={(navKey) => console.log('Nav selected:', navKey)}
        onSmartSuggestOpen={() => console.log('Smart suggest opened')}
      />
      <main className={`${className}`}>
        {children}
      </main>
    </div>
  );
} 