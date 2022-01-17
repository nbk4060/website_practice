import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Main from './Main'
import Outside_container from './Outside_container'

export default function Home() {
  return (
    <>
     <div className='relative'>
                        <div className="w-full flex absolute justify-around z-0 h-full">
                        <div className=" h-full w-px border-l border-gray-200" />
                        <div className="h-full w-px border-l border-gray-200" />

                        <div className="h-full w-px border-l border-gray-200" />

                        <div className="h-full w-px border-l border-gray-200" />
                        <div className="h-full w-px border-l border-gray-200" />
                        </div>
      <div className='z-20 relative'>
        <div className='mt-10 ml-6'>
          <Image src="/Combined Shape.svg" width={51} height={44} />
        </div>
        <Main />
      </div>
      </div>
      <Outside_container />
    </>
  )
}
