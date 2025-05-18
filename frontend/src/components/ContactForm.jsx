import { useState } from 'react';

const ContactForm = () => {
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus('Message sent!');
      setContactForm({ name: '', email: '', message: '' });
    } else {
      setStatus('Failed to send message.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
      <input
        type="text"
        name="name"
        value={contactForm.name}
        onChange={handleChange}
        placeholder="Your Name"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="email"
        name="email"
        value={contactForm.email}
        onChange={handleChange}
        placeholder="Your Email"
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        name="message"
        value={contactForm.message}
        onChange={handleChange}
        placeholder="Your Message"
        className="w-full p-2 border rounded"
        required
      />
      <button type="submit" className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700">Send</button>
      {status && <p className="text-sm text-green-600">{status}</p>}
    </form>
  );
};

export default ContactForm;
