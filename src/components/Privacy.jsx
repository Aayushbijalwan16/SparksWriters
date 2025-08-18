import React from 'react';

const Privacy = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <div className='bg-white rounded-lg shadow-xl p-8'>
      <h1 className='text-4xl font-extrabold text-gray-800 text-center mb-10'>Privacy Policy</h1>
      <p>Last updated: August 18, 2025</p>

      <p className='text-lg text-gray-600 mb-8 leading-relaxed'>
        At <strong>SparksWriters</strong>, we value your privacy and are committed to protecting your personal information.
        This Privacy Policy explains how we collect, use, and safeguard your data when you use our website.
      </p>
      <div class="border-b border-gray-300 my-6"></div>
      <h2 className='text-2xl font-bold text-gray-800 mb-4 flex items-center'>1. Information We Collect</h2>
      <ul className='list-inside list-disc text-gray-600 pl-4 space-y-2'>
        <li><strong>Personal Information:</strong> such as your name, email address, and profile details when you register or submit content.</li>
        <li><strong>Usage Data:</strong> including pages visited, time spent on the site, and interaction logs.</li>
        <li><strong>Cookies:</strong> small data files used to enhance your browsing experience.</li>
      </ul>

      <h2 className='text-2xl font-bold text-gray-800 mb-4 flex items-center'>2. How We Use Your Information</h2>
      <ul className='list-inside list-disc text-gray-600 pl-4 space-y-2'>
        <li>To provide and improve our services</li>
        <li>To personalize user experience and content</li>
        <li>To send updates, newsletters, or respond to inquiries</li>
        <li>To maintain security and prevent misuse</li>
      </ul>

      <h2 className='text-2xl font-bold text-gray-800 mb-4 flex items-center'>3. Data Sharing</h2>
      <p className='text-gray-600 leading-relaxed'>
        We do not sell or rent your personal information. We may share data only:
      </p>
      <ul className='list-inside list-disc text-gray-600 pl-4 space-y-2'>
        <li>With third-party service providers who help run the site (under strict confidentiality)</li>
        <li>If required by law or legal process</li>
      </ul>

      <h2 className='text-2xl font-bold text-gray-800 mb-4 flex items-center'>4. Cookies</h2>
      <p className='text-gray-600 leading-relaxed'>
        We use cookies to remember preferences and improve usability. You can manage or disable cookies through your browser settings.
      </p>

      <h2 className='text-2xl font-bold text-gray-800 mb-4 flex items-center'>5. Data Security</h2>
      <p className='text-gray-600 leading-relaxed'>
        We implement industry-standard measures to protect your data from unauthorized access or disclosure.
      </p>

      <h2 className='text-2xl font-bold text-gray-800 mb-4 flex items-center'>6. Your Rights</h2>
      <p className='text-gray-600 leading-relaxed'>
        You may request to access, correct, or delete your personal data by contacting us at the email below.
      </p>

      <h2 className='text-2xl font-bold text-gray-800 mb-4 flex items-center'>7. Changes to This Policy</h2>
      <p className='text-gray-600 leading-relaxed'>
        We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date.
      </p>

      <h2 className='text-2xl font-bold text-gray-800 mb-4 flex items-center'>8. Contact Us</h2>
      <p className='text-gray-600 leading-relaxed'>
        For questions about this Privacy Policy, please email: <a href="mailto:privacy@sparkswriters.com">privacy@sparkswriters.com</a>
      </p>
    </div>
    </div>
  );
};

export default Privacy;
