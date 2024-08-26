/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,  // Enables React Strict Mode to catch potential problems in your React application.
  swcMinify: true,        // Enables the SWC-based minifier, which is faster than Terser.
  images: {
    domains: ['example.com'],  // Add external domains that are allowed to serve images (if needed).
  },
  i18n: {
    locales: ['en', 'fr', 'es'],  // Example locales supported by your app.
    defaultLocale: 'en',          // The default locale used when visiting a non-locale-prefixed path.
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback.fs = false;  // Fixes issues with certain Node.js modules in the client-side.
    }
    return config;
  }
};

export default nextConfig;
