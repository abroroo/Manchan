/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const { runtimeCaching } = require('next-pwa/cache.js');

const isProduction = process.env.NODE_ENV === 'production';

const config = {
    pageExtensions: ['jsx', 'tsx', 'ts', 'js', 'mdx', 'css'],
    // async rewrites() {
    //     return [{
    //         source: '/api/:path*',
    //         destination: 'http://localhost:8000/:path*'
    //     }]
    // },
};

const nextConfig = withPWA({
    dest: 'public',
    disable: !isProduction,
    runtimeCaching
  })(
    config
  );


module.exports = nextConfig















// /** @type {import('next').NextConfig} */

// import withPWA from 'next-pwa';
// import runtimeCaching from 'next-pwa/cache.js';
// const isProduction = process.env.NODE_ENV === 'production';


// module.exports = {
//     pageExtensions: ['jsx', 'tsx', 'ts', 'js', 'mdx'],
//     // async rewrites() {
//     //     return [{
//     //         source: '/api/:path*',
//     //         destination: 'http://localhost:8000/:path*'
//     //     }]
//     // },
// };

// const nextConfig = withPWA({
//     dest: 'public',
//     disable: !isProduction,
//     runtimeCaching
//   })(
//     config
//   );
   
// module.exports = nextConfig