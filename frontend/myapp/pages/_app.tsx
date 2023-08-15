import '../styles/global.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import SmoothScroll from '../components/Scolling/SmoothScroll';
import {Html, Head, Main, NextScript} from 'next/document'


const App = ({ Component, pageProps, router }: AppProps) => {
  const currentRoute = router.route;
  const isHomePage = currentRoute === '/';
  const isRegisterPage = currentRoute === '/register-page';

  const navLoader = useAnimation();

  useEffect(() => {
    navLoader.start({ opacity: 1, y: 0,  });
  }, []);


 

  return (
    <>
    <Head>
    <link rel="manifest" href={"/manifest.json"}/>
    <link rel={"apple-touch-icon"} href={".icons/apple-icon-180.png"}></link>
    <meta name={"theme-color"} content={"#FFF"}/>
    <meta charSet='utf-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1 shrink-to-fit=no' />
    
    </Head>
    <motion.div
    // initial={{opacity: 0, y: -100, }}
    // animate={navLoader}
    // transition={{duration: 1, delay: 2.7 }}
    style={{display: isHomePage ? "none" : "block"}}
    >
    <Navbar />
    </motion.div>
     
       <AnimatePresence mode="sync">
        <motion.div
          key={currentRoute}
          initial="pageInitial"
          animate="pageAnimate"
          exit="pageExit"
          variants={{
            pageInitial: {
              opacity: 1,
              y: isRegisterPage ? '100%' : 0,
              x: isHomePage || isRegisterPage ? 0 : '-100%',
            },
            pageAnimate: {
                            opacity: 1,
                            x: 0,
                            y: 0,
                            transition: {
                              // type: 'spring',
                              // stiffness: 230,
                              // damping: 50,
                              ease: [0.83, 0, 0.17, 1],
                              duration: 1.1,
                              
                              
                            },
                          },
            pageExit: {
              
              x: isHomePage ? 0 : '100%',
              y: isHomePage ? "-100%" : 0,
              opacity: isHomePage ? 0 : 1,
              
              
            },
          }}
          transition={{
            duration: 1.1,
            ease: [0.83, 0, 0.17, 1],
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
      
    </>
  );
};

export default App;























// import '../styles/global.css'
// import type { AppProps } from 'next/app'
// import Navbar from '../components/Navbar'
// import '../styles/fonts.css';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useRouter } from 'next/router';
// import { cubicBezier } from "framer-motion"

// import {BaseProvider, LightTheme} from 'baseui';
// import { Provider as StyletronProvider } from "styletron-react";
// import { Client as Styletron } from "styletron-engine-atomic";



// // const engine = new Styletron();


// const App = ({ Component, pageProps, router }: AppProps) => {
//   const isMenuPage = router.route === '/';
//   const isAboutPage = router.route === '/about';
//   const isHomePage = router.route === '/';


 
//   return (
//     <>
    
//     {/* <StyletronProvider value={engine}>
//     <BaseProvider theme={LightTheme}> */}
//       <Navbar />
//       <AnimatePresence mode="sync">
//         <motion.div
//           key={router.route}
//           initial="pageInitial"
//           animate="pageAnimate"
//           exit="pageExit"
//           variants={{
//             pageInitial: {
//               opacity: 1,
//               x: isMenuPage ? '-100%' : isAboutPage ? '100%' : 0,
//               y: isMenuPage || isAboutPage ? 0 : '100%',
//             },
//             pageAnimate: {
//               opacity: 1,
//               x: 0,
//               y: 0,
//               transition: {
//                 // type: 'spring',
//                 // stiffness: 230,
//                 // damping: 50,
//                 ease: [0.83, 0, 0.17, 1],
//                 duration: 1.1,
                
                
//               },
//             },
//             pageExit: {
//               opacity: 1,
//               x: isMenuPage ? '100%' : isAboutPage ? '100%' : 0,
//               y: isMenuPage || isAboutPage ? 0 : '-50%',
//             },
//           }}
//           transition={{
//             duration: 1.1,
//             ease: [0.83, 0, 0.17, 1],
//           }}
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//           }}
//         >
//           <Component {...pageProps} />
//         </motion.div>
//       </AnimatePresence>
//       {/* </BaseProvider>
//   </StyletronProvider> */}
//     </>
//   );
// };

// export default App;






































// import '../styles/global.css'
// import type { AppProps } from 'next/app'
// import Navbar from '../components/Navbar'
// import '../styles/fonts.css';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useRouter } from 'next/router';
// import { cubicBezier } from "framer-motion"

// import {BaseProvider, LightTheme} from 'baseui';
// import { Provider as StyletronProvider } from "styletron-react";
// import { Client as Styletron } from "styletron-engine-atomic";



// // const engine = new Styletron();


// const App = ({ Component, pageProps, router }: AppProps) => {
//   const isMenuPage = router.route === '/menu';
//   const isAboutPage = router.route === '/about';
//   const isHomePage = router.route === '/';


 
//   return (
//     <>
    
//     {/* <StyletronProvider value={engine}>
//     <BaseProvider theme={LightTheme}> */}
//       <Navbar />
//       <AnimatePresence mode="popLayout">
//         <motion.div
//           key={router.route}
//           initial="pageInitial"
//           animate="pageAnimate"
//           exit="pageExit"
//           variants={{
//             pageInitial: {
//               opacity: 1,
//               x: isMenuPage ? '-100%' : isAboutPage ? '100%' : 0,
//               y: isMenuPage || isAboutPage ? 0 : '100%',
//             },
//             pageAnimate: {
//               opacity: 1,
//               x: 0,
//               y: 0,
//               transition: {
//                 // type: 'spring',
//                 // stiffness: 230,
//                 // damping: 50,
//                 ease: [0.76, 0, 0.24, 1],
//                 duration: 1.2,
                
//               },
//             },
//             pageExit: {
//               opacity: 1,
//               x: isMenuPage ? '-100%' : isAboutPage ? '100%' : 0,
//               y: isMenuPage || isAboutPage ? 0 : '-100%',
//             },
//           }}
//           transition={{
//             duration: 0.7,
//           }}
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//           }}
//         >
//           <Component {...pageProps} />
//         </motion.div>
//       </AnimatePresence>
//       {/* </BaseProvider>
//   </StyletronProvider> */}
//     </>
//   );
// };

// export default App;





















