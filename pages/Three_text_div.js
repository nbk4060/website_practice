
import Image from 'next/image'
import Outer_container from './Outer_container'


export default function Three_text_div() {
    return (
        <>
          <div className='flex  lg:justify-around lg:mt-24 md:justify-evenly md:mt-16 sm:justify-evenly sm:mt-9 justify-evenly mt-9'>
              <div>
                  <h1 className='jarkataDisplay font-normal not-italic lg:text-[80px] lg:leading-[88px] md:text-4xl md:leading-[2.8rem] sm:text-2xl sm:leading-9 text-2xl leading-9 text-center'>+1.37%</h1>
                  <p className='jarkataDisplay font-normal not-italic lg:text-lg lg:leading-[18px] text-center lg:mt-6 md:text-base md:leading-[1.125rem] sm:text-xs sm:leading-4 mt-[0.438rem] text-xs leading-4 '>Conversation Ratio</p>
              </div>
              <div>
                  <h1 className='jarkataDisplay font-normal not-italic lg:text-[80px] lg:leading-[88px] md:text-4xl md:leading-[2.8rem] sm:text-2xl sm:leading-9 text-2xl leading-9 text-center'>10,000+</h1>
                  <p className='jarkataDisplay font-normal not-italic lg:text-lg lg:leading-[18px] text-center lg:mt-6 md:text-base md:leading-[1.125rem] sm:text-xs sm:leading-4 mt-[0.438rem] text-xs leading-4'>Conversation Ratio</p>
              </div>
              <div>
                  <h1 className='jarkataDisplay font-normal not-italic lg:text-[80px] lg:leading-[88px] md:text-4xl md:leading-[2.8rem] sm:text-2xl sm:leading-9 text-2xl leading-9 text-center'>4 min</h1>
                  <p className='jarkataDisplay font-normal not-italic lg:text-lg lg:leading-[18px] text-center lg:mt-6 md:text-base md:leading-[1.125rem] sm:text-xs sm:leading-4 mt-[0.438rem] text-xs leading-4'>Conversation Ratio</p>
              </div>
          </div>

          <div className='mx-auto container flex flex-col justify-center lg:mt-24 lg:w-2/4 md:mt-[5.75rem] md:w-3/5 sm:mt-9 sm:w-8/12 mt-9 w-11/12'>
              <h1 className='jarkataSans font-medium not-italic lg:text-5xl lg:leading-[3.5rem] text-gray-900 md:text-[2rem] md:leading-[2.4rem] sm:text-2xl sm:leading-4 text-2xl leading-6 '>An asserted identity.</h1>
              <p className='jarkataSans font-normal not-italic lg:text-lg text-gray-600 lg:mt-8 md:text-base md:mt-4 sm:text-sm sm:mt-4 text-sm mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a dolor nulla nulla quam pellentesque risus consequat est. Feugiat vulputate sapien enim neque non blandit ullamcorper sit. Eget id augue mi nisi quam turpis morbi. </p>
          </div>

          <div className='mx-auto container flex justify-center lg:gap-8 lg:mt-24 md:gap-6 md:mt-[3.75rem] sm:gap-4 sm:mt-9 gap-4 mt-9'>
              <div className='lg:w-full flex flex-col items-center justify-center lg:py-[17.5rem] bg-gray-100 md:w-[296px] md:py-[5.688rem] sm:w-[250px] w-[270px] py-[5.688rem] lg:ml-0 md:ml-0 sm:ml-0 ml-4'>
                 <img src="/Combined Shape.svg"  alt="logo"/>
              </div>
              <div className=' lg:w-full flex flex-col items-center justify-center lg:py-[17.5rem] bg-gray-100 md:w-[296px] md:py-[5.688rem] sm:w-[250px] w-[270px] py-[5.688rem] lg:mr-0 md:mr-0 sm:mr-0 mr-4' >
                 <img src="/Combined Shape.svg"  alt="logo"/>
              </div>
          </div>

          <div className='mx-auto container flex flex-col justify-center lg:mt-24 lg:w-2/4 md:mt-[3.75rem] md:w-3/5 sm:mt-9 sm:w-8/12 mt-9 w-11/12'>
              <h1 className='jarkataSans font-medium not-italic lg:text-5xl lg:leading-[3.5rem] text-gray-900 md:text-[2rem] md:leading-[2.4rem] sm:text-2xl sm:leading-4 text-2xl leading-6 '>The future of management.</h1>
              <p className='jarkataSans font-normal not-italic lg:text-lg text-gray-600 lg:mt-8 md:text-base md:mt-4 sm:text-sm sm:mt-4 text-sm mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a dolor nulla nulla quam pellentesque risus consequat est. Feugiat vulputate sapien enim neque non blandit ullamcorper sit. Eget id augue mi nisi quam turpis morbi. </p>
          </div>

          <div className='mx-auto container flex flex-col justify-center lg:gap-y-8 lg:mt-24 md:mt-[3.75rem] md:gap-y-8 sm:gap-y-6 sm:mt-9 gap-y-6 mt-9'>
              <div className='lg:w-full flex flex-col items-center justify-center lg:py-32 bg-gray-100 mx-auto md:w-[616px] sm:w-[450px] w-[350px] md:py-12 py-12'>
                 <img src="/Combined Shape.svg"  alt="logo"/>
              </div>
              <div className='lg:w-full flex flex-col items-center justify-center lg:py-52 bg-gray-100 mx-auto md:w-[616px] sm:w-[450px] w-[350px] md:py-16 py-16'>
                 <img src="/Combined Shape.svg"  alt="logo"/>
              </div>
              <div className='lg:w-full flex flex-col items-center justify-center lg:py-[18.5rem] bg-gray-100 mx-auto md:w-[616px] sm:w-[450px] w-[350px] md:py-24 py-24'>
                 <img src="/Combined Shape.svg"  alt="logo"/>
              </div>
          </div>
      
        </>
    )
}