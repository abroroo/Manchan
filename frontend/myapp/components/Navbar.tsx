import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { motion } from 'framer-motion';

interface Props {}

const Navbar = () => {
  const router = useRouter();

  const isCurrentPage = (route: string) => {
    return router.route === route;
  };

  return (
    <motion.div className="fixed w-full z-[100] p-6 bg-opacity-90 font-outfit ">
      <div className="flex flex-row p-2 items-center justify-center tracking-wide">
        <Link href="/menu">
          <p className={`mx-5 ${isCurrentPage('/menu') ? 'text-white' : 'text-slate-300'}`}>Menu</p>
        </Link>
        <Link href="/">
          <p className={`mx-5 ${isCurrentPage('/') ? 'text-black' : 'text-slate-300'}`}>Reserve</p>
        </Link>
        <Link href="/about">
          <p className={`mx-5 ${isCurrentPage('/about') ? 'text-white' : 'text-slate-300'}`}>About</p>
        </Link>
      </div>
    </motion.div>
  );
};

export default Navbar;

//bg-[#fffbff]