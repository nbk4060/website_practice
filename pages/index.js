import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Main from './Main'
import Outside_container from './Outside_container'

export default function Home() {
  return (
    <>
      <div className='relative'>
        <div className='flex items-center justify-center w-full  z-0'>
          <div className='w-full absolute mx-auto container h-full'>
            <div className=" w-full -mt-10 flex absolute justify-between z-0 h-full">
              <div className="h-full  mt-32 w-px border-l border-gray-200" />
              <div className="h-full w-px border-l border-gray-200" />

              <div className="h-full w-px border-l border-gray-200" />

              <div className="h-full w-px border-l border-gray-200" />
              <div className="h-full mt-32 w-px border-l border-gray-200" />
            </div>
          </div>
        </div>
        <div className='z-20 relative'>
          <div className='mt-10 ml-6'>
            <img src="/Combined Shape.svg" />
          </div>

          <Main />

          <Outside_container />
        </div>
      </div>

    </>
  )
}
