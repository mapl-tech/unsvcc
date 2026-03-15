import type { Metadata } from 'next'
import ScrollReveal from '@/components/ui/ScrollReveal'
import StayInvolvedCTA from '@/components/layout/StayInvolvedCTA'
import DonationWidget from '@/components/forms/DonationWidget'
import Link from 'next/link'
import { ArrowRightIcon, CheckCircleIcon, UsersIcon, HandHeartIcon, HeartShieldIcon } from '@/components/icons'
import { FEATURED_PROGRAMS, FUNDING_GOALS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'UNSVCC — Senior Citizen Advocacy in Stratford, Ontario | United Senior Citizen Voice for Change Coalition',
  description: 'UNSVCC is a nonprofit in Stratford, Ontario supporting Canadian seniors with food programs, affordable housing, digital skills training, legal services, and community advocacy.',
  alternates: { canonical: 'https://unsvcc.org' },
}

export default function HomePage() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative overflow-hidden min-h-[auto] lg:min-h-[600px]" style={{ background: '#FDF0ED' }}>
        {/* Diagonal red background */}
        <div className="hero-diagonal"></div>

        {/* Subtle accent stripe at very top */}
        <div
          className="absolute top-0 left-0 right-0 h-1 z-10"
          style={{ background: 'linear-gradient(90deg, #D4883E 0%, #D4883E 30%, transparent 30%)' }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center pt-8 pb-10 lg:pt-20 lg:pb-28">
            {/* Left: text content */}
            <div className="order-2 lg:order-1">
              <p
                className="font-body text-sm lg:text-base mb-4 lg:text-white/80 text-charcoal"
                style={{ lineHeight: 1.7, maxWidth: '380px' }}
              >
                Building a Canada that values and supports seniors
              </p>
              <h1
                className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[3.5rem] xl:text-[4rem] lg:text-white text-impact-red leading-[1.06]"
                style={{ letterSpacing: '-0.03em' }}
              >
                United Senior Citizen<br />Voice for Change Coalition
              </h1>
              <Link href="/contact" className="btn-gold mt-6 lg:mt-8 inline-flex">
                GET INVOLVED
                <ArrowRightIcon width={18} height={18} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
              </Link>
            </div>

            {/* Right: hero image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xs sm:max-w-md lg:max-w-lg">
                <img
                  src="/images/hero/ottawacancer-hero-image.jpg"
                  alt="Happy senior couple smiling together outdoors"
                  className="w-full h-auto rounded-3xl object-cover shadow-card"
                  style={{ aspectRatio: '7/6' }}
                />
                {/* Small floating accent card */}
                <div
                  className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-card hidden lg:flex items-center gap-3"
                  style={{ minWidth: '200px' }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: '#0E7C7B' }}
                  >
                    <UsersIcon width={18} height={18} stroke="white" strokeWidth={2} />
                  </div>
                  <div>
                    <span className="font-heading font-bold text-impact-red text-lg block leading-tight">500+</span>
                    <span className="font-body text-warm-gray text-xs">Active Members</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature pills row */}
          <div className="flex flex-wrap gap-2 sm:gap-3 pb-10 lg:pb-16 relative z-10">
            <div className="feature-pill">
              <CheckCircleIcon width={16} height={16} stroke="#0E7C7B" strokeWidth={2} />
              Policy Advocacy
            </div>
            <div className="feature-pill">
              <CheckCircleIcon width={16} height={16} stroke="#0E7C7B" strokeWidth={2} />
              Community Programs
            </div>
            <div className="feature-pill">
              <CheckCircleIcon width={16} height={16} stroke="#0E7C7B" strokeWidth={2} />
              Education &amp; Outreach
            </div>
            <div className="feature-pill">
              <CheckCircleIcon width={16} height={16} stroke="#0E7C7B" strokeWidth={2} />
              Rights Protection
            </div>
          </div>
        </div>
      </section>


      {/* ==================== THREE-CARD SECTION ==================== */}
      <section className="pt-[96px]" style={{ background: '#F4F4F4' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-2xl overflow-hidden shadow-card">
            {/* Card 1: What We Do */}
            <div
              className="p-8 lg:p-10 flex flex-col justify-between"
              style={{ background: '#0E7C7B' }}
            >
              <div>
                <div className="mb-5">
                  <HandHeartIcon width={48} height={48} className="text-white/90" />
                </div>
                <h3
                  className="font-heading font-bold text-xl lg:text-2xl text-white"
                  style={{ letterSpacing: '-0.01em' }}
                >
                  What We Do
                </h3>
                <p
                  className="font-body text-white/85 text-sm mt-3"
                  style={{ lineHeight: 1.75 }}
                >
                  UNSVCC strives to support Canadian seniors by providing advocacy, community programs, education, legal guidance, and mental health services.
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href="/about"
                  className="inline-flex items-center font-heading font-bold text-sm uppercase tracking-wide px-6 py-3 rounded-full border-2 border-white/60 text-white hover:bg-white hover:text-advocacy-teal"
                  style={{ transition: 'background 0.25s ease, color 0.25s ease' }}
                >
                  LEARN MORE
                </Link>
              </div>
            </div>

            {/* Card 2: Ways to Get Involved */}
            <div
              className="p-8 lg:p-10 flex flex-col justify-between"
              style={{ background: '#FDF0ED' }}
            >
              <div>
                <div className="mb-5">
                  <HeartShieldIcon width={48} height={48} className="text-impact-red" />
                </div>
                <h3
                  className="font-heading font-bold text-xl lg:text-2xl text-charcoal"
                  style={{ letterSpacing: '-0.01em' }}
                >
                  Ways to Get Involved
                </h3>
                <p
                  className="font-body text-warm-gray text-sm mt-3"
                  style={{ lineHeight: 1.75 }}
                >
                  Help us make a difference by volunteering, donating, or becoming a member. Together, we can improve the lives of seniors and their families.
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href="/volunteer"
                  className="font-heading font-bold text-sm uppercase tracking-wide text-impact-red underline underline-offset-4 decoration-2 hover:text-advocacy-teal"
                  style={{ transition: 'color 0.2s ease' }}
                >
                  GET INVOLVED
                </Link>
              </div>
            </div>

            {/* Card 3: Community Image */}
            <div className="relative min-h-[280px] md:min-h-0">
              <img
                src="/images/community/community 2.jpg"
                alt="Group of seniors smiling together at a UNSVCC event"
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-6 right-6 lg:bottom-8 lg:right-8">
                <Link
                  href="/membership"
                  className="inline-flex items-center font-heading font-bold text-sm uppercase tracking-wide px-6 py-3 rounded-full"
                  style={{
                    background: '#D4883E',
                    color: '#FFFFFF',
                    transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease',
                  }}
                >
                  OUR COMMUNITY
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ==================== DONATION SECTION (side-by-side) ==================== */}
      <section className="py-16 lg:py-24" style={{ background: '#F4F4F4' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left: heading + text */}
            <ScrollReveal>
              <div className="lg:sticky lg:top-32">
                <h2
                  className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-charcoal leading-[1.1]"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  Support Our Senior Advocacy Programs
                </h2>
                <p
                  className="font-body text-warm-gray text-base lg:text-lg mt-5"
                  style={{ lineHeight: 1.8 }}
                >
                  Your donations empower seniors today and secure their future, ensuring they have access to advocacy, community programs, education, healthcare, and legal support.
                </p>
              </div>
            </ScrollReveal>

            {/* Right: donation widget */}
            <ScrollReveal delay={2}>
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-card">
                <DonationWidget />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>


      {/* ==================== MISSION DESCRIPTION STRIP ==================== */}
      <section className="py-14 lg:py-20 bg-white border-b" style={{ borderColor: '#F0F0F0' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="font-body text-charcoal text-base sm:text-lg lg:text-xl leading-relaxed" style={{ lineHeight: 1.8 }}>
              The <strong className="text-impact-red">United Senior Citizen Voice for Change Coalition</strong>, based in Stratford, Ontario, provides vital advocacy, education, and community support for seniors across Canada. We empower older adults to participate in the decisions that affect their healthcare, housing, finances, and quality of life, because every senior deserves to be heard.
            </p>
          </ScrollReveal>
        </div>
      </section>


      {/* ==================== FEATURED PROGRAMS ==================== */}
      <section id="programs" className="py-16 lg:py-28" style={{ background: '#F4F4F4' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-charcoal text-center mb-10 lg:mb-14"
            style={{ letterSpacing: '-0.02em' }}
          >
            Featured Programs
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {FEATURED_PROGRAMS.map((program, index) => {
              const delay = ((index % 3) + 1) as 1 | 2 | 3;
              return (
                <ScrollReveal key={program.title} delay={delay}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-card card-lift h-full">
                    <img
                      src={program.image}
                      alt={`${program.title} program`}
                      className="w-full h-44 sm:h-52 object-cover"
                    />
                    <div className="p-5 sm:p-6">
                      <h3 className="font-heading font-bold text-charcoal text-base sm:text-lg leading-snug">
                        {program.title}
                      </h3>
                      <p
                        className="font-body text-warm-gray text-sm mt-2 sm:mt-3 card-body-text"
                        style={{ lineHeight: 1.7 }}
                      >
                        {program.description}
                      </p>
                      <Link href="/programs" className="link-arrow mt-4 sm:mt-5 inline-flex text-sm">
                        Learn More
                        <ArrowRightIcon width={14} height={14} strokeWidth={2.5} strokeLinecap="round" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <div className="text-center mt-10 lg:mt-12">
            <Link href="/programs" className="btn-blue" style={{ padding: '14px 40px' }}>
              SEE ALL PROGRAMS
            </Link>
          </div>
        </div>
      </section>


      {/* ==================== IMPACT STATS STRIP ==================== */}
      <section id="impact" className="bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-14 lg:py-20 text-center">
          <h2
            className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-charcoal"
            style={{ letterSpacing: '-0.02em' }}
          >
            Our Impact
          </h2>
          <div className="grid grid-cols-3 gap-6 sm:gap-10 mt-10 lg:mt-12">
            <ScrollReveal delay={1}>
              <span
                className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-impact-red block"
                style={{ letterSpacing: '-0.02em' }}
              >
                10+
              </span>
              <span className="font-body font-semibold text-charcoal text-xs sm:text-base mt-1 sm:mt-2 block">
                Support Programs
              </span>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <span
                className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-charcoal block"
                style={{ letterSpacing: '-0.02em' }}
              >
                1000+
              </span>
              <span className="font-body font-semibold text-charcoal text-xs sm:text-base mt-1 sm:mt-2 block">
                Meals Provided
              </span>
            </ScrollReveal>
            <ScrollReveal delay={3}>
              <span
                className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-impact-red block"
                style={{ letterSpacing: '-0.02em' }}
              >
                100+
              </span>
              <span className="font-body font-semibold text-charcoal text-xs sm:text-base mt-1 sm:mt-2 block">
                Seniors Supported
              </span>
            </ScrollReveal>
          </div>
        </div>
      </section>


      {/* ==================== HELP US / FUNDING NEEDS ==================== */}
      <section id="donate" className="py-14 lg:py-24" style={{ background: '#FDF0ED' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <ScrollReveal delay={1}>
            <div className="text-center">
              <h3
                className="font-heading text-impact-red font-bold text-xl sm:text-2xl lg:text-3xl"
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
            <div className="mt-10 lg:mt-12 space-y-6">
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

          <ScrollReveal delay={3}>
            <div className="text-center mt-8 lg:mt-10">
              <Link href="/donate" className="btn-gold inline-flex">
                DONATE NOW
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>


      {/* ==================== ABOUT / TWO-COL LEFT IMAGE ==================== */}
      <section id="about" className="py-16 lg:py-28" style={{ background: '#F4F4F4' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Image */}
            <ScrollReveal>
              <div className="rounded-2xl overflow-hidden shadow-card">
                <img
                  src="/images/about/about-us.jpg"
                  alt="Caregiver assisting seniors at a UNSVCC community gathering"
                  className="w-full h-auto object-cover"
                  style={{ aspectRatio: '10/7' }}
                />
              </div>
            </ScrollReveal>
            {/* Text */}
            <ScrollReveal delay={2}>
              <span
                className="font-heading font-bold text-sm text-advocacy-teal uppercase tracking-widest"
                style={{ letterSpacing: '0.12em' }}
              >
                About Us
              </span>
              <h2
                className="font-heading text-impact-red font-bold text-2xl sm:text-3xl lg:text-4xl mt-3"
                style={{ letterSpacing: '-0.02em' }}
              >
                A safe space for advocacy and community support
              </h2>
              <p
                className="font-body text-charcoal text-base lg:text-lg mt-5 lg:mt-6"
                style={{ lineHeight: 1.8 }}
              >
                Our coalition brings together seniors, families, and caregivers in a welcoming environment where voices are heard and real change happens. From policy workshops to social gatherings, we provide the resources and support older adults need to thrive.
              </p>
              <Link href="/about" className="link-arrow mt-5 lg:mt-6 inline-flex">
                Learn more about us
                <ArrowRightIcon width={16} height={16} strokeWidth={2.5} strokeLinecap="round" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>


      {/* ==================== STAY INVOLVED CTA BANNER ==================== */}
      <StayInvolvedCTA />


      {/* ==================== COMMUNITY IMAGE + TEXT ==================== */}
      <section className="py-16 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <ScrollReveal>
              <span
                className="font-heading font-bold text-sm text-advocacy-teal uppercase tracking-widest"
                style={{ letterSpacing: '0.12em' }}
              >
                Our Community
              </span>
              <h2
                className="font-heading text-impact-red font-bold text-2xl sm:text-3xl lg:text-4xl mt-3"
                style={{ letterSpacing: '-0.02em' }}
              >
                Transforming Senior Advocacy, Together
              </h2>
              <p
                className="font-body text-charcoal text-base lg:text-lg mt-5 lg:mt-6"
                style={{ lineHeight: 1.8 }}
              >
                Behind every policy change is a community of determined seniors who refused to be silent. Based in Stratford, Ontario, our coalition is built on the belief that dignity, equity, and transparency are not privileges, they are rights. Together, we&apos;re building a future where every senior in Canada thrives.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 lg:mt-8">
                <Link href="/membership" className="btn-blue">
                  JOIN US TODAY
                </Link>
                <Link href="/contact" className="btn-outline">
                  CONTACT US
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="rounded-2xl overflow-hidden shadow-card">
                <img
                  src="/images/community/our-community.jpg"
                  alt="Group of diverse seniors smiling together at a UNSVCC event"
                  className="w-full h-auto object-cover"
                  style={{ aspectRatio: '10/7' }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
