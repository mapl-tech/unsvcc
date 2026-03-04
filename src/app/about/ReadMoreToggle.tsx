'use client';

import { useState, useRef, useEffect, type ReactNode } from 'react';

interface ReadMoreToggleProps {
  children: ReactNode;
}

export default function ReadMoreToggle({ children }: ReadMoreToggleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isOpen]);

  return (
    <>
      <div
        ref={contentRef}
        style={{
          maxHeight,
          overflow: 'hidden',
          transition: 'max-height 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {children}
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="font-body font-semibold text-sm mt-5 inline-flex items-center gap-2 cursor-pointer"
        style={{
          color: '#E74A30',
          background: 'none',
          border: 'none',
          padding: 0,
          transition: 'opacity 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = '0.7';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = '1';
        }}
      >
        <span>{isOpen ? 'Read less' : 'Read more'}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          style={{
            transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </>
  );
}
