import React from 'react'
import Link from 'next/link';
import Polygon from './Polygon';
import Navbar from './Navbar';
import { motion, spring } from 'framer-motion';
// import { Blob } from 'react-interactive-blob'

const Landing = () => {




  return (



    <div className='h-screen '>
      
      
      <div className='flex items-center justify-center flex-col h-screen -mt-20 '>
      <motion.div
      initial={{ opacity: 0, }}
      animate={{ opacity: 1,  }}
      transition={{ duration: 2, }}
      className=" bg-[#F3F3EF] px-5 rounded-md"
     

    >
        <h1 className='text-[60px] md:text-[80px] xl:text-[80px] font-bold text-[#351118] '>행사고객 맞춥형 <span className='md:hidden xl:hidden'><br /></span>무료 견적 플랫폼 </h1>
        </motion.div>
      
     
    {/* <p className='text-white text-3xl font-caveat'>Tell us about your event, we will plan, organaize, and serve it for you </p> */}
      <Link className="flex mt-10 items-start justify-center " href= "/register-page">
     
<motion.button style={{
                    width: 150,
                    height: 50,
                    borderRadius: 5,
                    //backgroundColor: "#fdfefd",
                    cursor: "pointer",
                }}
                whileHover={{  scale: 1.15  }}
                transition={{type: "spring", stiffness: 100}}
                className='bg-[#F3F3EF] font-semibold text-[#49111c] hover:text-green text-[20px] p-2 z-20'>이벤트 계획 </motion.button>




  </Link>
      </div>
      
    </div>
    
    
    
    )

}

export default Landing

