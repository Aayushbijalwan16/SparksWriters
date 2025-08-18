import React from 'react'

const Aboutus = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: 'auto' }}>
      <div className='bg-white rounded-2xl shadow-xl p-8'>
      <h1 className='text-4xl font-extrabold text-gray-800 text-center mb-10'>About SparksWriters</h1>
      <p className='text-lg text-gray-600 mb-8 leading-relaxed'>
        Welcome to <strong>SparksWriters</strong> — your go-to platform for passionate writers, readers, and creatives!
        We are a community-driven blog website built for those who love to share ideas, stories, insights, and inspiration through the power of words.
      </p>

      <h2 className='text-2xl font-bold text-gray-800 mt-4 flex items-center'>Our Mission</h2>
      <p className='text-gray-600 leading-relaxed'>
        Our mission is to empower writers of all backgrounds to express themselves, connect with readers around the globe, and build their digital presence.
      </p>

      <h2 className='text-2xl font-bold text-gray-800 mt-4 flex items-center'>What We Offer</h2>
      <ul className='list-inside list-disc text-gray-600 pl-4 space-y-2'>
        <li>A platform to publish and showcase your writing</li>
        <li>Engaging content across diverse categories</li>
        <li>A community of writers and readers to exchange ideas</li>
        <li>Tools and tips to help you grow as a writer</li>
      </ul>

      <h2 className='text-2xl font-bold text-gray-800 mt-4 flex items-center'>Join Us</h2>
      <p className='text-gray-600 leading-relaxed'>
        Whether you're a professional writer, a hobbyist, or just someone who enjoys good content — SparksWriters welcomes you.
        Join us in sparking creativity one post at a time.
      </p>
    </div>
    </div>
  );
};

export default Aboutus;