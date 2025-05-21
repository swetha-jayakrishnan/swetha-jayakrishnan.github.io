import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  darkImageUrl?: string;
  projectUrl: string;
  index: number;
};

const ProjectCard = ({ title, description, imageUrl, darkImageUrl, projectUrl, index }: ProjectCardProps) => {
  // Detect dark mode using a CSS class on the html element
  const [isDark, setIsDark] = React.useState(false);
  React.useEffect(() => {
    const checkDark = () => setIsDark(document.documentElement.classList.contains('dark'));
    checkDark();
    window.addEventListener('storage', checkDark);
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => {
      window.removeEventListener('storage', checkDark);
      observer.disconnect();
    };
  }, []);
  const displayImage = isDark && darkImageUrl ? darkImageUrl : imageUrl;
  return (
    <motion.div
      className="card hover:shadow-lg group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="mb-4 flex items-center justify-center bg-white/10 rounded-lg" style={{ height: '160px' }}>
        <img
          src={displayImage}
          alt={title}
          className="max-h-36 max-w-[80%] object-contain mx-auto transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-text-light mb-4">{description}</p>
      <a
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-primary hover:underline"
      >
        View Project <ExternalLink size={16} className="ml-1" />
      </a>
    </motion.div>
  );
};

export default ProjectCard;