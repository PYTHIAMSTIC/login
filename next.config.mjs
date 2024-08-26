/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Image and 3D model optimization settings
  images: {
    domains: ['delphi.pythainet'],  // Allow loading images from the NFT marketplace domain.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840, 4096], // Future-proof for larger devices.
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 1024, 2048],  // Future-proof for large image sizes.
    formats: ['image/avif', 'image/webp'],  // Serve images in modern formats.
  },

  // Support for 3D model file formats commonly used in Unity and Web3 gaming
  webpack(config, { isServer }) {
    if (!isServer) {
      config.module.rules.push({
        test: /\.(glb|gltf|fbx|obj|stl|usd|usdz)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'static/models',
            },
          },
        ],
      });

      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },

  output: 'standalone', // Enables standalone mode for production deployments (useful for Docker).
};

export default nextConfig;
