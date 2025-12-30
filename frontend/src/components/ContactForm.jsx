import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    try {
      const res = await fetch('http://localhost:5000/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      // Error sending message
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <motion.div
      className="max-w-2xl mx-auto"
      variants={formVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <form onSubmit={handleSubmit} className="glass-effect p-8 md:p-10 rounded-xl space-y-7 shadow-2xl">
        {/* Name Input */}
        <motion.div
          custom={0}
          variants={inputVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <label className="block text-sm font-semibold text-gray-300 mb-3">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
            className="w-full px-4 py-3.5 bg-slate-700/40 border border-slate-600/50 rounded-lg focus:border-blue-500 focus:outline-none transition-all text-white placeholder-slate-400 hover:bg-slate-700/50 focus:bg-slate-700/60 font-medium"
          />
        </motion.div>

        {/* Email Input */}
        <motion.div
          custom={1}
          variants={inputVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <label className="block text-sm font-semibold text-gray-300 mb-3">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
            className="w-full px-4 py-3.5 bg-slate-700/40 border border-slate-600/50 rounded-lg focus:border-blue-500 focus:outline-none transition-all text-white placeholder-slate-400 hover:bg-slate-700/50 focus:bg-slate-700/60 font-medium"
          />
        </motion.div>

        {/* Message Input */}
        <motion.div
          custom={2}
          variants={inputVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <label className="block text-sm font-semibold text-gray-300 mb-3">
            Your Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project or opportunity..."
            required
            rows="6"
            className="w-full px-4 py-3.5 bg-slate-700/40 border border-slate-600/50 rounded-lg focus:border-blue-500 focus:outline-none transition-all text-white placeholder-slate-400 hover:bg-slate-700/50 focus:bg-slate-700/60 resize-none font-medium"
          />
        </motion.div>

        {/* Status Messages */}
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg"
          >
            <p className="text-green-300 font-semibold">✓ Message sent successfully!</p>
            <p className="text-green-300 text-sm">I'll get back to you soon.</p>
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg"
          >
            <p className="text-red-300 font-semibold">✗ Failed to send message</p>
            <p className="text-red-300 text-sm">Please try again or contact me directly.</p>
          </motion.div>
        )}

        {/* Submit Button */}
        <motion.button
          custom={3}
          variants={inputVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          type="submit"
          disabled={isLoading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3.5 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-blue-500/60 transition-all disabled:opacity-50 disabled:cursor-not-allowed border border-blue-400/30"
        >
          {isLoading ? (
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Sending...
            </motion.span>
          ) : (
            'Send Message'
          )}
        </motion.button>

        {/* Helper Text */}
        <p className="text-center text-gray-400 text-sm">
          I typically respond within 24 hours
        </p>
      </form>
    </motion.div>
  );
};

export default ContactForm;
