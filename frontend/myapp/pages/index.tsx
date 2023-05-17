import Landing from '../components/Landing'
import {motion} from 'framer-motion'


const variants = {
  hidden: { opacity: 0, x: 0, y: -1000 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

export default function Home() {
  return (
   
    <motion.main
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ duration: 1, ease: [0.32, 0, 0.67, 0] }} className="flex h-screen flex-col items-center justify-between ">
      <div className="mt-10">
        <Landing />
      </div>
    </motion.main>
  )
}


// flex min-h-screen flex-col items-center justify-between p-24
// z-10 w-full max-w-5xl items-center justify-center lg:flex