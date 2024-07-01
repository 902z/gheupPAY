/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: true,
  },
  images: {
    domains: [
      "bootcamp-project-api.s3.ap-northeast-2.amazonaws.com",
      "i.pinimg.com",
      "google.com",
    ],
  },
};

export default nextConfig;
