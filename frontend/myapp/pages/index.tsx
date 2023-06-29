import Landing from '../components/Landing'
import Navbar from '../components/Navbar';
import SmoothScroll from '../components/Scolling/SmoothScroll'
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';



export default function Home() {

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
    landingLoader.start({ opacity: 1, y: 0, });
  }
  }, [router, columnInnerControls1, columnInnerControls2, columnInnerControls3, columnInnerControls4, columnInnerControls5, isMiddle, loaderFlex, landingLoader]);



 

  return (
   
    <motion.main className="loader h-[100vh] w-[100vw] fixed flex items-center justify-center ">

 {/*  Title Text Start */}
 <motion.div   className=' landing_loader flex flex-col items-center justify-center absolute -top-10 left-0 w-full h-full z-[100]'
              initial={{ opacity: 0, y: 50, }}
              animate={landingLoader}
              transition={{ duration: 1.6, delay: 2.5, ease: [0.445, 0.05, 0.058, .96],  }}
              
            >
              <h1  className=' text-[60px] md:text-[0px] xl:text-[65px] font-bold text-[#49111c] bg-[#F3F3EF] px-5 rounded-md '>행사고객 맞춥형 <span className='md:hidden xl:hidden'><br /></span>무료 견적 플랫폼 </h1>




              <Link className="flex mt-10 items-start justify-center " href= "/register-page">
     
     <motion.button style={{
                         width: 130,
                         height: 45,
                         borderRadius: 5,
                         //backgroundColor: "#fdfefd",
                         cursor: "pointer",
                     }}
                     whileHover={{  scale: 1.15  }}
                     transition={{type: "spring", stiffness: 100}}
                     className='bg-[#F3F3EF] font-semibold text-[#49111c] hover:text-green text-[20px] p-1 z-20'>Food | Event </motion.button>
     
     
     
     
       </Link>
            </motion.div>
           


            {/*  Title Text End */}

      <motion.div 
      initial={{ scale: 0.23 }}
      animate={isMiddle}
      transition={{ duration: 2, delay: 2, ease: [0.445, 0.05, 0.058, .96] }}
      className='loader_flex flex flex-row items-stretch h-[561vh]   '>
        <div className='loader_column px-[7vh] flex flex-col items-stretch justify-start'>
            <motion.div 
            initial={{ height: '350%', y: '70%' }}
            animate={columnInnerControls1}
            transition={{ duration: 2.5, ease: [0.86, 0.13, 0.404, .773] }}
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
            initial={{ height: '350%', y: '-40%' }}
            animate={columnInnerControls2}
            transition={{ duration: 2.5, ease: [0.86, 0.13, 0.404, .773] }}
            className='loader_column_inner flex flex-col justify-between items-stretch h-full flex-none is-reversed'>
                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/govea.jpeg' alt="Image 1"/>
                </div>

                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/trivet.jpeg' alt="Image 2"/>
                </div>

                <div className='loader_image-wrap h-[100vh] w-[100vw] overflow-hidden relative '>
                  <img className='loader_img w-full h-full object-cover ' src='images/optimized/naim.jpeg' alt="Image 2"/>
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
            initial={{ height: '350%', y: '40%' }}
            animate={columnInnerControls3}
            transition={{ duration: 2.5, ease: [0.37, 0, 0.63, 1] }}
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
                  transition={{ duration: 2, delay: 2,  ease: [0.445, 0.05, 0.058, .96] }}
                  className='loader_img w-full h-full object-cover is-middle ' src='images/optimized/bert-wedd.jpeg' alt="Image 2"/>

                  
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
            initial={{ height: '350%', y: '-40%' }}
            animate={columnInnerControls4}
            transition={{ duration: 2.5, ease: [0.86, 0.13, 0.404, .773] }}
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
            transition={{ duration: 2.5, ease: [0.86, 0.13, 0.404, .773]}}
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
















// import Landing from '../components/Landing'
// import {motion} from 'framer-motion'
// import SmoothScroll from '../components/Scolling/SmoothScroll'




// export default function Home() {
//   return (
   
//     <motion.main
    
//     className="flex h-screen flex-col items-center justify-between bg-[#49111c] landing ">
    
//       <div className="mt-10">
//         <Landing />
//       </div>
     
//     </motion.main>
    
//   )
// }
