import wavingMan from "@/assets/sitting-waving-yellow-man.png";
import Image from "next/image"
import Grain from "@/assets/grain.jpg"
import Water from "@/assets/water.jpg"
import metalTexture from "@/assets/metal-texture-2.jpg"
import { twMerge } from "tailwind-merge";
import { Metal } from "next/font/google";


export const HeroSection = () => {
    return (
        <div className="pt-20 pb-10 md:py-52 relative z-0">
            <div className="absolute inset-0 h-[150%] [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
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
            <div className="container">
                <div className="flex flex-col items-center justify-center relative py-6">
                    <div className="relative flex justify-center z-0 w-full origin-bottom md:scale-150">
                        <div className="animate-fade-in-t-1000 w-[22rem] relative z-10 origin-bottom-left">
                            <Image
                            className="scale-[60%] hover:scale-[70%] hover:translate-x-2 origin-bottom-left transition-transform translate-x-4"
                            src={wavingMan} 
                            alt="smiling-yellow-man" />
                        </div>
                        <div 
                            className="-z-10 absolute origin-bottom bottom-0 flex w-full justify-center [mask-image:radial-gradient(ellipse_at_bottom_left,transparent,transparent_30%,gray_60%,gray)]">
                            <div className="animate-rainbow-spin-reveal origin-bottom w-[300px] h-[130px] relative overflow-hidden after:w-[150px] after:h-[150px] after:origin-bottom after:absolute after:rounded-full after:left-1/4 after:top-1/2 after:[box-shadow:0_0_0_7px_#8E838C,0_0_0_13px_#BEC3BC,0_0_0_24px_#6E826C,0_0_0_28px_#9EC26C,0_0_0_30px_#8EB25C,0_0_0_32px_#7EA23C,0_0_0_42px_var(--background),0_0_0_44px_color-mix(in_srgb,var(--background)_90%,#7EA23C_10%),0_0_0_46px_color-mix(in_srgb,var(--background)_95%,#7EA23C_5%),0_0_0_47px_color-mix(in_srgb,var(--background)_98%,#7EA23C_2%)] [mask-image:linear-gradient(to_top,transparent,black_25%)]">
                            </div>
                        </div>
                    </div>
                    <div className="relative flex flex-col gap-1 md:gap-4 bg-div-1 w-[22rem] md:w-[32rem] h-32 md:h-44 rounded-3xl border-2 border-separate border-[#BED38C]/20 animate-fade-in-b-1000">
                        <div 
                            className="z-0 opacity-[3%] absolute inset-0 rounded-3xl bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${metalTexture.src})`
                            }}></div>
                        <div className="z-10 animate-fade-in-t-1000 text-[#9A9A9A] tracking-widest font-semibold ml-8 md:ml-14">
                            <h1 className="font-serif">{"hi there, i'm"}</h1>
                        </div>
                        <div className="z-10 animate-fade-in-b-2000 flex w-full h-10 text-title-xl hover:text-[#CEF3EC] transition-colors justify-center items-center">
                            <h1 className="z-10 font-sono text-[2.7rem] md:text-[3.63rem] tracking-[-0.03em] md:tracking-normal font-bold text-nowrap [transform:scale(1,1.15)] md:mt-2"><span>Madison</span><span className="pl-3 md:pl-6">Holmes</span></h1>
                        </div>
                        <div className="z-10 px-4 md:px-[4rem] animate-fade-in-r-3000 [animation-duration:4.4s] text-[#9A9A9A] text-sm md:text-base font-semibold leading-4 text-center md:-mt-1">
                            <h1 className="font-sans font-light md:[font-weight:400]">{"i'm a web dev with a passion for unique design and fresh ideas. i take inspiration from digital art, fashion, and video games to make cool stuff."}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}