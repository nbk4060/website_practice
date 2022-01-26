
import Image from 'next/image'
import Three_text_div from './Three_text_div'

export default function Center_div() {
    return (
        <>
          <div className='mx-auto container flex lg:justify-center lg:mt-24 lg:w-2/4 md:mt-[5.5rem] md:w-4/5'>
              <div>
           <div className='flex flex-col '>
              <div>
                  <h4 className='jarkataDisplay font-medium not-italic lg:text-2xl lg:leading-[26.4px] md:text-lg md:leading-[1.375rem]'>Services</h4>
                  <p className='lg:mt-3 jarkataSans font-normal not-italic lg:text-lg lg:leading-5 text-gray-600 md:mt-2 md:text-base md:leading-4'>UX Designing</p>
              </div>
              <div className='mt-14'>
                  <h4 className='jarkataDisplay font-medium not-italic lg:text-2xl lg:leading-[26.4px] md:text-lg md:leading-[1.375rem]'>Dated</h4>
                  <p className='lg:mt-3 jarkataSans font-normal not-italic lg:text-lg lg:leading-5 text-gray-600 md:mt-2 md:text-base md:leading-4'>December 2021</p>
              </div>
              <div className='mt-14'>
                  <h4 className='jarkataDisplay font-medium not-italic lg:text-2xl lg:leading-[26.4px] md:text-lg md:leading-[1.375rem]'>Collaboration</h4>
                  <p className='lg:mt-3 jarkataSans font-normal not-italic lg:text-lg lg:leading-5 text-gray-600 md:mt-2 md:text-base md:leading-4'>Clerk Kent</p>
              </div>
           </div>
            </div>

            <div className='lg:ml-32 md:ml-14'>
           <div className='flex flex-col '>
               <h2 className='jarkataDisplay font-normal not-italic lg:text-5xl lg:leading-[3.3rem] md:text-[2rem] md:leading-[2.2rem]'>Aim for simplicity.</h2>
               <p className='lg:mt-10 jarkataSans font-normal not-italic lg:text-lg text-gray-600 lg:leading-[1.7rem] md:mt-2 md:text-base md:leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a dolor nulla nulla quam pellentesque risus consequat est. Feugiat vulputate sapien enim neque non blandit ullamcorper sit. Eget id augue mi nisi quam turpis morbi. </p>
               <p className='lg:mt-2 jarkataSans font-normal not-italic lg:text-lg text-gray-600 lg:leading-[1.7rem] md:mt-[1.6rem] md:text-base md:leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a dolor nulla nulla quam pellentesque risus consequat est.</p>
               <div className='jarkataDisplay font-medium not-italic lg:text-xl text-gray-900 lg:leading-5 lg:mt-10 md:text-lg md:leading-[1.125rem]  md:mt-9 sm:text-xs sm:leading-3 sm:mt-6 text-xs leading-3 mt-6'><a href="#">View Website</a>
               <div className='lg:w-[123px] h-[2px] absolute bg-gray-200 lg:mt-2.5 md:mt-3 md:w-[111px] sm:w-[95px] sm:mt-2 w-[95px] mt-2'>
              <div className='lg:w-[93px] h-[2px] bg-gray-900 md:w-[79px] sm:w-[65px] w-[65px]'></div>
            </div>
          </div> 

           </div>
           </div>
           </div>

           <div className='bg-gray-100 w-full flex flex-col items-center justify-center mx-px lg:py-[17.5rem] lg:mt-24 md:py-24 md:mt-[3.3rem]'>
            <img src="/Combined Shape.svg"  alt="logo"/>
           </div>

           <Three_text_div/>
        </>
    )
}