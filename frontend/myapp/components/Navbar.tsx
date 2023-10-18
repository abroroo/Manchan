import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faArrowRight, faBellConcierge, faListCheck, faFilePen } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';

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




  // MODAL CONTENT BASED ON SCREEN SIZE CONFIGURATION

  // State to track the screen size
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Function to check the screen size
  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth < 1280); // You can adjust the breakpoint as needed
  };

  // Add a listener for window resize events
  useEffect(() => {
    checkScreenSize(); // Check initially
    window.addEventListener('resize', checkScreenSize);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <>
    
      <motion.div 
       initial={{opacity: 0, y: -50}}
       whileInView={{opacity: 1, y: 0}}
       transition={{delay: 0.5, duration: 1, ease: [.4,.18,0,1.03]}}
       className="fixed w-screen  z-[100] p-2 xl:p-0  font-outfit  shadow-inner bg-[#fff]">
     
        <div className={`flex flex-row p-2 items-center justify-between tracking-wide  ${isCurrentPage('/about') ? 'text-[#49111c]' : 'text-[#1d040b]'} `}>
        <Link href="/"  className={`font-bold text-xl mx-1   `}><Image src="/images/logo.png" width={120} height={30} alt="logo image w-auto h-auto" /></Link>
       
          
          
          
          {isModalOpen ? <button onClick={handleMenuClick} className='xl:hidden block'>
          <FontAwesomeIcon icon={faXmark} size='lg' className='text-[#49111c] text-[20px]'/>
          </button> : <button onClick={handleMenuClick} className='xl:hidden block'><FontAwesomeIcon icon={faBars} className='text-[#49111c] md:text-[#49111c]' size='lg'  /> </button>}

          {currentRoute === '/register-page' ? 
            <Link href="/about"  className='hidden xl:block mx-1 w-10 h-10 text-[16px] font-semibold'>
           대해
            </Link>
            : <Link href="/register-page"  className='hidden mx-1 w-10 h-10 xl:block text-[16px] font-semibold'>
            용지
             </Link>}
        </div>
      </motion.div>
      {isModalOpen && (
        <motion.div                                                               //xl:w-[60vw]
          className="fixed inset-0 flex items-center justify-center z-[99] bg-white  w-full "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
         
           <div className="xl:hidden flex flex-col items-center text-[40px] md:text-[60px] font-bold">
          <Link href="/register-page" onClick={() => setIsModalOpen(false)} className='leading-relaxed border rounded-md  md:border-none my-3 px-2'>
              <p className={`my-3 ${isCurrentPage('/register-page') ? 'text-white hidden' : 'text-[#49111c] block'}`}>계획 행사</p>
            </Link>
           
            <Link href="/work" onClick={() => setIsModalOpen(false)} className=' leading-relaxed border rounded-md  md:border-none my-3 px-2'>
              <p className={`my-3 ${isCurrentPage('/work') ? 'text-white hidden' : 'text-[#49111c] block'}`}>최근 이벤트</p>
            </Link>
            
            <Link href="/about" onClick={() => setIsModalOpen(false)} className=' leading-relaxed border rounded-md  md:border-none my-3 px-2'>
              <p className={`my-3 ${isCurrentPage('/about') ? 'text-white hidden' : 'text-[#49111c] block'}`}>푸드컴 대해</p>
            </Link>
            
          </div>

         
          




        </motion.div>
      )}
    </>
  );
};

export default Navbar;









// <div className="flex flex-col justify-center p-28 xl:p-36 text-[15px]">
//             <h2 className="text-xl font-bold mb-4">Our Story</h2>
//             <h4 className='font-semibold leading-relaxed'>부드콤에 오신 것을 환영합니다 - 1995년부터 기억에 남는 순간을 만들어 왔습니다 </h4>
//             <p className="text-[#49111c] leading-relaxed mb-6">
            

