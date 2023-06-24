import '../styles/global.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import '../styles/fonts.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { cubicBezier } from "framer-motion"

import {BaseProvider, LightTheme} from 'baseui';
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";



// const engine = new Styletron();


const App = ({ Component, pageProps, router }: AppProps) => {
  const isMenuPage = router.route === '/menu';
  const isAboutPage = router.route === '/about';
  const isHomePage = router.route === '/';


 
  return (
    <>
    
    {/* <StyletronProvider value={engine}>
    <BaseProvider theme={LightTheme}> */}
      <Navbar />
      <AnimatePresence mode="popLayout">
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          exit="pageExit"
          variants={{
            pageInitial: {
              opacity: 1,
              x: isMenuPage ? '-100%' : isAboutPage ? '100%' : 0,
              y: isMenuPage || isAboutPage ? 0 : '100%',
            },
            pageAnimate: {
              opacity: 1,
              x: 0,
              y: 0,
              transition: {
                // type: 'spring',
                // stiffness: 230,
                // damping: 50,
                ease: [0.76, 0, 0.24, 1],
                duration: 1.2,
                
              },
            },
            pageExit: {
              opacity: 1,
              x: isMenuPage ? '-100%' : isAboutPage ? '100%' : 0,
              y: isMenuPage || isAboutPage ? 0 : '-100%',
            },
          }}
          transition={{
            duration: 0.7,
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      {/* </BaseProvider>
  </StyletronProvider> */}
    </>
  );
};

export default App;










