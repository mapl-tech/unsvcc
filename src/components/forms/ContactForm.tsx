'use client';

import { useState, FormEvent, useRef } from 'react';

export default function ContactForm() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('sending');

    setTimeout(() => {
      setFormState('sent');
      setTimeout(() => {
        formRef.current?.reset();
        setFormState('idle');
      }, 2500);
    }, 1200);
  };

  const buttonText = {
    idle: 'SUBMIT',
    sending: 'SENDING...',
    sent: 'SENT!',
  };

  return (
    <form
      ref={formRef}
      className="mt-8 space-y-5"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="form-input"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        className="form-input"
        required
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        className="form-input"
      />

      <select name="subject" className="form-input" required defaultValue="">
        <option value="" disabled>
          Programs + Services
        </option>
        <option value="grocery">Grocery Bag Food Program</option>
        <option value="housing">Housing Support</option>
        <option value="supportline">Support Line</option>
        <option value="legal">Legal Services</option>
        <option value="insurance">Group Insurance Support</option>
        <option value="retirement">Retirement Planning Support</option>
        <option value="jobs">Jobs Connect for Seniors</option>
        <option value="transportation">Transportation Support Services</option>
        <option value="incometax">Income Tax Preparation</option>
        <option value="familysupport">Family Support Wellness Safety Check</option>
        <option value="lifeinsurance">Life Insurance Cancellation Supports Payment</option>
        <option value="taxexemption">National Tax-Exemption Grocery Card</option>
        <option value="shopping">Shopping Discount Program</option>
        <option value="general">General Inquiry</option>
      </select>

      <select name="contact_person" className="form-input" defaultValue="">
        <option value="" disabled>
          Who would you like to reach?
        </option>
        <option value="general">General Inquiries</option>
        <option value="membership">Membership Services</option>
        <option value="programs">Programs Coordinator</option>
        <option value="volunteer">Volunteer Coordinator</option>
      </select>

      <textarea
        name="message"
        placeholder="How can we help?"
        className="form-input"
        required
        style={{ resize: 'vertical', minHeight: '140px' }}
      />

      {/* reCAPTCHA placeholder */}
      <div
        className="inline-flex items-center gap-3"
        style={{
          padding: '12px 16px',
          border: '1.5px solid #E0E0E0',
          borderRadius: '8px',
          background: '#FAFAFA',
          cursor: 'pointer',
          transition: 'border-color 0.2s ease',
        }}
      >
        <div
          style={{
            width: '24px',
            height: '24px',
            border: '2px solid #C4C4C4',
            borderRadius: '4px',
            background: '#FFFFFF',
            flexShrink: 0,
          }}
        />
        <span className="font-body text-charcoal text-sm">
          I&apos;m not a robot
        </span>
        <div className="ml-auto text-right">
          <span
            className="font-body text-warm-gray block"
            style={{ fontSize: '10px', lineHeight: '1.2' }}
          >
            reCAPTCHA
          </span>
          <span className="font-body text-warm-gray" style={{ fontSize: '8px' }}>
            Privacy - Terms
          </span>
        </div>
      </div>

      <button
        type="submit"
        className="form-submit"
        disabled={formState !== 'idle'}
        style={{
          opacity: formState === 'sending' ? 0.7 : 1,
          backgroundColor: formState === 'sent' ? '#0E7C7B' : '#E74A30',
          transition:
            'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease, background-color 0.3s ease, opacity 0.3s ease',
        }}
      >
        {buttonText[formState]}
      </button>
    </form>
  );
}
