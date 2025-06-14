import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: 'rgba(211, 211, 211, 0.3)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
      }}
      className="border-t border-t-[#a0a0a0] py-8"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">
              <span style={{ color: '#32CD32' }}>Hire</span>
              <span style={{ color: '#4B0082' }}>Quest</span>
            </h2>
            <p className="text-sm" style={{ color: '#4B0082' }}>© 2025 Your Company. All rights reserved.</p>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/winnicodeofficial"
              className="bg-[#4B0082] p-2 rounded-full hover:bg-[#32CD32] transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" />
                <path d="M12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="http://wa.me/6285159932501"
              className="bg-[#4B0082] p-2 rounded-full hover:bg-[#32CD32] transition-colors"
              aria-label="WhatsApp"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 0 0-9.2 14.14L2 22l5.91-1.55A10 10 0 1 0 12 2z" />
                <path d="M16.4 14.5c-.3-.15-1.8-.9-2.1-1s-.5-.1-.7.1c-.2.2-.7.9-.9 1.1s-.4.2-.6.1a7.8 7.8 0 0 1-3.7-3.7c-.1-.2-.1-.5.1-.6s.9-.7 1.1-.9c.2-.2.2-.4.1-.7s-.5-1.2-.7-1.7c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5 0-.7.3s-1 1-1 2.3 1 2.7 1.1 2.8a9.7 9.7 0 0 0 4.7 4c.6.2 1.1.4 1.5.5.6.2 1.2.2 1.7.1s1.5-.6 1.7-1.2c.3-.6.3-1.1.2-1.2-.1-.1-.3-.2-.6-.3z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/winnicodegarudateknologi/"
              className="bg-[#4B0082] p-2 rounded-full hover:bg-[#32CD32] transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452H16.85v-5.569c0-1.327-.027-3.037-1.852-3.037-1.854 0-2.137 1.446-2.137 2.94v5.666H9.147V9.756h3.448v1.464h.05c.48-.91 1.653-1.871 3.401-1.871 3.634 0 4.307 2.39 4.307 5.498v5.605zM5.337 8.29c-1.105 0-2-.896-2-2 0-1.106.895-2 2-2 1.104 0 2 .895 2 2 0 1.104-.896 2-2 2zM7.119 20.452H3.553V9.756h3.566v10.696zM22.225 0H1.771C.791 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451c.979 0 1.771-.774 1.771-1.729V1.729C24 .774 23.205 0 22.225 0z" />
              </svg>
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
