"use client"

import { motion, useMotionValue } from 'framer-motion';
import metalTexture from '@/assets/metal-texture-2.jpg';
import { SvgIcon } from './SvgIcon';
import { Fragment, useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import myFace from '@/assets/my-face-2024.png';

interface SlotProps {
  reelIdx: number;
  icons: any[];
  animName: string;
  playState: boolean;
}

export const SlotReel: React.FC<SlotProps> = ({ reelIdx, icons, animName, playState}) => {
  
  const reelWindowRef = useRef<HTMLDivElement>(null);

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (reelWindowRef.current) {
      const rect = reelWindowRef.current.getBoundingClientRect();
      console.log(rect.y);
    }
  }, []);

  return (
    <div className="z-5 overflow-clip slot-border slot-metal relative flex flex-col items-center justify-center">
      <div
        className="absolute bg-center bg-cover inset-0 z-10 opacity-30"
        style={{
          backgroundImage: `url(${metalTexture.src})`,
          backgroundSize: '200% 200%',
        }}
      />
      <div className="z-10 w-[95%] h-[95%] bg-white slot-border">
        <div
          ref={reelWindowRef}
          className="flex flex-col items-center content-center rounded-md w-full h-full bg-gradient-to-b from-slate-900/20 via-transparent via-[percentage:10%_90%] to-slate-900/20 overflow-clip"
        >
          <div 
            className="inset-0 overflow-clip z-10">
            <div 
                className={twMerge("-z-10 flex flex-col gap-4 pb-4 md:gap-6 md:pb-6",playState? animName : "animate-none")}
              >
              {[...new Array(2)].fill(0).map((_, idx) => (
                <Fragment key={idx}>
                  {icons.map((item, itemIndex) => (
                    <motion.div key={item.title + idx + itemIndex}>
                      <div className="relative size-12 md:size-16">
                        <motion.div 
                          className={twMerge("absolute w-full h-full", playState ? "animate-delayed-icon-flip-fs" : "animate-none")}
                          style={{
                            backfaceVisibility: 'hidden',
                            animationFillMode: 'forwards',
                            animationDuration: `${3.5+0.23*reelIdx}s`
                          }}>
                          {hasMounted && item.svg}
                        </motion.div>
                        <motion.div 
                          className={twMerge("absolute w-full h-full", playState ? "animate-delayed-icon-flip-bs" : "animate-none")}
                          style={{
                            backfaceVisibility: 'hidden',
                            animationFillMode: 'forwards',
                            transform: 'rotateY(180deg)',
                            animationDuration: `${3.5+0.23*reelIdx}s`
                          }}>
                          <Image src={myFace} alt="my face" className="rounded-full border-green-600 border-2" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};