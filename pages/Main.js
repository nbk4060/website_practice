
import Image from 'next/image'
import Img_div from './Img_div'

export default function Main() {
  return (
     <> 
         <div className='flex justify-end items-end -mt-10 mr-48'><button>Get in touch</button><Image src="/Frame.png" width={24} height={24}/></div>
      {/* <div className='mx-auto max-w-[1405px] max-h-[264px] font-font_family font-bold not-italic text-[80px] leading-[88px] mt-[48px]'>
          Move beyond constraints. We collaborate with partners to get shit done
          </div> */}
      <div className='mx-auto max-w-max'>
   
         <div className='ml-48 mt-32 mr-80 font-font_family font-bold not-italic text-[80px] leading-[88px] '>
          Move beyond constraints. We collaborate with partners to get shit done
         </div>
         <div className='mt-24 ml-48'>San Diego/Islamabad/The World</div>
         <Img_div/>
      </div>    
      {/* <div className='mx-auto '>
<div className='p-20 bg-black w-full'>

</div>
</div>  */}
    </>
  )
}