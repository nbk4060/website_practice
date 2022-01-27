
import Image from 'next/image'
import Three_text_div from './Three_text_div'

export default function Center_div() {
    return (
        <>
          <div className='mx-auto container flex lg:justify-center lg:mt-24 lg:w-2/4 md:mt-[5.5rem] md:w-4/5 sm:mt-11 sm:w-10/12 mt-9 w-11/12'>
              <div>
           <div className='flex flex-col '>
              <div>
                  <h4 className='jarkataDisplay font-medium not-italic lg:text-2xl lg:leading-[26.4px] md:text-lg md:leading-[1.375rem] sm:text-base sm:leading-4 text-base leading-4'>Services</h4>
                  <p className='lg:mt-3 jarkataSans font-normal not-italic lg:text-lg lg:leading-5 text-gray-600 md:mt-2 md:text-base md:leading-4 sm:mt-2 sm:text-sm leading-3 mt-2 text-sm leading-3'>UX Designing</p>
              </div>
              <div className='lg:mt-14 md:mt-14 sm:mt-9 mt-9'>
                  <h4 className='jarkataDisplay font-medium not-italic lg:text-2xl lg:leading-[26.4px] md:text-lg md:leading-[1.375rem] sm:text-base sm:leading-4 text-base leading-4'>Dated</h4>
                  <p className='lg:mt-3 jarkataSans font-normal not-italic lg:text-lg lg:leading-5 text-gray-600 md:mt-2 md:text-base md:leading-4 sm:mt-2 sm:text-sm leading-3 mt-2 text-sm leading-3'>December 2021</p>
              </div>
              <div className='lg:mt-14 md:mt-14 sm:mt-9 mt-9'>
                  <h4 className='jarkataDisplay font-medium not-italic lg:text-2xl lg:leading-[26.4px] md:text-lg md:leading-[1.375rem] sm:text-base sm:leading-4 text-base leading-4'>Collaboration</h4>
                  <p className='lg:mt-3 jarkataSans font-normal not-italic lg:text-lg lg:leading-5 text-gray-600 md:mt-2 md:text-base md:leading-4 sm:mt-2 sm:text-sm leading-3 mt-2 text-sm leading-3'>Clerk Kent</p>
              </div>
           </div>
            </div>

            <div className='lg:ml-32 md:ml-14 sm:ml-10 ml-10'>
           <div className='flex flex-col '>
               <h2 className='jarkataDisplay font-normal not-italic lg:text-5xl lg:leading-[3.3rem] md:text-[2rem] md:leading-[2.2rem] sm:text-2xl sm:leading-4 text-2xl leading-6'>Aim for simplicity.</h2>
               <p className='lg:mt-10 jarkataSans font-normal not-italic lg:text-lg text-gray-600 lg:leading-[1.7rem] md:mt-2 md:text-base md:leading-6 sm:mt-4 sm:text-sm sm:leading-5 mt-4 text-sm leading-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a dolor nulla nulla quam pellentesque risus consequat est. Feugiat vulputate sapien enim neque non blandit ullamcorper sit. Eget id augue mi nisi quam turpis morbi. </p>
               <p className='lg:mt-2 jarkataSans font-normal not-italic lg:text-lg text-gray-600 lg:leading-[1.7rem] md:mt-[1.6rem] md:text-base md:leading-6 sm:mt-5 sm:text-sm sm:leading-5 mt-5 text-sm leading-5 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a dolor nulla nulla quam pellentesque risus consequat est.</p>
               <div className='jarkataDisplay font-medium not-italic lg:text-xl text-gray-900 lg:leading-5 lg:mt-10 md:text-lg md:leading-[1.125rem]  md:mt-9 sm:text-base sm:leading-4 sm:mt-9 text-base leading-4 mt-9'><a href="#">View Website</a>
               <div className='lg:w-[123px] h-[2px] absolute bg-gray-200 lg:mt-2.5 md:mt-3 md:w-[111px] mt-3 w-[111px] '>
              <div className='lg:w-[93px] h-[2px] bg-gray-900 md:w-[79px] w-[79px]'></div>
            </div>
          </div> 

           </div>
           </div>
           </div>

           <div className='bg-gray-100 lg:w-full flex flex-col items-center justify-center mx-auto lg:py-[17.5rem] lg:mt-24 md:py-24 md:mt-[3.3rem] md:w-[616px] sm:w-[450px] sm:mt-9 mt-9 w-[350px] py-24'>
            <img src="/Combined Shape.svg"  alt="logo"/>
           </div>

           <Three_text_div/>
        </>
    )
}