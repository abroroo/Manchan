import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faArrowRight, faBellConcierge, faListCheck, faFilePen } from '@fortawesome/free-solid-svg-icons'


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
    
      <motion.div className="fixed w-full z-[100] p-2 md:p-3  font-outfit  shadow-inner bg-[#fff] xl:bg-transparent">
     
        <div className={`flex flex-row p-2 items-center justify-between tracking-wide ${isCurrentPage('/about') ? 'text-[#fff]' : 'text-[#1d040b]'} `}>
        <Link href="/"  className={`font-bold text-xl mx-1  `}>Food컴</Link>
          {/* <p className={`mx-5 ${isCurrentPage('/menu') ? 'text-black' : 'text-slate-200'}`}>Menu</p>
          <p className={`mx-5 ${isCurrentPage('/') ? 'text-white' : 'text-slate-200'}`}>Order</p> */}
          <button onClick={handleMenuClick} className={`mx-1 w-12 h-10 block md:hidden  ${isCurrentPage('/register-page') ? 'text-[#fff]' : 'text-[#49111c]'}`}>
          {isModalOpen ? <FontAwesomeIcon icon={faXmark} size='lg' className='text-[#49111c]'/> :<FontAwesomeIcon icon={faBars} className='text-[#49111c] md:text-[#fff]' size='lg' />  }
          </button>
          
          
          
          <div className=' hidden  justify-between items-center w-[50vw]  text-[14px] text-[#fff] '>
          <Link className={`flex items-center justify-center  p-[0.32rem] ${isRegisterPage ? 'hidden': 'block'} ${isCurrentPage('/about')? ' ' : ''}`} href="/register-page"><FontAwesomeIcon className=' mr-1'  icon={faFilePen} /> Plan</Link>
              <Link className='p-1' href="/work">최근 이벤트</Link>
              <Link className='p-1' href="/how">작동 방식</Link>
              <Link className='p-1' href="/about">스토리</Link>
             
             {/* className={`${isRegisterPage ? 'hidden': 'block'}`} */}
             

          </div>
        </div>
      </motion.div>
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-[99] bg-white font-kr"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex flex-col items-center text-[40px] md:text-[60px] font-bold">
          <Link href="/register-page" onClick={() => setIsModalOpen(false)}>
              <p className={`my-3 ${isCurrentPage('/register-page') ? 'text-white hidden' : 'text-[#49111c] block'}`}>계획 행사</p>
            </Link>
           
            <Link href="/work" onClick={() => setIsModalOpen(false)}>
              <p className={`my-3 ${isCurrentPage('/work') ? 'text-white hidden' : 'text-[#49111c] block'}`}>최근 이벤트</p>
            </Link>
            <Link href="/how" onClick={() => setIsModalOpen(false)}>
              <p className={`my-3 ${isCurrentPage('/how') ? 'text-white hidden' : 'text-[#49111c] block'}`}>작동 방식</p>
            </Link>
            <Link href="/about" onClick={() => setIsModalOpen(false)}>
              <p className={`my-3 ${isCurrentPage('/about') ? 'text-white hidden' : 'text-[#49111c] block'}`}>스토리</p>
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