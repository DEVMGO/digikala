import React, { FC } from 'react'
import Link from 'next/link'
import { BsPhone } from "react-icons/bs";
import { LiaLaptopSolid, LiaPencilRulerSolid } from "react-icons/lia";

interface Props {
    isHovered: boolean
    handleMouseEnter: () => void
    handleMouseLeave: () => void
}
const MegaMenuList: FC<Props> = ({ isHovered, handleMouseEnter, handleMouseLeave }) => {
    return (
        <div
            className={`fixed top-full right-0 w-full h-[calc(100dvh_-_10.5rem)] bg-black/40 px-4
            ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}  transition-all duration-300 ease-in-out`}
        >
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className='w-fit h-[80%] flex items-start justify-start bg-white rounded-bl-lg'
            >
                <div className='min-w-52 h-full bg-[#f5f5f5] flex items-start justify-start flex-col overflow-auto'>
                    <Link
                        href={`/`}
                        className='w-full flex items-center justify-start py-4 px-2 text-xs text-[#3f4064] 
                        font-semibold gap-2 hover:bg-white transition-all duration-200 ease-linear'
                    >
                        <BsPhone className='text-xl text-[#3f4064]' />
                        موبایل
                    </Link>
                    <Link
                        href={`/`}
                        className='w-full flex items-center justify-start py-4 px-2 text-xs text-[#3f4064] 
                        font-semibold gap-2 hover:bg-white transition-all duration-200 ease-linear'
                    >
                        <LiaLaptopSolid className='text-xl text-[#3f4064]' />
                        کالای دیجیتال
                    </Link>
                    <Link
                        href={`/`}
                        className='w-full flex items-center justify-start py-4 px-2 text-xs text-[#3f4064] 
                        font-semibold gap-2 hover:bg-white transition-all duration-200 ease-linear'
                    >
                        <LiaPencilRulerSolid className='text-xl text-[#3f4064]' />
                        کتاب، لوازم تحریر و هنر
                    </Link>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default MegaMenuList