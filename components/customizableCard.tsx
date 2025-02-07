import React, { ReactNode } from 'react'

interface props{
    className?: string
    children?: ReactNode
    hover?: boolean
}

const CustomCard:React.FC<props> = ({className, children,hover}) => {
  return (
    <div className={`${hover?"hover:bg-white/20":""} cursor-crosshair trans border-[1.5px] light-border relative ${className}`}>
        <div className="absolute -top-1 leading-[0] text-white -left-2.5 text-4xl font-light">+</div>
        <div className="absolute -top-1 leading-[0] text-white -right-[0.7rem] text-4xl font-light">+</div>
        <div className="absolute -bottom-[0] leading-[0] text-white -left-2.5 text-4xl font-light">+</div>
        <div className="absolute -bottom-[0] leading-[0] text-white -right-[0.7rem] text-4xl font-light">+</div>
        {children}
    </div>
  )
}

export default CustomCard