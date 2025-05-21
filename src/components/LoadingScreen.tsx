import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onDone }: { onDone?: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const name = "Swetha";

  useEffect(() => {
    const duration = 1000; // 1 second for faster loading
    const interval = 10; // Update every 10ms for smooth animation
    const steps = duration / interval;
    const increment = 100 / steps;
    let timer: ReturnType<typeof setInterval>;

    timer = setInterval(() => {
      setProgress(prev => {
        if (prev + increment >= 100) {
          clearInterval(timer);
          setProgress(100);
          setTimeout(() => {
            setIsLoaded(true);
            if (onDone) onDone();
          }, 3200); // short delay for visual completion
          return 100;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onDone]);

  // Prevent flicker: only hide after loaded and a short delay
  if (!isLoaded) {
    return (
      <div id="loading-screen">
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-primary mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to{' '}
          <span className="text-primary">
            {name}
          </span>
          's Portfolio
        </motion.h1>
        <motion.div
          className="loader-bar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.div
            className="loader-progress"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: 'linear' }}
          />
        </motion.div>
      </div>
    );
  }

  return null;
};

export default LoadingScreen;