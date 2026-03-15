import ScrollReveal from '@/components/ui/ScrollReveal';
import GrainOverlay from '@/components/ui/GrainOverlay';
import StayInvolvedCTA from '@/components/layout/StayInvolvedCTA';
import DonationWidget from '@/components/forms/DonationWidget';
import ProgramsContent from '@/components/sections/programs/ProgramsContent';
import { FUNDING_GOALS } from '@/lib/constants';

export const metadata = {
  title: 'Programs & Services for Seniors | Stratford Ontario',
  description: 'Explore UNSVCC membership benefits and services including food resources, housing support, digital skills training, legal representation, and more for seniors in Stratford, Ontario and across Canada.',
  alternates: { canonical: 'https://unsvcc.org/programs' },
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

      {/* ==================== FUNDING NEEDS ==================== */}
      <section className="py-16 lg:py-24" style={{ background: '#FDF0ED' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h3
                className="font-heading text-impact-red font-bold text-2xl lg:text-3xl"
                style={{ letterSpacing: '-0.02em' }}
              >
                We Need Your Support
              </h3>
              <p
                className="font-body text-warm-gray text-base lg:text-lg mt-4"
                style={{ lineHeight: 1.8 }}
              >
                Our programs depend on the generosity of people like you. Help us fund the services that make a real difference in the lives of Canadian seniors.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <div className="mt-10 space-y-6">
              {FUNDING_GOALS.map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-card text-center"
                >
                  <span className="font-body font-semibold text-charcoal text-sm sm:text-base block">
                    {item.label}
                  </span>
                  <span
                    className="font-heading font-extrabold text-impact-red text-3xl sm:text-4xl lg:text-5xl block mt-3"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    ${item.goal.toLocaleString()}
                  </span>
                  <span className="font-body text-warm-gray text-sm mt-1 block">
                    needed to fund this program
                  </span>
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
