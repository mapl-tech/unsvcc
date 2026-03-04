import Link from 'next/link';
import {
  FOOTER_QUICK_LINKS,
  FOOTER_GET_INVOLVED,
  SOCIAL_LINKS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_HOURS,
  CRA_NUMBER,
} from '@/lib/constants';
import {
  MailIcon,
  PhoneIcon,
  ClockIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedInIcon,
} from '@/components/icons';

const SOCIAL_ICON_MAP = {
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
} as const;

export default function Footer() {
  return (
    <footer style={{ background: '#F4F4F4', borderTop: '1px solid #E8E8E8' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-start">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="/brand/unsvcc-logo.svg"
              alt="UNSVCC Logo"
              className="h-24 w-auto mb-4"
            />
            <p
              className="font-body text-warm-gray text-sm max-w-xs"
              style={{ lineHeight: 1.7 }}
            >
              Empowering and supporting Canadian seniors, especially those in
              need, as they navigate life in Canada.
            </p>
            <p
              className="font-body text-warm-gray text-sm mt-3"
              style={{ lineHeight: 1.7 }}
            >
              CRA Tax compliance number:
            </p>
            <p className="font-heading font-bold text-charcoal text-sm">
              {CRA_NUMBER}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-heading text-impact-red font-bold text-sm uppercase tracking-widest mb-5"
              style={{ letterSpacing: '0.1em' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-warm-gray text-sm hover:text-impact-red"
                    style={{ transition: 'color 0.2s' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4
              className="font-heading text-impact-red font-bold text-sm uppercase tracking-widest mb-5"
              style={{ letterSpacing: '0.1em' }}
            >
              Get Involved
            </h4>
            <ul className="space-y-3">
              {FOOTER_GET_INVOLVED.map((link) => (
                <li key={`${link.href}-${link.label}`}>
                  <Link
                    href={link.href}
                    className="font-body text-warm-gray text-sm hover:text-impact-red"
                    style={{ transition: 'color 0.2s' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-heading text-impact-red font-bold text-sm uppercase tracking-widest mb-5"
              style={{ letterSpacing: '0.1em' }}
            >
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <MailIcon width={14} height={14} stroke="#6E6E6E" />
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-body text-warm-gray text-sm hover:text-impact-red"
                  style={{ transition: 'color 0.2s' }}
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon width={14} height={14} stroke="#6E6E6E" />
                <a
                  href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}
                  className="font-body text-warm-gray text-sm hover:text-impact-red"
                  style={{ transition: 'color 0.2s' }}
                >
                  {CONTACT_PHONE}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <ClockIcon width={14} height={14} stroke="#6E6E6E" className="mt-0.5" />
                <span className="font-body text-warm-gray text-sm">
                  {CONTACT_HOURS}
                </span>
              </li>
            </ul>

            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              {SOCIAL_LINKS.map((social) => {
                const IconComponent = SOCIAL_ICON_MAP[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                    style={{
                      background: '#E74A30',
                      minWidth: '44px',
                      minHeight: '44px',
                      transition: 'opacity 0.2s',
                    }}
                  >
                    <IconComponent width={16} height={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="border-t mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderColor: '#E0E0E0' }}
        >
          <p className="font-body text-warm-gray text-sm">
            Copyright &copy; {new Date().getFullYear()} United Senior Citizen
            Voice for Change Coalition. All rights reserved. Website by{' '}
            <span className="font-semibold">MAPL TECH</span>.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="font-body text-warm-gray text-sm hover:text-impact-red"
              style={{ transition: 'color 0.2s' }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-use"
              className="font-body text-warm-gray text-sm hover:text-impact-red"
              style={{ transition: 'color 0.2s' }}
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
