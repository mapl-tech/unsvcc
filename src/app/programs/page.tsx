import ScrollReveal from '@/components/ui/ScrollReveal';
import GrainOverlay from '@/components/ui/GrainOverlay';
import StayInvolvedCTA from '@/components/layout/StayInvolvedCTA';
import DonationWidget from '@/components/forms/DonationWidget';
import ProgramsContent from '@/components/sections/programs/ProgramsContent';
import { PROGRESS_BARS } from '@/lib/constants';

export const metadata = {
  title: 'Programs',
};

export default function ProgramsPage() {
  return (
    <>
      {/* ==================== HERO BANNER ==================== */}
      <section className="relative overflow-hidden" style={{ minHeight: '340px' }}>
        <img
          src="/images/hero/programs-hero.jpg"
          alt="Colorful tulips representing community growth"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.5))',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 flex items-end">
          <ScrollReveal>
            <h1
              className="font-heading font-extrabold text-3xl lg:text-4xl xl:text-5xl text-white"
              style={{
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                textShadow: '0 2px 12px rgba(0,0,0,0.25)',
              }}
            >
Membership Benefits and Services Give Us More Than Our Money&apos;s Worth
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== SENIOR VOICES MATTER ==================== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <ScrollReveal>
              <h2
                className="font-heading font-extrabold text-3xl lg:text-4xl text-charcoal"
                style={{ letterSpacing: '-0.02em' }}
              >
                Here Is How We Help
              </h2>
              <p
                className="font-body text-warm-gray text-base lg:text-lg mt-6"
                style={{ lineHeight: 1.8 }}
              >
                At the United Senior Citizens Voice-for-Change Coalition, we believe
                that every senior deserves access to programs that address their real,
                everyday needs. Our programs are built on the principle that no senior
                should have to choose between food and rent, or face legal challenges
                without support.
              </p>
              <p
                className="font-body text-warm-gray text-base lg:text-lg mt-4"
                style={{ lineHeight: 1.8 }}
              >
                Each program is designed with input from our members and community
                partners, ensuring that the services we provide are relevant,
                accessible, and impactful. From grocery support to retirement
                planning, our comprehensive suite of programs empowers seniors to live
                with dignity and independence.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={2} className="rounded-2xl overflow-hidden shadow-card">
              <img
                src="/images/community/our-community.jpg"
                alt="Seniors at a UNSVCC community event"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: '10/7' }}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ==================== SEARCH + CARDS + MODAL (client) ==================== */}
      <ProgramsContent />

      {/* ==================== HELP US / DONATION GOAL ==================== */}
      <section className="py-16 lg:py-24" style={{ background: '#FDF0ED' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h3
                className="font-heading text-impact-red font-bold text-2xl lg:text-3xl"
                style={{ letterSpacing: '-0.02em' }}
              >
                Help us empower more seniors in our community
              </h3>
            </div>
          </ScrollReveal>

          {/* Progress bars */}
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

      {/* ==================== DONATION SECTION ==================== */}
      <section className="py-16 lg:py-24" style={{ background: '#F4F4F4' }}>
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <DonationWidget />
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== STAY INVOLVED CTA ==================== */}
      <StayInvolvedCTA />
    </>
  );
}
