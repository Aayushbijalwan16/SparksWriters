import React, { useState } from 'react';

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setError('Please fill out all fields.');
      return;
    }

    // Simulate submission (replace with backend/email integration)
    console.log('Form submitted:', formData);

    setSubmitted(true);
    setError('');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <div className='bg-white rounded-2xl shadow-xl p-8'>
      <h1 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>Contact Us</h1>
      <p className='mt-4 text-lg leading-6 text-gray-500'>Have a question or want to get in touch? We’d love to hear from you.</p>

      {submitted && <p style={{ color: 'green' }}>Thank you! Your message has been sent.</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'>
        <div className='sm:col-span-2'>
          <label htmlFor="name" className='block text-sm font-medium text-gray-700'>Name</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className='border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-white'
          />
        </div>

        <div className='sm:col-span-2'>
          <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className='border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-white'
          />
        </div>

        <div className='sm:col-span-2'>
          <label htmlFor="message" className='block text-sm font-medium text-gray-700'>Message</label><br />
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className='border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-white'
          />
        </div>

        <button type="submit" className="w-full bg-indigo-700 text-white font-bold py-2 px-4 mb-6 rounded">
          Send Message
        </button>
      </form>
    </div>
    </div>
  );
};

export default Contactus;
