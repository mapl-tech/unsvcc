'use client';

import { useState, type FormEvent } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  }

  return (
    <form
      className="flex flex-col sm:flex-row gap-3 mt-8"
      onSubmit={handleSubmit}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-5 py-3.5 rounded-lg font-body text-base text-charcoal bg-white border-0"
        style={{ minHeight: '48px', outline: 'none' }}
      />
      <button
        type="submit"
        style={{
          whiteSpace: 'nowrap',
          background: '#FFFFFF',
          color: '#333333',
          borderRadius: '8px',
          minHeight: '48px',
          padding: '14px 36px',
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: '15px',
          letterSpacing: '0.02em',
          textTransform: 'uppercase' as const,
          border: 'none',
          cursor: 'pointer',
          transition:
            'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease',
        }}
        onMouseEnter={(e) => {
          const target = e.currentTarget;
          target.style.transform = 'translateY(-2px)';
          target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
        }}
        onMouseLeave={(e) => {
          const target = e.currentTarget;
          target.style.transform = '';
          target.style.boxShadow = '';
        }}
      >
        {submitted ? 'THANK YOU!' : 'SUBSCRIBE'}
      </button>
    </form>
  );
}
