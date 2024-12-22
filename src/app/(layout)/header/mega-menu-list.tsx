import React, { FC } from 'react'
import Link from 'next/link'
import { BsPhone } from "react-icons/bs";
import { LiaLaptopSolid, LiaPencilRulerSolid } from "react-icons/lia";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MockMegaMenu } from '@/app/_data/mega-menu-data';

interface Props {
    isHovered: boolean
    handleMouseEnter: () => void
    handleMouseLeave: () => void
}
const MegaMenuList: FC<Props> = ({ isHovered, handleMouseEnter, handleMouseLeave }) => {
    return (
        <div
            className={`fixed top-full right-0 w-full h-[calc(100dvh_-_10.5rem)] px-4 z-50
            ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}  transition-all duration-300 ease-in-out`}
        >
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className='w-fit h-[80%] flex items-stretch justify-start bg-white rounded-b-lg'
            >
                <div className='min-w-52 h-full bg-[#f5f5f5] flex items-start justify-start flex-col rounded-b-lg overflow-auto'>
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

                <div className='w-fit h-full bg-white p-5 pb-0 rounded-b-lg overflow-auto'>
                    <div className='w-full flex items-start justify-start flex-col gap-5'>
                        <Link
                            href={'/'}
                            className='flex items-center text-xs text-[#008eb2]'
                        >
                            همه محصولات خودرو و موتورسیکلت
                            <MdOutlineKeyboardArrowLeft className='size-4' />
                        </Link>
                        <div className='flex items-start justify-start flex-col flex-wrap gap-10'>
                            {MockMegaMenu.map((category, index) => (
                                <ul
                                    key={`${index}_menu_${category.id}`}
                                    className='flex items-start justify-start flex-col'
                                >
                                    <Link
                                        href={`/`}
                                        className='text-sm text-[#0c0c0c] mb-2 py-1 flex items-center'
                                    >
                                        {category.title}
                                        <MdOutlineKeyboardArrowLeft className='size-3' />
                                    </Link>
                                    {category.data.map((item, idx) => (
                                        <Link
                                            key={`${idx}_list_${item.id}`}
                                            href={`/`}
                                            className='text-xs text-[#81858b] py-1'
                                        >
                                        </Link>
                                    ))}
                                </ul>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MegaMenuList