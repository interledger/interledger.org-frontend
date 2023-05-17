const path = require('path');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: false,
  poweredByHeader: false,
  experimental: {
    isrMemoryCacheSize: 0,
  },
  output: 'standalone',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    googleAnalytics: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS
      ? process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS
      : '',
    isProd: process.env.NODE_ENV === 'production',
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/sites/default/files/:path*',
          destination: `${process.env.NEXT_PUBLIC_IMAGE_CDN}/sites/default/files/:path*`,
        },
      ],
    };
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks.minSize = 20000;
      config.optimization.splitChunks.chunks = 'all';
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        swiper: {
          test: /[\\/]node_modules[\\/](swiper)[\\/]/,
          name: 'swiper',
          priority: 10,
          reuseExistingChunk: false,
        },
        'framer-motion': {
          test: /[\\/]node_modules[\\/](framer-motion)[\\/]/,
          name: 'framer-motion',
          priority: 10,
          reuseExistingChunk: false,
        },
      };
    }
    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
