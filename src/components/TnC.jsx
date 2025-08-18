import React from 'react';

const TnC = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <div className='bg-white rounded-2xl shadow-xl p-8'>
      <h1 className='text-3xl font-bold text-gray-900 mb-8'>Terms and Conditions</h1>
      <p>Last updated: August 18, 2025</p>

      <p className='text-xl font-semibold text-gray-800'>
        Welcome to <strong>SparksWriters</strong>. By accessing or using our blog platform, you agree to comply with and be bound by the following terms and conditions.
        Please read them carefully.
      </p>

      <h2 className='text-xl font-semibold text-gray-800 mt-4'>1. Acceptance of Terms</h2>
      <p className='prose text-gray-600'>
        By using SparksWriters, you agree to abide by these terms and our Privacy Policy. If you do not agree, please do not use the site.
      </p>

      <h2 className='text-xl font-semibold text-gray-800 mt-4'>2. User Content</h2>
      <ul className='list-inside list-disc text-gray-600 pl-4 space-y-2'>
        <li>You retain ownership of the content you post.</li>
        <li>You grant SparksWriters a non-exclusive license to use, display, and distribute your content.</li>
        <li>Content must not be offensive, unlawful, or infringe on intellectual property rights.</li>
      </ul>

      <h2 className='text-xl font-semibold text-gray-800 mt-4'>3. User Responsibilities</h2>
      <ul className='list-inside list-disc text-gray-600 pl-4 space-y-2'>
        <li>You are responsible for the accuracy of your content.</li>
        <li>Do not engage in spam, harassment, or any abusive behavior.</li>
        <li>Use the platform legally and respectfully.</li>
      </ul>

      <h2 className='text-xl font-semibold text-gray-800 mt-4'>4. Termination</h2>
      <p className='prose text-gray-600'>
        We reserve the right to suspend or terminate access to any user who violates these terms without prior notice.
      </p>

      <h2 className='text-xl font-semibold text-gray-800 mt-4'>5. Changes to Terms</h2>
      <p className='prose text-gray-600'>
        SparksWriters may modify these terms at any time. Updates will be posted on this page, and continued use of the site indicates acceptance.
      </p>

      <h2 className='text-xl font-semibold text-gray-800 mt-4'>6. Contact Us</h2>
      <p className='prose text-gray-600'>
        If you have any questions about these Terms, please contact us at: <a href="mailto:support@sparkswriters.com">support@sparkswriters.com</a>
      </p>
    </div>
    </div>
  );
};

export default TnC;
