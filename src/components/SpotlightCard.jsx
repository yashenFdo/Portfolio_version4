import { useRef } from 'react';

/**
 * SpotlightCard — wraps children and renders a glowing radial gradient
 * that follows the cursor position within the card.
 *
 * Props:
 *   as         — HTML tag to render as (default 'div'). Use 'a' for link cards.
 *   className  — forwarded to the container
 *   style      — forwarded to the container
 *   glowColor  — override the spotlight tint (default cyan)
 *   children   — card content
 *   ...rest    — any other props (href, target, onClick etc.) forwarded to root element
 */
export default function SpotlightCard({
  as: Tag = 'div',
  className = '',
  style = {},
  glowColor = 'rgba(34,211,238,0.15)',
  children,
  ...rest
}) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--spotlight-x', `${x}px`);
    el.style.setProperty('--spotlight-y', `${y}px`);
    el.style.setProperty('--spotlight-opacity', '1');
  };

  const handleMouseLeave = () => {
    const el = cardRef.current;
    if (el) el.style.setProperty('--spotlight-opacity', '0');
  };

  return (
    <Tag
      ref={cardRef}
      className={`spotlight-card ${className}`}
      style={{
        '--spotlight-x': '50%',
        '--spotlight-y': '50%',
        '--spotlight-opacity': '0',
        '--spotlight-color': glowColor,
        position: 'relative',
        ...style,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {/* spotlight glow layer */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          background: `radial-gradient(280px circle at var(--spotlight-x) var(--spotlight-y), var(--spotlight-color), transparent 70%)`,
          opacity: 'var(--spotlight-opacity)',
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      {/* border spotlight layer */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          padding: '1px',
          background: `radial-gradient(200px circle at var(--spotlight-x) var(--spotlight-y), rgba(34,211,238,0.45), transparent 60%)`,
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          opacity: 'var(--spotlight-opacity)',
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      {/* content layer */}
      <div style={{ position: 'relative', zIndex: 2, height: '100%' }}>
        {children}
      </div>
    </Tag>
  );
}
