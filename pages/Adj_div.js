import styles from '../styles/Home.module.css'
import Image from 'next/image'
import OverLap_div from './OverLap_div'

export default function Adj_div() {
  return (
     <> 
      <div className='font-font_family font-bold not-italic text-[80px] min-w-[1440px] min-h-[88px] absolute left-[10%] right-[15%] top-[22.82%] bottom-[75.58%] mt-[1355px] mb-[4169px] mr-[288px]'>
        Featured Work
      </div>
      <div className='min-w-[752px] min-h-[600px] absolute left-[192px] top-[1411px] bg-[#0B0D13] mt-16'></div>
      <div className='min-w-[621px] min-h-[796px] absolute left-[1107px] top-[1411px] bg-[#0B0D13] mt-16'></div>
      <div className='font-sans font-medium italic text-[24px] min-w-[248px] min-h-[24px] absolute left-[192px] top-[2051px] mt-[40px] mr-[1480px] mb-[3441px]'>
        Toyota North America
        </div>
      <div className='font-font_family font-bold not-italic text-[40px] mt-[40px] absolute left-[192px] top-[2115px] color-[#0B0D13] max-w-[654px] max-h-[88px] leading-[44px]'>
        UX optimastion increasing conversion by 30%
      </div>
      <div className='font-font_family font-medium not-italic text-[20px] w-[158px] h-[20px] absolute left-[193px] top-[2250px] mt-[47px]'><a href="#">View Case Study</a>
      <div className='w-[159px] h-[2px] absolute bg-[#E5E7EB] mt-[11px]'>
        <div className='w-[93px] h-[2px] bg-[#111827]'></div>
      </div>
      </div>

      <div className='font-sans font-medium italic text-[24px] min-w-[128px] min-h-[24px] absolute left-[1114px] top-[2247px] mt-[40px] mr-[1480px] mb-[3441px]'>
      SCTE-ISBE
        </div>
      <div className='font-font_family font-bold not-italic text-[40px] mt-[40px] absolute left-[1107px] top-[2311px] color-[#0B0D13] max-w-[621px] max-h-[88px] leading-[44px]'>
      Systems Architecture using micro-services technology
      </div>
      <div className='font-font_family font-medium not-italic text-[20px] w-[158px] h-[20px] absolute left-[1108px] top-[2447px] mt-[47px]'><a href="#">View Case Study</a>
      <div className='w-[159px] h-[2px] absolute bg-[#E5E7EB] mt-[11px]'>
        <div className='w-[93px] h-[2px] bg-[#111827]'></div>
      </div>
      </div>
      
      <OverLap_div/>
    </>
  )
}