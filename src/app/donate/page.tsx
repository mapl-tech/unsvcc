import type { Metadata } from 'next'
import ScrollReveal from '@/components/ui/ScrollReveal'
import GrainOverlay from '@/components/ui/GrainOverlay'
import StayInvolvedCTA from '@/components/layout/StayInvolvedCTA'
import DonationWidget from '@/components/forms/DonationWidget'
import { PROGRESS_BARS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Donate',
}

export default function DonatePage() {
  return (
    <>
      {/* ==================== HERO BANNER ==================== */}
      <section className="relative" style={{ background: '#E74A30' }}>
        <GrainOverlay id="hero-grain-donate" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20 text-center">
          <h1
            className="font-heading font-extrabold text-white text-4xl lg:text-5xl"
            style={{ letterSpacing: '-0.03em' }}
          >
            Donate
          </h1>
        </div>
      </section>

      {/* ==================== TAGLINE SECTION ==================== */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal delay={1}>
            <h2
              className="font-heading font-extrabold text-charcoal text-3xl lg:text-4xl"
              style={{ letterSpacing: '-0.02em' }}
            >
              Help us serve more families in our community
            </h2>
            <p
              className="font-body text-warm-gray text-lg mt-5"
              style={{ lineHeight: 1.8 }}
            >
              Every single donation, no matter how small, has an impact and will be
              invested directly in non-profit community programs for Canadian seniors.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== DONATION FORM ==================== */}
      <section className="py-16 lg:py-24" style={{ background: '#F4F4F4' }}>
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <ScrollReveal delay={1}>
            <DonationWidget />
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== WHERE YOUR MONEY GOES ==================== */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ScrollReveal delay={1}>
            <div className="text-center">
              <span
                className="font-heading font-bold text-sm text-advocacy-teal uppercase tracking-widest"
                style={{ letterSpacing: '0.12em' }}
              >
                Your Impact
              </span>
              <h3
                className="font-heading font-extrabold text-charcoal text-2xl lg:text-3xl mt-4"
                style={{ letterSpacing: '-0.02em' }}
              >
                Where Your Money Goes
              </h3>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {/* Community Programs */}
            <ScrollReveal delay={1}>
              <div className="impact-card shadow-card">
                <div
                  className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center"
                  style={{ background: '#FDF0ED' }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E74A30" strokeWidth="2" strokeLinecap="round">
                    <path d="M3 3h18v18H3z" />
                    <path d="M3 9h18" />
                    <path d="M9 21V9" />
                  </svg>
                </div>
                <h4 className="font-heading font-bold text-charcoal text-base mt-5">Community Programs</h4>
                <p className="font-body text-warm-gray text-sm mt-2" style={{ lineHeight: 1.7 }}>
                  Fund our 13 programs that provide groceries, housing support, legal aid, and more to seniors in need.
                </p>
              </div>
            </ScrollReveal>

            {/* Volunteer Support */}
            <ScrollReveal delay={2}>
              <div className="impact-card shadow-card">
                <div
                  className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center"
                  style={{ background: '#E8F5F5' }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0E7C7B" strokeWidth="2" strokeLinecap="round">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h4 className="font-heading font-bold text-charcoal text-base mt-5">Volunteer Support</h4>
                <p className="font-body text-warm-gray text-sm mt-2" style={{ lineHeight: 1.7 }}>
                  Empower our volunteers with training, resources, and tools to better serve Canadian seniors.
                </p>
              </div>
            </ScrollReveal>

            {/* Senior Advocacy */}
            <ScrollReveal delay={3}>
              <div className="impact-card shadow-card">
                <div
                  className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center"
                  style={{ background: '#FDF6E3' }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4883E" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h4 className="font-heading font-bold text-charcoal text-base mt-5">Senior Advocacy</h4>
                <p className="font-body text-warm-gray text-sm mt-2" style={{ lineHeight: 1.7 }}>
                  Advance senior rights through education, policy advocacy, and direct government engagement.
                </p>
              </div>
            </ScrollReveal>

            {/* UNSVCC Centre */}
            <ScrollReveal delay={4}>
              <div className="impact-card shadow-card">
                <div
                  className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center"
                  style={{ background: '#FDF0ED' }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E74A30" strokeWidth="2" strokeLinecap="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <h4 className="font-heading font-bold text-charcoal text-base mt-5">UNSVCC Centre</h4>
                <p className="font-body text-warm-gray text-sm mt-2" style={{ lineHeight: 1.7 }}>
                  Help build and sustain our community centre — a safe space for seniors to connect, learn, and thrive.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ==================== FUNDRAISING PROGRESS ==================== */}
      <section className="py-16 lg:py-24" style={{ background: '#FDF0ED' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <ScrollReveal delay={1}>
            <div className="text-center">
              <h3
                className="font-heading text-impact-red font-bold text-2xl lg:text-3xl"
                style={{ letterSpacing: '-0.02em' }}
              >
                Help us empower more seniors in our community
              </h3>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <div className="mt-12 space-y-8">
              {PROGRESS_BARS.map((bar) => (
                <div key={bar.label}>
                  <div className="flex justify-between items-end mb-2">
                    <span className="font-body font-semibold text-charcoal text-sm">
                      {bar.label}
                    </span>
                    <span className="font-heading font-bold text-advocacy-teal text-lg">
                      ${bar.current.toLocaleString()}{' '}
                      <span className="text-warm-gray font-normal text-sm">
                        / ${bar.goal.toLocaleString()}
                      </span>
                    </span>
                  </div>
                  <div className="progress-track">
                    <div
                      className="progress-fill"
                      style={{ width: `${bar.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== STAY INVOLVED CTA ==================== */}
      <StayInvolvedCTA />
    </>
  )
}
