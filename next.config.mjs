/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  // Add the IP address shown in your error message here
  allowedDevOrigins: ["192.168.31.245", "localhost:3000"],
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.glb$/,
      type: 'asset/resource',
    });
    return config;
  },
  turbopack: {
    resolveAlias: {
      canvas: 'empty',
    },
  },
};

export default nextConfig;
