import React from 'react'
import RegistrationForm from '../../components/RegisterationForm'
import MainForm from '../../components/MainForm'
import { motion } from 'framer-motion';
import Step1 from '../../components/FormSteps/Step1';

interface Props {}

const index = () => {
  return (
  <motion.div className='h-screen steps-background '>
  
  <Step1 />
  </motion.div>
  )
}

export default index