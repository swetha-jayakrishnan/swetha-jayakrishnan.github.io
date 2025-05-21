import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const { register, formState: { errors } } = useForm<FormData>();

  return (
    <section id="contact" className="container-custom bg-[#EDDACC] dark:bg-[#111111]">
      <div className="text-center mb-16">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>
        <motion.p 
          className="max-w-3xl mx-auto text-lg text-text-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Have a project in mind or want to discuss opportunities? 
          Feel free to reach out to me.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
          
          <div className="flex items-start">
            <div className="bg-primary/10 p-3 rounded-full mr-4">
              <Mail className="text-primary" size={24} />
            </div>
            <div>
              <h4 className="font-bold mb-1">Email</h4>
              <a href="mailto:swethajayakrishnnan2000@gmail.com" className="text-text-light hover:text-primary transition-colors">
                swethajayakrishnnan2000@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-primary/10 p-3 rounded-full mr-4">
              <MapPin className="text-primary" size={24} />
            </div>
            <div>
              <h4 className="font-bold mb-1">Location</h4>
              <p className="text-text-light">Kannur, Kerala, India</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
            {/* Add your Web3Forms access key as a hidden input */}
            <input type="hidden" name="access_key" value="fbcc75a0-d480-43fb-a8da-792d4597fd73" />
            
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">Name</label>
              <input
                type="text"
                id="name"
                className={`input-field ${errors.name ? 'border-error' : ''}`}
                placeholder="Your name"
                {...register('name', { required: 'Name is required' })}
                name="name"
              />
              {errors.name && <p className="mt-1 text-sm text-error">{errors.name.message}</p>}
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                id="email"
                className={`input-field ${errors.email ? 'border-error' : ''}`}
                placeholder="Your email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                name="email"
              />
              {errors.email && <p className="mt-1 text-sm text-error">{errors.email.message}</p>}
            </div>
            
            <div>
              <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
              <input
                type="text"
                id="subject"
                className={`input-field ${errors.subject ? 'border-error' : ''}`}
                placeholder="Subject"
                {...register('subject', { required: 'Subject is required' })}
                name="subject"
              />
              {errors.subject && <p className="mt-1 text-sm text-error">{errors.subject.message}</p>}
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">Message</label>
              <textarea
                id="message"
                rows={5}
                className={`input-field ${errors.message ? 'border-error' : ''}`}
                placeholder="Your message"
                {...register('message', { required: 'Message is required' })}
                name="message"
              ></textarea>
              {errors.message && <p className="mt-1 text-sm text-error">{errors.message.message}</p>}
            </div>
            
            <button
              type="submit"
              className="btn-primary w-full flex items-center justify-center"
            >
              <Send size={18} className="mr-2" />
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;