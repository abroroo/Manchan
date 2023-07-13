import React from 'react'
import RegistrationForm from '../../components/RegisterationForm'
import MainForm from '../../components/MainForm'
import { motion } from 'framer-motion';
import Step1 from '../../components/FormSteps/Step1';
import FormPage from '../../components/FormPage';
import SmoothScroll from '../../components/Scolling/SmoothScroll';

interface Props {}

const index = () => {
  return (
  <motion.div className='h-screen steps-background'>
  <SmoothScroll>
  <FormPage />
  </SmoothScroll>
  
  </motion.div>
  )
}

export default index