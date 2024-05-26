// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         remotePatterns: [
//             {
//                 hostname: 'a0.muscache.com',
//                 protocol: 'https',
//                 port: ""
//             },
//             {
//                 hostname: 'xqooydltswhpbypguomo.supabase.co',
//                 protocol: 'https',
//                 port: ""
//             }
//         ]
//     },
// };
//
//
// export default nextConfig;


// next.config.js
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'a0.muscache.com',
                protocol: 'https',
                port: ""
            },
            {
                hostname: 'xqooydltswhpbypguomo.supabase.co',
                protocol: 'https',
                port: ""
            }
        ]
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: "default-src 'self'; script-src 'self' 'unsafe-inline' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; connect-src 'self' https:; font-src 'self' https: data:; object-src 'none'; media-src 'self'; frame-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'; upgrade-insecure-requests;",
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=63072000; includeSubDomains; preload',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'no-referrer-when-downgrade',
                    },
                    {
                        key: 'Permissions-Policy',
                        value: 'accelerometer=(), autoplay=(), camera=(), encrypted-media=(), fullscreen=self, geolocation=(), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=self, usb=()',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
