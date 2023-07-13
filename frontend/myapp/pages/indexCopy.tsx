import Navbar from '../components/Navbar';
import SmoothScroll from '../components/Scolling/SmoothScroll'
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState, ChangeEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';


export default function indexCopy() {

  const router = useRouter();
  const columnInnerControls1 = useAnimation();
  const columnInnerControls2 = useAnimation();
  const columnInnerControls3 = useAnimation();
  const columnInnerControls4 = useAnimation();
  const columnInnerControls5 = useAnimation();

  const isMiddle = useAnimation();
  const loaderFlex = useAnimation();

  const landingLoader = useAnimation();

  useEffect(() => {
    if (router.asPath === router.route) { 
    columnInnerControls1.start({ height: '100%', y: 0 });
    columnInnerControls2.start({ height: '100%', y: '10%' });
    columnInnerControls3.start({ height: '100%', y: 0 });
    columnInnerControls4.start({ height: '100%', y: '10%' });
    columnInnerControls5.start({ height: '100%', y: 0 });
    isMiddle.start({ scale: 1 });
    loaderFlex.start({ scale: 1});
    landingLoader.start({ opacity: 1, y: 0,  });
  }
  }, [router, columnInnerControls1, columnInnerControls2, columnInnerControls3, columnInnerControls4, columnInnerControls5, isMiddle, loaderFlex, landingLoader]);




  // Event Types 
  const [selectedEvents, setSelectedEvents] = useState<string[]>([]);

  const handleCheckboxChange = (value: string) => {
    if (selectedEvents.includes(value)) {
      setSelectedEvents((prevSelectedEvents) =>
        prevSelectedEvents.filter((event) => event !== value)
      );
    } else {
      setSelectedEvents((prevSelectedEvents) => [...prevSelectedEvents, value]);
    }
  };

  useEffect(() => {
    // Do something with selectedEvents
    // This effect will be triggered whenever selectedEvents change
  }, [selectedEvents]);

  let buttonBackground = "";
  if (selectedEvents.length === 1) {
    buttonBackground = selectedEvents[0];
  } else if (selectedEvents.length > 1) {
    buttonBackground = `linear-gradient(to right, ${selectedEvents
      .map((event) => {
        if (event === "wedding") return "#f05e8f";
        if (event === "festival") return "#8f58ec";
        if (event === "bussiness") return "#4d7fec";
        if (event === "public") return "#13b185";
        if (event === "birthday") return "#c83c74";
        if (event === "other") return "#f47638";
        return "";
      })
      .join(", ")})`;
  }


 

 // Animation for the checkboxes
const checkboxAnimations = {
  scale: [1, 1.2, 1],
  transition: {
    duration: 0.2,
  },
};

// Animation for the button
const buttonAnimation = {
  scale: selectedEvents.length > 0 ? [1, 1.1, 1] : 1,
  transition: {
    duration: 0.2,
  },
};

  return (
   
    <motion.main className="loader h-[100vh] w-[100vw] fixed flex items-center justify-center ">

 {/*  Title Text Start */}
              <motion.div   
              className=' landing_loader flex flex-col items-center justify-center absolute  w-full h-full z-[100] bg-[#fff] '
              initial={{ opacity: 0, y: 70,  }}
              animate={landingLoader}
              transition={{ duration: 1.6, delay: 2.8, ease: [0.445, 0.05, 0.058, .96],  }}
              >
              <h1  className=' text-[40px] md:text-[50px] xl:text-[75px] font-bold text-[#49111c]  px-5 rounded-md '>행사고객 맞춥형 <span className='md:hidden xl:hidden'><br /></span>무료 견적 플랫폼 
              </h1>

              <div className='mt-5 flex items-center justify-center flex-col'>
                <p className='text-[#49111c]/90 text-[20px] mb-10 '> 당신의 모든 행사의 기획, 서빙, 식사가 <br className='md:hidden xl:hidden block ' />푸드컴 팀에 의해 관리되는 플랫폼</p>
                <h1 className='font-semibold text-[#49111c] text-[23px]'>어떤 행사를 하고 싶습니까?</h1>
              </div>

              <div className='flex flex-wrap  justify-between mt-5 md:mt-4'>
          
              <motion.div 
              whileTap={checkboxAnimations}
              className='event_range_wrapper w-28 h-28 relative m-1 md:m-2 xl:m-5 text-[#49111c] border rounded-md cursor-pointer peer-checked:border-[#F25287] peer-checked:text-[#F25287] hover:text-[#F25287] hover:bg-gray-50 text-md select-none pl-[6px] pt-[2px]'>
                <input type="checkbox"
                  value="wedding"
                  id='wedding'
                  onChange={() => handleCheckboxChange('wedding')}
                  className=''
                />
                <label htmlFor="wedding" className='absolute inset-0 flex flex-col items-center justify-center '>
                
                <Image width="54" height="54" src="/images/icons/wedding.png" alt="wedding" className='mb-2'/>
                웨딩
                </label>
              </motion.div>

             
                  <motion.div
                  whileTap={checkboxAnimations}
                   className='event_range_wrapper w-28 h-28 relative m-1 md:m-2 xl:m-5 text-[#49111c] border rounded-md cursor-pointer peer-checked:border-[#2563EB] peer-checked:text-[#2563EB] hover:text-[#2563EB] hover:bg-gray-50 text-md select-none pl-[6px] pt-[2px]'>
                  <input type='checkbox' value='bussiness' id='bussiness' onChange={() => handleCheckboxChange('bussiness')} className='flex-start' />
                    <label htmlFor="bussiness" className="absolute inset-0 flex flex-col items-center justify-center ">
                    <img width="54" height="54" src="/images/icons/bussiness.png" alt="wedding" className='mb-2'/>
                    기업 이벤트
                    </label>
                  </motion.div>

                  <motion.div 
                  whileTap={checkboxAnimations}
                  className='event_range_wrapper w-28 h-28 relative m-1 md:m-2 xl:m-5 text-[#49111c] border rounded-md cursor-pointer peer-checked:border-[#047857] peer-checked:text-[#047857] hover:text-[#047857] hover:bg-gray-50 text-md select-none pl-[6px] pt-[2px]'>
                  <input type='checkbox' value='public' id='public' onChange={() => handleCheckboxChange('public')} className='flex-start' />
                    <label htmlFor="public" className="absolute inset-0 flex flex-col items-center justify-center ">
                    <img width="54" height="54" src="/images/icons/public.png" alt="wedding" className='mb-2'/>
                    공개 이벤트
                    </label>
                  </motion.div>


                  <motion.div 
                  whileTap={checkboxAnimations}
                  className='event_range_wrapper w-28 h-28 relative m-1 md:m-2 xl:m-5 text-[#49111c] border rounded-md cursor-pointer peer-checked:border-[#7C3AED] peer-checked:text-[#7C3AED] hover:text-[#7C3AED] hover:bg-gray-50 text-md select-none pl-[6px] pt-[2px]'>
                      <input type='checkbox' value='festival' id='festival' onChange={() => handleCheckboxChange('festival')} style={{ alignSelf: 'flex-start' }} />
                      <label htmlFor="festival" className="absolute inset-0 flex flex-col items-center justify-center">
                      <img width="64" height="64" src="/images/icons/festival.png" alt="festival" className=''/>
                      제전
                      </label>
                  </motion.div>


                  <motion.div 
                  whileTap={checkboxAnimations}
                  className='event_range_wrapper w-28 h-28 relative m-1 md:m-2 xl:m-5 text-[#49111c] border rounded-md cursor-pointer peer-checked:border-[#9D174D] peer-checked:text-[#9D174D] hover:text-[#9D174D] hover:bg-gray-50 text-md select-none pl-[6px] pt-[2px]'>
                  <input type='checkbox' value='birthday' id='birthday' onChange={() => handleCheckboxChange('birthday')} className='flex-start' />
                    <label htmlFor="birthday" className="absolute inset-0 flex flex-col items-center justify-center ">
                    <img width="54" height="54" src="/images/icons/birthday.png" alt="birthday" className='mb-2'/>
                    생일
                    </label>
                  </motion.div>

                  <motion.div 
                  whileTap={checkboxAnimations}
                  className='event_range_wrapper w-28 h-28 relative m-1 md:m-2 xl:m-5 text-[#49111c] border rounded-md cursor-pointer peer-checked:border-[#C05621] peer-checked:text-[#C05621] hover:text-[#C05621] hover:bg-gray-50 text-md select-none pl-[6px] pt-[2px]'>
                  <input type='checkbox' value='other' id='other' onChange={() => handleCheckboxChange('other')} className='flex-start' />
                    <label htmlFor="other" className="absolute inset-0 flex flex-col items-center justify-center ">
                    <img width="54" height="54" src="/images/icons/other.png" alt="birthday" className='mb-2'/>
                    키타
                    </label>
                  </motion.div>
                
              </div>

             


              <Link className="flex mt-10 items-start justify-center " href= "/register-page">
              <motion.button
                  style={{
                    width: 155,
                    height: 65,
                    borderRadius: 30,
                    cursor: "pointer",
                    backgroundImage: buttonBackground,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 100 }}
                  className={`bg-[#6161FF] hover:bg-[#6161FF]/80 text-[#fff] border text-[17px] p-2 z-20`}
                  whileTap={{scale: [1, 1.1, 1]}} // Add tap animation for the button
                   // Add hover animation for the button
                  animate={buttonAnimation} // Apply scaling animation to the button
                >
                  <span className="flex flex-row items-center justify-center">
                              Get Started
                    <svg
                      aria-hidden="true"
                      className="w-5 h-6 ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>{" "}
                  </span>
                </motion.button>

                
              </Link>
              </motion.div>
           


            {/*  Title Text End */}

      <motion.div 
      initial={{ scale: 0.240 }}
      animate={isMiddle}
      transition={{ duration: 2.1, delay: 2.1, ease: [0.445, 0.05, 0.058, .96] }}
      className='loader_flex flex flex-row items-stretch h-[561vh]   '>
        <div className='loader_column px-[7vh] flex flex-col items-stretch justify-start'>
            <motion.div 
            initial={{ height: '350%', y: '70%' }}
            animate={columnInnerControls1}
            transition={{ duration: 2.7, ease: [0.8, 0.240, 0.104, .773] }}
            className='loader_column_inner flex flex-col justify-between items-stretch h-full flex-none is-edge '>
                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/bert-hall.jpeg' alt="Image 1"/>
                </div>

                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/rene.jpeg' alt="Image 2"/>
                </div>

                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/bert-wedd.jpeg' alt="Image 2"/>
                </div>

                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/africa.jpeg' alt="Image 4"/>
                </div>

                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/brett.jpeg' alt="Image 5"/>
                </div>
            </motion.div>
        </div>


        <div className='loader_column px-[7vh] is-alt flex flex-col items-stretch justify-end'>
            <motion.div 
            initial={{ height: '340%', y: '-40%' }}
            animate={columnInnerControls2}
            transition={{ duration: 2.7, ease: [0.8, 0.240, 0.104, .773] }}
            className='loader_column_inner flex flex-col justify-between items-stretch h-full flex-none is-reversed'>
                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/govea.jpeg' alt="Image 1"/>
                </div>

                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/trivet.jpeg' alt="Image 2"/>
                </div>

                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/naim.jpeg' alt="Image 3"/>
                </div>

                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/pietro.jpeg' alt="Image 4"/>
                </div>

                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/skyline.jpeg' alt="Image 5"/>
                </div>
            </motion.div>
        </div>


        <div className='loader_column px-[7vh]'>
            <motion.div 
            initial={{ height: '370%', y: '40%' }}
            animate={columnInnerControls3}
            transition={{ duration: 2.7, ease: [0.8, 0.240, 0.104, .773] }}
            className='loader_column_inner flex flex-col justify-between items-stretch h-full flex-none is-centered'>
                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/trivet.jpeg' alt="Image 1"/>
                </div>

                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/brett.jpeg' alt="Image 2"/>
                </div>

                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <motion.img 
                  initial={{ scale: 1.5 }}
                  animate={isMiddle}
                  transition={{ duration: 2.1, delay: 2.1,  ease: [0.445, 0.05, 0.058, .96] }}
                  className='loader_img w-full h-full object-cover is-middle '
                  src='images/optimized/ciling.jpeg' alt='Ciling'
                    />
                </div>

                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/africa.jpeg' alt="Image 4"/>
                </div>

                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/rene.jpeg' alt="Image 5"/>
                </div>
            </motion.div>
            
        </div>


        <div className='loader_column px-[7vh] is-alt flex flex-col items-stretch justify-end'>
            <motion.div 
            initial={{ height: '340%', y: '-40%' }}
            animate={columnInnerControls4}
            transition={{ duration: 2.7, ease: [0.8, 0.240, 0.104, .773] }}
            className='loader_column_inner flex flex-col justify-between items-stretch h-full flex-none is-reversed'>
                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/bert-hall.jpeg' alt="Image 1"/>
                </div>

                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/skyline.jpeg' alt="Image 2"/>
                </div>

                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/govea.jpeg' alt="Image 2"/>
                </div>

                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/bertelli.jpeg' alt="Image 4"/>
                </div>

                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/naim.jpeg' alt="Image 5"/>
                </div>
            </motion.div>
        </div>


        <div className='loader_column px-[7vh]'>
            <motion.div 
            initial={{ height: '350%', y: '70%' }}
            animate={columnInnerControls5}
            transition={{ duration: 2.7, ease: [0.8, 0.240, 0.104, .773]}}
            className='loader_column_inner flex flex-col justify-between items-stretch h-full flex-none is-edge'>
                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/govea.jpeg' alt="Image 1"/>
                </div>

                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/rene.jpeg' alt="Image 2"/>
                </div>

                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/bert-hall.jpeg' alt="Image 2"/>
                </div>

                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/skyline.jpeg' alt="Image 4"/>
                </div>

                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/brett.jpeg' alt="Image 5"/>
                </div>
            </motion.div>
        </div>



      </motion.div>
     
    </motion.main>
    
  )
}
















