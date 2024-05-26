/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'a0.muscache.com',
                protocol: 'https',
            },
            {
                hostname: 'xqooydltswhpbypguomo.supabase.co',
                protocol: 'https',
            }
        ]
    },
};


export default nextConfig;
