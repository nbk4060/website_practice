
import Image from 'next/image'
import Img_div from './Img_div'
import Center_div from './Center_div'
// import style from  '../styles/Home.module.css'

export default function CaseStudy_main() {
  return (
    <>
      <div className='flex justify-end items-end underline lg:-mt-10 lg:mr-48 text-[#111827] hover:text-gray-400 md:-mt-4 md:mr-16 sm:-mt-4 -mt-4 mr-4'><button>Get in touch</button><img src="/Frame.png"/></div>
      {/* <div className='mx-auto max-w-[1405px] max-h-[264px] font-font_family font-bold not-italic text-[80px] leading-[88px] mt-[48px]'>
          Move beyond constraints. We collaborate with partners to get shit done
          </div> */}
      {/* <div className='ml-8 mt-[440px]'>
          <img src="/Frame2.png"/>
        </div>     */}
      <div className='mx-auto container mt-6'>
        
        <div>
           <div className='flex ml-12'>
               <div className='flex items-end w-full relative lg:mb-32 md:mb-[5.6rem]'>
                     <div>
                      <h6 className='jarkataDisplay lg:font-medium not-italic lg:text-2xl lg:leading-7 text-gray-500 md:font-normal md:text-lg leading-[1.35rem]'>Toyota North America</h6>
                      <p className='jarkataDisplay font-bold not-italic lg:text-[56px] lg:leading-[67.2px] text-gray-900 lg:mt-5 md:text-4xl leading-[2.7rem] md:mt-4 '>UX optimastion increasing conversion by 30%</p>
                      </div>
               </div>
               <div className='w-full flex flex-col justify-center items-center bg-gray-100 lg:py-96 -ml-40 py-56'>
                     <img src='/case_alpha.svg' />
               </div>
               <div className='w-full flex items-end lg:-ml-40 lg:mb-24 md:-ml-20 md:mb-[6.5rem]'>
                   <p className='jarkataSans font-normal lg:text-2xl text-gray-500 md:text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a dolor nulla nulla quam pellentesque risus consequat est.
                   Feugiat vulputate sapien enim neque non blandit ullamcorper sit. Eget id augue mi nisi quam turpis morbi. </p>
               </div>

           </div>
           <Center_div/>
          {/* <Img_div /> */}
        </div>
        
      </div>
      {/* <div className='mx-auto '>
<div className='p-20 bg-black w-full'>

</div>
</div>  */}
    </>
  )
}