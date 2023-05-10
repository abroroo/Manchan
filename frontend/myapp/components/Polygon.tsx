import { useState } from 'react';
import { motion } from 'framer-motion';

type PolygonProps = {
  points: string;
};

const Polygon = ({ points }: PolygonProps) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleHoverStart = () => {
    setIsHovering(true);
  };

  const handleHoverEnd = () => {
    setIsHovering(false);
  };

  return (
    <svg viewBox="-50 -50 200 200">
      <motion.polygon
        points={points}
        fill="#000000"
        stroke="#4a464e"
        strokeWidth={0}
        opacity={0.9}
        initial={{ scale: 1 }}
        animate={{ scale: isHovering ? 1.3 : 1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
      >
        {points.split(' ').map((point, i) => (
          <motion.circle
            key={i}
            cx={parseFloat(point.split(',')[0])}
            cy={parseFloat(point.split(',')[1])} //@ts-ignore
            r={isHovering ? 10 + i * 2 : 2}
            fill="#4a464e"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: isHovering ? 1 : 0, scale: isHovering ? 1 : 0 }}
            transition={{ delay: isHovering ? i * 0.1 : 0 }}
          />
        ))}
      </motion.polygon>
    </svg>
  );
};

export default Polygon