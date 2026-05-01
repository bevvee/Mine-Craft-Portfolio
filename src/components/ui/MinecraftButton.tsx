import React from 'react';

export function MinecraftButton({ children, onClick, primary = false, className = '', as = 'button', href }: { children: React.ReactNode, onClick?: () => void, primary?: boolean, className?: string, as?: 'button' | 'a', href?: string }) {
  const baseClasses = `px-4 py-3 inline-flex items-center justify-center font-display text-sm md:text-base ${primary ? 'pixel-btn-primary' : 'pixel-btn'} ${className}`;
  
  if (as === 'a') {
    return (
      <a href={href} className={baseClasses} onClick={onClick}>
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
}
