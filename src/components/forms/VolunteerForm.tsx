'use client';

import { useState, FormEvent, useRef } from 'react';

export default function VolunteerForm() {
  const [submitState, setSubmitState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitState('submitting');

    setTimeout(() => {
      setSubmitState('success');
      setTimeout(() => {
        formRef.current?.reset();
        setSubmitState('idle');
      }, 2500);
    }, 1500);
  };

  const buttonText = {
    idle: 'SIGN UP TO VOLUNTEER',
    submitting: 'SUBMITTING...',
    success: 'THANK YOU FOR SIGNING UP!',
  };

  return (
    <form
      ref={formRef}
      className="mt-10 space-y-5"
      onSubmit={handleSubmit}
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          className="form-input"
          required
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          className="form-input"
          required
        />
      </div>

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        className="form-input"
        required
      />

      <div className="grid sm:grid-cols-2 gap-5">
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="form-input"
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          className="form-input"
        />
      </div>

      <select name="availability" className="form-input" defaultValue="">
        <option value="" disabled>
          Availability
        </option>
        <option value="weekdays">Weekdays</option>
        <option value="weekends">Weekends</option>
        <option value="evenings">Evenings</option>
        <option value="flexible">Flexible</option>
      </select>

      <select name="interest" className="form-input" defaultValue="">
        <option value="" disabled>
          Area of Interest
        </option>
        <option value="frontdesk">Front Desk Concierge</option>
        <option value="meals">Meal Preparation Assistant</option>
        <option value="events">Special Events Volunteer</option>
        <option value="outreach">Community Outreach</option>
        <option value="grocery">Grocery Bag Food Program</option>
        <option value="housing">Housing Support</option>
        <option value="supportline">Senior Support Line</option>
        <option value="legal">Legal Services</option>
        <option value="admin">Administrative Support</option>
        <option value="other">Other</option>
      </select>

      <textarea
        name="message"
        rows={4}
        placeholder="Tell us about yourself and why you'd like to volunteer"
        className="form-input"
        style={{ resize: 'vertical', minHeight: '120px' }}
      />

      {/* Terms consent */}
      <label className="flex items-start gap-3 cursor-pointer mt-2">
        <input
          type="checkbox"
          required
          className="mt-1"
          style={{
            width: '18px',
            height: '18px',
            flexShrink: 0,
            accentColor: '#E74A30',
          }}
        />
        <span className="font-body text-warm-gray text-sm" style={{ lineHeight: '1.7' }}>
          I consent to UNSVCC contacting me about volunteer opportunities and receiving
          communications about programs and events.
        </span>
      </label>

      <button
        type="submit"
        className="form-submit mt-4"
        disabled={submitState !== 'idle'}
        style={{
          opacity: submitState === 'submitting' ? 0.7 : 1,
          backgroundColor: submitState === 'success' ? '#0E7C7B' : '#E74A30',
          transition:
            'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease, background-color 0.3s ease, opacity 0.3s ease',
        }}
      >
        {buttonText[submitState]}
      </button>
    </form>
  );
}
