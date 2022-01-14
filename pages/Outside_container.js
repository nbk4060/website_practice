import Image from 'next/image'
import Four_div_text from './Four_div_text';

export default function Outside_container() {
    return (
        <>
            <div className='bg-[#0B0D13] z-10 -mt-80 pt-96'>
                <div className='mx-auto container'>
                    
                        <p className='font-font_family font-medium italic text-2xl leading-[24px] text-[#9CA3AF] mt-10'>LearnForce</p>
                        <p className='font-font_family font-bold not-italic text-[40px] text-white leading-[44px] mt-10'>End-to-end engineering of Europe’s biggest learning platform</p>
                        <div className='font-font_family font-medium not-italic text-xl text-white -mt-10 flex justify-end item-end'><a href="#">View Case Study</a>
                            <div className='w-[159px] h-[2px] absolute bg-[#4B5563] mt-8'>
                                <div className='w-[93px] h-[2px] bg-white ml-11 mr-5'></div>
                            </div>
                        </div>
                        <button className='font-sans font-medium not-italic text-xl leading-5 text-white mt-28 mx-[670px]'>VIEW ALL WORK</button>
                        {/* <Image src="/lines_background.png" width={100} height={100} /> */}
                   
                </div>
                <div className='mx-auto'>
                <div className='w-full h-full inset-0 bg-[url("/background_line_image.png")] bg-no-repeat'>
                    <div className='mx-auto container font-font_family font-bold not-italic text-white text-7xl leading-[97.2px] ml-36 mr-80 pt-32'>Top 0.1% of Talent.White Glove, Start to Finish.Results, No Matter What.</div>
                    <div className='mx-auto container flex justify-center mt-96 pb-24 mx-48'>
                      <Four_div_text  
                      title={"1. Design"} 
                      detail={"At the core of our design philosophy is problem-solving. By understanding our client’s objectives and values, we ensure that every aspect of the design process is seamless. We focus on providing immersive experiences and lasting impressions for the users."}/>
                     <Four_div_text  
                      title={"2. Development"} 
                      detail={"At the core of our design philosophy is problem-solving. By understanding our client’s objectives and values, we ensure that every aspect of the design process is seamless. We focus on providing immersive experiences and lasting impressions for the users."}/>
                     <Four_div_text  
                      title={"3. Team Augmentation"} 
                      detail={"At the core of our design philosophy is problem-solving. By understanding our client’s objectives and values, we ensure that every aspect of the design process is seamless. We focus on providing immersive experiences and lasting impressions for the users."}/>
                    <Four_div_text  
                      title={"4. Technology Modernization"} 
                      detail={"At the core of our design philosophy is problem-solving. By understanding our client’s objectives and values, we ensure that every aspect of the design process is seamless. We focus on providing immersive experiences and lasting impressions for the users."}/>
                    </div>
                 </div>
                </div>
                
                <div className='mx-auto container'>
                <img src="/line 11.png" />
                <div className='flex justify-center  ml-24'>
                    {/* bg-[url("/line_background.png")] */}
                    <div className='flex-auto'>
                        <img src="/google1.png" className='pt-28' />
                        <img src="/google_icon.png" className='py-32' />
                    </div>
                    <div className='flex-auto'>
                        <img src="/LinkedIn Logo.png" className='pt-28' />
                        <img src="/Amazon Logo.png" className='pt-32' />
                    </div>
                    <div className='flex-auto'>
                        <img src="/Microsoft Logo.png" className='pt-28' />
                        <img src="/Hubspot Logo.png" className='pt-32' />
                    </div>
                    <div className='flex-auto'>
                        <img src="/Walmart Logo.png" className='pt-28' />
                        <img src="/Airbnb Logo.png" className='pt-32' />
                    </div>
                </div>
                <img src="/line 11.png" />
                </div>
               
               <div className='mx-auto container'>
                <div className="mt-7 w-full flex justify-center item-center"><img src="lines.png"/></div>
                <img src="/line 11.png" className="mt-7" />

                <div className="flex gap-40 mt-16">
                    <div>
                        <img src="/because.png" />
                        <div className='mt-16'><button className="text-white font-font_family font-normal not-italic text-2xl leading-6 underline">Get in touch <span><Image src="/white_arrow.png" width={32} height={32} /></span></button></div>
                    </div>
                    <div>
                        <h1 className="font-font_family font-medium not-italic text-xl text-white leading-5">San Diego</h1>
                        <p className='font-sans font-medium not-italic text-lg text-gray-400 leading-7 mt-5'>4275 Executive Square, Suite 200
                            LA Jolla, CA 92037</p>
                    </div>

                     <div>
                        <h1 className="font-font_family font-medium not-italic text-xl text-white leading-5">Islamabad</h1>
                        <p className='font-sans font-medium not-italic text-lg text-gray-400 leading-7 mt-5'>Suite 301-305, Ground Floor, NSTP, NUST H-12, Islamabad</p>
                        <p className='font-sans font-medium not-italic text-lg text-gray-400 leading-7 mt-10'>Suite 301-305, Ground Floor, NSTP, NUST H-12, Islamabad</p>
                    </div>    

                </div>
                </div>

                <div className='mx-auto container mt-16'>
                <img src="/line 11.png" />
                    <div className='flex gap-96 mt-10'>
                        <div>
                           <img src="/AlphaSquad.svg"/>
                        </div>
                        <div className='font-sans font-medium not-italic text-lg leading-3 text-gray-400'>
                        Terms of Service
                        </div>
                        <div className='font-sans font-medium not-italic text-lg leading-3 text-gray-400'>
                        Privacy Policy
                        </div>
                       
                    </div>
                    
                </div>
            </div>


        </>
    )
}