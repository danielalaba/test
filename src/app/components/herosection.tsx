import React from 'react'
import Image from '../../../node_modules/next/image'

const herosection = () => {
  return (
    <div>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>Hi! I'm Daniel Alaba</h1>
                <p className='text-[#ADB7BE] text-lg sm:text-5xl lg:text-xl mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black'>Download CV</button>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3'>Contact Me</button>
                </div>
            </div>
            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className='rounded-full bg-white w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                    <img src="/images/memoji.png" alt="hero-img" width={300} height={300} 
                    className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default herosection
