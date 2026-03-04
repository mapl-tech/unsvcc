'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { CloseIcon } from '@/components/icons';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  // Lock body scroll when mobile nav is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div
      className={`mobile-panel fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden ${
        isOpen ? 'open' : ''
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-soft-gray">
        <span className="font-heading text-impact-red font-bold text-lg">
          Menu
        </span>
        <button
          onClick={onClose}
          className="flex items-center justify-center"
          style={{ minWidth: '44px', minHeight: '44px' }}
          aria-label="Close menu"
        >
          <CloseIcon />
        </button>
      </div>

      {/* Links */}
      <div className="flex flex-col p-6 gap-1">
        {/* About Us section */}
        <span className="font-body text-charcoal font-semibold text-lg py-3 px-4">
          About Us
        </span>
        <Link
          href="/about"
          onClick={onClose}
          className="font-body text-warm-gray font-medium text-base py-2 px-4 pl-8 rounded-lg"
          style={{ transition: 'background 0.2s' }}
        >
          Our Mandate
        </Link>
        <Link
          href="/team"
          onClick={onClose}
          className="font-body text-warm-gray font-medium text-base py-2 px-4 pl-8 rounded-lg"
          style={{ transition: 'background 0.2s' }}
        >
          Our Team
        </Link>
        <Link
          href="/centre"
          onClick={onClose}
          className="font-body text-warm-gray font-medium text-base py-2 px-4 pl-8 rounded-lg"
          style={{ transition: 'background 0.2s' }}
        >
          UNSVCC Centre
        </Link>

        {/* Main links */}
        <Link
          href="/programs"
          onClick={onClose}
          className="font-body text-charcoal font-semibold text-lg py-3 px-4 rounded-lg"
          style={{ transition: 'background 0.2s' }}
        >
          Programs
        </Link>
        <Link
          href="/membership"
          onClick={onClose}
          className="font-body text-charcoal font-semibold text-lg py-3 px-4 rounded-lg"
          style={{ transition: 'background 0.2s' }}
        >
          Membership
        </Link>
        <Link
          href="/contact"
          onClick={onClose}
          className="font-body text-charcoal font-semibold text-lg py-3 px-4 rounded-lg"
          style={{ transition: 'background 0.2s' }}
        >
          Contact
        </Link>

        {/* CTA buttons */}
        <div className="mt-4 pt-4 border-t border-soft-gray">
          <Link
            href="/volunteer"
            onClick={onClose}
            className="btn-blue w-full text-center"
          >
            VOLUNTEER
          </Link>
          <Link
            href="/donate"
            onClick={onClose}
            className="btn-outline w-full text-center mt-3"
          >
            DONATE
          </Link>
        </div>
      </div>
    </div>
  );
}
