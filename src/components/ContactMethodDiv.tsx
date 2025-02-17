import { Url } from "next/dist/shared/lib/router/router"
import { SvgIcon } from "./SvgIcon"
import { URL } from "url"

interface contactDivProps {
    title: string,
    link: string
    svgComponent : any,
    svgColor? : string,
    svgClassName? : string
}

export const ContactMethodDiv : React.FC<contactDivProps> = ({title, link, svgComponent, svgColor, svgClassName}) => {
    return (
        <div className="group relative z-0 hover:scale-x-110 hover:border-sky-500 transition-all div-1 flex flex-col items-center justify-center w-[16rem] h-[4rem] after:inset-0 after:-z-10 after:absolute after:rounded-3xl after:[backgroundImage:url('../assets/arrow-up-right.svg')] after:opacity-0 after:hover:opacity-30 after:transition-all after:animate-bg-scroll-to-tr">
            <a 
                href={link}
                className="w-full px-12 items-center justify-between text-center font-sono text-xl flex flex-row gap-4">
                <div><SvgIcon 
                    component={svgComponent}
                    color={svgColor}
                    className={svgClassName}/></div>
                <div className="w-full">{title}</div>
            </a>
        </div>
    )
}