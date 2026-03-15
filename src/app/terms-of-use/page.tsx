import ScrollReveal from '@/components/ui/ScrollReveal';
import GrainOverlay from '@/components/ui/GrainOverlay';
import StayInvolvedCTA from '@/components/layout/StayInvolvedCTA';
import Link from 'next/link';

export const metadata = {
  title: 'Terms of Use',
  description: 'Review the terms of use for the UNSVCC website and services.',
  alternates: { canonical: 'https://unsvcc.org/terms-of-use' },
};

export default function TermsOfUsePage() {
  return (
    <>
      {/* ==================== HERO BANNER ==================== */}
      <section className="relative" style={{ background: '#333333' }}>
        <GrainOverlay id="heroGrain" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20 text-center">
          <h1
            className="font-heading font-extrabold text-white text-4xl lg:text-5xl"
            style={{ letterSpacing: '-0.03em' }}
          >
            Terms of Use
          </h1>
        </div>
      </section>

      {/* ==================== TERMS CONTENT ==================== */}
      <section style={{ background: '#FFFFFF' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <ScrollReveal>
            <div className="policy-content">
              <p style={{ color: '#333', fontWeight: 600 }}>
                Effective Date: March 1, 2026
              </p>
              <p>
                Welcome to the website of the United Senior Citizen Voice for Change
                Coalition (&ldquo;UNSVCC&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;,
                or &ldquo;us&rdquo;). By accessing or using our website, you agree to
                be bound by these Terms of Use. If you do not agree with any part of
                these terms, please do not use our website.
              </p>

              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing, browsing, or using this website, you acknowledge that
                you have read, understood, and agree to be bound by these Terms of
                Use and our{' '}
                <Link href="/privacy-policy">Privacy Policy</Link>. These terms apply
                to all visitors, users, members, volunteers, and donors who access or
                use the website.
              </p>

              <h2>2. Use of Website</h2>
              <p>
                You may use our website for lawful purposes only. You agree not to:
              </p>
              <ul>
                <li>
                  Use the website in any way that violates any applicable federal,
                  provincial, or local law or regulation
                </li>
                <li>
                  Transmit any material that is defamatory, offensive, or otherwise
                  objectionable
                </li>
                <li>
                  Attempt to gain unauthorized access to any part of the website,
                  other accounts, or computer systems
                </li>
                <li>
                  Use any automated means (bots, scrapers, etc.) to access the
                  website or collect data without our prior written consent
                </li>
                <li>
                  Interfere with or disrupt the integrity or performance of the
                  website
                </li>
                <li>
                  Impersonate any person or entity or misrepresent your affiliation
                  with any person or entity
                </li>
              </ul>

              <h2>3. Intellectual Property</h2>
              <p>
                All content on this website, including but not limited to text,
                graphics, logos, images, photographs, audio and video clips, and
                software, is the property of UNSVCC or its content suppliers and is
                protected by Canadian and international copyright, trademark, and
                other intellectual property laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, create derivative works
                of, publicly display, or otherwise use any content from this website
                without our prior written consent, except for personal,
                non-commercial use.
              </p>
              <p>
                The UNSVCC name, logo, and all related marks are trademarks of the
                United Senior Citizen Voice for Change Coalition. Unauthorized use of
                these marks is strictly prohibited.
              </p>

              <h2>4. Donations</h2>
              <p>
                All donations made through our website are voluntary and
                non-refundable unless otherwise required by law. By making a donation,
                you agree to the following:
              </p>
              <ul>
                <li>
                  Donations are processed securely through our third-party payment
                  providers
                </li>
                <li>
                  UNSVCC will issue official tax receipts for eligible donations in
                  accordance with Canada Revenue Agency (CRA) regulations
                </li>
                <li>
                  You are responsible for providing accurate payment and contact
                  information
                </li>
                <li>
                  UNSVCC reserves the right to refuse or return any donation at its
                  discretion
                </li>
              </ul>
              <p>
                CRA Tax compliance number: <strong>753212158RC0001</strong>
              </p>

              <h2>5. Membership and Volunteer Services</h2>
              <p>
                Membership registration and volunteer sign-ups made through this
                website are subject to additional terms and conditions that may be
                provided at the time of registration. UNSVCC reserves the right to
                accept or decline any membership or volunteer application at its
                discretion.
              </p>

              <h2>6. User Submissions</h2>
              <p>
                Any information or content you submit through our website (including
                contact forms, volunteer applications, and membership registrations)
                must be accurate, complete, and not misleading. You are solely
                responsible for the content you submit.
              </p>

              <h2>7. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites or services that
                are not owned or controlled by UNSVCC. We have no control over, and
                assume no responsibility for, the content, privacy policies, or
                practices of any third-party websites. Accessing third-party links is
                at your own risk.
              </p>

              <h2>8. Disclaimer of Warranties</h2>
              <p>
                This website is provided on an &ldquo;as is&rdquo; and &ldquo;as
                available&rdquo; basis without warranties of any kind, either express
                or implied. UNSVCC does not warrant that the website will be
                uninterrupted, error-free, or free of viruses or other harmful
                components.
              </p>
              <p>
                UNSVCC makes no representations or warranties about the accuracy,
                completeness, or suitability of the information contained on this
                website for any purpose.
              </p>

              <h2>9. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by applicable law, UNSVCC, its
                directors, officers, employees, volunteers, and agents shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages arising from or related to your use of or inability
                to use this website.
              </p>
              <p>
                In no event shall UNSVCC&apos;s total liability to you exceed the
                amount you have paid to UNSVCC, if any, in the twelve (12) months
                preceding the event giving rise to the liability.
              </p>

              <h2>10. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless UNSVCC, its
                directors, officers, employees, volunteers, and agents from any
                claims, liabilities, damages, losses, and expenses (including legal
                fees) arising from your use of the website or your violation of these
                Terms of Use.
              </p>

              <h2>11. Governing Law</h2>
              <p>
                These Terms of Use shall be governed by and construed in accordance
                with the laws of the Province of Ontario and the federal laws of
                Canada applicable therein. Any disputes arising from these terms or
                your use of the website shall be subject to the exclusive jurisdiction
                of the courts of Ontario, Canada.
              </p>

              <h2>12. Changes to These Terms</h2>
              <p>
                UNSVCC reserves the right to modify or update these Terms of Use at
                any time without prior notice. Changes will be effective immediately
                upon posting on this page with a revised effective date. Your
                continued use of the website after any changes constitutes your
                acceptance of the updated terms.
              </p>

              <h2>13. Contact Us</h2>
              <p>
                If you have any questions or concerns about these Terms of Use, please
                contact us:
              </p>
              <ul>
                <li>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:info@unsvcc.org">info@unsvcc.org</a>
                </li>
                <li>
                  <strong>Phone:</strong>{' '}
                  <a href="tel:+15197033443">+1 519 703 3443</a>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== STAY INVOLVED CTA ==================== */}
      <StayInvolvedCTA />
    </>
  );
}
