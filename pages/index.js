import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Main from './Main'
import Outside_container from './Outside_container'

import CaseStudy_main from './CaseStudy_main'
import Outer_container from './Outer_container'

export default function Home() {
  return (
    <>
      <div className='relative'>
        <div className='flex items-center justify-center w-full'>
          <div className='lg:w-full md:w-[89.5%] absolute mx-auto container h-full'>
            <div className="w-full -mt-10 flex absolute justify-between h-full">
              <div className="h-full  mt-32 w-px border-l border-gray-200" />
              <div className="h-full w-px border-l border-gray-200" />

              <div className="h-full w-px border-l border-gray-200" />

              <div className="h-full w-px border-l border-gray-200" />
              <div className="h-full mt-32 w-px border-l border-gray-200" />
            </div>
          </div>
        </div>
        <div className='z-20 relative'>
          <div className='lg:mt-10 lg:ml-6 md:mt-4 md:ml-2 sm:mt-4 sm:ml-4 mt-4 ml-4'>
            <img src="/Combined Shape.svg" className='lg:w-12 md:w-6 sm:w-6 w-6'/>
          </div>

          {/* <Main /> */}
            <CaseStudy_main/>
          {/* <Outside_container /> */}
          <Outer_container/>
        </div>
      </div>

    </>
  )
}
