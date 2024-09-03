import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

const ConfettiComponent = ({ duration }) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    setShowConfetti(true);
    setOpacity(1);

    const fadeOut = setTimeout(() => {
      let interval = duration / 10; 
      let step = 1 / 10; 
      const fade = setInterval(() => {
        setOpacity(prevOpacity => {
          if (prevOpacity - step <= 0) {
            clearInterval(fade);
            setShowConfetti(false);
            return 0;
          }
          return prevOpacity - step;
        });
      }, interval);
    }, duration - (duration / 10)); 

    return () => {
      clearTimeout(fadeOut);
    };
  }, [duration]);

  return (
    <div style={{ opacity: opacity, transition: `opacity ${duration / 10}ms linear` }}>
      {showConfetti && <Confetti />}
    </div>
  );
};

export default ConfettiComponent;
