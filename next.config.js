const dotenv = require('dotenv');
dotenv.config();

const nextConfig = {
  reactStrictMode: true, // enabled react-strict mode

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ibb.co',
        pathname: '/**',
      },
    ],
  },

};

module.exports = nextConfig;
