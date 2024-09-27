"use client";

import React, { useEffect, useRef } from 'react'
import Image from 'next/image';
import appScreen from '@/public/images/app-screen.png'
import { motion, useScroll, useTransform } from 'framer-motion'

export const ProductShowcase = () => {
    
    const appImage = useRef<HTMLImageElement>(null);

    const { scrollYProgress } = useScroll({
        target: appImage,
        offset: ['start end','end end']
    });

    const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
    const opacity = useTransform(scrollYProgress, [0, 1], [.5, 1]);

    return (
        <div style={{padding: '0 6%'}} className='bg-black text-white bg-gradient-to-b py-[72px] py-24'>
            <div className='container-product'>
                <h2 className='text-center text-5xl sm:text-6xl font-bold tracking-tighter'>Intuitive interface</h2>
                <div className='max-w-xl mx-auto'>
                    <p className='text-xl text-center text-white/70 mt-5'>Celebrate the joy of accomplishment with and app designed to track your progress, motivate your efforts, and celebrate your successes, one task at a time.</p>
                </div>
                <motion.div

                    style={{
                        opacity: opacity,
                        rotateX: rotateX,
                        transformPerspective: '800px',
                    }}

                >
                    <Image className='mt-14' src={appScreen} alt='The product screenshot' ref={appImage}  />
                </motion.div>
            </div>
        </div>
    )
}