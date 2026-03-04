import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import StayInvolvedCTA from '@/components/layout/StayInvolvedCTA';
import BioModal from './BioModal';

export const metadata: Metadata = {
  title: 'Our Team',
};

export default function TeamPage() {
  return (
    <>
      {/* ==================== PAGE HEADER: OUR TEAM ==================== */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1
              className="font-heading font-extrabold text-4xl lg:text-5xl xl:text-[3.4rem] text-charcoal"
              style={{ letterSpacing: '-0.03em' }}
            >
              Our Team
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== DIRECTORS ==================== */}
      <section className="py-20 lg:py-28" style={{ background: '#F4F4F4' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h2
                className="font-heading font-extrabold text-3xl lg:text-4xl text-charcoal"
                style={{ letterSpacing: '-0.02em' }}
              >
                Directors
              </h2>
              <div className="w-16 h-0.5 bg-charcoal mx-auto mt-4" />
            </div>
          </ScrollReveal>

          {/* Director card + Bio Modal (client component) */}
          <ScrollReveal delay={2}>
            <BioModal />
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== COMMUNITY PARTNERS ==================== */}
      <section className="py-20 lg:py-28" style={{ background: '#FDF0ED' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <ScrollReveal>
              <h2
                className="font-heading font-extrabold text-3xl lg:text-4xl text-charcoal"
                style={{ letterSpacing: '-0.02em' }}
              >
                Community Partners
              </h2>
              <p
                className="font-body text-warm-gray text-base lg:text-lg mt-6"
                style={{ lineHeight: 1.8 }}
              >
                We believe that meaningful change requires strong partnerships. The UNSVCC
                collaborates with community organizations, government agencies, healthcare
                providers, and local businesses to expand the reach and impact of our programs.
              </p>
              <p
                className="font-body text-warm-gray text-base lg:text-lg mt-4"
                style={{ lineHeight: 1.8 }}
              >
                Together with our partners, we are building a network of support that ensures no
                senior faces challenges alone. If your organization shares our commitment to senior
                advocacy, we invite you to join us.
              </p>
              <Link
                href="/contact"
                className="link-arrow mt-6 inline-flex"
              >
                Become a partner
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M5 10h10M11 6l4 4-4 4" />
                </svg>
              </Link>
            </ScrollReveal>
            {/* Image */}
            <ScrollReveal delay={2} className="rounded-2xl overflow-hidden shadow-card">
              <img
                src="/images/team/community-partner.jpg"
                alt="UNSVCC community partners at an advocacy event"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: '10/7' }}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ==================== STAY INVOLVED CTA BANNER ==================== */}
      <StayInvolvedCTA />
    </>
  );
}
