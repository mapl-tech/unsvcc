'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/lib/constants';
import { ChevronDownIcon, MenuIcon } from '@/components/icons';
import MobileNav from '@/components/layout/MobileNav';

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      className="sticky top-0 z-50 bg-white"
      style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.06)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="UNSVCC Home"
          >
            <img
              src="/brand/unsvcc-logo.svg"
              alt="UNSVCC Logo"
              className="h-[60px] lg:h-[70px] w-auto"
              style={{ imageRendering: 'auto', WebkitBackfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((item) => {
              if ('dropdown' in item && item.dropdown) {
                // Dropdown item (About Us)
                const isDropdownActive = item.dropdown.some(
                  (child: { href: string }) => pathname === child.href
                );

                return (
                  <div key={item.label} className="nav-dropdown">
                    <span
                      className={`nav-link nav-dropdown-trigger ${
                        isDropdownActive ? 'active' : ''
                      }`}
                    >
                      {item.label}
                      <ChevronDownIcon width={12} height={12} />
                    </span>
                    <div className="nav-dropdown-menu">
                      {item.dropdown.map(
                        (child: { label: string; href: string }) => (
                          <Link key={child.href} href={child.href}>
                            {child.label}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                );
              }

              // Regular link
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`nav-link ${
                    pathname === item.href ? 'active' : ''
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/volunteer"
              className="btn-blue"
              style={{
                padding: '10px 28px',
                minHeight: '42px',
                fontSize: '13px',
              }}
            >
              VOLUNTEER
            </Link>
            <Link
              href="/donate"
              className="btn-outline"
              style={{
                padding: '10px 28px',
                minHeight: '42px',
                fontSize: '13px',
              }}
            >
              DONATE
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden flex items-center justify-center"
            style={{ minWidth: '44px', minHeight: '44px' }}
            aria-label="Open menu"
            aria-expanded={isMobileOpen}
            onClick={() => setIsMobileOpen(true)}
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      <MobileNav
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </nav>
  );
}
