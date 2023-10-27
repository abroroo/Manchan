import React, {useState} from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const index: React.FC = () => {

  const [showForm, setShowForm] = useState(true);
  const [showThankYou, setShowThankYou] = useState(false);
const [name, setName] = React.useState('');
const [phone_number, setPhoneNumber] = React.useState('');
const [message, setMessage] = React.useState('');


const [phoneNumberError, setPhoneNumberError] = useState('');

      const validatePhoneNumber = (value: any) => {
        const phoneNumberRegex = /\d{11}$/;
    
        if (phoneNumberRegex.test(value)) {
          setPhoneNumberError('완벽해요!');
          return value;
        } else if (value === '') { 
          setPhoneNumberError('');
        } else {
          setPhoneNumberError('11개의 숫자만 입력하십시오');
          return phone_number; // Return the previous value if the new value doesn't pass the checks
        }
      };
    
      const handlePhoneNumberChange = (event: any) => {
        const { name, value } = event.target;
    
        // Call the validation function and set the phoneNumber value
        const validatedPhoneNumber = validatePhoneNumber(value);
        setPhoneNumber(validatedPhoneNumber);
      };











  // Handle changes in radio inputs and update the formData state
  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = event.target;
  //   if (name === 'name') {
  //     setName(value);
  //   } else if (name === 'message') {
  //     setMessage(value);
  //   } else if (name === 'phone_number') {
  //     setPhoneNumber(value);
  //   }

  // };



  const handleContactFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
      name,
      phone_number,
      message,
    };
    console.log(data);
    
      setShowForm(false);
      setShowThankYou(true);
 
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json, text/plain, */*',
    //   },
    //   body: JSON.stringify(data),
    // });
    // const res = await response.json();
    // console.log(res);
  };


  const handleShowForm = () => {
    setShowForm(true);
    setShowThankYou(false);
  };


  return (
    <motion.div 
   
    className="flex flex-col items-center justify-center h-screen font-outfit bg-[#fff] text-[#49111c] overflow-scroll  ">
    

      <main className="container mx-auto h-full mt-16 md:mt-56  px-5 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  ">
          <div className='w-full h-full'>
            <div className='block xl:fixed '>
            <Image
            width={600}
            height={700}
              src="/images/about_pic.jpeg"
              alt="About Us"
              className="rounded-lg w-full "
            />
            </div>
          </div>
          <div className="flex flex-col justify-center  text-[15px] overflow-y-scroll ">
          <motion.h1 
     
          className="text-3xl font-medium font-cormorant mb-10">Food Communication .Inc</motion.h1>
            <motion.h2 
            initial={{opacity: 0, x: -30, }}
            whileInView={{opacity: 1, x: 0, }}
            transition={{delay: 0.2, duration: 1.2, ease: [0.22, 1, 0.36, 1]}}
            viewport={{once: true}}
            className="text-[16px] font-bold mb-4">Our Story</motion.h2>
             <motion.h4 
             initial={{opacity: 0, x: -50, }}
             whileInView={{opacity: 1, x: 0, }}
             transition={{delay: 0.25, duration: 1.2, ease: [0.22, 1, 0.36, 1]}}
             viewport={{once: true}}
             className='font-semibold leading-relaxed'>부드콤에 오신 것을 환영합니다 - 1995년부터 기억에 남는 순간을 만들어 왔습니다 </motion.h4>
             <motion.p 
             initial={{opacity: 0, x: -50, }}
             whileInView={{opacity: 1, x: 0, }}
             transition={{delay: 0.3, duration: 1.2, ease: [0.22, 1, 0.36, 1]}}
             viewport={{once: true}}
             className="text-[#49111c] leading-relaxed mb-6">
            

             20년 이상 동안 부드콤은 기억에 남을 만한 순간의 중심 역할을 해왔습니다. 1995년에 창립된 이후, 우리는 훌륭한 음식 서비스와 이벤트 관리에 대한 열정으로 산업 내에서 신뢰할 수 있는 이름이 되었습니다.
 </motion.p>


 <motion.h4 
  initial={{opacity: 0, x: -50, }}
  whileInView={{opacity: 1, x: 0, }}
  transition={{delay: 0.35, duration: 1.2, ease: [0.22, 1, 0.36, 1]}}
  viewport={{once: true}}
  className='font-semibold leading-relaxed'>요리의 훌륭함: 맛과 혁신의 만남</motion.h4>

 <motion.p 
  initial={{opacity: 0, x: -50, }}
  whileInView={{opacity: 1, x: 0, }}
  transition={{delay: 0.4, duration: 1.2, ease: [0.22, 1, 0.36, 1]}}
  viewport={{once: true}}
  className="text-[#49111c] leading-relaxed mb-6">
 요리의 훌륭함에 대한 우리의 헌신은 우리가 하는 일의 핵심입니다. 다양한 메뉴로 한국 요리의 풍부한 전통과 서양의 대담한 맛을 조화롭게 어우러뜨리며, 특별한 날과 잊지 못할 요리로 기억에 남는 요리를 만들어내는 데 자부심을 가집니다.
 </motion.p>

 <motion.h4 
  initial={{opacity: 0, x: -50, }}
  whileInView={{opacity: 1, x: 0, }}
  transition={{delay: 0.45, duration: 1.2, ease: [0.22, 1, 0.36, 1]}}
  viewport={{once: true}}
  className='font-semibold leading-relaxed'>맛있음 이상의 것: 이벤트를 생동감 있게</motion.h4>

 <motion.p 
  initial={{opacity: 0, x: -50, }}
  whileInView={{opacity: 1, x: 0, }}
  transition={{delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1]}}
  viewport={{once: true}}
  className="text-[#49111c] leading-relaxed mb-6">
 우리는 훌륭한 이벤트에는 훌륭한 세부 사항 주의가 필요하다고 믿습니다. 그래서 우리는 음식 서비스를 뛰어넘어갑니다. 매혹적인 장식물부터 견고한 테이블과 의자, 우아한 텐트에서 분위기를 조성하는 음악까지, 우리는 당신의 이벤트의 모든 측면을 다루고 있습니다.
 </motion.p>

 <motion.h4 
  initial={{opacity: 0, x: -50, }}
  whileInView={{opacity: 1, x: 0, }}
  transition={{delay: 0.55, duration: 1.2, ease: [0.22, 1, 0.36, 1]}}
  viewport={{once: true}}
  className='font-semibold leading-relaxed'>왜 부드콤을 선택해야 하는가: 당신의 축제 파트너</motion.h4>

 <motion.p 
  initial={{opacity: 0, x: -50, }}
  whileInView={{opacity: 1, x: 0, }}
  transition={{delay: 0.6, duration: 1.2, ease: [0.22, 1, 0.36, 1]}}
  viewport={{once: true}}
  className="text-[#49111c] leading-relaxed mb-6">
 부드콤을 선택하면 단순히 행사가 아닌 소중한 기억이 되도록 헌신하는 파트너를 선택하는 것입니다. 우리는 물류를 처리하므로 여러 해 동안 얘기될 순간을 만드는 데 집중할 수 있습니다.
 <br />
 우리와 함께 부드콤에서 모든 이벤트는 마법을 만들기 위한 기회입니다. 우리에게 꿈을 현실로 만들어드릴 수 있는 기회를 주세요. 한 번에 잊지 못할 경험을 만들어 드립니다.</motion.p>



 <div className="bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded shadow-md">
            <h3 className="text-lg font-semibold mb-2">카카오톡 계정</h3>
            <p>
            모든 문의나 도움이 필요한 경우, 카카오톡을 통해 저희에게 연락하실 수 있습니다
            </p>
            <a
              href="https://www.kakaotalk.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              카카오톡 계정
            </a>
          </div>
          <div className="p-4 bg-white rounded shadow-md">
            <h3 className="text-lg font-semibold mb-2">연락 정보</h3>
            <p>
            만약 다른 커뮤니케이션 수단을 선호하신다면, 전화나 이메일로 저희에게 연락하실 수 있습니다
            </p>
            <div className="mt-2">
              <p className="mb-2">
                <strong>Phone:</strong> +1 (123) 456-7890
              </p>
              <p className="mb-2">
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:contact@example.com"
                  className="text-blue-500 hover:underline"
                >
                  contact@example.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
            

      
           </div>
        </div>

        <footer className=" py-2 text-center mt-20 ">
      <p className="text-sm ">&copy; {new Date().getFullYear()} 만찬. All rights reserved.</p>
      </footer>
      </main>

      
    </motion.div>
  );
};

export default index;



{/* <header className="py-5 md:mt-64">
 <div className="container mx-auto px-2">
 <h1 className="text-3xl font-medium font-cormorant ">Food Communication .Inc</h1>
</div> 
</header> */}










