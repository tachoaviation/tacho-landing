'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [phoneCode, setPhoneCode] = useState('+91');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ phoneCode, phoneNumber, email, query });
    alert("Form submitted successfully!");
    setPhoneNumber('');
    setEmail('');
    setQuery('');
  };

  return (
    <div 
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        border: '1px solid #d1d5db',
        padding: '32px 40px',
        width: '100%',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
        fontFamily: 'var(--font-poppins), Poppins, sans-serif'
      }}
    >
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Phone Number row */}
        <div style={{ 
          display: 'flex', 
          width: '100%',
          height: '48px',
          borderRadius: '6px',
          border: '1px solid #cbd5e1',
          backgroundColor: '#fff',
          overflow: 'hidden'
        }}>
          <select 
            value={phoneCode}
            onChange={(e) => setPhoneCode(e.target.value)}
            style={{
              width: '145px',
              height: '100%',
              border: 'none',
              borderRight: '1px solid #e2e8f0',
              padding: '0 8px 0 16px',
              backgroundColor: '#f8fafc',
              outline: 'none',
              fontSize: '15px',
              flexShrink: 0,
              color: '#333',
              cursor: 'pointer',
              appearance: 'auto',
              fontFamily: 'inherit'
            }}
          >
            <option value="+91">+91 (India)</option>
            <option value="+1">+1 (US/CA)</option>
            <option value="+44">+44 (UK)</option>
            <option value="+61">+61 (AU)</option>
            <option value="+49">+49 (DE)</option>
            <option value="+33">+33 (FR)</option>
            <option value="+971">+971 (AE)</option>
            <option value="+65">+65 (SG)</option>
            <option value="+81">+81 (JP)</option>
            <option value="+86">+86 (CN)</option>
          </select>

          <input 
            type="tel"
            placeholder="Phone Number"
            required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            style={{
              flex: 1,
              height: '100%',
              border: 'none',
              padding: '0 16px',
              outline: 'none',
              fontSize: '15px',
              width: '100%',
              color: '#333'
            }}
          />
        </div>

        {/* Email */}
        <input 
          type="email"
          placeholder="Email Address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            height: '48px',
            borderRadius: '6px',
            border: '1px solid #cbd5e1',
            padding: '0 16px',
            outline: 'none',
            fontSize: '15px',
            width: '100%',
            color: '#333'
          }}
        />

        {/* Query */}
        <textarea 
          placeholder="Your Query"
          required
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            minHeight: '140px',
            borderRadius: '6px',
            border: '1px solid #cbd5e1',
            padding: '16px',
            outline: 'none',
            fontSize: '15px',
            width: '100%',
            resize: 'none',
            color: '#333'
          }}
        />

        <div style={{ marginTop: '4px' }}>
          <button 
            type="submit"
            style={{
              display: 'inline-block',
              backgroundColor: '#41BEF0',
              color: '#ffffff',
              fontWeight: 400,
              padding: '10px 32px',
              borderRadius: '10px',
              fontSize: '14px',
              letterSpacing: '0.08em',
              cursor: 'pointer',
              border: 'none',
              transition: 'background-color 0.2s ease',
              fontFamily: 'inherit'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2A9AC4'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#41BEF0'}
          >
            <span style={{ 
              display: 'inline-block',
              transform: 'scaleY(1.2)',
              transformOrigin: 'center'
            }}>
              Submit
            </span>
          </button>
        </div>

      </form>
    </div>
  );
}
