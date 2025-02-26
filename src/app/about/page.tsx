"use client"
import React from 'react'
import Image from 'next/image'
import posts from '@/components/Community/posts'
import styles from '@/components/Community/posts.module.css'
import { cn } from '@/lib/utils'
import PromoSection from '@/components/Ui/PromoSection'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-[95%] mx-auto">
        <div className="text-4xl font-bold mb-8 mt-12 text-center text-primaryGreen">About Us</div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* First Row */}
          <div className="relative h-40 sm:h-56 md:max-h-80 overflow-hidden  hover:scale-105 transition-transform">
            <Image 
            src="/nerd 1.jpeg" 
            alt="Image 1" 
            className="w-full h-full object-cover"
            height={300}
            width={300}
            />
          </div>
          <div className="relative h-40 sm:h-56 md:max-h-80 overflow-hidden  hover:scale-105 transition-transform flex items-center justify-center bg-secondaryBlack">
            <h2 className="font-bold text-center px-4">
                <span className="text-xl text-white">Founded in</span><br/>
                <span className="text-4xl text-primaryGreen">IIT</span>
            </h2>
          </div>
          <div className="relative h-40 sm:h-56 md:max-h-80  overflow-hidden  hover:scale-105 transition-transform">
            <Image unoptimized src="/giphy31.jpeg" alt="Image 3"  className="object-cover"  height={300} width={300}/>
          </div>
          <div className="relative h-40 sm:h-56 md:max-h-80  overflow-hidden  hover:scale-105 transition-transform">
            <Image unoptimized src="/giphy61.jpeg" alt="Image 4"  className="object-cover" height={500} width={300} />
          </div>

          {/* Second Row */}
          <div className="relative h-40 sm:h-56 md:max-h-80 overflow-hidden  hover:scale-105 transition-transform">
            <Image unoptimized src="/giphy51.jpeg" alt="Image 5"  className="object-cover"  height={300} width={300}/>
          </div>
          <div className="relative h-40 sm:h-56 md:max-h-80 overflow-hidden  hover:scale-105 transition-transform">
            <Image unoptimized src="/giphy41.jpeg" alt="Image 6" className="object-cover"  height={300} width={300}/>
          </div>

          <div className="relative h-40 sm:h-56 md:max-h-80 overflow-hidden  hover:scale-105 transition-transform flex items-center justify-center bg-secondaryBlack">
            <h2 className="font-bold text-center px-4">
                <span className="text-xl text-primaryGreen">the brainy</span><br/>
                <span className="text-4xl text-primaryGreen">DEGENS</span>
            </h2>
          </div>
          
          <div className="relative h-40 sm:h-56 md:max-h-80 overflow-hidden hover:scale-105 transition-transform">
            <Image src="/giphy21.jpeg" alt="Image 8" className="w-full h-full object-cover"  height={300} width={300}/>
          </div>
        </div>

        {/* What If Section */}
        <div className="w-full py-16 mt-12">
          <h2 className="text-[40px] md:text-[90px] lg:text-[130px] font-light text-center bg-gradient-to-r bg-primaryGreen bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer">
            WHAT IS IIT.FUN?
          </h2>
        </div>

        <div className={styles.container}>
            <div className={cn(styles.container1, "mr-auto")}> 
                <div className={cn(styles.skewedBox1)}>
                  <Image src="/giphy 7.jpeg" alt="meme" width={245} height={150} className={styles.image}/>
                </div>
            </div>
        </div>

        <div className="w-full py-16 mt-12">
           <h2 className="text-[50px] md:text-[90px] lg:text-[150px] font-extrabold text-center bg-gradient-to-r bg-primaryGreen bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer transform scale-x-[-1] rotate-180">
            WHAT IS $IIT?
           </h2>
        </div>

        <div className={styles.container}>
            <div className={cn(styles.container1, "ml-auto")}> 
                <div className={cn(styles.skewedBox1)}>
                <Image src="/giphy 8.jpeg" alt="meme" width={310} height={162} className={styles.image}/>
                </div>
            </div>
        </div>

        <div className="flex justify-center w-full">
          <PromoSection 
            className='w-[90%] lg:w-[69%] px-4 md:px-8 max-w-7xl mt-16' 
            headingClassName='w-[30%]' 
            heading="Join the Community" 
            text="Inter IIT got you Medals?? We got you $$, If Meme-wars was an inter IIT event Come on, we heard you." 
            image="/phone.jpeg" 
            link="https://www.iit.fun"
          />
        </div>

      </div>
    </div>
  )
}