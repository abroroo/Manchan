/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
module.exports = {
    pageExtensions: ['jsx', 'tsx', 'ts', 'js', 'mdx'],
    // async rewrites() {
    //     return [{
    //         source: '/api/:path*',
    //         destination: 'http://localhost:8000/:path*'
    //     }]
    // },

};