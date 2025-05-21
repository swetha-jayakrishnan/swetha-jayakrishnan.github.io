import React from 'react';
import ProgressBar from '../components/ProgressBar';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillsData = [
    { skill: 'Test Case Preparation', percentage: 95 },
    { skill: 'Bug Reporting', percentage: 98 },
    { skill: 'Selenium', percentage: 90 },
    { skill: 'Java', percentage: 85 },
    { skill: 'SQL', percentage: 80 },
    { skill: 'Regression Testing', percentage: 95 },
    { skill: 'JMeter', percentage: 75 },
    { skill: 'Postman', percentage: 88 },
    { skill: 'Functional Testing', percentage: 92 }
  ];

  return (
    <section id="skills" className="container-custom bg-[#EDDACC] dark:bg-[#111111]">
      <div className="text-center mb-16 text-center mb-16">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>
        <motion.p 
          className="max-w-3xl mx-auto text-lg text-text-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I have expertise in various testing methodologies, tools, and programming languages 
          that help me deliver comprehensive quality assurance.
        </motion.p>
      </div>

      <motion.div 
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {skillsData.map((item, index) => (
          <ProgressBar 
            key={index} 
            skill={item.skill} 
            percentage={item.percentage} 
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;