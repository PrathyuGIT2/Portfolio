import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

// Subtle floating background blobs positioned absolutely.
// Low z-index layer placed behind main content; uses CSS blur & radial gradients.
// Accessible: purely decorative (aria-hidden) and pointer-events disabled.

const blobs = [
  { className: 'blob-pink', size: 360, top: '8%', left: '5%', delay: 0 },
  { className: 'blob-lavender', size: 300, top: '35%', left: '75%', delay: 2 },
  { className: 'blob-blush', size: 280, top: '65%', left: '15%', delay: 4 },
  { className: 'blob-lavender', size: 340, top: '82%', left: '60%', delay: 6 },
];

const Decorations = () => {
  // Generate sparkles deterministically for this session
  const sparkles = useMemo(() => {
    const count = 22;
    const arr = [];
    for (let i = 0; i < count; i++) {
      const top = Math.random() * 100; // vh
      const left = Math.random() * 100; // vw
      const size = 2 + Math.random() * 2.5; // px
      const delay = Math.random() * 4; // s
      const dur = 3 + Math.random() * 3.5; // s
      arr.push({ top: `${top}%`, left: `${left}%`, size, delay, dur });
    }
    return arr;
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {blobs.map((b, i) => (
        <motion.div
          key={`blob-${i}`}
          className={`decorative-blob ${b.className}`}
          style={{ width: b.size, height: b.size, top: b.top, left: b.left }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.35, scale: 1 }}
          transition={{ duration: 2.2, delay: b.delay }}
        />
      ))}

      {sparkles.map((s, i) => (
        <div
          key={`sparkle-${i}`}
          className="sparkle"
          style={{
            top: s.top,
            left: s.left,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            ['--dur']: `${s.dur}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Decorations;