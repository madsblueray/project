import { twMerge } from "tailwind-merge";

export const SvgIcon = ({ component, color="fill-green-600", className="" } : { component: React.ElementType, color?:string, className?: string }) => {
    const Component = component;
    return <Component className={twMerge("size-12", `${color}`, className)}/>;
}