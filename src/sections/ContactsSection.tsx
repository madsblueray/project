/* eslint-disable */

import Grain from "@/assets/grain.jpg"
import Water from "@/assets/water.jpg"
import { SectionHeader } from "@/components/SectionHeader"
import { SvgIcon } from "@/components/SvgIcon"
import { default as LinkedIn } from "@/assets/linkedin.svg"
import { default as Phone } from "@/assets/phone.svg"
import { default as Email } from "@/assets/email.svg"
import { ContactMethodDiv } from "@/components/ContactMethodDiv"

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
            <div className="flex flex-col md:flex-row gap-8 w-full justify-center items-center">
                <ContactMethodDiv title={"LinkedIn"} link="https://www.linkedin.com/in/madison-holmes-579ba9178/" svgComponent={LinkedIn} svgColor="stroke-slate-300/80"/>
                <ContactMethodDiv title={"Phone"} altTitle={"805-712-6797"} link="tel:+18057126797" svgComponent={Phone} svgColor="fill-slate-300/80"/>
                <ContactMethodDiv title={"Email"} link="mailto:madsblueray@gmail.com" svgComponent={Email} svgColor="stroke-slate-300/80"/>
            </div>
        </div>
    )
}