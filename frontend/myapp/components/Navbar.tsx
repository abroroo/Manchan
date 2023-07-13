import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Props {}

const Navbar = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isCurrentPage = (route: string) => {
    return router.route === route;
  };

  const handleMenuClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
    
      <motion.div className="fixed w-full z-[100] p-2 md:p-4 bg-opacity-90 font-outfit  shadow-inner">
      <Link href="/"  className={`font-bold text-xl  absolute top-1/2 left-20 transform -translate-x-1/2 -translate-y-1/2 ${isCurrentPage('/') ? 'text-[#49111c]' : 'text-[#49111c]'}  `}>Food컴</Link>
        <div className="flex flex-row p-2 items-center justify-end tracking-wide">
          {/* <p className={`mx-5 ${isCurrentPage('/menu') ? 'text-black' : 'text-slate-200'}`}>Menu</p>
          <p className={`mx-5 ${isCurrentPage('/') ? 'text-white' : 'text-slate-200'}`}>Order</p> */}
          <button onClick={handleMenuClick} className={`mx-5 ${isCurrentPage('/register-page') ? 'text-[#fff]' : 'text-[#49111c]'}`}>
          메뉴
          </button>
        </div>
      </motion.div>
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-[99] bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex flex-col items-center text-[100px] font-bold">
            <Link href="/about">
              <p className={`my-3 ${isCurrentPage('/about') ? 'text-white' : 'text-[#49111c]'}`}>About</p>
            </Link>
            <Link href="/contact">
              <p className={`my-3 ${isCurrentPage('/contact') ? 'text-white' : 'text-[#49111c]'}`}>Contact</p>
            </Link>
            <Link href="/work">
              <p className={`my-3 ${isCurrentPage('/work') ? 'text-white' : 'text-[#49111c]'}`}>Work</p>
            </Link>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;




















// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import React from 'react';
// import { motion } from 'framer-motion';

// interface Props {}

// const Navbar = () => {
//   const router = useRouter();

//   const isCurrentPage = (route: string) => {
//     return router.route === route;
//   };

//   return (
//     <motion.div className="fixed w-full z-[100] p-6 bg-opacity-90 font-outfit ">
//       <div className="flex flex-row p-2 items-center justify-end tracking-wide">
//         <Link href="/menu">
//           <p className={`mx-5 ${isCurrentPage('/menu') ? 'text-black' : 'text-slate-200'}`}>Menu</p>
//         </Link>
//         <Link href="/">
//           <p className={`mx-5 ${isCurrentPage('/') ? 'text-white' : 'text-slate-200'}`}>Order</p>
//         </Link>
//         <Link href="/about">
//           <p className={`mx-5 ${isCurrentPage('/about') ? 'text-white' : 'text-slate-200'}`}>About</p>
//         </Link>
//       </div>
//     </motion.div>
//   );
// };

// export default Navbar;

// //bg-[#fffbff]