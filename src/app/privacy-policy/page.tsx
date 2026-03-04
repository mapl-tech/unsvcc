import ScrollReveal from '@/components/ui/ScrollReveal';
import GrainOverlay from '@/components/ui/GrainOverlay';
import StayInvolvedCTA from '@/components/layout/StayInvolvedCTA';

export const metadata = {
  title: 'Privacy Policy',
};

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* ==================== POLICY CONTENT ==================== */}
      <section style={{ background: '#FFFFFF' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <ScrollReveal>
            <div className="policy-content">
              <p style={{ color: '#333', fontWeight: 600 }}>
                Effective Date: March 1, 2026
              </p>
              <p>
                The United Senior Citizen Voice for Change Coalition
                (&ldquo;UNSVCC&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or
                &ldquo;us&rdquo;) is committed to protecting your privacy. This
                Privacy Policy explains how we collect, use, disclose, and safeguard
                your personal information when you visit our website or engage with
                our services.
              </p>
              <p>
                UNSVCC operates in compliance with the{' '}
                <em>
                  Personal Information Protection and Electronic Documents Act
                </em>{' '}
                (PIPEDA) and applicable Canadian privacy legislation.
              </p>

              <h2>1. Information We Collect</h2>
              <p>
                We may collect personal information that you voluntarily provide to
                us, including:
              </p>
              <ul>
                <li>
                  Full name, email address, phone number, and mailing address
                </li>
                <li>
                  Donation and payment information (processed securely through
                  third-party payment providers)
                </li>
                <li>
                  Volunteer application details (skills, availability, areas of
                  interest)
                </li>
                <li>Membership registration information</li>
                <li>
                  Messages and inquiries submitted through our contact form
                </li>
                <li>Newsletter subscription preferences</li>
              </ul>
              <p>
                We may also automatically collect certain technical information when
                you visit our website, such as your IP address, browser type, pages
                visited, and referring URL.
              </p>

              <h2>2. How We Use Your Information</h2>
              <p>
                We use the personal information we collect for the following
                purposes:
              </p>
              <ul>
                <li>To process donations and issue official tax receipts</li>
                <li>To manage volunteer and membership registrations</li>
                <li>
                  To communicate with you about our programs, events, and advocacy
                  initiatives
                </li>
                <li>To respond to your inquiries and provide support</li>
                <li>
                  To send newsletters and updates (with your consent)
                </li>
                <li>To improve our website, programs, and services</li>
                <li>To comply with legal and regulatory obligations</li>
              </ul>

              <h2>3. Information Sharing and Disclosure</h2>
              <p>
                UNSVCC does not sell, rent, or trade your personal information to
                third parties. We may share your information only in the following
                circumstances:
              </p>
              <ul>
                <li>
                  <strong>Service providers:</strong> We may share information with
                  trusted third-party service providers who assist us in operating
                  our website, processing donations, or delivering services, provided
                  they agree to keep your information confidential.
                </li>
                <li>
                  <strong>Legal requirements:</strong> We may disclose information
                  when required by law, court order, or government regulation.
                </li>
                <li>
                  <strong>Consent:</strong> We may share information with your
                  explicit consent for a stated purpose.
                </li>
              </ul>

              <h2>4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to
                protect your personal information against unauthorized access,
                alteration, disclosure, or destruction. These measures include secure
                data storage, encryption of sensitive information during
                transmission, and restricted access to personal data.
              </p>
              <p>
                While we strive to protect your personal information, no method of
                transmission over the Internet or electronic storage is completely
                secure. We cannot guarantee absolute security.
              </p>

              <h2>5. Your Rights</h2>
              <p>Under Canadian privacy law, you have the right to:</p>
              <ul>
                <li>
                  <strong>Access</strong> the personal information we hold about you
                </li>
                <li>
                  <strong>Correct</strong> any inaccurate or incomplete information
                </li>
                <li>
                  <strong>Withdraw consent</strong> for the collection, use, or
                  disclosure of your information (subject to legal or contractual
                  restrictions)
                </li>
                <li>
                  <strong>Request deletion</strong> of your personal information,
                  where applicable
                </li>
                <li>
                  <strong>Unsubscribe</strong> from marketing communications at any
                  time
                </li>
              </ul>
              <p>
                To exercise any of these rights, please contact us using the
                information provided below.
              </p>

              <h2>6. Cookies and Website Analytics</h2>
              <p>
                Our website may use cookies and similar tracking technologies to
                enhance your browsing experience. Cookies are small text files stored
                on your device that help us understand how visitors interact with our
                website.
              </p>
              <p>
                You can control cookie settings through your browser preferences.
                Disabling cookies may affect certain features of our website.
              </p>

              <h2>7. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites or services. We
                are not responsible for the privacy practices of these external sites.
                We encourage you to review the privacy policies of any third-party
                websites you visit.
              </p>

              <h2>8. Children&apos;s Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 18. We
                do not knowingly collect personal information from children. If we
                become aware that we have collected personal information from a child
                without parental consent, we will take steps to delete that
                information promptly.
              </p>

              <h2>9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or applicable laws. The updated policy will
                be posted on this page with a revised effective date. We encourage you
                to review this policy periodically.
              </p>

              <h2>10. Contact Us</h2>
              <p>
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or our privacy practices, please contact us:
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
              <p>
                CRA Tax compliance number: <strong>753212158RC0001</strong>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== STAY INVOLVED CTA ==================== */}
      <StayInvolvedCTA />
    </>
  );
}
