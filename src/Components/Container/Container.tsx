import React from "react"

interface ContainerProps {
    children: React.ReactNode
}

export const Container = ({children}: ContainerProps) => {

    return(
        <div className="flex justify-evenly items-center py-14 flex-wrap max-w-[1440px] mx-auto">
            {children}
        </div>
    )
}