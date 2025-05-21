import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';
import drpaulBlack from "../images/black-logo.svg"
import drpaulWhite from "../images/white-logo.svg"
import murty from "../images/murty-trust.svg"
import tcceed from "../images/logo.webp"
import palBlack from "../images/pal-logo.svg"
import palBlue from "../images/PAL-logo-blue.svg"

const Projects = () => {
  const projects = [
    {
      title: "Dr. Paul's Dental Clinic",
      description: 'Providing top-notch dental care.',
      imageUrl: drpaulBlack,
      darkImageUrl: drpaulWhite,
      projectUrl: 'https://www.drpaulsdentalclinic.com/'
    },
    {
      title: 'Murty Trust',
      description: 'Supporting educational initiatives.',
      imageUrl: murty,
      projectUrl: 'https://www.murtytrust.org/'
    },
    {
      title: 'TCCEED',
      description: 'Transforming community engagement.',
      imageUrl: tcceed,
      projectUrl: 'https://tcceed.org/'
    },
    {
      title: 'CloudDevOps',
      description: 'Innovative cloud solutions.',
      imageUrl: '/black-logo.svg',
      projectUrl: 'https://example.com/clouddevops'
    },
    {
      title: 'Paradise Patio',
      description: 'Creating serene outdoor spaces.',
      imageUrl: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      projectUrl: 'https://example.com/paradise-patio'
    },
    {
      title: 'PAL Works',
      description: 'This is a placeholder card.',
      imageUrl: palBlack,
      darkImageUrl: palBlue,
      projectUrl: 'https://palworks.in/'
    }
  ];

  return (
    <section id="projects" className="container-custom">
      <div className="text-center mb-16">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        <motion.p 
          className="max-w-3xl mx-auto text-lg text-text-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Here are some of the key projects I've worked on throughout my career.
          Each project demonstrates my expertise in quality assurance and testing.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            darkImageUrl={project.darkImageUrl}
            projectUrl={project.projectUrl}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;