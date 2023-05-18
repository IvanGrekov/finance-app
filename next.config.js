/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    redirects: async () => {
        return [
            {
                source: '/',
                destination: '/assets',
                permanent: true,
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.cryptocompare.com',
                pathname: '/media/**',
            },
        ],
    },
};

module.exports = nextConfig;
