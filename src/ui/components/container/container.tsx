import clsx from "clsx";

interface Props {
    children: React.ReactNode;
    className?: string;
}

export const Containers= ({children,className}:Props) => {
    return(
        <div className={clsx(className,
        "w-full max-w-7xl px-5 space-y-5 mx-auto lg:px-10"
        
        )}>
               {children}
        </div>

    )
}