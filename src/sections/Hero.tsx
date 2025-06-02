import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import heroIm from "../images/qa1.jpg";
import heroImLight from "../images/Qa2.jpg";

const Hero = () => {
  return (
    <section id="home" className="h-screen relative flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          {/* Light theme image */}
          <img
            src={heroImLight}
            alt="Swetha's profile light"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-contain mx-auto shadow-xl border-4 border-white dark:hidden"
          />
          {/* Dark theme image */}
          <img
            src={heroIm}
            alt="Swetha's profile dark"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-contain mx-auto shadow-xl border-4 border-primary hidden dark:block"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Hi, I'm{' '}
          <span className="text-primary">
            <Typewriter
              words={['Swetha Jayakrishnan']}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-text-light mb-8"
        >
          Quality Analyst
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg max-w-2xl mx-auto mb-12"
        >
          Skilled Quality Analyst with a strong track record of identifying and resolving defects, achieving a
90% defect detection rate across 10+ projects. Proficient in creating test cases and ensuring high-
quality software delivery.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a href="#projects" className="btn-primary">
            Explore My Work
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-text-light hover:text-primary transition-colors"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        whileHover={{ y: [0, -5, 0], transition: { duration: 1.5, repeat: Infinity } }}
      >
        <ChevronDown size={30} />
      </motion.a>
    </section>
  );
};

export default Hero;