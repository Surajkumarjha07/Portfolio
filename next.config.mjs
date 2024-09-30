import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 't4.ftcdn.net',
            },
        ],
    },
};

export default nextConfig;
