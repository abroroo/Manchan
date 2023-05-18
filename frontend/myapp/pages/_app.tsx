import '../styles/global.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import { AnimatePresence } from 'framer-motion'
import '../styles/fonts.css';


function MyApp({ Component, pageProps }: AppProps) {
  return (
<main className='font-monts'>
<Navbar />
<AnimatePresence
                mode="wait"
                initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}
            >
  <Component {...pageProps} />
  </AnimatePresence>
</main>
   
  )
}

export default MyApp