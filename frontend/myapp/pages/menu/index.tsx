import React from 'react'
import GetMenu from '../../components/GetMenu'
import Menu from '../../components/Menu'
import SmoothScroll from '../../components/Scolling/SmoothScroll'
import { motion } from 'framer-motion';
import Menu2 from '../../components/Menu2';


interface Props {}

const index = () => {
  return (
    <motion.div className='  '>
  <div className='h-screen flex items-center justify-end pt-96 pr-56 '>
<SmoothScroll>
    <Menu2 />
    </SmoothScroll>
    
  </div>
  
  </motion.div>
  )
}

export default index