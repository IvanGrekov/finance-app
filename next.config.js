/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
            {
                source: '/',
                destination: '/assets',
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
