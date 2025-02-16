/* eslint-disable */

import Grain from "@/assets/grain.jpg"
import Water from "@/assets/water.jpg"
import { SectionHeader } from "@/components/SectionHeader"

export const ContactSection = () => {
    return (
        <div className="py-24 relative flex flex-col items-center">
            <div className="absolute inset-0 h-[100%] [mask-image:linear-gradient(to_top,transparent,black_10%,black_70%,transparent)]">
                <div
                    className="absolute -z-30 inset-0 opacity-5"
                    style={{
                        backgroundImage: `url(${Grain.src})`
                    }}>
                </div>
                <div
                    className=" absolute bg-cover -z-30 inset-0 opacity-[1%]"
                    style={{
                        backgroundImage: `url(${Water.src})`
                    }}>
                </div>
            </div>
            <SectionHeader 
                title="let's work"
                description="i'm actively looking for work and new opportunities. reach out however you like, i'm ready when you are!"/>
            <div className="flex flex-col w-full items-center">
                <div className="div-1 flex flex-col items-center justify-center w-[16rem] h-[4rem]">
                    <div className="text-center font-sono text-xl flex flex-row justify-center gap-4 bg-red-800">
                        <div>LinkedIn</div>
                        <div>LinkedIn</div>
                    </div>
                </div>
            </div>
        </div>
    )
}