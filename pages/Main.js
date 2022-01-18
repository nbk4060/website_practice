
import Image from 'next/image'
import Img_div from './Img_div'

export default function Main() {
  return (
    <>
      <div className='flex justify-end items-end -mt-10 mr-48 text-[#111827] hover:text-gray-400'><button>Get in touch</button><img src="/Frame.png"/></div>
      {/* <div className='mx-auto max-w-[1405px] max-h-[264px] font-font_family font-bold not-italic text-[80px] leading-[88px] mt-[48px]'>
          Move beyond constraints. We collaborate with partners to get shit done
          </div> */}
      {/* <div className='ml-8 mt-[440px]'>
          <img src="/Frame2.png"/>
        </div>     */}
      <div className='mx-auto container'>
        
        <div className="relative z-10">
          <div className='ml-24 mt-32 text-[#0B0D13] font-font_family font-bold not-italic text-[80px] leading-[88px]'>
            Move beyond constraints. We collaborate with partners to get shit done
          </div>
          <div className='mt-24 ml-24 text-gray-700 font-sans font-normal text-xl leading-6'>San Diego/Islamabad/The World</div>
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