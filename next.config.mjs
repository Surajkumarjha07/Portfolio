import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 't4.ftcdn.net',
            },
            {
                hostname: "www.freeiconspng.com"
            },
            {
                hostname: "www.iconpacks.net"
            },
            {
                hostname: "static.vecteezy.com"
            },
            {
                hostname: "cdn-icons-png.flaticon.com" 
            }
        ],
    },
};

export default nextConfig;
