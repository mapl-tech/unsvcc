'use client';

import { useState, useEffect, useCallback } from 'react';

export default function BioModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
    // Trigger animation on next frame
    requestAnimationFrame(() => {
      setIsAnimating(true);
    });
  }, []);

  const closeModal = useCallback(() => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsOpen(false);
      document.body.style.overflow = '';
    }, 300);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeModal]);

  return (
    <>
      {/* Director Card */}
      <div className="mt-16 max-w-sm mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Photo */}
          <div
            className="w-36 h-36 rounded-full overflow-hidden shadow-card mb-6"
            style={{ border: '4px solid #FFFFFF' }}
          >
            <img
              src="/images/team/ken-coghiel.jpg"
              alt="Kenneth Coghiel"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Name & title */}
          <h3 className="font-heading font-bold text-xl text-charcoal">Kenneth Coghiel</h3>
          <p
            className="font-body font-semibold text-warm-gray text-sm mt-1"
            style={{ lineHeight: 1.5 }}
          >
            National Director, Founder &amp; Senior Citizen Activist
          </p>
          {/* Bio excerpt */}
          <p
            className="font-body text-warm-gray text-sm mt-4"
            style={{ lineHeight: 1.7 }}
          >
            The founder of the United Senior Citizens Voice-for-Change Coalition is Kenneth G.
            Coghiel, a Canadian citizen born in Jamaica, who has dedicated his life to advocating
            for the rights and well-being of seniors across Canada.
          </p>
          {/* Read more button */}
          <button
            onClick={openModal}
            className="font-body font-semibold text-sm mt-5 inline-flex items-center gap-2 cursor-pointer"
            style={{
              color: '#E74A30',
              background: 'none',
              border: 'none',
              padding: 0,
              transition: 'opacity 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.7';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
          >
            Read Full Bio
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M4 6L8 10L12 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[200]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="bioModalTitle"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={closeModal}
            style={{ backdropFilter: 'blur(4px)' }}
          />
          {/* Modal content */}
          <div
            className="absolute inset-0 sm:inset-4 md:inset-8 lg:inset-16 xl:inset-y-12 xl:inset-x-[15%] bg-white sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            style={{
              transform: isAnimating ? 'translateY(0)' : 'translateY(20px)',
              opacity: isAnimating ? 1 : 0,
              transition:
                'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease',
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-6 sm:px-8 py-5 border-b"
              style={{ borderColor: '#F0F0F0' }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src="/images/team/ken-coghiel.jpg"
                    alt="Kenneth Coghiel"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3
                    id="bioModalTitle"
                    className="font-heading font-bold text-lg text-charcoal"
                  >
                    Kenneth G. Coghiel
                  </h3>
                  <p className="font-body text-warm-gray text-xs">
                    National Director, Founder &amp; Senior Citizen Activist
                  </p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="w-10 h-10 flex items-center justify-center rounded-full cursor-pointer flex-shrink-0 hover:bg-gray-200 active:scale-95"
                style={{
                  background: '#F4F4F4',
                  border: 'none',
                  transition: 'background 0.2s ease, transform 0.15s',
                }}
                aria-label="Close"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#555"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            {/* Body */}
            <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-6 sm:py-8">
              <div
                className="max-w-3xl mx-auto font-body text-warm-gray text-sm sm:text-base"
                style={{ lineHeight: 1.85 }}
              >
                <p>
                  The founder of the United Senior Citizens Voice for Change Coalition is Kenneth
                  G. Coghiel, a Canadian citizen born in Jamaica, who is inspired by hope, love,
                  and kindness. I am a tenacious, persistent, and forward-thinking individual with
                  over thirty years of experience in both private and public law enforcement. At
                  the age of 59, I decided to make a career change and accepted a position in
                  building maintenance. While working as a building superintendent, I had the
                  opportunity to see and hear about many seniors who are having housing and food
                  insecurity issues. Some of these people are now deceased, while some are still
                  stuck in the deep cycle of POVERTY. Senior Citizen poverty is a silent crisis
                  forming in communities across Canada. The victims are the working poor and
                  low-income earners.
                </p>

                <p className="mt-5">
                  Throughout a twenty-four-month period, I would start conversations with everyone
                  I met regarding the issue of senior citizen poverty. Through my investigation, I
                  learned that millions of Canadian seniors are living in extreme poverty and have
                  no voice or representation to bring their issues to light. Many seniors&apos;
                  citizens&apos; only source of income is the government-supported Canada Pension
                  and Old Age Security, which, in most cases, is not what they pay for in a
                  month&apos;s rent alone.
                </p>

                <p className="mt-5">
                  The conclusion of my investigation led me to start the United Senior Citizen
                  Voice for Change Coalition. As a senior, I have things to fight with my voice
                  and my pen. But something else was missing: a unified voice. My investigation
                  eventually became a spiritual journey and a calling to do something to help fill
                  the gap of senior poverty. You probably heard this saying: when one person cries
                  for injustice, it is called a whisper; but when we cry together, the world
                  listens. There is a silent crisis facing low-income Canadian seniors that needs a
                  unified voice. It is a poverty crisis; an issue people don&apos;t talk about; the
                  victims are the working poor.
                </p>

                <p className="mt-5">
                  At the age of 61 years old, I started to embrace the idea of starting a movement
                  to represent Canadian seniors and to make their needs a national interest and
                  priority; a movement that will provide real help, benefits, programs, and services
                  that will make a difference in the everyday lives of senior citizens. The
                  commitment and dedication to serve humanity come from leaders such as Nelson
                  Mandela, Marcus Garvey, Mahatma Gandhi, and the most honourable Tommy Douglas,
                  father of Canadian public healthcare. It is in the spirit of these great leaders
                  that I take on the challenge of restoring the purpose of my life to make a
                  difference, and I created the United Senior Citizens Voice for Change Coalition
                  for the ones who cannot fight for themselves, seniors in need of help and support.
                  At the age of 65, I consider myself a teenage senior, ready for the challenge
                  ahead.
                </p>

                <p className="mt-5">
                  Did you know that nearly 1 in every fifty Canadian senior citizens are now living
                  in poverty, especially those seniors without any other source of income other than
                  the basic government retirement monthly support benefit; which in most cases is
                  not enough to cover the cost of food and rent for a month. My investigation
                  revealed that in communities across Canada, there are many elderly people whom we
                  call the foundation builders of Canada, men and women senior citizens who once
                  contributed to the growth and development of this country who were not fortunate
                  enough to have the opportunity to create a better life experience for themselves
                  upon retirement, in most cases no fault of their own, these people need your help.
                  To help is because you care, get involved, and make a difference.
                </p>

                <p className="mt-5">
                  What the coalition needs now is people who can reactivate the purpose of their
                  lives to serve humanity. When we come together, we connect in a variety of ways.
                  Most of us feel better when we are proactively doing something good that gives us
                  a sense of pride and the feeling that we are working towards something bigger than
                  ourselves. I am asking you to join us.
                </p>

                <p className="mt-5">
                  You&apos;ve probably heard the phrase &quot;Teamwork makes the dream work&quot; or
                  seen it printed on office mugs and motivational posters. But what exactly does it
                  mean, and what does good teamwork look like? The phrase &quot;Teamwork makes the
                  dream work&quot; especially means that dividing tasks and responsibilities allows
                  a team can lead to better outcomes than a single person doing the task alone. The
                  friendships we develop in teamwork service or unions in our lives, the losses we
                  face are not always easy or pleasant but with creative thinking and action, we
                  become successful we work hard through the struggles and solve the problems one,
                  by contributing to our community goal and welfare of like-minded people there we
                  find the real meaning of the purpose of our life.
                </p>

                <p className="mt-5">
                  This letter is to invite you to join us in this national movement that represents
                  the social well-being of Canadians. This invitation is for individuals like you to
                  use your life experience to inspire others, educate, and support each other in a
                  vision that is bigger than any one individual&apos;s dream. Our collective action is
                  needed, especially when going up against powerful interests. Together, let us
                  reactivate the purpose of our lives and make a difference now and for generations
                  to come. You might start by finding a quiet place and pondering these not-so-simple
                  questions:
                </p>

                <ol className="mt-4 ml-6 list-decimal space-y-1">
                  <li>Who am I?</li>
                  <li>What motivates you?</li>
                  <li>What am I here for?</li>
                  <li>What can I do to help?</li>
                </ol>

                <p className="mt-5">
                  As you continue going through this information, please take a closer look at some
                  of the benefits our membership services provide and give us your comments. By
                  donating and supporting the United Senior Citizens Voice for Change Coalition, you
                  are giving us a strong voice, especially for seniors facing food and housing
                  insecurity issues. You are also helping to improve the quality of life for seniors
                  and giving the organization a stronger voice to advocate for Canadian seniors in
                  need. Supporting the United Senior Citizen Voice for Change Coalition is the Right
                  choice to fight for senior citizens and build a better tomorrow. Your voice
                  matters, your vote matters, your membership matters, and your support matters.
                  Together, let us fight for the ones who cannot fight for themselves. Let us love
                  and support the elderly in our neighbourhoods as we love ourselves and give a
                  helping hand when we can. Thank you in advance for taking the time to review this
                  information.
                </p>

                <div className="mt-8 pt-6 border-t" style={{ borderColor: '#F0F0F0' }}>
                  <p className="font-heading font-bold text-charcoal text-base">
                    Kenneth G. Coghiel
                  </p>
                  <p className="font-body text-warm-gray text-sm mt-1">
                    National Director, Founder &amp; Senior Citizen Activist
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
