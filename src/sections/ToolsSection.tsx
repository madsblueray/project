import { SectionHeader } from "@/components/SectionHeader"
import React from "react";
import { SvgIcon } from "@/components/SvgIcon";

import matte1 from "@/assets/matte_1.jpg"
import matte2 from "@/assets/matte_2.jpg"
import paper1 from "@/assets/paper_1.jpg"
import leather1 from "@/assets/leather_1.jpg"
import leather2 from "@/assets/leather_2.jpg"
import wood1 from "@/assets/wood-1.jpg"
import brick1 from "@/assets/brick-1.jpg"

import {default as JavascriptIcon } from "@/assets/square-js.svg" ;
import {default as TypescriptIcon } from "@/assets/typescript.svg" ;
import {default as HtmlIcon } from "@/assets/html5.svg";
import {default as CssIcon } from "@/assets/css3.svg";
import {default as GithubIcon } from "@/assets/github.svg";
import {default as PythonIcon } from "@/assets/python.svg"
import {default as ReactIcon } from "@/assets/react.svg";
import {default as DjangoIcon } from "@/assets/django.svg";
import {default as UnityIcon } from "@/assets/unity.svg";
import {default as LinuxIcon } from "@/assets/linux.svg";
import {default as NextIcon } from "@/assets/next-js.svg"

