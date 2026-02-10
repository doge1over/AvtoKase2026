import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    // Оптимизация изображений
    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200],
        imageSizes: [16, 32, 48, 64, 96, 128, 256],
        minimumCacheTTL: 60 * 60 * 24 * 30, // 30 дней
    },

    // Оптимизация сборки
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },

    // Сжатие
    compress: true,

    // Оптимизация CSS
    experimental: {
        optimizeCss: true,
    },

    // Заголовки для кэширования
    async headers() {
        return [
            {
                source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
            {
                source: '/_next/static/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;