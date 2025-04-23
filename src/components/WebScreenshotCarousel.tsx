"use client"

import { Component, Fragment } from "react";
import Image, { StaticImageData } from "next/image"
import { stringify } from "querystring";
import { motion } from "framer-motion";

interface CarouselProps {
    screenshots: any[]
}

export const WebScreenshotCarousel : React.FC<CarouselProps> = ({screenshots}) => {
    return (
        <div className="relative items-center z-10 flex flex-row flex-nowrap p-0 m-0 w-[22rem] md:w-[44rem] [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)]">
            <div className="flex -translate-x-1/4">
                <div className="flex flex-row -translate-x-1/2 justify-center gap-2 pr-2 h-80 animate-horizontal-auto-carousel [animation-duration:40s] md:[animation-duration:60s] hover:[animation-play-state:paused]">
                {[...new Array(2)].fill(0).map((_,idx) => (
                    <Fragment key={idx}>
                        {screenshots.map((img) => (
                            <WebScreenshot
                                key={img.title}
                                img={img}
                                className="[pointer-events:none]"
                            />
                        ))}
                    </Fragment>
                ))}
                </div>
            </div>

        </div>
    )
}

interface ScreenshotProps {
    img: any,
    className: string
}

const WebScreenshot : React.ElementType<ScreenshotProps> = ({img, className}) => {
    return (
        <div className="relative z-0 flex items-start justify-center overflow-clip h-[25rem]">
            <div className="size-64 z-0" >
                <Image
                    className={className}
                    src={img.url}
                    alt='catball gif' />
            </div>
        </div>
    )
}