export const ToolsSection = () => {
    return (
        <div className="py-6 mt-20 md:mt-28">
            <div className="container">
                <div className="flex flex-col items-center mb-10 md:mt-20">
                    <div className="flex flex-col md:pb-2 w-[22rem] gap-2">
                        <SectionHeader
                            title="my tools"
                            description="check out the technologies i frequently use to get the job done"
                        />
                    </div>
                    <div className="relative flex flex-col gap-1 rounded-3xl items-center w-[22rem] h-[22rem] md:scale-[125%] -mt-16 md:-mt-20">
                        <div 
                            className="absolute -z-10 w-full h-full top-10 md:top-20 left-0 opacity-20 bg-contain bg-orange-200 bg-blend-luminosity scale-150 [mask-image:radial-gradient(black,transparent_70%)]"
                            style={{
                                backgroundImage: `url(${brick1.src})`
                            }}>
                        </div>
                        <div className="flex flex-row items-end justify-evenly w-full h-full gap-x-[0.06rem] bg-gradient-to-b from-transparent from-50% via-black/30 via-80% to-black/80">
                            
                            <div className="relative flex flex-col items-center h-48 w-14 bg-blue-300 book">
                                <div 
                                    className="absolute inset-0 w-full h-full top-0 left-0 z-0 opacity-10 bg-auto"
                                    style={{
                                        backgroundImage: `url(${matte2.src})`
                                    }}
                                >
                                </div>
                                <div className="scale-50">
                                    <SvgIcon component={ReactIcon} color="fill-blue-700"/>
                                </div>
                                <div className="-mt-2 w-48 font-serif font-base text-sm tracking-wider rotate-90 translate-y-24 text-blue-900">
                                    React 4 dummiez!
                                </div>
                            </div>
                            <div className="relative flex flex-col items-center h-56 w-8 bg-green-700 book -rotate-[2deg] ml-[0.3rem] mr-[0.1rem]">
                                <div 
                                    className="absolute inset-0 w-full h-full top-0 left-0 z-0 opacity-10 bg-cover"
                                    style={{
                                        backgroundImage: `url(${paper1.src})`
                                    }}
                                >
                                </div>
                                <div className="mt-3 scale-150 rotate-90">
                                    <SvgIcon 
                                        component={DjangoIcon} color="fill-black"
                                        className="size-10"/>
                                </div>
                                <div className="-mt-1 w-56 font-sono font-semibold text-sm tracking-wide rotate-90 translate-y-[7rem] text-black">
                                    : a deep dive ...
                                </div>
                            </div>
                            <div className="relative flex flex-col items-center justify-between h-52 rotate-[0.25deg] w-8 bg-gray-800 book">
                                <div 
                                    className="absolute inset-0 w-full h-full top-0 left-0 z-0 opacity-10 bg-cover"
                                    style={{
                                        backgroundImage: `url(${matte2.src})`
                                    }}
                                >
                                </div>
                                <div className="mt-2">
                                    <SvgIcon 
                                        component={UnityIcon}
                                        color="fill-gray-400"
                                        className="size-6"
                                    />
                                </div>
                                <div className="w-52 font-sans font-bold text-sm rotate-90 translate-y-[5rem] text-gray-400">
                                    UNITY HANDBOOK
                                </div>
                                <div className="mt-20 mb-2">
                                <SvgIcon 
                                        component={UnityIcon}
                                        color="fill-gray-400"
                                        className="size-6"
                                    />
                                </div>
                            </div>
                            <div className="relative flex flex-col items-center justify-between h-40 w-14 bg-yellow-900 book">
                                <div 
                                    className="absolute inset-0 w-full h-full top-0 left-0 z-0 opacity-10 bg-cover"
                                    style={{
                                        backgroundImage: `url(${leather1.src})`
                                    }}
                                >
                                </div>
                                <div className="mt-2 -mb-4">
                                    <SvgIcon 
                                        component={CssIcon}
                                        color="fill-gray-300"
                                        className="size-[32px]"
                                    />
                                </div>
                                <div className="w-40 font-serif font-bold text-sm rotate-90 translate-y-20 text-gray-300">
                                    <h1 className="[transform:scale(1,1.5)]">THE CSS BIBLE</h1>
                                </div>
                                <div className="mt-20 mb-2">
                                </div>
                            </div>
                            <div className="relative flex flex-col items-center h-60 w-8 bg-red-700 book rotate-2 mr-[0.4rem] ml-[0.025rem]">
                                <div 
                                    className="absolute inset-0 w-full h-full top-0 left-0 z-0 opacity-10 bg-auto"
                                    style={{
                                        backgroundImage: `url(${matte1.src})`
                                    }}
                                >
                                </div>
                                <div className="mt-2 -mb-4">
                                    <SvgIcon 
                                        component={HtmlIcon}
                                        color="fill-slate-400"
                                        className="size-[32px]"
                                    />
                                </div>
                                <div className="mt-1 w-60 font-sono font-semibold text-sm rotate-90 translate-y-24 text-slate-200 text-center">
                                    <h1 className="">The <span className="text-orange-200">HTML</span> Cookbook</h1>
                                </div>
                                <div className="mt-20 mb-2">
                                </div>
                            </div>
                            <div className="relative flex flex-col items-center h-56 w-10 bg-gray-950 book">
                                <div 
                                    className="absolute inset-0 w-full h-full top-0 left-0 z-0 opacity-10 bg-auto"
                                    style={{
                                        backgroundImage: `url(${matte1.src})`
                                    }}
                                >
                                </div>
                                <div className="mt-2 -mb-4">
                                    <SvgIcon 
                                        component={JavascriptIcon}
                                        color="fill-yellow-400"
                                        className="size-[32px]"
                                    />
                                </div>
                                <div className="mt-3 w-40 font-sono tracking-widest font-semibold text-sm rotate-90 translate-y-20 text-slate-200 text-center">
                                    <h1 className="">javascript!</h1>
                                </div>
                                <div className="mt-20 mb-2">
                                </div>
                            </div>
                            <div className="relative flex flex-col items-center h-56 w-10 bg-blue-900 book">
                                <div 
                                    className="absolute inset-0 w-full h-full top-0 left-0 z-0 opacity-10 bg-auto"
                                    style={{
                                        backgroundImage: `url(${matte1.src})`
                                    }}
                                >
                                </div>
                                <div className="mt-2 -mb-4">
                                    <SvgIcon 
                                        component={TypescriptIcon}
                                        color="fill-transparent"
                                        className="size-[31px]"
                                    />
                                </div>
                                <div className="mt-3 w-56 font-sono tracking-widest font-semibold text-sm rotate-90 translate-y-20 text-slate-200 text-center">
                                    <h1 className="">typescript!</h1>
                                </div>
                                <div className="mt-20 mb-2">
                                </div>
                            </div>
                            <div className="relative flex flex-col items-center h-44 w-8 bg-gray-400 book">
                                <div 
                                    className="absolute inset-0 w-full h-full top-0 left-0 z-0 opacity-5 bg-cover"
                                    style={{
                                        backgroundImage: `url(${leather2.src})`
                                    }}
                                >
                                </div>
                                <div className="mt-2 -mb-4">
                                    <SvgIcon 
                                        component={GithubIcon}
                                        color="fill-gray-900"
                                        className="size-[27px]"
                                    />
                                </div>
                                <div className="-mt-2 w-56 font-sans tracking-base font-semibold text-sm rotate-90 translate-y-20 text-slate-300 text-center">
                                    <h1 className="">how to git a hub</h1>
                                </div>
                                <div className="mt-20 mb-2">
                                </div>
                            </div>
                        </div>
                        <div className="relative z-[5] -mt-2 w-[110%] h-12 rounded-md overflow-clip bg-gray-900">
                            <div 
                                className="z-0 absolute inset-0 top-0 left-0 w-full h-full rounded-md opacity-10"
                                style={{
                                    backgroundImage: `url(${wood1.src})`
                                }}>
                                
                            </div>
                        </div>
                        <div className="flex flex-row justify-evenly gap-[4.8rem] w-[190%] h-12 -mt-28">
                            <div className="rotate-90 relative -z-10 -mt-2 w-[25%] h-10 rounded-md bg-gradient-to-b from-gray-950 from-40% to-gray-900">
                                <div
                                    className="z-0 absolute inset-0 top-0 left-0 w-full h-full rounded-md opacity-10"
                                    style={{
                                        backgroundImage: `url(${wood1.src})`
                                    }}>
                                </div>
                            </div>
                            <div className="-z-10 rotate-90 relative -mt-2 w-[25%] h-10 rounded-md bg-gradient-to-t from-gray-950 from-40% to-gray-900">
                                <div
                                    className="z-0 absolute inset-0 top-0 left-0 w-full h-full rounded-md opacity-10"
                                    style={{
                                        backgroundImage: `url(${wood1.src})`
                                    }}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}