/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/',
                destination: 'https://api1.anime-dex.workers.dev/:path*'
            }
        ]
    }
};

export default nextConfig;