//             20년 이상 동안 부드콤은 기억에 남을 만한 순간의 중심 역할을 해왔습니다. 1995년에 창립된 이후, 우리는 훌륭한 음식 서비스와 이벤트 관리에 대한 열정으로 산업 내에서 신뢰할 수 있는 이름이 되었습니다.
// </p>


// <h4 className='font-semibold leading-relaxed'>요리의 훌륭함: 맛과 혁신의 만남</h4>

// <p className="text-[#49111c] leading-relaxed mb-6">
// 요리의 훌륭함에 대한 우리의 헌신은 우리가 하는 일의 핵심입니다. 다양한 메뉴로 한국 요리의 풍부한 전통과 서양의 대담한 맛을 조화롭게 어우러뜨리며, 특별한 날과 잊지 못할 요리로 기억에 남는 요리를 만들어내는 데 자부심을 가집니다.
// </p>

// <h4 className='font-semibold leading-relaxed'>맛있음 이상의 것: 이벤트를 생동감 있게</h4>

// <p className="text-[#49111c] leading-relaxed mb-6">
// 우리는 훌륭한 이벤트에는 훌륭한 세부 사항 주의가 필요하다고 믿습니다. 그래서 우리는 음식 서비스를 뛰어넘어갑니다. 매혹적인 장식물부터 견고한 테이블과 의자, 우아한 텐트에서 분위기를 조성하는 음악까지, 우리는 당신의 이벤트의 모든 측면을 다루고 있습니다.
// </p>

// <h4 className='font-semibold leading-relaxed'>왜 부드콤을 선택해야 하는가: 당신의 축제 파트너</h4>

// <p className="text-[#49111c] leading-relaxed mb-6">
// 부드콤을 선택하면 단순히 행사가 아닌 소중한 기억이 되도록 헌신하는 파트너를 선택하는 것입니다. 우리는 물류를 처리하므로 여러 해 동안 얘기될 순간을 만드는 데 집중할 수 있습니다.
// <br />
// 우리와 함께 부드콤에서 모든 이벤트는 마법을 만들기 위한 기회입니다. 우리에게 꿈을 현실로 만들어드릴 수 있는 기회를 주세요. 한 번에 잊지 못할 경험을 만들어 드립니다.</p>







            

//             <p className="text-sm absolute bottom-10 ">&copy; {new Date().getFullYear()} 만찬. All rights reserved.</p>
//           </div>






// <h4 className='font-semibold leading-relaxed'>Welcome to 부드콤 - Crafting Memorable Moments Since 1995</h4>
// <p className="text-[#49111c] leading-relaxed mb-6">


// For over two decades, 부드콤 has been the heart and soul behind countless unforgettable moments. Founded in 1995, our passion for exceptional food service and event management has made us a trusted name in the industry.
// </p>


// <h4 className='font-semibold leading-relaxed'>Culinary Excellence: Where Flavor Meets Innovation</h4>

// <p className="text-[#49111c] leading-relaxed mb-6">
// Our commitment to culinary excellence is at the heart of what we do. With a diverse menu that harmonizes the rich traditions of Korean cuisine with the bold flavors of the West, we take pride in crafting dishes that are as unforgettable as your special day.
// </p>

// <h4 className='font-semibold leading-relaxed'>Beyond Delicious: Bringing Your Event to Life</h4>

// <p className="text-[#49111c] leading-relaxed mb-6">
// We believe that exceptional events require exceptional attention to detail. That's why we go beyond just food service. From enchanting decorations to sturdy tables and chairs, elegant tents to mood-setting music, we've got every aspect of your event covered.
// </p>

// <h4 className='font-semibold leading-relaxed'>Why 부드콤: Your Partner in Celebration</h4>

// <p className="text-[#49111c] leading-relaxed mb-6">
// Choosing 부드콤 means choosing a partner dedicated to ensuring your event is not just an occasion but a cherished memory. We take care of the logistics, so you can focus on what truly matters – creating moments that will be talked about for years to come.
// <br />
// Join us at 부드콤, where every event is an opportunity to create magic. Let us turn your dreams into reality, one unforgettable experience at a time.</p>










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