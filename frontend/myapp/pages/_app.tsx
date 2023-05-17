import '../styles/global.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }: AppProps) {
  return (
<>
<Navbar />
<AnimatePresence
                mode="wait"
                initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}
            >
  <Component {...pageProps} />
  </AnimatePresence>
</>
   
  )
}

export default MyApp