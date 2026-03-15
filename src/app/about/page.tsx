import type { Metadata } from 'next';
import ScrollReveal from '@/components/ui/ScrollReveal';
import DonationWidget from '@/components/forms/DonationWidget';
import StayInvolvedCTA from '@/components/layout/StayInvolvedCTA';
import ReadMoreToggle from './ReadMoreToggle';

export const metadata: Metadata = {
  title: 'About Us & Our Mandate | Senior Advocacy Stratford Ontario',
  description: 'Learn about UNSVCC, a Stratford, Ontario nonprofit dedicated to fighting senior citizen poverty in Canada through advocacy, community programs, and policy change.',
  alternates: { canonical: 'https://unsvcc.org/about' },
};

export default function AboutPage() {
  return (
    <>
      {/* ==================== PAGE HEADER: OUR MANDATE ==================== */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1
              className="font-heading font-extrabold text-4xl lg:text-5xl xl:text-[3.4rem] text-charcoal"
              style={{ letterSpacing: '-0.03em' }}
            >
              Our Mandate
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== OUR MISSION ==================== */}
      <section className="py-20 lg:py-28" style={{ background: '#F4F4F4' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <ScrollReveal>
              <h2
                className="font-heading font-extrabold text-3xl lg:text-4xl text-charcoal"
                style={{ letterSpacing: '-0.02em' }}
              >
                Our Mission
              </h2>
              <p
                className="font-body text-warm-gray text-base lg:text-lg mt-6"
                style={{ lineHeight: 1.8 }}
              >
                Our Mission for the United Senior Citizen Voice for Change Coalition (UNSVCC) is to work with and advocate for seniors, and community partners, who are committed to promoting the well-being and dignity of seniors. We will focus on encouraging civic engagement and promoting policy reform that is aligned with the priority needs of seniors in our community.
              </p>
              <p
                className="font-body text-warm-gray text-base lg:text-lg mt-4"
                style={{ lineHeight: 1.8 }}
              >
                We will also focus our efforts on addressing systemic issues that affect seniors, including healthcare access, housing affordability, financial security, and social isolation. Through education, outreach, and grassroots organizing, we aim to create a strong, united voice that drives meaningful change for older adults across our communities.
              </p>
            </ScrollReveal>
            {/* Image */}
            <ScrollReveal delay={2} className="rounded-2xl overflow-hidden shadow-card">
              <img
                src="/images/about/our-mission-2.jpg"
                alt="Seniors at a UNSVCC community event"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: '10/7' }}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ==================== OUR STORY ==================== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Image */}
            <ScrollReveal className="rounded-2xl overflow-hidden shadow-card">
              <img
                src="/images/about/our-story-2.jpg"
                alt="Our Story - UNSVCC community"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: '10/7' }}
              />
            </ScrollReveal>
            {/* Text */}
            <ScrollReveal delay={2}>
              <h2
                className="font-heading font-extrabold text-3xl lg:text-4xl text-charcoal"
                style={{ letterSpacing: '-0.02em' }}
              >
                Our Story
              </h2>
              <p
                className="font-body text-warm-gray text-base lg:text-lg mt-6"
                style={{ lineHeight: 1.8 }}
              >
                Welcome to the United Senior Citizens Voice-for-Change Coalition, a federally registered non-profit born from a deep commitment to empowering Canadian seniors. We believe &quot;Something New, Different, and Better is here for Canadian Seniors in Need.&quot; Our journey began with a clear call to action: &quot;Hands &amp; Voices of Humanity Creating Victory over Senior-Citizen Poverty.&quot; We aim to break the silence of discrimination and hopelessness, uplifting seniors by making their needs a national priority. Our goal is to provide real benefits and services for the men and women who built Canada, ensuring no one is left behind in their golden years.
              </p>
              <ReadMoreToggle>
                <p
                  className="font-body text-warm-gray text-base lg:text-lg mt-4"
                  style={{ lineHeight: 1.8 }}
                >
                  The Coalition is built on social responsibility and community spirit. We partner with governments, corporations, and individuals to create better lives for seniors. As a united group, we tackle national issues affecting Canadians aged 55 and older. Through our exclusive membership, we work together to build a Canada that truly values and supports its senior population. Our comprehensive programs, from housing and food support to legal aid and job connections, directly address senior poverty, paving the way for a more secure and dignified future for our nation&apos;s foundation builders.
                </p>
              </ReadMoreToggle>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ==================== OUR VISION ==================== */}
      <section className="py-20 lg:py-28" style={{ background: '#F4F4F4' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <ScrollReveal>
              <h2
                className="font-heading font-extrabold text-3xl lg:text-4xl text-charcoal"
                style={{ letterSpacing: '-0.02em' }}
              >
                Our Vision
              </h2>
              <p
                className="font-body text-warm-gray text-base lg:text-lg mt-6"
                style={{ lineHeight: 1.8 }}
              >
                We envision a future where seniors across Canada are respected, valued, and empowered to lead fulfilling lives. A future where every older adult has equitable access to the resources, services, and support they need to age with dignity and independence.
              </p>
              <p
                className="font-body text-warm-gray text-base lg:text-lg mt-4"
                style={{ lineHeight: 1.8 }}
              >
                Based in Stratford, Ontario, we strive to build inclusive communities across Canada where the wisdom and experience of seniors are recognized as essential to shaping a just and compassionate society, where no senior is left behind, unheard, or underserved.
              </p>
            </ScrollReveal>
            {/* Image */}
            <ScrollReveal delay={2} className="rounded-2xl overflow-hidden shadow-card">
              <img
                src="/images/about/about-us.jpg"
                alt="Seniors together at a UNSVCC community gathering"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: '10/7' }}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ==================== CORE VALUES ==================== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <ScrollReveal className="rounded-2xl overflow-hidden shadow-card">
              <img
                src="/images/about/our-mission.png"
                alt="Diverse group of seniors gardening together in a community garden"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: '10/7' }}
              />
            </ScrollReveal>
            {/* Text */}
            <ScrollReveal delay={2}>
              <h2
                className="font-heading font-extrabold text-3xl lg:text-4xl text-charcoal"
                style={{ letterSpacing: '-0.02em' }}
              >
                Core Values
              </h2>
              <p
                className="font-body text-warm-gray text-base lg:text-lg mt-6"
                style={{ lineHeight: 1.8 }}
              >
                Our Core Values are: Integrity, Respect and Dignity, Empowerment and Self-determination, Transparency and Accountability, Collaboration and Community, and Social Justice and Equity. These values guide every program, partnership, and policy initiative we undertake.
              </p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-5 mt-8">
                <div className="flex items-start gap-3">
                  <div
                    className="w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0"
                    style={{ background: '#E74A30' }}
                  />
                  <div>
                    <h4 className="font-heading font-bold text-charcoal text-sm">Integrity</h4>
                    <p className="font-body text-warm-gray text-xs mt-0.5" style={{ lineHeight: 1.6 }}>
                      Honest, ethical conduct in all we do
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div
                    className="w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0"
                    style={{ background: '#0E7C7B' }}
                  />
                  <div>
                    <h4 className="font-heading font-bold text-charcoal text-sm">Respect &amp; Dignity</h4>
                    <p className="font-body text-warm-gray text-xs mt-0.5" style={{ lineHeight: 1.6 }}>
                      Honouring the worth of every senior
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div
                    className="w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0"
                    style={{ background: '#D4883E' }}
                  />
                  <div>
                    <h4 className="font-heading font-bold text-charcoal text-sm">Empowerment</h4>
                    <p className="font-body text-warm-gray text-xs mt-0.5" style={{ lineHeight: 1.6 }}>
                      Supporting self-determination and voice
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div
                    className="w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0"
                    style={{ background: '#E74A30' }}
                  />
                  <div>
                    <h4 className="font-heading font-bold text-charcoal text-sm">Transparency</h4>
                    <p className="font-body text-warm-gray text-xs mt-0.5" style={{ lineHeight: 1.6 }}>
                      Open, accountable operations
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div
                    className="w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0"
                    style={{ background: '#0E7C7B' }}
                  />
                  <div>
                    <h4 className="font-heading font-bold text-charcoal text-sm">Collaboration</h4>
                    <p className="font-body text-warm-gray text-xs mt-0.5" style={{ lineHeight: 1.6 }}>
                      Building strong community partnerships
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div
                    className="w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0"
                    style={{ background: '#D4883E' }}
                  />
                  <div>
                    <h4 className="font-heading font-bold text-charcoal text-sm">Social Justice</h4>
                    <p className="font-body text-warm-gray text-xs mt-0.5" style={{ lineHeight: 1.6 }}>
                      Advancing equity for all seniors
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ==================== DONATION SECTION ==================== */}
      <section className="py-16 lg:py-24" style={{ background: '#F4F4F4' }}>
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <DonationWidget />
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== STAY INVOLVED CTA BANNER ==================== */}
      <StayInvolvedCTA />
    </>
  );
}
