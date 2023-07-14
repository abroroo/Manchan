import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faArrowRight, faBellConcierge } from '@fortawesome/free-solid-svg-icons'


interface Props {}

const Navbar = () => {

  const router = useRouter();


  const currentRoute = router.route;
  const isRegisterPage = currentRoute === '/register-page';

  const [isModalOpen, setIsModalOpen] = useState(false);

  const isCurrentPage = (route: string) => {
    return router.route === route;
  };

  const handleMenuClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
    
      <motion.div className="fixed w-full z-[100] p-2 md:p-3  font-outfit  shadow-inner bg-[#fff]">
     
        <div className="flex flex-row p-2 items-center justify-between tracking-wide">
        <Link href="/"  className={`font-bold text-xl mx-1 ${isCurrentPage('/') ? 'text-[#49111c]' : 'text-[#49111c]'}  `}>Food컴</Link>
          {/* <p className={`mx-5 ${isCurrentPage('/menu') ? 'text-black' : 'text-slate-200'}`}>Menu</p>
          <p className={`mx-5 ${isCurrentPage('/') ? 'text-white' : 'text-slate-200'}`}>Order</p> */}
          <button onClick={handleMenuClick} className={`mx-1 w-12 h-10 block xl:hidden ${isCurrentPage('/register-page') ? 'text-[#49111c]' : 'text-[#49111c]'}`}>
          {isModalOpen ? <FontAwesomeIcon icon={faXmark} size='lg'/> :<FontAwesomeIcon icon={faBars} size='lg' />  }
          </button>

          <div className=' hidden xl:flex justify-between items-center w-[50vw] text-[#49111c] text-[14px]'>
              
              <Link className='p-1' href="/work">최근 이벤트</Link>
              <Link className='p-1' href='/how'>작동 방식</Link>
              <Link className='p-1' href="/about">스토리</Link>
              <Link className='p-1' href="/contact">콘텍트</Link>
              <Link className={`${isRegisterPage ? 'hidden': 'block'}`} href="/register-page"><FontAwesomeIcon className='border hover:border-gray-100  border-[#49111c] rounded-lg p-[0.32rem]' size='lg' icon={faBellConcierge} /></Link>
             

          </div>
        </div>
      </motion.div>
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-[99] bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex flex-col items-start text-[40px] md:text-[50px] font-bold">
          <Link href="/register-page">
              <p className={`my-3 ${isCurrentPage('/register-page') ? 'text-white hidden' : 'text-[#49111c] block'}`}>계획 행사</p>
            </Link>
           
            <Link href="/work">
              <p className={`my-3 ${isCurrentPage('/work') ? 'text-white hidden' : 'text-[#49111c] block'}`}>최근 이벤트</p>
            </Link>
            <Link href="/how">
              <p className={`my-3 ${isCurrentPage('/how') ? 'text-white hidden' : 'text-[#49111c] block'}`}>작동 방식</p>
            </Link>
            <Link href="/about" >
              <p className={`my-3 ${isCurrentPage('/about') ? 'text-white hidden' : 'text-[#49111c] block'}`}>스토리</p>
            </Link>
            <Link href="/contact">
              <p className={`my-3 ${isCurrentPage('/contact') ? 'text-white hidden' : 'text-[#49111c] block'}`}>콘텍트</p>
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