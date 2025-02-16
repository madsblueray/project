

import Image from "next/image"
import catBallTrailer from "@/assets/cat-ball-trailer-cropped.gif"
import catballAppIcon from "@/assets/catball-app-icon.webp"
import iphoneCatballMainMenu from "@/assets/iphone-catball.webp"
import { twMerge } from "tailwind-merge";
import { ReviewBody, catballReviews } from "@/components/ReviewCollections"
import { Fragment, useState } from "react";
import { oooScreenshots } from "@/components/ooo-oooScreenshotCollections"
import { SectionHeader } from "@/components/SectionHeader";
import { WebScreenshotCarousel } from "@/components/WebScreenshotCarousel";


export const ProjectsSection = () => {
    return (
        <div className="py-6 mb-16">
            <div className="container">
                <div className="flex flex-col items-center">
                    <div className="flex flex-col pb-16 w-[22rem] gap-2">
                        <SectionHeader 
                            title="my projects"
                            description="view the web creations and other miscellaneous projects i've been working on"
                        />
                        <div className="text-center font-sono text-white/40 hover:text-pistachio hover:scale-x-125 md:hover-scale-x-150 transition-all duration-300">
                            (this website is interactive)
                        </div>
                    </div>
                    
                    <div className="flex flex-col items-center w-[22rem] md:w-[44rem] gap-16">
                        <div className="flex flex-col items-center justify-center inset-0 div-2 w-full overflow-clip shadow-lg shadow-reseda-green/20 border-taupe-gray/20 border-2">
                            <div className="mt-2 font-sono font-bold tracking-wider text-title">"catball"</div>
                            <div className="-mt-1 text-subheader text-base font-sono font-semibold tracking-tighter">a mobile game about cats</div>
                            <hr className="w-3/4 border-1 border-taupe-gray border-dashed [mask-image:linear-gradient(to_left,transparent,black,transparent)] my-1"/>
                            <div className="flex flex-col items-center">
                                <div className="text-subheader text-left text-sm font-sono tracking-tight px-4">
                                    <ul className="flex flex-col content-start gap-1">
                                        <li className='inline-flex gap-2 before:[content:"\27A5"] before:text-base'>perfect 5-star rating on the apple app store</li>
                                        <li className='inline-flex gap-2 before:[content:"\27A5"] before:text-base'>four original music tracks with option to change the playback speed</li>
                                        <li className='inline-flex gap-2 before:[content:"\27A5"] before:text-base'>50 unique levels with linear, roguelite progression</li>
                                    </ul>
                                </div>
                                <div className="grid grid-rows-2 grid-cols-2 md:grid-cols-3 gap-2 p-2 -mb-4">
                                    <div className="relative z-0 flex items-center row-span-2 col-span-1 h-80 py-4 overflow-clip border-2 border-taupe-gray/20 rounded-md">
                                        <div className="h-auto w-auto z-0" >
                                            <Image
                                                className="h-[20rem]"
                                                src={catBallTrailer}
                                                alt='catball gif' />
                                        </div>
                                        <div
                                            className="z-100 absolute h-96 bg-center -mt-2 bg-contain md:bg-[85%_auto] -top-8 inset-0 hover:opacity-0"
                                            style={{
                                                backgroundImage: `url(${iphoneCatballMainMenu.src}`
                                            }}>
                                        </div>
                                    </div>
                                    <div className="relative flex flex-row border-2 border-taupe-gray/20 rounded-md col-span-1 md:col-span-2 row-span-2 h-80 w-42">
                                        <div className="inset-0 z-10 overflow-y-clip [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_95%,transparent)]">
                                            <div className="flex flex-col pt-4 gap-4 animate-vertical-auto-carousel md:[animation-duration:50s] hover:[animation-play-state:paused] px-1">
                                            {[...new Array(2)].fill(0).map((_,idx) => (
                                                <Fragment key={idx}>
                                                    {catballReviews.map((review) => (
                                                    <Fragment key={review.author+idx}>
                                                        <ReviewBody reviewTitle={review.reviewTitle} reviewContents={review.reviewContents} author={review.author} />
                                                        <hr className="border-1 border-taupe-gray border-dashed [mask-image:linear-gradient(to_left,transparent,black,transparent)]" />
                                                    </Fragment>
                                                ))}
                                                </Fragment>
                                            ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p hidden>
                            OOO-OOO Project Card
                        </p>
                        <div className="flex flex-col items-center justify-center inset-0 div-2 w-full overflow-clip shadow-lg shadow-reseda-green/20 border-taupe-gray/20 border-2">
                            <div className="mt-2 font-sono font-bold tracking-base text-title">"ooo-ooo.art"</div>
                            <div className="-mt-1 text-subheader text-base font-sono font-semibold tracking-tighter">a web experiment about drawing</div>
                            <hr className="w-3/4 border-1 border-taupe-gray border-dashed [mask-image:linear-gradient(to_left,transparent,black,transparent)] my-1"/>
                            <div className="text-subheader text-left text-sm font-sono tracking-tight px-4">
                                <ul className="flex flex-col content-start gap-1">
                                    <li className='inline-flex gap-2 before:[content:"\27A5"] before:text-base'>CRUD functionality: post, save, delete, edit, etc.</li>
                                    <li className='inline-flex gap-2 before:[content:"\27A5"] before:text-base'>users vote on a pool of daily drawings. highest scorers earn a spot in the hall of fame.</li>
                                    <li className='inline-flex gap-2 before:[content:"\27A5"] before:text-base'>upvoted drawings are saved to a "liked tab", can be viewed anytime.</li>
                                    <li className='inline-flex gap-2 before:[content:"\27A5"] before:text-base'>a proof of concept. domain is live but playerbase is inactive.</li>
                                </ul>
                            </div>
                            <hr className="w-3/4 border-1 border-taupe-gray border-dashed [mask-image:linear-gradient(to_left,transparent,black,transparent)] mt-1"/>
                            
                            <div className="bg-black">
                                
                                <WebScreenshotCarousel 
                                    screenshots={oooScreenshots}
                                />
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
