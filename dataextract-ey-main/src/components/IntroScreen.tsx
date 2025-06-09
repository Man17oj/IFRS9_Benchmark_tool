import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';

const IntroScreen = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  useEffect(() => {
    // Simulate progressive loading
    const totalTime = 2000; // 2 seconds
    const intervalTime = 50; // update every 50ms
    const steps = totalTime / intervalTime;
    let currentStep = 0;
    
    const timer = setInterval(() => {
      currentStep += 1;
      const newProgress = Math.min(100, Math.floor((currentStep / steps) * 100));
      setLoadingProgress(newProgress);
      
      if (newProgress >= 100) {
        clearInterval(timer);
        setTimeout(() => setLoading(false), 200);
      }
    }, intervalTime);
    
    return () => clearInterval(timer);
  }, []);

  const handleEnterApp = () => {
    navigate('/select-bank');
  };

  // Animation variants for the logo and letters
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const floatVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    }
  };

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  // Combined animation for the logo that includes floating effect
  const logoAnimation = {
    scale: 1,
    opacity: 1,
    y: [0, -8, 0]
  };
  
  // Combined transition for the logo
  const logoTransition = {
    scale: {
      type: "spring",
      damping: 12,
      stiffness: 100
    },
    opacity: {
      type: "spring",
      damping: 12,
      stiffness: 100
    },
    y: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };
  
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-ey-black text-white">
      <div className="w-full max-w-md px-6 py-12 text-center">
        <motion.div 
          className="mb-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div 
            className="flex justify-center mb-6"
          >
            <motion.div 
              className="h-16 w-16 bg-ey-yellow rounded-md"
              variants={logoVariants}
              initial="hidden"
              animate={logoAnimation}
              transition={logoTransition}
              whileHover={{ scale: 1.05 }}
            ></motion.div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl font-bold mb-2 flex justify-center"
            variants={containerVariants}
          >
            {Array.from("DataXtract +").map((letter, index) => (
              <motion.span
                key={index}
                className="inline-block"
                variants={letterVariants}
                custom={index}
                whileHover={floatVariants.animate}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.p 
            className="text-ey-gray-400"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            AI powered Data Extraction
          </motion.p>
          
          <motion.p 
            className="text-ey-gray-500 text-sm mt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Supported by EYQ
          </motion.p>
        </motion.div>
        
        {loading ? (
          <motion.div 
            className="space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Progress 
              value={loadingProgress} 
              className="h-2" 
              indicatorClassName="bg-ey-yellow" 
            />
            <p className="text-sm text-ey-gray-400 animate-pulse">
              Loading application... {loadingProgress}%
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.button
              onClick={handleEnterApp}
              className="w-full bg-ey-yellow hover:bg-ey-yellow/90 text-ey-black font-medium py-2 px-4 rounded"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              Enter Application
            </motion.button>
          </motion.div>
        )}
        
        <motion.div 
          className="mt-12 text-xs text-ey-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.2 }}
        >
          <p>© {new Date().getFullYear()} EY | A better working world</p>
        </motion.div>
      </div>
    </div>
  );
};

export default IntroScreen;
