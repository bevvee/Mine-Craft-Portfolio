import React from 'react';

export function MinecraftPanel({ children, className = '', title }: { children: React.ReactNode, className?: string, title?: string }) {
  return (
    <div className={`pixel-panel p-4 md:p-6 relative ${className}`}>
      {title && (
        <h2 className="text-xl md:text-2xl mb-6 mc-text-shadow text-white border-b-4 border-gray-600 pb-2 inline-block">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
}
