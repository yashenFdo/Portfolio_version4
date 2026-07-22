import { motion } from 'framer-motion';

const base = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function Reveal({
  as: Tag = 'div',
  delay = 0,
  duration = 0.7,
  className,
  style,
  children,
  ...rest
}) {
  const MotionTag = motion[Tag] || motion.div;
  return (
    <MotionTag
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={base}
      transition={{ duration, delay: delay / 1000, ease: 'easeOut' }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
