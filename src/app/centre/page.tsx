import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GrainOverlay from '@/components/ui/GrainOverlay';
import StayInvolvedCTA from '@/components/layout/StayInvolvedCTA';

export const metadata: Metadata = {
  title: 'UNSVCC Community Centre | Senior Resources Stratford Ontario',
  description: 'The UNSVCC Centre in Stratford, Ontario will be a one-stop resource hub for seniors, offering programs, services, and community support to fight senior poverty.',
  alternates: { canonical: 'https://unsvcc.org/centre' },
};

export default function CentrePage() {
  return (
    <>
      {/* ==================== HERO BANNER ==================== */}
      <section className="relative" style={{ background: '#E74A30' }}>
        <GrainOverlay id="heroGrain" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20 text-center">
          <h1
            className="font-heading font-extrabold text-white text-4xl lg:text-5xl"
            style={{ letterSpacing: '-0.03em' }}
          >
            UNSVCC Centre
          </h1>
        </div>
      </section>

      {/* ==================== INTRO SECTION ==================== */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal delay={1}>
            <span
              className="font-heading font-bold text-sm text-advocacy-teal uppercase tracking-widest"
              style={{ letterSpacing: '0.12em' }}
            >
              Building The Future
            </span>
            <h2
              className="font-heading font-extrabold text-charcoal text-3xl lg:text-4xl mt-4"
              style={{ letterSpacing: '-0.02em' }}
            >
              Help Build The National Senior Support Center
            </h2>
            <p
              className="font-body text-charcoal text-lg mt-4"
              style={{ lineHeight: 1.8 }}
            >
              <em>Something New, Different, And Better For Canadian Seniors</em>
            </p>
          </ScrollReveal>
          <ScrollReveal delay={2} className="mt-8 max-w-3xl mx-auto">
            <p
              className="font-body text-warm-gray text-base"
              style={{ lineHeight: 1.9 }}
            >
              Powered by Numbers, Changes Through Action. With your support, we can make it grow.
              The UNITED Senior Citizen Voice-For-Change Coalition is a federally registered
              non-profit organization advocating for senior citizens. We are opening Canada&apos;s
              first National Senior Citizen Support Response Center in Stratford, Ontario.
            </p>
            <p
              className="font-body text-warm-gray text-base mt-5"
              style={{ lineHeight: 1.9 }}
            >
              The UNSVCC Centre will be a one-stop-shop for seniors to access resources, services,
              and support to help fight senior poverty through real, actionable programs,
              independently funded by membership, donations, and community partnerships.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== WHAT THE CENTRE OFFERS ==================== */}
      <section className="pb-16 lg:pb-24" style={{ background: '#F4F4F4' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <ScrollReveal delay={1}>
            <h3
              className="font-heading font-bold text-charcoal text-2xl lg:text-3xl text-center"
              style={{ letterSpacing: '-0.02em' }}
            >
              What The Centre Will Offer
            </h3>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <ScrollReveal delay={1}>
              <div className="benefit-card">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: '#FDF0ED' }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#E74A30"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87" />
                    <path d="M16 3.13a4 4 0 010 7.75" />
                  </svg>
                </div>
                <h4 className="font-heading font-bold text-charcoal text-base">Community Hub</h4>
                <p
                  className="font-body text-warm-gray text-sm mt-2"
                  style={{ lineHeight: 1.7 }}
                >
                  A central gathering place for seniors to connect, share resources, and find
                  support.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="benefit-card">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: '#E8F5F5' }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0E7C7B"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h4 className="font-heading font-bold text-charcoal text-base">
                  Support Services
                </h4>
                <p
                  className="font-body text-warm-gray text-sm mt-2"
                  style={{ lineHeight: 1.7 }}
                >
                  One-stop access to all UNSVCC programs including grocery, housing, legal, and
                  financial aid.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={3}>
              <div className="benefit-card">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: '#FDF6E3' }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D4883E"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
                  </svg>
                </div>
                <h4 className="font-heading font-bold text-charcoal text-base">
                  Education &amp; Advocacy
                </h4>
                <p
                  className="font-body text-warm-gray text-sm mt-2"
                  style={{ lineHeight: 1.7 }}
                >
                  Workshops, information sessions, and advocacy training to empower senior voices.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={4}>
              <div className="benefit-card">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: '#FDF0ED' }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#E74A30"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </div>
                <h4 className="font-heading font-bold text-charcoal text-base">
                  Wellness Programs
                </h4>
                <p
                  className="font-body text-warm-gray text-sm mt-2"
                  style={{ lineHeight: 1.7 }}
                >
                  Health and wellness check-ins, family support, and social isolation prevention
                  initiatives.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ==================== BUILDING & FUNDRAISING ==================== */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollReveal delay={1}>
            <div className="text-center">
              <h3
                className="font-heading font-bold text-charcoal text-2xl lg:text-3xl"
                style={{ letterSpacing: '-0.02em' }}
              >
                Our Future Home
              </h3>
              <p
                className="font-body text-warm-gray text-base mt-3"
                style={{ lineHeight: 1.8 }}
              >
                580 Hibernia Street, Stratford, Ontario
              </p>
            </div>
          </ScrollReveal>

          {/* Building Image */}
          <ScrollReveal delay={2} className="mt-10">
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src="/images/centre/building.jpg"
                alt="UNSVCC National Senior Support Center building at 580 Hibernia Street, Stratford, Ontario"
                className="w-full h-auto object-cover"
              />
            </div>
          </ScrollReveal>

          {/* Fundraising details */}
          <ScrollReveal delay={3} className="mt-10 max-w-3xl mx-auto">
            <p
              className="font-body text-warm-gray text-base"
              style={{ lineHeight: 1.9 }}
            >
              We are raising funds to purchase this building by asking for{' '}
              <strong className="text-charcoal">
                500 individuals or businesses to donate $500 each
              </strong>
              . This building will serve as the home of the National Senior Support Center.
            </p>
            <p
              className="font-body text-warm-gray text-base mt-5"
              style={{ lineHeight: 1.9 }}
            >
              In return, donors will be recognized on our Foundation Builders Wall, receive
              membership benefits, and be part of something historic. Let&apos;s build a place of{' '}
              <strong className="text-charcoal">HOPE</strong>, for parents, grandparents, friends,
              and neighbors in Stratford, Ontario and across Canada, where we can share resources and find solutions for seniors.
            </p>
            <p className="font-heading font-bold text-charcoal text-base mt-8 text-center">
              Together, YES, WE CAN.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== BE A FOUNDATION BUILDER ==================== */}
      <section className="py-16 lg:py-24" style={{ background: '#FDF0ED' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal delay={1}>
            <span
              className="font-heading font-bold text-sm text-advocacy-teal uppercase tracking-widest"
              style={{ letterSpacing: '0.12em' }}
            >
              Support The Vision
            </span>
            <h3
              className="font-heading font-bold text-charcoal text-2xl lg:text-3xl mt-4"
              style={{ letterSpacing: '-0.02em' }}
            >
              Be a Foundation Builder
            </h3>
            <p
              className="font-body text-warm-gray text-base mt-4 max-w-xl mx-auto"
              style={{ lineHeight: 1.8 }}
            >
              Join the 500 donors helping us make this vision a reality. Your $500 contribution
              will be recognized on our Foundation Builders Wall.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link href="/donate" className="btn-blue">
                DONATE NOW
              </Link>
              <Link href="/contact" className="btn-outline">
                CONTACT US
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== STAY INVOLVED CTA BANNER ==================== */}
      <StayInvolvedCTA />
    </>
  );
}
