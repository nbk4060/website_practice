import Image from 'next/image'
import Four_div_text from './Four_div_text';

export default function Outside_container() {
    return (
        <>
            <div className='bg-[#0B0D13] lg:-mt-96 lg:pt-96 md:-mt-44 md:pt-40 sm:-mt-36 sm:pt-36'>
            <div className='relative'>
        <div className='flex justify-center w-full z-0'>
          <div className='w-full absolute mx-auto container h-full'>
            <div className=" w-full flex justify-between z-0 h-full">
              <div className="h-full lg:pt-[42rem] lg:-mt-96 md:pt-[21rem] md:-mt-40 w-px border-l border-gray-900" />
              <div className="h-full lg:pt-[42rem] lg:-mt-96 md:pt-[21rem] md:-mt-40 w-px border-l border-gray-900" />

              <div className="h-full lg:pt-[42rem] lg:-mt-96 md:pt-[21rem] md:-mt-40 w-px border-l border-gray-900" />

              <div className="h-full lg:pt-[42rem] lg:-mt-96 md:pt-[21rem] md:-mt-40 w-px border-l border-gray-900" />
              <div className="h-full lg:pt-[42rem] lg:-mt-96 md:pt-[21rem] md:-mt-40 w-px border-l border-gray-900" />
            </div>
          </div>
        </div>
                    <div className='mx-auto container relative z-20 lg:mt-10 md:mt-6 sm:mt-5'>
                        
                        {/* <hr className='rotate-90 relative'/>  */}

                        {/* <div className="w-px h-full bg-white relative"></div> */}
                        <p className='font-font_family font-medium italic lg:text-2xl lg:leading-[24px] text-[#9CA3AF] lg:ml-24 md:text-lg md:leading-6 md:ml-16 sm:ml-4 sm:text-sm sm:leading-[14px]'>LearnForce</p>

                        <p className='font-font_family font-bold not-italic lg:w-4/5 lg:text-[40px] text-white lg:leading-[44px] lg:mt-10 lg:pl-24 md:w-3/5 md:text-xl md:leading-6 md:pl-16 md:mt-6 sm:text-lg sm:leading-7 sm:mt-5 sm:pl-4 sm:w-6/12'>End-to-end engineering of Europe’s biggest learning platform</p>
                        <div className='font-font_family font-medium not-italic lg:text-xl text-white lg:-mt-10 lg:flex lg:justify-end lg:item-end lg:ml-24 lg:mr-24 md:flex md:justify-end md:item-end md:-mt-9 md:text-base md:leading-5 md:mr-20 sm:mt-6 sm:leading-3 sm:text-xs sm:ml-4'><a href="#">View Case Study</a>
                            <div className='lg:w-[159px] h-[2px] absolute bg-[#4B5563] lg:mt-8 md:mt-8 md:w-[126px] sm:w-[93px] sm:mt-2'>
                                <div className='lg:w-[93px] h-[2px] bg-white lg:ml-11 lg:mr-5 md:ml-0 md:mr-0 md:w-[88px] sm:w-[65px]'></div>
                            </div>
                        </div>
                        <button className='font-sans font-medium not-italic text-xl leading-5 text-white lg:mt-28 mx-auto container flex justify-center md:mt-24 sm:mt-16'>VIEW ALL WORK</button>
                        {/* <Image src="/lines_background.png" width={100} height={100} /> */}

                    </div>     {/* <div className='mt-7 w-full h-full inset-0 bg-[url("/line 11.png")] bg-no-repeat bg-cover'></div> */}
                </div>
                {/* <img src="/line 11.png" className='mt-7 w-full' /> */}
                <div className='mx-auto lg:mt-6 border-y border-gray-900 md:mt-8 sm:mt-14'>
                    <div className='w-full h-full inset-0 bg-[url("/background_line_image.png")] bg-no-repeat bg-cover'>
                        <div className='container flex flex-col font-font_family font-bold not-italic text-white lg:text-7xl lg:leading-[97.2px] lg:pl-24 lg:pt-32 md:text-4xl md:leading-[48.6px] md:pl-16 md:pt-14 sm:pt-14 sm:text-2xl sm:pl-4 sm:leading-8'> 
                        {/* w-[61%] */}
                            Top 0.1% of Talent. <br />
                            White Glove, Start to Finish.<br/> Results, No Matter What.</div>
                        <div className='mx-auto container lg:flex lg:flex-row lg:justify-center lg:gap-8 lg:mt-96 lg:pb-24 lg:px-20 md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-16 md:mt-28 md:pb-20 md:px-16 sm:px-4 sm:mt-[4.5rem] sm:grid sm:gap-y-12 '>
                            <Four_div_text
                                title={"1. Design"}
                                detail={"At the core of our design philosophy is problem-solving. By understanding our client’s objectives and values, we ensure that every aspect of the design process is seamless. We focus on providing immersive experiences and lasting impressions for the users."} />
                            <Four_div_text
                                title={"2. Development"}
                                detail={"At the core of our design philosophy is problem-solving. By understanding our client’s objectives and values, we ensure that every aspect of the design process is seamless. We focus on providing immersive experiences and lasting impressions for the users."} />
                            <Four_div_text
                                title={"3. Team Augmentation"}
                                detail={"At the core of our design philosophy is problem-solving. By understanding our client’s objectives and values, we ensure that every aspect of the design process is seamless. We focus on providing immersive experiences and lasting impressions for the users."} />
                            <Four_div_text
                                title={"4. Technology Modernization"}
                                detail={"At the core of our design philosophy is problem-solving. By understanding our client’s objectives and values, we ensure that every aspect of the design process is seamless. We focus on providing immersive experiences and lasting impressions for the users."} />
                        </div>
                    </div>
                </div>
                {/* <img src="/line 11.png" className='w-full'/> */}
                <div className='relative'>
                <div className='flex  justify-center w-full z-0'>
                    <div className='w-full absolute mx-auto container h-full'>
                        <div className=" w-full  flex absolute justify-between z-0 h-full">
                        <div className="h-full w-px border-l border-gray-900" />
                        <div className="h-full w-px border-l border-gray-900" />

                        <div className="h-full w-px border-l border-gray-900" />

                        <div className="h-full w-px border-l border-gray-900" />
                        <div className="h-full w-px border-l border-gray-900" />
                        </div>
                    </div>
                    </div>
                    <div className='mx-auto container relative'>

                        <div className='flex flex-row justify-center'>
                            {/* bg-[url("/line_background.png")] */}
                            <div className='flex-auto '>
                                <div className="lg:pl-52 lg:pr-24 md:pl-16 sm:pl-4">
                                    <img src="/google1.png" className='pt-28 lg:w-auto md:w-14 sm:w-14' />
                                    <img src="/google_icon.png" className='lg:my-32 lg:w-auto md:my-10 md:w-20 sm:w-20 sm:my-11' />
                                </div>

                            </div>
                            <div className='flex-auto '>
                                <div className="lg:pl-36 lg:pr-28 md:pl-16 sm:pl-4">
                                    <img src="/LinkedIn Logo.png" className='pt-28 lg:w-auto md:w-20 sm:w-20' />
                                    
                                    <img src="/Hubspot Logo.png" className='lg:mt-32 lg:w-auto md:mt-10 md:w-16 sm:w-16 sm:mt-11' />
                                </div>

                            </div>
                            <div className='flex-auto '>
                                <div className="lg:pl-24 lg:pr-36 md:pl-16 sm:pl-4">
                                    <img src="/Microsoft Logo.png" className='pt-28 lg:w-auto md:w-24 sm:w-24' />
                                    <img src="/Amazon Logo.png" className='lg:mt-32 lg:w-auto md:mt-10 md:w-16 sm:w-16 sm:mt-11' />
                                </div>
                            </div>
                            <div className='flex-auto'>
                                <div className="lg:pl-20 lg:pr-44 md:pl-16 sm:pl-4">
                                    <img src="/Walmart Logo.png" className='pt-28 lg:w-auto md:w-20 sm:w-20' />
                                    <img src="/Airbnb Logo.png" className='lg:mt-32 lg:w-auto md:mt-10 md:w-16 sm:w-16 sm:mt-11' />
                                </div>
                            </div>
                        </div>

                    </div>



                </div>
                {/* <img src="/line 11.png" className='w-full' /> */}
                <div className='relative'>
                <div className='flex justify-center w-full  z-0'>
                    <div className='w-full absolute mx-auto container h-full'>
                        <div className=" w-full  flex absolute justify-between z-0 h-full">
                        <div className="h-full w-px border-l border-gray-900" />
                      
                        <div className="h-full w-px border-l border-gray-900" />
                        </div>
                    </div>
                    </div>
                    <div className='border-y border-gray-900'>
                        <div className="my-7 w-full flex justify-center item-center"><img src="lines.png" /></div>
                    </div>
                    {/* <img src="/line 11.png" className="mt-7 w-full" /> */}

                    <div className='mx-auto container lg:pl-20 md:pl-20 sm:pl-4 relative'>


                        <div className="lg:flex lg:justify-between lg:mt-16 md:flex md:justify-between md:mt-8 lg:mr-0 md:mr-16 sm:grid sm:grid-cols-2 sm:mt-7 ">
                            <div className='lg:w-1/3'>
                                <img src="/because.png" className='lg:w-auto md:w-44 lg:h-auto md:h-11 sm:w-[184px] sm:h-auto'   />
                                <div className='flex mt-16'>
                                    <div><button className="text-white font-font_family font-normal not-italic lg:text-2xl leading-6 underline md:text-sm sm:text-xs sm:leading-3">Get in touch </button></div>
                                    <div className='pl-2'><img src="/white_arrow.png" /></div>
                                </div>
                            </div>

                            <div className='lg:w-1/3 lg:mx-0 md:mx-14 md:w-1/3 sm:w-3/4 sm:col-end-2 sm:col-start-2'>
                                <h1 className="font-font_family font-medium not-italic lg:text-xl text-white leading-5 md:text-lg sm:text-sm sm:leading-5">San Diego</h1>
                                <div className='font-sans font-medium not-italic lg:text-lg text-gray-400 lg:mt-5 lg:mr-28 md:mt-5 md:text-xs md:mr-14 sm:text-xs sm:leading-4 sm:mt-3'>4275 Executive Square, Suite 200
                                    <br/>LA Jolla, CA 92037</div>
                            </div>

                            <div className='lg:w-1/3 lg:mr-64 md:w-1/3 md:mr-0 sm:col-end-4 sm:col-span-2 lg:mt-auto md:mt-auto sm:-mt-7'>
                                <h1 className="font-font_family font-medium not-italic lg:text-xl text-white leading-5 md:text-lg sm:text-sm sm:leading-5">Islamabad</h1>
                                <div className='font-sans font-medium not-italic lg:text-lg text-gray-400 lg:mt-5 md:mt-5 md:text-xs sm:text-xs sm:leading-4 sm:mt-3' >Suite 301-305, Ground Floor, NSTP, NUST <br/> H-12, Islamabad</div>
                                <div className='font-sans font-medium not-italic lg:text-lg text-gray-400 lg:mt-10 md:text-xs md:mt-5 sm:text-xs sm:leading-4 sm:mt-3'>Suite 301-305, Ground Floor, NSTP, NUST <br/>H-12, Islamabad</div>
                            </div>
                        </div>
                    </div>
                    {/* <img src="/line 11.png" className='w-full mt-16'/> */}

                    <div className='border-y border-gray-900 lg:mt-16 md:mt-8 sm:mt-5 relative'>
                        <div className='container lg:pl-20 md:pl-20 sm:pl-4'>

                            <div className='flex justify-between'>
                                <div className='lg:my-10 md:my-6 sm:my-5 lg:w-1/5 md:w-1/5 sm:w-3/6'>
                                    <img src="/AlphaSquad.svg" className='lg:w-auto md:w-[184px] sm:w-[184px]'/>
                                </div>
                                <div className='lg:w-4/5 md:w-4/5 sm:w-3/6 lg:ml-28 lg:my-11 md:my-[25px] font-sans font-medium not-italic lg:text-lg lg:leading-3 text-gray-400 md:text-xs md:leading-[18px] md:ml-32 sm:text-[10px] sm:leading-[18px] sm:my-[21px]'>
                                <span >Terms of Service</span>
                                <span className='lg:ml-10 md:ml-32 sm:ml-10'>Privacy Policy</span> 
                                </div>
                                {/* <div className='w-96 my-11 mr-64 font-sans font-medium not-italic text-lg leading-3 text-gray-400'>
                                
                                </div> */}

                            </div>

                        </div>
                    </div>
               </div>
                {/* <img src="/line 11.png" className='w-full mt-10'/> */}
            </div>


        </>
    )
}