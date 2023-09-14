/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
module.exports = {
    pageExtensions: ['jsx', 'tsx', 'ts', 'js', 'mdx'],
    images: {
        domains: ['localhost'],
    }
    // async rewrites() {
    //     return [{
    //         source: '/api/:path*',
    //         destination: 'http://localhost:8000/:path*'
    //     }]
    // },

};