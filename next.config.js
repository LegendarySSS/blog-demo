/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    dirs: ['src'],
  },

  // Uncoment to add domain whitelist
  images: {
    domains: ['res.cloudinary.com', 'i.niupic.com', 'y.qq.com'],
  },
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const intercept = require('intercept-stdout');

// safely ignore recoil stdout warning messages
function interceptStdout(text) {
  if (text.includes('Duplicate atom key')) {
    return '';
  }
  return text;
}

// Intercept in dev and prod
intercept(interceptStdout);
