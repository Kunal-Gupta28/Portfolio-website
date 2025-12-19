import { useState, useEffect } from 'react';

const GlassCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 20,
        height: 20,
        borderRadius: '50%',

        /* clean glass look */
        background: 'rgba(255, 255, 255, 0.25)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',

        /* subtle depth */
        border: '1px solid rgba(255, 255, 255, 0.4)',
        boxShadow: `
          0 4px 12px rgba(255,255,255,0.25),
          inset 0 0 6px rgba(255,255,255,0.6)
        `,

        transform: `translate(${pos.x - 10}px, ${pos.y - 10}px)`,
        transition: 'transform 0.1s ease-out',

        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
};

export default GlassCursor;
