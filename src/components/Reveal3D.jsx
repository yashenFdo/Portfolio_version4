import { motion } from 'framer-motion';

/**
 * Reveal3D — scroll-driven 3D reveal component using framer-motion.
 * Elements tilt up and scale in as they enter the viewport.
 *
 * Props:
 *   as        — HTML tag or component to render (default 'div')
 *   delay     — delay in milliseconds before animation starts
 *   className — forwarded to the root element
 *   style     — forwarded to the root element
 *   children  — content to animate
 */
const variants = {
  hidden: {
    opacity: 0,
    y: 40,
    rotateX: 14,
    scale: 0.96,
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    filter: 'blur(0px)',
  },
};

export default function Reveal3D({
  as: Tag = 'div',
  delay = 0,
  duration = 0.75,
  className,
  style,
  children,
  ...rest
}) {
  const MotionTag = motion[Tag] || motion.div;

  return (
    <MotionTag
      className={className}
      style={{
        transformPerspective: 1000,
        transformStyle: 'preserve-3d',
        ...style,
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={variants}
      transition={{
        duration,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
