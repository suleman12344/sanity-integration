/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Optional, but ensures you're using https
        hostname: 'cdn.sanity.io',
        port: '', // Optional, leave it empty if not needed
        pathname: '/**', // This allows all paths under this hostname
      },
    ],
  },
};

export default nextConfig;
