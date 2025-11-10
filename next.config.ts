import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|mov|webm|ogg)$/i,
      type: 'asset/resource',
    });
    return config;
  },
  experimental: {
    turbo: {
      rules: {
        '*.mp4': {
          loaders: ['file-loader'],
          options: {
            name: 'static/media/[name].[contenthash].[ext]',
          },
        },
        '*.mov': {
          loaders: ['file-loader'],
          options: {
            name: 'static/media/[name].[contenthash].[ext]',
          },
        },
        '*.webm': {
          loaders: ['file-loader'],
          options: {
            name: 'static/media/[name].[contenthash].[ext]',
          },
        },
        '*.ogg': {
          loaders: ['file-loader'],
          options: {
            name: 'static/media/[name].[contenthash].[ext]',
          },
        },
      },
    },
  },
};

export default nextConfig;
