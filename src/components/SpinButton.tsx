import { animate, motion } from "framer-motion"
import metalTexture from "@/assets/metal-texture-2.jpg"

interface SpinButtonProps {
    setPlayState: Function;
}

export const SpinButton : React.FC<SpinButtonProps> = ({ setPlayState }) => {

    const onButtonClick = () => {
        animate([
            ["button", 
                {filter: 'drop-shadow(0 0.33rem 1rem whtiesmoke)',
                height: '1.0rem',
                transform: 'translateY(0.48rem)'}, {duration: 0.133}],
            ["button", 
                {filter: 'drop-shadow(0 0 0.53rem whitesmoke)'}, {duration: 0.2}],
            ["button", 
                {filter: 'drop-shadow(0 0 0 red)',
                height: '2.0rem',
                transform: 'translateY(0.5rem)'}, {duration: 0.4, ease: "easeInOut"}],
        ]); 
        setPlayState(true);
    }

    return (
        <div className="flex flex-col w-32 mt-3 h-16 md:hidden">
            <div className="z-0 flex items-center justify-center relative w-full h-full rounded-full bg-gradient-to-l from-[silver]/80 via-[silver]/65 to-[silver]/80 border-gray-800 border-2 inset-0 ">
            <div className="absolute inset-0 -z-10 rounded-full opacity-20 bg-cover bg-center"style={{backgroundImage: `url(${metalTexture.src})`}}>
            </div>
            <motion.button
                onClick = {onButtonClick}
                style = {{
                    height: "2rem",
                    transform: "translateY(0.5rem)"
                }}
                className="flex z-1 origin-bottom relative w-[90%] inset-0 rounded-b-3xl p-0 slot-button-sides shadow-red-400">
                <div className="flex z-1 -translate-y-6 relative h-[3rem] w-full inset-0 rounded-full p-4 slot-button items-center justify-center">
                <div className="flex relative inset-0 rounded-full">
                    <h1 className="-rotate-0 tracking-tight text-2xl font-bold text-gray-200/90 drop-shadow-[0_1.2px_1.2px_black]">SPIN</h1>
                </div>
                </div>
            </motion.button>
            </div>
        </div>
    )
}