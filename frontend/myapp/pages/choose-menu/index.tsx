import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue, useTransform } from 'framer-motion';


interface Props { }

const Index = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleDrag = (event: MouseEvent | TouchEvent, info: any) => {
    x.set(info.point.x);
    y.set(info.point.y);
  };

  return (
    <motion.div className='flex h-screen flex-col items-start justify-start mt-10'>
      <h1 className='text-3xl font-bold mx-10'>Event Table</h1>


      <div className='w-full h-screen flex items-center justify-center'>
        
        <div className="max-w-2xl rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Menu</div>
            <p className="text-gray-700 text-base">
              Please choose the meals you would like to have at your event!
            </p>
          </div>
          <div className='flex flex-row'>
          <motion.div
            className="ml-20"
            drag
            dragConstraints={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
            onDrag={handleDrag}
            style={{ x, y }}
          >
            <Image src="/images/692.jpg" alt="Dinner Table" width={800} height={800} />
          </motion.div>
          <motion.div className="px-2 w-56 pt-4 pb-2 flex flex-col">
            <motion.span
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              drag
              dragConstraints={{
                top: 25,
                right: 5,
                bottom: 225,
                left: -415,
              }}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
            dragElastic={0.3}
            whileTap={{ cursor: "grabbing" }}
            >
              #food1
            </motion.span>
            <motion.span
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              drag
              dragConstraints={{
                top: 25,
                right: 5,
                bottom: 225,
                left: -415,
              }}
              dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
              dragElastic={0.3}
              whileTap={{ cursor: "grabbing" }}
            >
              #food2
            </motion.span>
            {/* Rest of the menu items */}
          </motion.div>
          </div>
         
          <div className='flex flex-row mt-10'>

            <Link className=" m-2" href="">
              <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded'>Confirm</button>
            </Link>
            <Link className=" m-2" href="/">
              <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded'>Home!</button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Index;










// import React from 'react'
// import Link from 'next/link';
// import Image from 'next/image';

// interface Props { }

// const index = () => {
//   return (
//     <div className='flex h-screen flex-col items-start justify-start mt-10'>
//       <h1 className='text-6xl font-bold mx-10'>Event Table</h1>
//       <div className='flex flex-col mt-10'>

//       <Image className="ml-20" src="/images/692.jpg" alt="Dinner Table" width={800} height={800}/>
//         <Link className="flex items-start justify-center my-2" href="">

//           <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded'>Confirm</button>

//         </Link>
//         <Link className="flex items-start justify-center m-1" href="/">

//           <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded'>Home!</button>

//         </Link>
//       </div>

//       <div className='absolute right-10'>
//         <div className="max-w-sm rounded overflow-hidden shadow-lg">

//           <div className="px-6 py-4">
//             <div className="font-bold text-xl mb-2">The Menu</div>
//             <p className="text-gray-700 text-base">
//               Please choose the meals you would like to have at your event!
//             </p>
//           </div>
//           <div className="px-6 pt-4 pb-2 flex flex-col">
//             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#food1</span>
//             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#food2</span>
//             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#food3</span>
//             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#food4</span>
//             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#food5</span>
//             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#food3</span>
//             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#food3</span>
//             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#food3</span>
//             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#food3</span>
//             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#food3</span>
//             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#food3</span>
//             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#food3</span>
//             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#food3</span>
//             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#food3</span>
//             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#food3</span>
//             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#food3</span>
//             <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#food3</span>
//           </div>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default index