"use client";

import React, { useState } from 'react';
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import metalTexture from "@/assets/metal-texture-2.jpg"

interface SlotArmProps {
    setPlayState: Function;
}

export const SlotArm : React.FC<SlotArmProps> = ({ setPlayState }) => {

    const [ballTravel, setBallTravel] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const ballScale = useMotionValue(1);

    useAnimationFrame((latestTime) => {
        ballScale.set(1+0.8*Math.sin(ballTravel/slotArmLength/2*Math.PI));
        if (ballTravel > slotArmLength) {setPlayState(true);}
    })
    
    //hook some variable somehow into 
    const slotArmLength = 50*4;
    let distTravelled = slotArmLength-ballTravel;
    let angleDeg = Math.trunc(Math.acos(distTravelled/slotArmLength)*180/Math.PI);
    
    const leverStyle = {transform: `rotateX(${angleDeg}deg)`}

    function clamp(num: number, min: number, max: number) {
        return Math.min(Math.max(num, min), max);
    }
    
    function springBackBallFrames() {
        let frames: any[] = [null];
        if (ballTravel>slotArmLength) {
            frames.push(`translateY(${slotArmLength}px) scale(1.8)`)
        }
        frames.push(`translateY(0) scale(1.0)`);
        return frames;
    }

    const ballVariants = {
        idle: {
            transform: springBackBallFrames()
        },
        dragging: { },
    };

    const leverVariants = {
        idle: {
            transform: [
                "rotateX(0)",
            ]
        },
        dragging: {},
    };

    console.log(slotArmLength)

    const htmlBlock = (
        <div 
            id="slot-lever" 
            className="relative flex flex-col items-center z-index-0">
            <div className="z-0 translate-y-1/2">
                <motion.div
                    id="lever-ball"
                    className="flex flex-row relative w-32 h-32 red-ball red-ball-border rounded-full origin-bottom"
                    style={{
                        transform:`translateY(${ballTravel}px) scale(${ballScale.get()})`
                    }}
                    variants={ballVariants}
                    animate={isDragging ? "dragging" : "idle"}
                    transition={{ duration: 0.6, ease:"easeInOut"}}
                    whileDrag="dragging"
                    drag="y"
                    onDragStart={() => {
                        setIsDragging(true);
                        setBallTravel(0);
                    }}
                    onDragEnd={() => {setIsDragging(false)}}
                    onDrag={(event, info) => {
                        if (Math.abs(info.velocity.y) > 0) {
                            setBallTravel(clamp(ballTravel + info.delta.y, 0, slotArmLength*2));
                        }
                    }}
                    dragMomentum={false}
                    dragElastic={0.6}
                >
                </motion.div>
            </div>
            <motion.div 
                id="lever-arm" 
                className="perspective-dramatic -z-10 flex flex-row items-end origin-bottom rounded-b-full slot-arm-metal w-8 h-48 -translate-y-16"
                style={leverStyle}
                variants={leverVariants}
                animate={isDragging ? "dragging" : "idle"}
                transition={{ duration: 0.68, ease: "easeInOut"}}>
                <div className="w-8 h-8 translate-y-[1px] bg-gradient-to-t rounded-b-full from-black to-transparent">
                </div>
                <div className="absolute inset-0 -z-20 rounded-3xl opacity-30"style={{backgroundImage: `url(${metalTexture.src})`}}>
                </div>
            </motion.div>
        </div>
    )

    return htmlBlock;
}

console.log()

function useFrame(arg0: any) {
    throw new Error('Function not implemented.');
}
