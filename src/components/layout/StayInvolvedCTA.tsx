import GrainOverlay from '@/components/ui/GrainOverlay';
import NewsletterForm from '@/components/forms/NewsletterForm';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function StayInvolvedCTA() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: '#E74A30' }}
    >
      {/* Grain texture overlay */}
      <GrainOverlay id="grain-cta" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: heading, paragraph, newsletter form */}
          <ScrollReveal>
            <h2
              className="font-heading text-white font-bold text-3xl lg:text-4xl"
              style={{ letterSpacing: '-0.02em' }}
            >
              Stay Involved
            </h2>
            <p
              className="font-body text-white/80 text-base lg:text-lg mt-4"
              style={{ lineHeight: 1.8 }}
            >
              Sign up for our newsletter to receive updates on events, advocacy
              wins, volunteer opportunities, and ways you can make a difference.
            </p>
            <NewsletterForm />
          </ScrollReveal>

          {/* Right: stats grid (desktop only) */}
          <ScrollReveal delay={2} className="hidden lg:flex justify-end">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-2xl p-6 text-center">
                <span className="font-heading font-extrabold text-white text-3xl block">
                  500+
                </span>
                <span className="font-body text-white/70 text-xs mt-1 block">
                  Members
                </span>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 text-center">
                <span className="font-heading font-extrabold text-white text-3xl block">
                  12
                </span>
                <span className="font-body text-white/70 text-xs mt-1 block">
                  Programs
                </span>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 text-center">
                <span className="font-heading font-extrabold text-white text-3xl block">
                  30+
                </span>
                <span className="font-body text-white/70 text-xs mt-1 block">
                  Events
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
