
import Image from 'next/image'
import Img_div from './Img_div'
// import style from  '../styles/Home.module.css'

export default function Main() {
  return (
    <>
      <div className='flex justify-end items-end lg:-mt-10 lg:mr-48 text-[#111827] hover:text-gray-400 md:-mt-4 md:mr-16 sm:-mt-4 -mt-4 mr-4'><button>Get in touch</button><img src="/Frame.png"/></div>
      {/* <div className='mx-auto max-w-[1405px] max-h-[264px] font-font_family font-bold not-italic text-[80px] leading-[88px] mt-[48px]'>
          Move beyond constraints. We collaborate with partners to get shit done
          </div> */}
      {/* <div className='ml-8 mt-[440px]'>
          <img src="/Frame2.png"/>
        </div>     */}
      <div className='mx-auto container'>
        
        <div className="relative z-10">
          <div className='jarkataDisplay lg:mx-24 lg:mt-32 text-[#0B0D13]  font-bold not-italic lg:text-[80px] lg:leading-[88px] md:text-4xl md:mt-28 md:mx-16 sm:text-2xl sm:leading-7 sm:mt-24 sm:ml-4 sm:mr-8 text-2xl leading-7 mt-24 ml-4 mr-8'>
            Move beyond constraints. We collaborate with partners to get shit done
          </div>
          <div className='lg:mt-24 lg:ml-24 text-gray-700 jarkataSans font-normal lg:text-xl lg:leading-6 md:mt-8 md:ml-16 md:text-base md:leading-5 sm:text-sm sm:leading-4 sm:mt-6 sm:ml-4 text-sm leading-4 mt-6 ml-4'>San Diego/Islamabad/The World</div>
          <Img_div />
        </div>
        
      </div>
      {/* <div className='mx-auto '>
<div className='p-20 bg-black w-full'>

</div>
</div>  */}
    </>
  )
}