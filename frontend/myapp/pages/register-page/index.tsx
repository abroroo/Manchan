import React from 'react'
import RegistrationForm from '../../components/RegisterationForm'
import { motion } from 'framer-motion';

interface Props {}

const index = () => {
  return (
  <motion.div className='h-screen flex items-center justify-center'>
  
  <RegistrationForm />
  </motion.div>
  )
}

export default index