// <div>
//   <motion.div 
//   initial={{opacity: 0, x: -20, }}
//   whileInView={{opacity: 1, x: 0, }}
//   transition={{delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1]}}
//   className='border-b-[#49111c]/70 border border-b-[5px] w-[10%] border-dotted mt-10 '></motion.div>
//  {showForm && (
// <div>


  
//    <motion.div
      
//       className='mt-10 md:w-[70%] w-full'
//       >
//         <motion.h1 
//         initial={{opacity: 0, x: -20, }}
//         whileInView={{opacity: 1, x: 0, }}
//         transition={{delay: 0.7, duration: 1.2, ease: [0.22, 1, 0.36, 1]}}
//         className='text-[16px] font-semibold mb-10'>Contact Us </motion.h1>
//       <label htmlFor="input2" className="block text-md font-medium text-[#49111c] ">이름</label>
//       <input className="block w-full h-10  text-[#49111c]  focus:outline-none  pb-0 text-[14px] md:text-[15px] border-b-[1px] border-slate-200 focus:border-[#49111c]" placeholder="" type="text" id="name" name='name' 
     
//       required/>
//       </motion.div>
      

    
//        <motion.div 
       
//        className="mt-10 mb-7 md:w-[70%] w-full">
//               <label htmlFor="input2" className="block text-md font-medium text-[#49111c]">
//                 전화번호
//               </label>
              
