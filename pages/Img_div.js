
import Image from 'next/image'



export default function Img_div() {
  return (
    <>
      <div className='bg-black lg:w-full flex flex-col items-center justify-center lg:py-64 lg:mt-20 md:py-32 md:mt-12 md:mx-10 sm:py-24 sm:mx-4 sm:mt-6'>
        <img src="/Combined Shape.svg"  alt="logo"/>
      </div>
      <div className='font-font_family font-bold not-italic lg:text-[80px] lg:leading-[88px] lg:ml-24 lg:mt-6 md:text-4xl md:mt-16 md:ml-16 sm:text-2xl sm:leading-7 sm:mt-10 sm:ml-4'>Featured Work</div>
      <div className='flex lg:flex-row md:flex-row sm:flex-col'>
        <div className="flex-auto">
          <div className='bg-black flex flex-col items-center justify-center lg:py-64 lg:ml-24 lg:mt-16  md:py-32 md:ml-16 md:mt-10 sm:py-64 sm:mx-4 sm:mt-9 '>
            <img src="/Combined Shape.svg" alt="logo"/>
          </div>
          <div className='font-sans font-medium italic lg:text-2xl text-gray-700  lg:leading-6 lg:ml-24 lg:mt-10 md:text-base md:ml-16 md:mt-[26px] sm:mt-4 sm:text-base sm:ml-4'>Toyota North America</div>
          <div className='font-font_family font-bold not-italic lg:text-[40px] text-[#0B0D13] lg:leading-[44px] lg:ml-24 lg:mt-10 lg:mr-36 md:text-xl md:leading-5 md:ml-16 md:mt-5 md:mr-0 sm:text-lg sm:leading-5 sm:mt-5 sm:ml-4 sm:mr-0'>UX optimastion increasing conversion by 30%</div>
          {/* <div className='font-font_family font-medium not-italic text-[20px] leading-[20px] max-w-[158px] max-h-[20px] ml-48 mt-[47px]'>View Case Study</div>
            <div className='max-w-[159px] max-h-[2px] bg-[#E5E7EB] ml-48 mt-[11px]'></div> */}
          <div className='font-font_family font-medium not-italic lg:text-xl text-gray-900 lg:ml-24 lg:mt-12 md:text-base md:leading-5 md:ml-16 md:mt-6 sm:text-xs sm:leading-3 sm:ml-4 sm:mt-6'><a href="#">View Case Study</a>
            <div className='lg:w-[159px] h-[2px] absolute bg-[#E5E7EB] lg:mt-2.5 md:mt-2 md:w-[127px] sm:w-[95px] sm:mt-2'>
              <div className='lg:w-[93px] h-[2px] bg-[#111827] md:w-[84px] sm:w-[65px]'></div>
            </div>
          </div>
        </div>
        <div className="flex-auto">
          <div className='bg-black flex flex-col items-center justify-center lg:py-[364px] lg:ml-44 lg:mt-16 lg:mr-24 md:py-[182px] md:mt-10 md:ml-6 md:mr-16 sm:py-[364px] sm:mx-4 sm:mt-9 '>
            <img src="/Combined Shape.svg" alt="logo" />
          </div>
          <div className='font-sans font-medium italic lg:text-2xl text-gray-700 lg:leading-6 lg:ml-44 lg:mt-10 lg:mr-24 md:text-base md:ml-6 md:mt-[26px] sm:mt-4 sm:text-base sm:ml-4'>SCTE-ISBE</div>
          <div className='font-font_family font-bold not-italic lg:text-[40px] text-[#0B0D13] lg:leading-[44px] lg:ml-44 lg:mt-10 lg:mr-40 md:text-xl md:leading-5 md:ml-6 md:mt-5 md:mr-0 sm:text-lg sm:leading-5 sm:mt-5 sm:ml-4 sm:mr-0'>Systems Architecture using micro-services technology</div>
          {/* <div className='font-font_family font-medium not-italic text-[20px] leading-[20px] max-w-[158px] max-h-[20px] ml-48 mt-[47px]'>View Case Study</div>
            <div className='max-w-[159px] max-h-[2px] bg-[#E5E7EB] ml-48 mt-[11px]'></div> */}
          <div className='font-font_family font-medium not-italic lg:text-xl text-gray-900 lg:ml-44 lg:mt-12 md:text-base md:leading-5 md:ml-6 md:mt-6 sm:text-xs sm:leading-3 sm:ml-4 sm:mt-6'><a href="#">View Case Study</a>
            <div className='lg:w-[159px] h-[2px] absolute bg-[#E5E7EB] lg:mt-2.5 md:mt-2 md:w-[127px] sm:w-[95px] sm:mt-2'>
              <div className='lg:w-[93px] h-[2px] bg-[#111827] md:w-[84px] sm:w-[65px]'></div>
            </div>
          </div>
        </div>
      </div>
       
         
      <div className='flex flex-col items-center justify-center lg:mx-24 lg:mt-20 lg:py-72 bg-[#111827] md:mt-16 md:ml-16 md:py-36 md:mx-16 sm:mt-14 sm:ml-4 sm:py-28 sm:mx-4'>
        <img src="/alpha_logo.svg" alt="logo"/>
      </div>
        
    </>
  )
}