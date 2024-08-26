/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,  // Enables React Strict Mode to catch potential issues during development.
  swcMinify: true,        // Enables SWC-based minification for better performance.

  // Image and 3D model optimization settings
  images: {
    domains: ['example.com'],  // Add any external domains you need to load images from.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // Optimize images for these screen sizes.
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],  // Optimize images for these specific sizes.
    formats: ['image/avif', 'image/webp', 'image/jpeg', 'image/png', 'image/gif', 'image/tiff'],  // Serve images in modern and traditional formats.
  },

  // Support for 3D model file formats commonly used in Unity and Web3 gaming
  webpack(config, { isServer }) {
    // Fix issues with certain Node.js modules in the client-side environment.
    if (!isServer) {
      config.module.rules.push({
        test: /\.(glb|gltf|fbx|obj|stl|usd|usdz)$/i,  // Add support for these 3D model formats.
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'static/models',  // Output path for 3D models.
            },
          },
        ],
      });

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
