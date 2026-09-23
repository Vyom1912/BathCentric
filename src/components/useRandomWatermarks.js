import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const POSITIONS = [
  // Top right
  { top: '8%', right: '3%', bottom: 'auto', left: 'auto', rotate: '-12deg' },
  // Mid left
  { top: '42%', right: 'auto', bottom: 'auto', left: '2.5%', rotate: '13deg' },
  // Bottom right
  { top: 'auto', right: '4%', bottom: '9%', left: 'auto', rotate: '-8deg' },
  // Top left
  { top: '15%', right: 'auto', bottom: 'auto', left: '3%', rotate: '10deg' },
  // Lower mid right
  { top: '68%', right: '4.5%', bottom: 'auto', left: 'auto', rotate: '-14deg' },
  // Lower mid left
  { top: 'auto', right: 'auto', bottom: '22%', left: '3.5%', rotate: '9deg' },
  // Center right
  { top: '28%', right: '5%', bottom: 'auto', left: 'auto', rotate: '-7deg' },
  // Center left
  { top: '56%', right: 'auto', bottom: 'auto', left: '2%', rotate: '15deg' }
];

const VARIANTS = [
  {
    type: 'stamp-shield',
    eyebrow: '🔒 CLIENT DEMO • DO NOT COPY',
    title: 'Bluenova Tech',
    sub: '+91 7600 236 644 • www.bluenovatech.in'
  },
  {
    type: 'stamp-security',
    eyebrow: 'DEVELOPED & POWERED BY',
    title: 'Bluenova Tech',
    sub: 'Innovative IT Solutions • bluenovatech.in'
  },
  {
    type: 'stamp-signature',
    eyebrow: 'WEBSITE PROPERTY OF',
    title: 'Bluenova Tech',
    sub: 'Direct Contact: +91 7600 236 644'
  },
  {
    type: 'stamp-badge',
    eyebrow: 'WANT A WEBSITE LIKE THIS?',
    title: 'Bluenova Tech Demo',
    sub: 'Call / WhatsApp: +91 7600 236 644'
  },
  {
    type: 'stamp-ghost-large',
    eyebrow: 'COMMERCIAL LICENSE REQUIRED',
    title: 'Bluenova Tech',
    sub: 'Visit: www.bluenovatech.in'
  }
];

export default function useRandomWatermarks() {
  const location = useLocation();

  useEffect(() => {
    // Only run on client-facing routes, skip admin
    if (location.pathname.startsWith('/admin')) return;

    const applyWatermarks = () => {
      // Find all sections, heroes, and major content blocks
      const sections = document.querySelectorAll(
        'section, .page-hero, .hero-section, .send-bathroom-banner, .trust-strip'
      );

      sections.forEach((sec, idx) => {
        // Skip bluenova promo section itself
        if (sec.classList.contains('bluenova-promo-section') || sec.id === 'bluenova-promo') {
          return;
        }

        // Avoid adding multiple sets of watermarks to the same section
        if (sec.querySelector('.bluenova-random-watermark')) {
          return;
        }

        // Ensure parent section is positioned to contain absolute watermark overlays
        const computedPos = window.getComputedStyle(sec).position;
        if (computedPos === 'static') {
          sec.style.position = 'relative';
        }
        sec.style.overflow = 'hidden';

        // Measure height to determine number of watermarks (at least 3 if section is huge)
        const height = sec.offsetHeight || 500;
        let count = 2; // minimum for compact sections
        if (height >= 900) {
          count = 4; // huge section gets 4 watermarks
        } else if (height >= 500) {
          count = 3; // large section gets at least 3 watermarks
        }

        for (let i = 0; i < count; i++) {
          const seed = idx * 11 + i * 3 + location.pathname.length + (location.pathname.charCodeAt(1) || 0);
          const pos = POSITIONS[(idx * 2 + i * 3) % POSITIONS.length];
          const variant = VARIANTS[(idx + i) % VARIANTS.length];

          // Randomized jitter for rotation and slight offsets
          const jitterRot = ((seed * 7) % 11) - 5;
          const finalRotate = `${parseInt(pos.rotate, 10) + jitterRot}deg`;

          const watermark = document.createElement('div');
          watermark.className = `bluenova-random-watermark ${variant.type}`;
          watermark.setAttribute('aria-hidden', 'true');
          watermark.style.top = pos.top;
          watermark.style.bottom = pos.bottom;
          watermark.style.left = pos.left;
          watermark.style.right = pos.right;
          watermark.style.transform = `rotate(${finalRotate})`;

          watermark.innerHTML = `
            <div class="bn-stamp-inner">
              <div class="bn-stamp-icon-wrap">
                <img src="/images/BlueNovaIcon.png" alt="" class="bn-stamp-icon" width="28" height="28" />
              </div>
              <div class="bn-stamp-text">
                <span class="bn-stamp-eyebrow">${variant.eyebrow}</span>
                <strong class="bn-stamp-title">${variant.title}</strong>
                <span class="bn-stamp-sub">${variant.sub}</span>
              </div>
            </div>
          `;

          sec.appendChild(watermark);
        }
      });
    };

    // Run on initial render & slight delays for images and dynamic DOM
    applyWatermarks();
    const t1 = setTimeout(applyWatermarks, 150);
    const t2 = setTimeout(applyWatermarks, 600);

    // Mutation observer for dynamically rendered components
    const observer = new MutationObserver(() => {
      applyWatermarks();
    });

    const targetNode = document.querySelector('main') || document.body;
    if (targetNode) {
      observer.observe(targetNode, { childList: true, subtree: true });
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      observer.disconnect();
    };
  }, [location.pathname]);
}
