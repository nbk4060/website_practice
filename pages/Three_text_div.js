
import Image from 'next/image'
import Outer_container from './Outer_container'


export default function Three_text_div() {
    return (
        <>
          <div className='flex  justify-around mt-24'>
              <div>
                  <h1 className='jarkataDisplay font-normal not-italic text-[80px] leading-[88px]'>+1.37%</h1>
                  <p className='jarkataDisplay font-normal not-italic text-lg leading-[18px] text-center mt-6 '>Conversation Ratio</p>
              </div>
              <div>
                  <h1 className='jarkataDisplay font-normal not-italic text-[80px] leading-[88px]'>10,000+</h1>
                  <p className='jarkataDisplay font-normal not-italic text-lg leading-[18px] text-center mt-6'>Conversation Ratio</p>
              </div>
              <div>
                  <h1 className='jarkataDisplay font-normal not-italic text-[80px] leading-[88px]'>4 min</h1>
                  <p className='jarkataDisplay font-normal not-italic text-lg leading-[18px] text-center mt-6'>Conversation Ratio</p>
              </div>
          </div>

          <div className='mx-auto container flex flex-col justify-center mt-24 w-2/4'>
              <h1 className='jarkataSans font-medium not-italic text-5xl leading-[3.5rem] text-gray-900 '>An asserted identity.</h1>
              <p className='jarkataSans font-normal not-italic text-lg text-gray-600 mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a dolor nulla nulla quam pellentesque risus consequat est. Feugiat vulputate sapien enim neque non blandit ullamcorper sit. Eget id augue mi nisi quam turpis morbi. </p>
          </div>

          <div className='mx-auto container flex justify-center gap-8 mt-24'>
              <div className='w-full flex flex-col items-center justify-center py-[17.5rem] bg-gray-100'>
                 <img src="/Combined Shape.svg"  alt="logo"/>
              </div>
              <div className=' w-full flex flex-col items-center justify-center py-[17.5rem] bg-gray-100' >
                 <img src="/Combined Shape.svg"  alt="logo"/>
              </div>
          </div>

          <div className='mx-auto container flex flex-col justify-center mt-24 w-2/4'>
              <h1 className='jarkataSans font-medium not-italic text-5xl leading-[3.5rem] text-gray-900 '>The future of management.</h1>
              <p className='jarkataSans font-normal not-italic text-lg text-gray-600 mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a dolor nulla nulla quam pellentesque risus consequat est. Feugiat vulputate sapien enim neque non blandit ullamcorper sit. Eget id augue mi nisi quam turpis morbi. </p>
          </div>

          <div className='mx-auto container flex flex-col justify-center gap-y-8 mt-24'>
              <div className='w-full flex flex-col items-center justify-center py-32 bg-gray-100'>
                 <img src="/Combined Shape.svg"  alt="logo"/>
              </div>
              <div className='w-full flex flex-col items-center justify-center py-52 bg-gray-100'>
                 <img src="/Combined Shape.svg"  alt="logo"/>
              </div>
              <div className='w-full flex flex-col items-center justify-center py-[18.5rem] bg-gray-100'>
                 <img src="/Combined Shape.svg"  alt="logo"/>
              </div>
          </div>
      
        </>
    )
}