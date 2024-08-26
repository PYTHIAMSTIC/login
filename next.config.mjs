/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,  // Enables React Strict Mode to catch potential issues during development.
  swcMinify: true,        // Enables SWC-based minification for better performance.

  // Image optimization settings
  images: {
    domains: ['example.com'],  // Add any external domains you need to load images from.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // Optimize images for these screen sizes.
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],  // Optimize images for these specific sizes.
    formats: ['image/avif', 'image/webp'],  // Serve images in modern formats where supported.
  },

  // Internationalization (i18n) settings
  i18n: {
    locales: ['en', 'fr', 'es'],  // Supported locales for your application.
    defaultLocale: 'en',          // Default locale to use when visiting a non-locale-prefixed path.
  },

  // Custom Webpack configuration
  webpack(config, { isServer }) {
    // Fix issues with certain Node.js modules in the client-side environment.
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,  // Example: Disable 'fs' module for frontend code to avoid errors.
      };
    }
    return config;
  },

  // Other production-specific settings can go here
  output: 'standalone', // Enables standalone mode for production deployments (useful for Docker).
};

export default nextConfig;
