'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function PreloadScreen() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const loadedRef = useRef(false);
  const doneRef = useRef(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem('hasVisited')) {
      setVisible(false);
      return;
    }

    const startTs = Date.now();
    const minVisibleMs = 1200;

    const lockScroll = () => {
      document.body.style.overflow = 'hidden';
    };

    const unlockScroll = () => {
      document.body.style.overflow = '';
    };

    const onLoaded = () => {
      loadedRef.current = true;
    };

    if (document.readyState === 'complete') {
      loadedRef.current = true;
    } else {
      window.addEventListener('load', onLoaded);
    }

    lockScroll();

    const timer = window.setInterval(() => {
      setProgress((prev) => {
        if (doneRef.current) return prev;

        if (!loadedRef.current) {
          return Math.min(92, prev + 1.2);
        }

        const next = Math.min(100, prev + 3.5);
        const hasWaitedLongEnough = Date.now() - startTs >= minVisibleMs;


        if (next >= 100 && hasWaitedLongEnough) {
          doneRef.current = true;
          sessionStorage.setItem('hasVisited', 'true');
          window.setTimeout(() => {
            setVisible(false);
            unlockScroll();
            // Scroll to top after preloader hides
            window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
          }, 220);
        }

        return next;
      });
    }, 40);

    return () => {
      window.clearInterval(timer);
      window.removeEventListener('load', onLoaded);
      unlockScroll();
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        backgroundColor: '#00488C',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        fontFamily: 'var(--font-poppins), Poppins, sans-serif',
      }}
    >
      <Image
        src="/footerplane.webp"
        alt=""
        width={100}
        height={80}
        style={{
          position: 'absolute',
          left: 12,
          bottom: 12,
          width: '72px',
          height: 'auto',
          opacity: 0.32,
          pointerEvents: 'none',
        }}
      />

      <div style={{ textAlign: 'center' }}>
        <Image
          src="/tachologo.svg"
          alt="Tacho"
          width={170}
          height={50}
          style={{ margin: '0 auto 22px', width: '170px', height: 'auto' }}
          priority
        />

        <p
          style={{
            color: '#ffffff',
            fontSize: '1.05rem',
            letterSpacing: '0.08em',
            marginBottom: '12px',
            fontWeight: 500,
          }}
        >
          Loading {Math.round(progress)}%
        </p>

        <div
          style={{
            width: '210px',
            height: '6px',
            margin: '0 auto',
            borderRadius: '999px',
            backgroundColor: 'rgba(255,255,255,0.24)',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: '100%',
              backgroundColor: '#41BEF0',
              transition: 'width 120ms ease',
            }}
          />
        </div>
      </div>
    </div>
  );
}
