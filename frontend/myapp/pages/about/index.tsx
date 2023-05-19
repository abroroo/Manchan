import React from 'react';
import { motion } from 'framer-motion';

const index: React.FC = () => {
  return (
    <motion.div className="flex flex-col items-center justify-center h-screen font-outfit bg-[#0d1010] text-white">
      <header className="py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white">About Us</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img
              src="/images/about-image.jpg"
              alt="About Us"
              className="rounded-lg w-full"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-white leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sagittis non dui a lacinia. Vivamus auctor faucibus nisi. Sed
              sollicitudin vestibulum facilisis. Vestibulum elementum dolor
              vitae lacus tristique facilisis. Sed in malesuada elit. Nunc ut
              sem erat. Ut posuere leo nec magna vestibulum, et gravida diam
              sollicitudin.
            </p>
            <p className="text-white leading-relaxed mb-6">
              Nunc sagittis sapien augue, eu commodo sem feugiat eget. In hac
              habitasse platea dictumst. Aenean nec facilisis leo. Proin
              ultricies, risus eu auctor hendrerit, enim justo egestas odio, eu
              ultrices risus risus ac mauris. Ut in risus et neque laoreet
              fringilla.
            </p>
            <p className="text-white leading-relaxed">
              Sed vel tincidunt purus. Etiam non semper ex. Nullam scelerisque
              augue a metus tempus, ut feugiat lacus facilisis. Donec feugiat,
              odio vitae cursus tincidunt, enim sem eleifend orci, vel dapibus
              turpis orci nec velit.
            </p>
          </div>
        </div>
      </main>

      <footer className="text-white py-4 text-center ">
        <p className="text-sm">&copy; {new Date().getFullYear()} 만찬. All rights reserved.</p>
      </footer>
    </motion.div>
  );
};

export default index;
