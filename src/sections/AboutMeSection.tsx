/* eslint-disable */

import Image from "next/image"

import { SectionHeader } from "@/components/SectionHeader"
import gradCap from "@/assets/grad-cap.png"
import hobbyCap from "@/assets/weekend-hat.png"
import calPolyShield from "@/assets/cal-poly-shield.png"
import { SvgIcon } from "@/components/SvgIcon"

import jiuJitsu from "@/assets/wrestling.svg"
import coffee from "@/assets/coffee.svg"
import cat from "@/assets/cat.svg"
import guitar from "@/assets/guitar.svg"
import surfing from "@/assets/surfing.svg"
import gaming from "@/assets/gaming.svg"


export const AboutMeSection : React.ElementType = () => {
    return (
        <div className="container">
            <div className="flex flex-col items-center justify-self-center mt-40 md:mt-72 mb-20">
                <SectionHeader 
                    title="about me"
                    description="enough show and tell. you've made it this far, now meet the man behind the code!"/>
                <div className="mt-6 md:md-10 flex flex-col items-center justify-center md:flex-row w-full gap-20">
                    <div className="relative flex flex-col items-center p-6 div-1 w-[22rem] h-[24rem]">
                        <div className="absolute top-0 right-0 size-40 z-10 translate-x-1/2 -translate-y-1/2">
                            <div className="origin-center -rotate-12 md:scale-125 md:rotate-0 -translate-x-[25%] md:-translate-x-[20%] -translate-y-[11%] md:-translate-y-[8%] hover:scale-[110%] md:hover:scale-[140%] hover:-rotate-[6deg] md:hover:rotate-[6deg] transition-all">
                                <Image
                                    src={gradCap}
                                    alt="grad-cap"/>
                            </div>
                        </div>
                        <div className="div-1 -mt-6 -ml-6 p-4 pt-2 pb-2 font-sans w-50% self-start text-left font-semibold tracking-base text-title border-t-transparent border-l-transparent">my education</div>
                        <div className="mt-2 flex flex-row justify-between w-full">
                            <div className="-mr-2 flex flex-col items-center justify-center px-2">
                                <div className="size-32 bg-gray-200 rounded-full flex items-center bg-center bg-cover hover:rotate-6 hover:scale-[125%] transition-all" style={{backgroundImage: `url(${calPolyShield.src})`}}>
                                </div>
                            </div>
                            <div className="flex flex-col text-center">
                                <div className="w-[120%] self-end text-right mt-1 text-subheader text-xl text-nowrap font-sono font-semibold tracking-tighter">Cal Poly SLO</div>
                                <div className="mt-1 w-full text-subheader text-sm font-sans font-semibold tracking-tighter">B.S. Liberal Arts and<br />Engineering Studies</div>
                                <div className="mt-2 w-full text-subheader text-sm font-sono font-semibold tracking-tighter">w/ subjects:</div>
                                <div className="mt-2 w-full text-subheader text-sm font-sans font-semibold tracking-tighter">Software Engineering</div>
                                <div className="w-full text-subheader text-sm font-sans font-semibold tracking-tighter"><span className="font-sono pr-1">&</span> Music Production</div>
                            </div>
                        </div>
                        <div className="text-center flex flex-col">
                            <hr className="border-1 mt-2 border-taupe-gray border-dashed [mask-image:linear-gradient(to_left,transparent,black,transparent)]" />
                            <h1 className="my-2">coursework includes:</h1>
                            <h1>Systems programming, OOP, discrete mathematics, dynamic programming, data structures, data science, applied multivariate statistics
                            </h1>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center p-6 div-1 w-[22rem] h-[24rem]">
                        <div className="absolute top-0 right-0 size-40 z-10 translate-x-1/2 -translate-y-1/2">
                            <div className="origin-center md:scale-[110%] -translate-x-[25%] md:-translate-x-[20%] -translate-y-[1%] md:translate-y-0 rotate-12 md:rotate-[15deg] hover:scale-[115%] md:hover:scale-[125%] hover:rotate-[15deg] md:hover:rotate-[20deg] md:hover:translate-y-1 transition-all">
                                <Image
                                    src={hobbyCap}
                                    alt="grad-cap"/>
                            </div>
                        </div>
                        <div className="div-1 -mt-6 -ml-6 p-4 pt-2 pb-2 font-sans w-50% self-start text-left font-semibold tracking-base text-title border-t-transparent border-l-transparent">my hobbies</div>
                        <div className="mt-2 flex flex-col items-center w-full">
                            <div className="flex flex-col items-start justify-center px-2">
                                <div className="flex flex-row gap-4 items-center">
                                    <SvgIcon className="-rotate-3 hover:bg-gradient-radial hover:from-pistachio/30 hover:from-20% hover:via-slate-500 hover:to-transparent hover:to-60% hover:rotate-3 scale-[90%] hover:scale-[110%] transition-all" color="fill-black" component={cat}/>
                                    <h1 className="font-sans w-32 text-left hover:scale-[125%] transition-all origin-left">{"chillin' w/ my cat"}</h1>
                                </div>
                                <div className="flex flex-row gap-4 items-center">
                                    <SvgIcon className="-rotate-3 hover:bg-gradient-radial hover:from-pistachio/30 hover:from-20% hover:via-slate-500 hover:to-transparent hover:to-60% hover:rotate-3 scale-[90%] hover:scale-[110%] transition-all" color="fill-black" component={coffee}/>
                                    <h1 className="font-sans w-32 text-left hover:scale-[125%] transition-all origin-left">specialty coffee</h1>
                                </div>
                                <div className="flex flex-row gap-4 items-center">
                                    <SvgIcon className="-rotate-3 hover:bg-gradient-radial hover:from-pistachio/30 hover:from-20% hover:via-slate-500 hover:to-transparent hover:to-60% hover:rotate-3 scale-[90%] hover:scale-[110%] transition-all" color="fill-black" component={guitar}/>
                                    <h1 className="font-sans w-32 text-left hover:scale-[125%] transition-all origin-left">songwriting</h1>
                                </div>
                                <div className="flex flex-row gap-4 items-center">
                                    <SvgIcon className="-rotate-3 hover:bg-gradient-radial hover:from-pistachio/30 hover:from-20% hover:via-slate-500 hover:to-transparent hover:to-60% hover:rotate-3 scale-[90%] hover:scale-[110%] transition-all" color="fill-black" component={surfing}/>
                                    <h1 className="font-sans w-32 text-left hover:scale-[125%] transition-all origin-left">surfing</h1>
                                </div>
                                <div className="flex flex-row gap-4 items-center">
                                    <SvgIcon className="-rotate-3 hover:bg-gradient-radial hover:from-pistachio/30 hover:from-20% hover:via-slate-500 hover:to-transparent hover:to-60% hover:rotate-3 scale-[90%] hover:scale-[110%] transition-all" color="fill-black" component={jiuJitsu}/>
                                    <h1 className="font-sans w-32 text-left hover:scale-[125%] transition-all origin-left">jiu jitsu</h1>
                                </div>
                                <div className="flex flex-row gap-4 items-center">
                                    <SvgIcon className="-rotate-3 hover:bg-gradient-radial hover:from-pistachio/30 hover:from-20% hover:via-slate-500 hover:to-transparent hover:to-60% hover:rotate-3 scale-[90%] hover:scale-[110%] transition-all" color="fill-black" component={gaming}/>
                                    <h1 className="font-sans w-32 text-left hover:scale-[125%] transition-all origin-left">gaming</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}