//               <input
//                   type="tel"
//                   id="input2"
//                   name="phone_number"
//                   required={true}
//                   className={`phone_number_input block w-full h-10 pr-3 text-[13px] focus:outline-none md:text-[15px] text-[#49111c] border-b-[1px] border-slate-200 focus:border-[#49111c]`}
//                   placeholder="010" // This is your actual placeholder text
//                   //onChange={handleInputChange}
//                   onChange={handlePhoneNumberChange}
//                   pattern="^[0-9]{9,11}$" // Regular expression for 9 to 11 digits
//               />
//               {phoneNumberError && <p className={`${phoneNumberError === '완벽해요!' ? 'text-green-900 mt-1 text-[12px]':'text-red-500 mt-1 text-[12px]'}`}>{phoneNumberError}</p>}

             
                
              
//             </motion.div>

//             <motion.div className='w-full md:w-[70%] '>
//             <label htmlFor="input3" className="block text-md font-medium text-[#49111c]">
//             요청 사항
//               </label>
//               <input type="text" id="input3" className=" w-full h-10 mt-5 text-[#49111c] my-2  focus:outline-none text-[14px] md:text-[15px] border-b-[1px] border-slate-200 focus:border-[#49111c] " placeholder=""  name='message' ></input>
//             </motion.div>

//             <motion.button
//                 disabled={name === '' && phone_number === '' && message == '' ? true : false}
//                 style={ name === '' && phone_number === '' && message === '' ? { background: '#F1F5F9', color: "#fff", border: '1px solid #fff' } : { background: '#5d9c59', color: "#fff", border: '1px solid #fff' }}
//                 onClick={(event: any) => handleContactFormSubmit(event)} 
//                 type='submit'
//                 className=' w-[40%] md:w-[12%] h-[38px] text-md py-1  tracking-wider rounded-lg  focus:outline-none  mt-5 max-w-sm  text-[14px] md:text-[15px]'
//                 draggable="false"
//                 >보내기
//             </motion.button>

// </div>

// )}
// {showThankYou && (
//         <div>
          
//           <motion.p 
//           initial={{opacity: 0, scale: 0.9, }}
//           whileInView={{opacity: 1, scale: 1, }}
//           transition={{delay: 0.1, duration: 1.2, type: 'spring'}}
//           className='text-[16px]  mt-10'>귀하의 메시지를 정성스럽게 받았습니다. 곧 연락을 드리겠습니다 :)</motion.p>
//           <motion.h1 
//           initial={{opacity: 0, scale: 0.9, }}
//           whileInView={{opacity: 1, scale: 1, }}
//           transition={{delay: 0.2, duration: 1.2, type: 'spring'}}
//           className='text-[16px] font-semibold mt-2'>감사합니다! </motion.h1>
//           <button onClick={handleShowForm}
//           className='w-[40%] md:w-[15%] h-[38px] text-md py-1  tracking-wider rounded-lg border text-[#fff] focus:outline-none focus:bg-[#5d9c59]/90 mt-5 max-w-sm  text-[14px] md:text-[15px] bg-[#5D9C59]'>다시 연락</button>
//         </div>
//       )}
// </div>