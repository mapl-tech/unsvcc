import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import GrainOverlay from '@/components/ui/GrainOverlay'
import StayInvolvedCTA from '@/components/layout/StayInvolvedCTA'
import VolunteerForm from '@/components/forms/VolunteerForm'
import AccordionFAQ from '@/components/sections/volunteer/AccordionFAQ'

export const metadata: Metadata = {
  title: 'Volunteer',
}

export default function VolunteerPage() {
  return (
    <>
      {/* ==================== HERO BANNER ==================== */}
      <section className="relative" style={{ background: '#E74A30' }}>
        <GrainOverlay id="hero-grain-volunteer" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20 text-center">
          <h1
            className="font-heading font-extrabold text-white text-4xl lg:text-5xl"
            style={{ letterSpacing: '-0.03em' }}
          >
            Volunteer
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
              Give the gift of your time
            </h2>
            <p
              className="font-body text-warm-gray text-lg mt-5"
              style={{ lineHeight: 1.8 }}
            >
              Build connections and leverage your unique skills to support people
              living with unmet needs in our community.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== IMPACT SECTION (Text + Image) ==================== */}
      <section style={{ background: '#F4F4F4' }} className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <ScrollReveal delay={1}>
              <span
                className="font-heading font-bold text-sm text-advocacy-teal uppercase tracking-widest"
                style={{ letterSpacing: '0.12em' }}
              >
                Make A Difference
              </span>
              <h3
                className="font-heading font-extrabold text-charcoal text-2xl lg:text-3xl mt-4"
                style={{ letterSpacing: '-0.02em' }}
              >
                How will you make your unique impact?
              </h3>
              <p
                className="font-body text-warm-gray text-base mt-5"
                style={{ lineHeight: 1.9 }}
              >
                Volunteers are truly the heart of the United Senior Citizens
                Voice-for-Change Coalition, playing a crucial role in keeping our
                doors open and enabling us to provide essential programs and services
                to Canadian seniors. Their incredible dedication spans from serving on
                our board of directors and supporting vital fundraising campaigns to
                working directly with those in need through our various programs.
              </p>
              <p
                className="font-body text-warm-gray text-base mt-4"
                style={{ lineHeight: 1.9 }}
              >
                Your generous donation helps us empower these invaluable volunteers,
                allowing them to continue making a transformative impact in our
                community and ensuring that Canadian seniors receive the support and
                dignity they deserve.
              </p>
            </ScrollReveal>

            {/* Image */}
            <ScrollReveal delay={2}>
              <div className="rounded-2xl overflow-hidden shadow-card">
                <img
                  src="/images/volunteer.png"
                  alt="UNSVCC Volunteers working together to support Canadian seniors"
                  className="w-full h-auto object-cover"
                  style={{ aspectRatio: '4/3' }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ==================== VOLUNTEER SIGN UP FORM ==================== */}
      <section id="signup" className="py-16 lg:py-24 bg-white">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <ScrollReveal delay={1}>
            <div className="text-center">
              <span
                className="font-heading font-bold text-sm text-advocacy-teal uppercase tracking-widest"
                style={{ letterSpacing: '0.12em' }}
              >
                Join Us
              </span>
              <h3
                className="font-heading font-bold text-charcoal text-2xl lg:text-3xl mt-4"
                style={{ letterSpacing: '-0.02em' }}
              >
                Volunteer Sign Up
              </h3>
              <p
                className="font-body text-warm-gray text-base mt-3"
                style={{ lineHeight: 1.8 }}
              >
                Fill out the form below and we&apos;ll be in touch about volunteer
                opportunities.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <VolunteerForm />
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== FAQ ACCORDION ==================== */}
      <AccordionFAQ />

      {/* ==================== DIFFERENT WAY TO SUPPORT ==================== */}
      <section className="py-16 lg:py-20" style={{ background: '#FDF0ED' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <ScrollReveal delay={1}>
            <div
              className="overflow-hidden"
              style={{ background: '#2A2A3D', borderRadius: '20px' }}
            >
              <div className="grid md:grid-cols-2 items-center">
                {/* Image */}
                <div className="h-64 md:h-full" style={{ minHeight: '280px' }}>
                  <img
                    src="/images/volunteer-bottom.jpg"
                    alt="Supporting Canadian seniors through UNSVCC"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Text */}
                <div className="p-8 lg:p-12">
                  <h3
                    className="font-heading font-extrabold text-white text-2xl lg:text-3xl"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    Looking for a different way to support us?
                  </h3>
                  <p
                    className="font-body text-white/70 text-base mt-4"
                    style={{ lineHeight: 1.8 }}
                  >
                    Every single donation, no matter how small, has an impact and
                    will be invested directly in non-profit community programs.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-8">
                    <Link href="/membership" className="btn-gold">
                      BECOME A MEMBER
                    </Link>
                    <Link
                      href="/donate"
                      className="btn-outline"
                      style={{
                        color: '#FFFFFF',
                        borderColor: 'rgba(255,255,255,0.4)',
                        transition:
                          'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), background 0.2s ease, border-color 0.2s ease',
                      }}
                    >
                      DONATE
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== STAY INVOLVED CTA ==================== */}
      <StayInvolvedCTA />
    </>
  )
}
