import { Url } from "next/dist/shared/lib/router/router"
import { SvgIcon } from "./SvgIcon"
import { URL } from "url"
import { twMerge } from "tailwind-merge"

interface contactDivProps {
    title: string,
    altTitle?: string
    link: string
    svgComponent : any,
    svgColor? : string,
    svgClassName? : string
}

export const ContactMethodDiv : React.FC<contactDivProps> = ({title, link, svgComponent, svgColor, svgClassName, altTitle}) => {
    return (
        <div className={twMerge("group relative z-0 hover:scale-x-110 hover:border-sky-500 transition-all div-1 flex flex-col items-center justify-center w-[16rem] h-[4rem] after:inset-0 after:-z-10 after:absolute after:rounded-3xl after:[backgroundImage:url('../assets/arrow-up-right.svg')] after:opacity-0 after:hover:opacity-30 after:transition-all after:animate-bg-scroll-to-tr", altTitle === undefined ? "" : "group")}>
            <a 
                href={link}
                className="w-full px-12 items-center justify-between text-center font-sono text-xl flex flex-row gap-4">
                <div><SvgIcon 
                    component={svgComponent}
                    color={svgColor}
                    className={svgClassName}/></div>
                <div className="w-full group-hover:hidden">{title}</div>
                <div className="w-full hidden group-hover:block">{altTitle ?? title}</div>
            </a>
        </div>
    )
}