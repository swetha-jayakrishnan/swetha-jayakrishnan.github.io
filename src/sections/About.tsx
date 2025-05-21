import React from 'react';
import { FileDown, GraduationCap, Award, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import resumePdf from '../assets/Swetha_Jayakrishnan.pdf';

const About = () => {
  const experience = [
    {
      title: 'Quality Analyst Private Limited',
      company: 'Midnay Tech Private Limited',
      duration: 'Jul 2024 - Present',
      description: 'Developed and executed 300+ test cases, identifying 912 defects and contributing to a 30% improvement in product quality. Achieved a 90% defect detection rate across 10+ projects, ensuring timely and high-quality software releases. Performed thorough regression and functional testing to validate system performance and enhance user experience.'
    },
    {
      title: 'Quality Analyst (Apprenticeship)',
      company: 'Midnay Tech Private Limited',
      duration: 'Apr 2024 - Jul 2024',
      description: 'Completed an apprenticeship in Manual Testing, where I contributed to the testing of various software applications, identifying defects, and ensuring the delivery of high-quality products. Gained hands-on experience in test case creation, executing test plans, and collaborating with development teams to resolve issues. Actively participated in improving testing processes and enhancing product quality.'
    }
  ];

  const education = [
    {
      degree: 'MSc Mathematics',
      school: 'St. Joseph\'s College (Autonomous), Irinjalakuda',
      year: '2021 - 2023'
    },
    {
      degree: 'BSc Mathematics',
      school: 'Nirmalagiri College',
      year: '2018 - 2021'
    }
  ];

  const certifications = [
    {
      name: 'NACTET Certification',
      year: '2024'
    }
  ];

  return (
    <section id="about" className="container-custom">
      <div className="text-center mb-16">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.p 
          className="max-w-3xl mx-auto text-lg text-text-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I'm a passionate Quality Assurance Engineer with over 8 years of experience in ensuring 
          software excellence through comprehensive testing strategies and automation frameworks.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <motion.div 
            className="mb-10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <Briefcase className="text-primary mr-2" />
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>
            <div className="space-y-6">
              {experience.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-xl font-bold">{item.title}</h4>
                  <p className="text-primary font-medium">{item.company}</p>
                  <p className="text-text-light text-sm mb-2">{item.duration}</p>
                  <p>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <GraduationCap className="text-primary mr-2" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-xl font-bold">{item.degree}</h4>
                  <p className="text-primary font-medium">{item.school}</p>
                  <p className="text-text-light text-sm">{item.year}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div>
          <motion.div 
            className="mb-10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <Award className="text-primary mr-2" />
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>
            <div className="space-y-6">
              {certifications.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-xl font-bold">{item.name}</h4>
                  <p className="text-text-light text-sm">{item.year}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="flex justify-center md:justify-start mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a 
              href={resumePdf}
              download 
              className="btn-primary flex items-center"
            >
              <FileDown size={18} className="mr-2" />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;