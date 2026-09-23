import { useId, useMemo } from 'react';
import { BLUENOVA_CONFIG } from '../config/bluenovaConfig';

// High-entropy Mulberry32 pseudo-random generator
function createPRNG(seedNumber) {
  let s = seedNumber >>> 0;
  return function next() {
    s |= 0;
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Convert arbitrary string to a 32-bit positive integer seed
function stringToSeed(str) {
  let hash = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return (hash ^ (hash >>> 16)) >>> 0;
}

const STAMP_VARIANTS = [
  {
    type: 'stamp-shield',
    eyebrow: '🔒 CLIENT DEMO • DO NOT COPY',
    title: 'Bluenova Tech',
    sub: `${BLUENOVA_CONFIG.phone} • www.bluenovatech.in`
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
    sub: `Direct Contact: ${BLUENOVA_CONFIG.phone}`
  },
  {
    type: 'stamp-badge',
    eyebrow: 'WANT A WEBSITE LIKE THIS?',
    title: 'Bluenova Tech Demo',
    sub: `Call / WhatsApp: ${BLUENOVA_CONFIG.phone}`
  },
  {
    type: 'stamp-ghost-large',
    eyebrow: 'COMMERCIAL LICENSE REQUIRED',
    title: 'Bluenova Tech',
    sub: 'Visit: www.bluenovatech.in'
  }
];

/**
 * BlueNovaWatermarks
 * 
 * Reusable anti-copy watermark component placed directly inside any <section>.
 * Generates 2, 3, or 4 completely randomized, non-overlapping watermark stamps
 * that float over content (z-index: 100) while allowing clicks underneath (pointer-events: none).
 * 
 * @param {Object} props
 * @param {number} [props.count=3] - Number of watermarks: 2, 3, or 4
 * @param {string} [props.seed] - Optional seed to stabilize random positions per section
 */
export default function BlueNovaWatermarks({ count = 3, seed }) {
  const reactId = useId();

  const stamps = useMemo(() => {
    // Generate deterministic seed for this instance
    const seedStr = `${seed || 'bn-sec'}_${reactId}`;
    const rand = createPRNG(stringToSeed(seedStr));

    // Clamp count to 2, 3, or 4
    const validCount = Math.max(2, Math.min(4, Number(count) || 3));

    // Helper for angles between -24deg and +24deg (avoiding flat -5deg..+5deg)
    const getRandomAngle = () => {
      const sign = rand() > 0.5 ? 1 : -1;
      const magnitude = 7 + rand() * 16; // 7deg to 23deg
      return `${Math.round(sign * magnitude)}deg`;
    };

    let locations = [];

    if (validCount === 2) {
      // 2 Watermarks: Top half and Bottom half, opposite sides
      const topSide = rand() > 0.5 ? 'left' : 'right';
      const bottomSide = topSide === 'left' ? 'right' : 'left';

      locations = [
        {
          top: `${Math.round(6 + rand() * 28)}%`,
          [topSide]: `${Math.round(3 + rand() * 38)}%`,
          rotate: getRandomAngle()
        },
        {
          top: `${Math.round(58 + rand() * 26)}%`,
          [bottomSide]: `${Math.round(3 + rand() * 38)}%`,
          rotate: getRandomAngle()
        }
      ];
    } else if (validCount === 3) {
      // 3 Watermarks: 3 vertical tiers with shuffled horizontal corridors
      const tiers = [
        { top: `${Math.round(6 + rand() * 22)}%` },   // Tier 1: 6% - 28%
        { top: `${Math.round(38 + rand() * 22)}%` },  // Tier 2: 38% - 60%
        { top: `${Math.round(68 + rand() * 20)}%` }   // Tier 3: 68% - 88%
      ];

      // 3 horizontal corridors (Left, Center, Right)
      const corridors = [
        { left: `${Math.round(3 + rand() * 18)}%` },
        { left: `${Math.round(32 + rand() * 24)}%` },
        { right: `${Math.round(3 + rand() * 18)}%` }
      ];

      // Shuffle corridors using Fisher-Yates with PRNG
      for (let i = corridors.length - 1; i > 0; i--) {
        const j = Math.floor(rand() * (i + 1));
        [corridors[i], corridors[j]] = [corridors[j], corridors[i]];
      }

      locations = tiers.map((tier, idx) => ({
        ...tier,
        ...corridors[idx],
        rotate: getRandomAngle()
      }));
    } else {
      // 4 Watermarks: 4 distinct quadrants with wide spatial jitter
      locations = [
        // Q0: Top-Left
        {
          top: `${Math.round(5 + rand() * 22)}%`,
          left: `${Math.round(3 + rand() * 28)}%`,
          rotate: getRandomAngle()
        },
        // Q1: Top-Right
        {
          top: `${Math.round(8 + rand() * 22)}%`,
          right: `${Math.round(3 + rand() * 28)}%`,
          rotate: getRandomAngle()
        },
        // Q2: Lower-Left
        {
          top: `${Math.round(52 + rand() * 20)}%`,
          left: `${Math.round(4 + rand() * 30)}%`,
          rotate: getRandomAngle()
        },
        // Q3: Lower-Right
        {
          top: `${Math.round(68 + rand() * 20)}%`,
          right: `${Math.round(3 + rand() * 28)}%`,
          rotate: getRandomAngle()
        }
      ];
    }

    // Assign randomized variants without immediate repeats
    const variantStart = Math.floor(rand() * STAMP_VARIANTS.length);
    return locations.map((loc, i) => {
      const variant = STAMP_VARIANTS[(variantStart + i * 2) % STAMP_VARIANTS.length];
      const style = {
        position: 'absolute',
        top: loc.top,
        left: loc.left || 'auto',
        right: loc.right || 'auto',
        transform: `rotate(${loc.rotate})`,
        zIndex: 100,
        pointerEvents: 'none',
        userSelect: 'none'
      };

      return {
        id: `${reactId}-stamp-${i}`,
        style,
        variant
      };
    });
  }, [count, seed, reactId]);

  return (
    <>
      {stamps.map((stamp) => (
        <div
          key={stamp.id}
          className={`bluenova-random-watermark ${stamp.variant.type}`}
          style={stamp.style}
          aria-hidden="true"
        >
          <div className="bn-stamp-inner">
            <div className="bn-stamp-icon-wrap">
              <img
                src="/images/BlueNovaIcon.png"
                alt=""
                className="bn-stamp-icon"
                width="28"
                height="28"
              />
            </div>
            <div className="bn-stamp-text">
              <span className="bn-stamp-eyebrow">{stamp.variant.eyebrow}</span>
              <strong className="bn-stamp-title">{stamp.variant.title}</strong>
              <span className="bn-stamp-sub">{stamp.variant.sub}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
