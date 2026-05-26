import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    // Это заставляет Next.js правильно работать с внешними пакетами вроде Prisma
    serverComponentsExternalPackages: ['@prisma/client'],
  },
};

export default nextConfig;
