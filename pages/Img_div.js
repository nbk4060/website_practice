
import Image from 'next/image'



export default function Img_div() {
  return (
    <>
      <div className='bg-black flex flex-col items-center justify-center py-64 mt-20 mx-24'>
        <Image src="/Combined Shape.svg" width={79} height={68} />
      </div>
      <div className='font-font_family font-bold not-italic text-[80px] leading-[88px] ml-48 mt-6'>Featured Work</div>
      <div className='flex'>
        <div className="flex-auto">
          <div className='bg-black flex flex-col items-center justify-center py-64 ml-48 mt-16'>
            <Image src="/Combined Shape.svg" width={79} height={68} />
          </div>
          <div className='font-sans font-medium italic text-2xl leading-6 ml-48 mt-10'>Toyota North America</div>
          <div className='font-font_family font-bold not-italic text-[40px] leading-[44px] ml-48 mt-10 mr-36'>UX optimastion increasing conversion by 30%</div>
          {/* <div className='font-font_family font-medium not-italic text-[20px] leading-[20px] max-w-[158px] max-h-[20px] ml-48 mt-[47px]'>View Case Study</div>
            <div className='max-w-[159px] max-h-[2px] bg-[#E5E7EB] ml-48 mt-[11px]'></div> */}
          <div className='font-font_family font-medium not-italic text-xl ml-48 mt-12'><a href="#">View Case Study</a>
            <div className='w-[159px] h-[2px] absolute bg-[#E5E7EB] mt-2.5'>
              <div className='w-[93px] h-[2px] bg-[#111827]'></div>
            </div>
          </div>
        </div>
        <div className="flex-auto">
          <div className='bg-black flex flex-col items-center justify-center py-[364px] ml-44 mt-16 mr-48'>
            <Image src="/Combined Shape.svg" width={79} height={68} />
          </div>
          <div className='font-sans font-medium italic text-2xl leading-6 ml-44 mt-10 mr-48'>SCTE-ISBE</div>
          <div className='font-font_family font-bold not-italic text-[40px] leading-[44px] ml-44 mt-10 mr-40'>Systems Architecture using micro-services technology</div>
          {/* <div className='font-font_family font-medium not-italic text-[20px] leading-[20px] max-w-[158px] max-h-[20px] ml-48 mt-[47px]'>View Case Study</div>
            <div className='max-w-[159px] max-h-[2px] bg-[#E5E7EB] ml-48 mt-[11px]'></div> */}
          <div className='font-font_family font-medium not-italic text-xl ml-44 mt-12'><a href="#">View Case Study</a>
            <div className='w-[159px] h-[2px] absolute bg-[#E5E7EB] mt-2.5'>
              <div className='w-[93px] h-[2px] bg-[#111827]'></div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center mx-48 mt-20 py-72 bg-[#111827] z-40 '>
        <Image src="/Combined Shape.svg" width={79} height={68} />
      </div>

    </>
  )
}