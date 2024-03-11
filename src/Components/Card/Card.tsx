import React from "react"

interface CardProps {
    children: React.ReactNode
}

export const Card = ({children}: CardProps) => {

    return(
        <div className="px-6 py-3 rounded-[25px] shadow-md shadow-blue-900/60">
            {children}
        </div>
    )
}