'use client';

import { useState } from 'react';

const PRESET_AMOUNTS = [58, 108, 258, 508] as const;

export default function DonationWidget() {
  const [donationType, setDonationType] = useState<'onetime' | 'monthly'>('onetime');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(58);
  const [customAmount, setCustomAmount] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [submitState, setSubmitState] = useState<'idle' | 'processing' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const selectPresetAmount = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomFocus = () => {
    setSelectedAmount(null);
  };

  const getFinalAmount = (): number => {
    if (selectedAmount) return selectedAmount;
    const custom = parseFloat(customAmount);
    return isNaN(custom) ? 0 : custom;
  };

  const handleDonate = async () => {
    const amount = getFinalAmount();
    if (amount < 1) {
      setErrorMessage('Please select or enter a donation amount.');
      setSubmitState('error');
      return;
    }

    setSubmitState('processing');
    setErrorMessage('');

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount,
          donationType,
          email: email || undefined,
          name: [firstName, lastName].filter(Boolean).join(' ') || undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'Failed to process donation. Please try again.');
      setSubmitState('error');
      setTimeout(() => setSubmitState('idle'), 3000);
    }
  };

  const getButtonText = () => {
    if (submitState === 'processing') return 'REDIRECTING TO PAYMENT...';
    const amount = getFinalAmount();
    if (amount > 0) return `DONATE $${amount} CAD`;
    return 'DONATE NOW';
  };

  return (
    <div>
      {/* Donation type toggle */}
      <div className="flex items-center justify-center gap-8 sm:gap-10">
        <label className="flex items-center gap-2.5 cursor-pointer">
          <input
            type="radio"
            name="donationType"
            value="onetime"
            checked={donationType === 'onetime'}
            onChange={() => setDonationType('onetime')}
            className="donate-radio"
          />
          <span className="font-heading font-bold text-sm uppercase tracking-wide text-charcoal">
            One Time Donation
          </span>
        </label>
        <label className="flex items-center gap-2.5 cursor-pointer">
          <input
            type="radio"
            name="donationType"
            value="monthly"
            checked={donationType === 'monthly'}
            onChange={() => setDonationType('monthly')}
            className="donate-radio"
          />
          <span className="font-heading font-bold text-sm uppercase tracking-wide text-charcoal">
            Monthly Donation
          </span>
        </label>
      </div>

      {/* Amount buttons */}
      <div className="grid grid-cols-4 gap-3 sm:gap-4 mt-10">
        {PRESET_AMOUNTS.map((amount) => (
          <button
            key={amount}
            type="button"
            className={`donation-amt text-center${selectedAmount === amount ? ' selected' : ''}`}
            onClick={() => selectPresetAmount(amount)}
          >
            ${amount}
          </button>
        ))}
      </div>

      {/* Custom amount */}
      <div className="relative mt-4">
        <span
          className="absolute left-4 top-1/2 -translate-y-1/2 font-heading font-bold text-lg text-warm-gray pointer-events-none"
        >
          $
        </span>
        <input
          type="number"
          className="custom-amount"
          placeholder="Custom amount"
          min={1}
          value={customAmount}
          onFocus={handleCustomFocus}
          onChange={(e) => setCustomAmount(e.target.value)}
        />
      </div>

      {/* Donor info */}
      <div className="mt-10 space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <input
            type="text"
            placeholder="First Name"
            className="donate-form-input"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="donate-form-input"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <input
          type="email"
          placeholder="Email Address (for tax receipt)"
          className="donate-form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Error message */}
        {submitState === 'error' && errorMessage && (
          <p className="font-body text-sm text-red-600 text-center">{errorMessage}</p>
        )}

        {/* Donate button */}
        <button
          type="button"
          className="w-full mt-4 font-heading font-bold text-base uppercase cursor-pointer"
          onClick={handleDonate}
          disabled={submitState === 'processing'}
          style={{
            background: '#D4883E',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '12px',
            padding: '18px 36px',
            minHeight: '56px',
            letterSpacing: '0.04em',
            opacity: submitState === 'processing' ? 0.7 : 1,
            transition:
              'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease, background-color 0.3s ease, opacity 0.3s ease',
          }}
          onMouseOver={(e) => {
            if (submitState === 'idle') {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(201,162,39,0.35)';
            }
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = '';
            e.currentTarget.style.boxShadow = '';
          }}
          onFocus={(e) => {
            if (submitState === 'idle') {
              e.currentTarget.style.outline = '3px solid #0E7C7B';
              e.currentTarget.style.outlineOffset = '2px';
            }
          }}
          onBlur={(e) => {
            e.currentTarget.style.outline = '';
            e.currentTarget.style.outlineOffset = '';
          }}
        >
          {getButtonText()}
        </button>

        <p className="font-body text-xs text-warm-gray text-center mt-3">
          Secure payment processed by Stripe. All donations are in Canadian dollars (CAD).
        </p>
      </div>
    </div>
  );
}
