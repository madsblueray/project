
interface HeaderProps {
    title: string,
    description: string
}

export const SectionHeader : React.FC<HeaderProps> = ({title, description}) => {
    return (
        <div className="flex flex-col pb-16 w-[22rem] gap-2">
            <div className="text-center text-header font-sono tracking-wide font-bold"><h1>{title}</h1></div>
            <hr className="border-1 border-taupe-gray border-dashed [mask-image:linear-gradient(to_left,transparent,black,transparent)]" />
            <div className="text-center text-subheader font-sono font-light text-olivine"><h1>{description}</h1></div>
        </div>
    )
}