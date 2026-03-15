import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import GrainOverlay from '@/components/ui/GrainOverlay'
import StayInvolvedCTA from '@/components/layout/StayInvolvedCTA'
import ContactForm from '@/components/forms/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us | UNSVCC Stratford Ontario',
  description: 'Get in touch with UNSVCC in Stratford, Ontario. Call us at 519-703-3443 for general inquiries or 416-434-0165 for membership services. We are here to help Canadian seniors.',
  alternates: { canonical: 'https://unsvcc.org/contact' },
}

export default function ContactPage() {
  return (
    <>
      {/* ==================== HERO BANNER ==================== */}
      <section className="relative" style={{ background: '#E74A30' }}>
        <GrainOverlay id="hero-grain-contact" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <h1
            className="font-heading font-extrabold text-white text-4xl lg:text-5xl"
            style={{ letterSpacing: '-0.03em' }}
          >
            Contact Us
          </h1>
        </div>
      </section>

      {/* ==================== CONTACT FORM + INFO ==================== */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-20">
            {/* Left: Form */}
            <div className="lg:col-span-3">
              <ScrollReveal delay={1}>
                <h2
                  className="font-heading font-bold text-impact-red text-2xl lg:text-3xl"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  Let&apos;s Connect
                </h2>
                <p
                  className="font-body text-warm-gray text-base mt-4"
                  style={{ lineHeight: 1.8 }}
                >
                  Whether you&apos;re looking for{' '}
                  <strong className="text-charcoal">
                    information on our programs, supports or opportunities to get
                    involved
                  </strong>
                  , we&apos;re here to help. Let us know a bit more about your
                  request, and we&apos;ll reach out shortly to provide the assistance
                  you need.
                </p>
                <ContactForm />
              </ScrollReveal>
            </div>

            {/* Right: Contact info */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={2}>
                <div className="lg:mt-14">
                  <div className="space-y-6">
                    {/* Phone */}
                    <div>
                      <p
                        className="font-body text-warm-gray text-sm"
                        style={{ lineHeight: 1.8 }}
                      >
                        Phone:{' '}
                        <a
                          href="tel:+15197033443"
                          className="text-impact-red font-semibold hover:underline"
                          style={{ transition: 'color 0.2s' }}
                        >
                          +1 519 703 3443
                        </a>
                      </p>
                    </div>

                    {/* Email */}
                    <div>
                      <p className="font-body text-warm-gray text-sm">
                        General Inquiries:
                      </p>
                      <a
                        href="mailto:info@unsvcc.org"
                        className="font-body text-impact-red font-semibold text-sm hover:underline"
                        style={{ transition: 'color 0.2s' }}
                      >
                        info@unsvcc.org
                      </a>
                    </div>

                    {/* Registration */}
                    <div>
                      <p className="font-body text-warm-gray text-sm">
                        CRA Tax compliance number:
                      </p>
                      <p className="font-body text-charcoal font-semibold text-sm">
                        753212158RC0001
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== HOURS OF OPERATION ==================== */}
      <section className="pb-16 lg:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal delay={1}>
            <h2
              className="font-heading font-bold text-charcoal text-2xl lg:text-3xl"
              style={{ letterSpacing: '-0.02em' }}
            >
              Hours of Operation
            </h2>
            <p
              className="font-body text-charcoal text-base mt-5"
              style={{ lineHeight: 1.8 }}
            >
              <strong>
                Working Hours (GMT+4): Mon – Fri: 9:00 am to 5:00 pm
              </strong>
            </p>
            <p
              className="font-body text-warm-gray text-base mt-2"
              style={{ lineHeight: 1.8 }}
            >
              Please contact staff by dialling their extension or by email during
              hours of operation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== DONATION CTA ==================== */}
      <section className="py-20 lg:py-28" style={{ background: '#FDF0ED' }}>
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2
              className="font-heading text-impact-red font-bold text-2xl lg:text-3xl"
              style={{ letterSpacing: '-0.02em' }}
            >
              People like you make our
              <br className="hidden sm:block" /> vision possible.
            </h2>
            <p
              className="font-body text-warm-gray text-base lg:text-lg mt-6"
              style={{ lineHeight: 1.8 }}
            >
              Your donations make a real and immediate impact on our community.
              Senior journeys are diverse, and so are the ways you can give, whether
              monthly, one-time, or through volunteering your time and skills.
            </p>
            <Link href="/donate" className="btn-gold mt-8 inline-flex">
              Donate Now
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== STAY INVOLVED CTA ==================== */}
      <StayInvolvedCTA />
    </>
  )
}
