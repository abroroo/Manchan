import React from 'react'
import GetMenu from '../../components/GetMenu'
import Menu from '../../components/Menu'
import SmoothScroll from '../../components/Scolling/SmoothScroll'
import { motion } from 'framer-motion';


interface Props {}

const index = () => {
  return (
    <motion.div className=' bg-[#6f1a07] text-white'>
  <div className='h-screen flex items-center justify-end pt-96 pr-56'>
<SmoothScroll>
    <Menu />
    </SmoothScroll>
    
  </div>
  
  </motion.div>
  )
}

export default index