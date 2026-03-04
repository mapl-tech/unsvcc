'use client';

import { useState, useEffect, useCallback } from 'react';
import { programData, type Program } from '@/lib/program-data';
import { SearchIcon, ArrowRightIcon, CloseIcon } from '@/components/icons';
import ScrollReveal from '@/components/ui/ScrollReveal';

const PROGRAM_KEYS = Object.keys(programData);

// Map of delay values for staggered card animation (cycles through 1, 2, 3)
function getDelay(index: number): 1 | 2 | 3 {
  return ((index % 3) + 1) as 1 | 2 | 3;
}

export default function ProgramsContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const filteredKeys = PROGRAM_KEYS.filter((key) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    const program = programData[key];
    return (
      program.title.toLowerCase().includes(q) ||
      program.body.toLowerCase().includes(q)
    );
  });

  const openModal = useCallback((key: string) => {
    setActiveModal(key);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setActiveModal(null);
    document.body.style.overflow = '';
  }, []);

  // Escape key closes modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [closeModal]);

  const activeProgram = activeModal ? programData[activeModal] : null;

  return (
    <>
      {/* ==================== SEARCH PROGRAMS ==================== */}
      <section className="py-16 lg:py-20" style={{ background: '#F4F4F4' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2
              className="font-heading font-extrabold text-3xl lg:text-4xl text-charcoal"
              style={{ letterSpacing: '-0.02em' }}
            >
              Search Programs
            </h2>
            <div className="mt-8 relative inline-block w-full max-w-md">
              <SearchIcon
                width={20}
                height={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                stroke="#6E6E6E"
              />
              <input
                type="text"
                placeholder="Search for a program..."
                className="search-input w-full pl-12 pr-5 py-4 font-body text-base text-charcoal bg-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== PROGRAM CARDS GRID ==================== */}
      <section id="programs" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredKeys.map((key, index) => {
              const program = programData[key];
              return (
                <ScrollReveal key={key} delay={getDelay(index)}>
                  <button
                    type="button"
                    className="program-card bg-white rounded-2xl overflow-hidden shadow-card card-lift text-left w-full"
                    onClick={() => openModal(key)}
                    aria-label={`Learn more about ${program.title}`}
                  >
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-52 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="font-heading font-bold text-charcoal text-lg leading-snug">
                        {program.title}
                      </h3>
                      <p
                        className="font-body text-warm-gray text-sm mt-3 card-body-text"
                        style={{ lineHeight: 1.7 }}
                      >
                        {program.body}
                      </p>
                      <span className="link-arrow mt-5 inline-flex text-sm">
                        Learn More
                        <ArrowRightIcon width={14} height={14} />
                      </span>
                    </div>
                  </button>
                </ScrollReveal>
              );
            })}
          </div>

          {/* No results message */}
          {filteredKeys.length === 0 && (
            <div className="text-center py-16">
              <p className="font-body text-warm-gray text-lg">
                No programs found matching your search.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ==================== PROGRAM MODAL ==================== */}
      {activeProgram && (
        <div
          className={`program-modal-overlay${activeModal ? ' active' : ''}`}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="program-modal">
            <div className="relative">
              <img
                src={activeProgram.image}
                alt={activeProgram.title}
                className="w-full h-56 sm:h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg"
                style={{
                  minWidth: '44px',
                  minHeight: '44px',
                  transition: 'background 0.2s',
                }}
                aria-label="Close modal"
              >
                <CloseIcon width={18} height={18} stroke="#333" strokeWidth={2.5} />
              </button>
            </div>
            <div className="p-8">
              <h3 className="font-heading font-bold text-charcoal text-xl lg:text-2xl leading-snug">
                {activeProgram.title}
              </h3>
              <div
                className="font-body text-warm-gray text-base mt-5"
                style={{ lineHeight: 1.8 }}
              >
                {activeProgram.body.split('\n\n').map((paragraph, i) => (
                  <p key={i} className={i > 0 ? 'mt-4' : ''}>
                    {paragraph}
                  </p>
                ))}
                {activeProgram.link && (
                  <a
                    href={activeProgram.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold mt-6 inline-flex text-sm"
                    style={{
                      padding: '10px 28px',
                      minHeight: '42px',
                      fontSize: '13px',
                    }}
                  >
                    Visit Website
                    <ArrowRightIcon width={14} height={14} style={{ marginLeft: '6px' }} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
