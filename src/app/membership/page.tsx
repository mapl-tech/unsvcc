import type { Metadata } from 'next'
import ScrollReveal from '@/components/ui/ScrollReveal'
import GrainOverlay from '@/components/ui/GrainOverlay'
import StayInvolvedCTA from '@/components/layout/StayInvolvedCTA'
import MembershipForm from '@/components/forms/MembershipForm'

export const metadata: Metadata = {
  title: 'Become a Member | Senior Benefits & Services Stratford Ontario',
  description: 'Join UNSVCC and access affordable housing, grocery programs, shopping discounts, legal services, and more for seniors in Stratford, Ontario and across Canada.',
  alternates: { canonical: 'https://unsvcc.org/membership' },
}

export default function MembershipPage() {
  return (
    <>
      {/* ==================== HERO BANNER ==================== */}
      <section className="relative" style={{ background: '#E74A30' }}>
        <GrainOverlay id="hero-grain-membership" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20 text-center">
          <h1
            className="font-heading font-extrabold text-white text-4xl lg:text-5xl"
            style={{ letterSpacing: '-0.03em' }}
          >
            Membership
          </h1>
        </div>
      </section>

      {/* ==================== READY TO BECOME A MEMBER ==================== */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal delay={1}>
            <span
              className="font-heading font-bold text-sm text-advocacy-teal uppercase tracking-widest"
              style={{ letterSpacing: '0.12em' }}
            >
              Join Our Community
            </span>
            <h2
              className="font-heading font-extrabold text-charcoal text-3xl lg:text-4xl mt-4"
              style={{ letterSpacing: '-0.02em' }}
            >
              Ready To Become A Member?
            </h2>
            <p
              className="font-body text-charcoal text-lg mt-4"
              style={{ lineHeight: 1.8 }}
            >
              Become a United Senior Citizens Voice-for-Change Coalition member today
              and make a difference!
            </p>
          </ScrollReveal>
          <ScrollReveal delay={2} className="mt-8 max-w-3xl mx-auto">
            <p
              className="font-body text-warm-gray text-base"
              style={{ lineHeight: 1.9 }}
            >
              Your membership directly supports our vital programs, including
              affordable housing support, essential grocery assistance, access to
              discounted shopping, and crucial legal and financial services. It also
              connects you with a community dedicated to empowering and uplifting
              Canadian seniors.
            </p>
            <p
              className="font-body text-warm-gray text-base mt-5"
              style={{ lineHeight: 1.9 }}
            >
              Join us in creating lasting change. Register now and be part of the
              impact!
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== MEMBERSHIP BENEFITS ==================== */}
      <section className="pb-16 lg:pb-24" style={{ background: '#F4F4F4' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <ScrollReveal delay={1}>
            <h3
              className="font-heading font-bold text-charcoal text-2xl lg:text-3xl text-center"
              style={{ letterSpacing: '-0.02em' }}
            >
              Member Benefits
            </h3>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {/* Housing Support */}
            <ScrollReveal delay={1}>
              <div className="benefit-card">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: '#FDF0ED' }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E74A30" strokeWidth="2" strokeLinecap="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <h4 className="font-heading font-bold text-charcoal text-base">Housing Support</h4>
                <p className="font-body text-warm-gray text-sm mt-2" style={{ lineHeight: 1.7 }}>
                  Access to affordable rental housing database and homeownership assistance programs.
                </p>
              </div>
            </ScrollReveal>

            {/* Grocery Program */}
            <ScrollReveal delay={2}>
              <div className="benefit-card">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: '#E8F5F5' }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0E7C7B" strokeWidth="2" strokeLinecap="round">
                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 01-8 0" />
                  </svg>
                </div>
                <h4 className="font-heading font-bold text-charcoal text-base">Grocery Program</h4>
                <p className="font-body text-warm-gray text-sm mt-2" style={{ lineHeight: 1.7 }}>
                  Weekly grocery bags valued up to $100 for a $25 donation, exclusive to members.
                </p>
              </div>
            </ScrollReveal>

            {/* Shopping Discounts */}
            <ScrollReveal delay={3}>
              <div className="benefit-card">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: '#FDF6E3' }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4883E" strokeWidth="2" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M16 8l-8 8" />
                    <path d="M8.5 8H8v.5" />
                    <path d="M16 15.5v.5h-.5" />
                  </svg>
                </div>
                <h4 className="font-heading font-bold text-charcoal text-base">Shopping Discounts</h4>
                <p className="font-body text-warm-gray text-sm mt-2" style={{ lineHeight: 1.7 }}>
                  Exclusive discount shopping from participating suppliers and service providers.
                </p>
              </div>
            </ScrollReveal>

            {/* Legal & Financial */}
            <ScrollReveal delay={4}>
              <div className="benefit-card">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: '#FDF0ED' }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E74A30" strokeWidth="2" strokeLinecap="round">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                </div>
                <h4 className="font-heading font-bold text-charcoal text-base">Legal &amp; Financial</h4>
                <p className="font-body text-warm-gray text-sm mt-2" style={{ lineHeight: 1.7 }}>
                  Affordable legal advice, estate planning documents, tax preparation, and insurance support.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ==================== MEMBERSHIP FORM ==================== */}
      <section className="py-16 lg:py-24" style={{ background: '#FDF0ED' }}>
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <ScrollReveal delay={1}>
            <div className="text-center">
              <h3
                className="font-heading font-bold text-charcoal text-2xl lg:text-3xl"
                style={{ letterSpacing: '-0.02em' }}
              >
                Register Today
              </h3>
              <p
                className="font-body text-warm-gray text-base mt-3"
                style={{ lineHeight: 1.8 }}
              >
                Choose your membership type and fill out the form below.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <MembershipForm />
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== STAY INVOLVED CTA ==================== */}
      <StayInvolvedCTA />
    </>
  )
}
