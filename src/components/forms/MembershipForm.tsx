'use client';

import { useState, FormEvent, useRef } from 'react';

export default function MembershipForm() {
  const [activeTab, setActiveTab] = useState<'new' | 'renew'>('new');
  const [submitState, setSubmitState] = useState<'idle' | 'processing' | 'success'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const switchTab = (tab: 'new' | 'renew') => {
    setActiveTab(tab);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitState('processing');

    setTimeout(() => {
      setSubmitState('success');
      setTimeout(() => {
        formRef.current?.reset();
        setSubmitState('idle');
        setActiveTab('new');
      }, 2500);
    }, 1500);
  };

  const getButtonText = () => {
    if (submitState === 'processing') return 'PROCESSING...';
    if (submitState === 'success') {
      return activeTab === 'renew' ? 'MEMBERSHIP RENEWED!' : 'REGISTRATION COMPLETE!';
    }
    return activeTab === 'renew' ? 'RENEW MEMBERSHIP' : 'REGISTER AS NEW MEMBER';
  };

  return (
    <>
      {/* Membership type toggle */}
      <div className="flex gap-3 mt-10">
        <button
          type="button"
          className={`tab-btn ${activeTab === 'new' ? 'active' : ''}`}
          onClick={() => switchTab('new')}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="inline-block mr-1"
            style={{ verticalAlign: '-3px' }}
          >
            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
            <circle cx="8.5" cy="7" r="4" />
            <line x1="20" y1="8" x2="20" y2="14" />
            <line x1="23" y1="11" x2="17" y2="11" />
          </svg>
          New Member
        </button>
        <button
          type="button"
          className={`tab-btn ${activeTab === 'renew' ? 'active' : ''}`}
          onClick={() => switchTab('renew')}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="inline-block mr-1"
            style={{ verticalAlign: '-3px' }}
          >
            <path d="M21.5 2v6h-6" />
            <path d="M21.34 15.57a10 10 0 11-.57-8.38" />
          </svg>
          Renew Membership
        </button>
      </div>

      {/* Form */}
      <form
        ref={formRef}
        className="mt-8 space-y-5"
        onSubmit={handleSubmit}
      >
        {/* Membership ID (renewal only) */}
        {activeTab === 'renew' && (
          <div>
            <input
              type="text"
              name="membership_id"
              placeholder="Membership ID"
              className="form-input"
            />
          </div>
        )}

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
            type="date"
            name="dob"
            placeholder="Date of Birth"
            className="form-input"
            title="Date of Birth"
          />
        </div>

        <input
          type="text"
          name="address"
          placeholder="Street Address"
          className="form-input"
        />

        <div className="grid sm:grid-cols-3 gap-5">
          <input
            type="text"
            name="city"
            placeholder="City"
            className="form-input"
          />
          <select name="province" className="form-input" defaultValue="">
            <option value="" disabled>
              Province
            </option>
            <option value="AB">Alberta</option>
            <option value="BC">British Columbia</option>
            <option value="MB">Manitoba</option>
            <option value="NB">New Brunswick</option>
            <option value="NL">Newfoundland and Labrador</option>
            <option value="NS">Nova Scotia</option>
            <option value="NT">Northwest Territories</option>
            <option value="NU">Nunavut</option>
            <option value="ON">Ontario</option>
            <option value="PE">Prince Edward Island</option>
            <option value="QC">Quebec</option>
            <option value="SK">Saskatchewan</option>
            <option value="YT">Yukon</option>
          </select>
          <input
            type="text"
            name="postal"
            placeholder="Postal Code"
            className="form-input"
          />
        </div>

        {/* How did you hear about us */}
        <select name="referral" className="form-input" defaultValue="">
          <option value="" disabled>
            How did you hear about us?
          </option>
          <option value="friend">Friend or Family</option>
          <option value="social">Social Media</option>
          <option value="event">Community Event</option>
          <option value="website">Website</option>
          <option value="other">Other</option>
        </select>

        {/* Terms */}
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
            I agree to the UNSVCC membership terms and conditions and consent to receiving
            communications about programs, events, and advocacy updates.
          </span>
        </label>

        <button
          type="submit"
          className="form-submit mt-4"
          disabled={submitState !== 'idle'}
          style={{
            opacity: submitState === 'processing' ? 0.7 : 1,
            backgroundColor: submitState === 'success' ? '#0E7C7B' : '#E74A30',
            transition:
              'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease, background-color 0.3s ease, opacity 0.3s ease',
          }}
        >
          {getButtonText()}
        </button>
      </form>
    </>
  );
}
