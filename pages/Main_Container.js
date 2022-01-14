import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Adj_div from './Adj_div';

export default function Main_Container() {
  return (
     <> 
    <div className='absolute top-[0.73%] left-[1.3%] right-[96.04%] bottom-[98.48%] mt-[40px] ml-[25px]'>
       <Image src="/Combined Shape.svg" alt="Alpha Logo" width={51} height={44} />
    </div>
    <div className='font-font_family font-normal not-italic leading-4 w-[88px] h-4 absolute left-[1612px] top-[54px] underline'>
        <a href='#'>Get in touch <Image src="/Frame.png" alt="line" width={24} height={24} className="absolute left-[1704px] top-[53px]"/></a>
    </div>
   
    <div className='font-font_family font-bold not-italic text-[80px] min-w-[1405px] min-h-[264px] left-[10%] right-[16.82%] top-[2.27%] bottom-[92.95%] absolute mt-[125px] mb-[5127px] mr-[323px]'>
    Move beyond constraints. We collaborate with partners to get shit done 
    </div>
    <div className='font-sans font-normal not-italic text-[20px] w-[308px] h-[25] absolute left-[10%] right-[73.96%] top-[8.39%] bottom-[91.15%] mt-[537px] mb-[5028px] mr-[1420px]'>San Diego/Islamabad/The World</div>
    <div className='absolute left-[3.44%] right-[94.9%] top-[9.5%] bottom-[89.92%] mt-[524px] ml-[34px] mr-[1854px] mb-[4960px] rotate-90'>
       <Image src="/Frame2.png" alt="Alpha Logo" width={32} height={32} />
    </div>
    <div className='min-w-[1720px] min-h-[600px] bg-[#0B0D13] absolute left-[5.21%] right-[5.21%] top-[10.21%] bottom-[78.92%] mt-[638px] mb-[4353px]'>
        <div className='absolute left-[951px] top-[829px] my-[266px] ml-[851px] mr-[790px] ' >
    <Image src="/Combined Shape.svg" alt="Alpha Logo" width={79} height={68} />
    </div>
    </div>
    <Adj_div/>
    </>
  )
}