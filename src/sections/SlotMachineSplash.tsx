"use client"

import { SlotReel } from "@/components/SlotReel"
import { SlotArm } from "@/components/SlotArm"
import { SpinButton } from "@/components/SpinButton"
import metalTexture from "@/assets/metal-texture-2.jpg"

import { SvgIcon } from "@/components/SvgIcon";
import { Fragment, useState } from "react";

import { techIcons, slotIcons } from "@/components/IconCollections"
import { motion } from "framer-motion";

//not a true shuffle, as array1 always picks first, but who gaf anyways it's just for a react animation. P.S. Fuck Leetcode!!!
function shuffleConcat (array1 : Array<any>, array2: Array<any>) {
  if (typeof array1[0] !== typeof array2[0]) {
    console.warn("shuffleConcat detected arrays of two different types! They will be shuffled anyways, but something is likely wrong with your inputs if this was unintended.")
  }
  let output = array1.concat(array2);
  for (let i = output.length - 1; i > 0; i--) {
    const iRand = Math.floor(Math.random() * (i+1));
    [output[i], output[iRand]] = [output[iRand], output[i]];
  }
  return output;
}

const shuffledIcons1 = shuffleConcat(techIcons, techIcons).map((item) => (
  {
    svg: (<SvgIcon key={item.title} component={item.iconType} />),
    title: item.title
  }
));
const shuffledIcons2 = shuffleConcat(techIcons, techIcons).map((item) => (
  {
    svg: (<SvgIcon key={item.title} component={item.iconType}/>),
    title: item.title
  }
));
const shuffledIcons3 = shuffleConcat(techIcons, techIcons).map((item) => (
  {
    svg: (<SvgIcon key={item.title} component={item.iconType} />),
    title: item.title
  }
));


export const SlotMachineSplash = () => {
    var [playState, setPlayState] = useState(false);

    return (
        <div className="container">
            <div className="w-full flex flex-col items-center sm:gap-0 md:gap-4">
                <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-2 animate-fade-in-b-3000 md:ml-16">
                    <div 
                    className="w-full sm:mx-[-64rem] md:mx-0 md:w-3/4 lg:w-1/2 flex flex-col relative rounded-3xl bg-gradient-to-l from-[darkgoldenrod]/80 via-[gold]/65 to-[darkgoldenrod]/80 border-2 inset-0 border-gray-800 mt-8 md:mt-16 p-4 py-1 md:py-4 overflow-clip">
                      <div className="absolute inset-0 -z-10 rounded-3xl opacity-100 bg-cover bg-center"style={{backgroundImage: `url(${metalTexture.src})`}}>
                      </div>
                      <div className="flex flex-row items-center justify-evenly h-48 md:h-64 gap-3 md:gap-4 my-3">
                          <SlotReel reelIdx={0} icons={shuffledIcons1} animName='animate-scroll-down-1' playState={playState}/>
                          <SlotReel reelIdx={1} icons={shuffledIcons2} animName='animate-scroll-down-2' playState={playState}/>
                          <SlotReel reelIdx={2} icons={shuffledIcons3} animName='animate-scroll-down-3' playState={playState}/>
                      </div>
                    </div>
                    <div className="hidden md:flex -mt-16">
                      <div className="">
                        <SlotArm setPlayState={setPlayState}/>
                      </div>
                    </div>
                    <div className="mt-2">
                      <SpinButton setPlayState={setPlayState} />
                    </div>
                </div>
            </div>
        </div>
    )
}

//144.39x239.39