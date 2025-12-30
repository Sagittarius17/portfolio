import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const contactVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'your@email.com',
      link: 'mailto:your@email.com',
    },
    {
      icon: '💬',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Your City, Country',
      link: '#',
    },
  ];

  return (
    <motion.section
      className="w-full py-20 gradient-dark text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={contactVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span variants={itemVariants} className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full text-blue-300 text-sm font-semibold mb-4">
            Get In Touch
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
            Let's Work <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Together</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </motion.p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-12"
          variants={contactVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactMethods.map((method, idx) => (
            <motion.a
              key={idx}
              href={method.link}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect p-6 rounded-xl text-center hover:border-blue-500 transition-all"
            >
              <div className="text-4xl mb-3">{method.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
              <p className="text-gray-400 text-sm">{method.value}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
