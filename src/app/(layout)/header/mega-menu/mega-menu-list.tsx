import React, { FC, useState } from 'react'
import Link from 'next/link'
// import { BsPhone } from "react-icons/bs";
// import { LiaLaptopSolid, LiaPencilRulerSolid } from "react-icons/lia";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MockMegaMenu } from '@/app/_data/mega-menu-data';
import { CategoryType } from '../types';

interface Props {
    isHovered: boolean
    handleMouseEnter: () => void
    handleMouseLeave: () => void
}
const MegaMenuList: FC<Props> = ({ isHovered, handleMouseEnter, handleMouseLeave }) => {
    const [activeId, setActiveId] = useState<number>(0);
    const activeList: CategoryType | undefined = MockMegaMenu.find(item => item.id === activeId);

    const handleHoverMenu = (id: number) => {
        setActiveId(id)
    }

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
                    {MockMegaMenu.map((item, index) => (
                        <Link
                            onMouseEnter={() => handleHoverMenu(item.id)}
                            key={index}
                            href={`/`}
                            className={`w-full flex items-center justify-start py-4 px-2 text-xs font-semibold gap-2 
                            ${activeId !== item.id ? 'text-[#3f4064]' : 'text-[#ef394e] bg-white'} transition-all duration-200 ease-linear`}
                        >
                            {item.icon}
                            {item.title}
                        </Link>
                    ))}
                </div>

                <div className='w-fit max-w-5xl h-full bg-white p-5 pb-0 rounded-b-lg overflow-auto'>
                    <div className='w-full flex items-start justify-start flex-col gap-5'>
                        <Link
                            href={'/'}
                            className='flex items-center text-xs text-[#008eb2]'
                        >
                            همه محصولات {activeList?.title ?? ''}
                            <MdOutlineKeyboardArrowLeft className='size-4' />
                        </Link>
                        <div className='flex items-start justify-start flex-wrap gap-10'>
                            {activeList?.data?.map((category, index) => (
                                <ul
                                    key={`${index}_menu_${category.id}`}
                                    className='min-w-52 flex items-start justify-start flex-col'
                                >
                                    <Link
                                        href={`/`}
                                        className='text-sm text-[#0c0c0c] mb-2 py-1 flex items-center'
                                    >
                                        <span className='w-0.5 h-3 bg-[#ef4056] ml-2' />
                                        {category.title}
                                        <MdOutlineKeyboardArrowLeft className='size-3' />
                                    </Link>
                                    {category?.list?.map((item, idx) => (
                                        <Link
                                            key={`${idx}_list_${item.id}`}
                                            href={`/`}
                                            className='text-xs text-[#81858b] font-medium hover:text-[#ef4056] py-1 transition-all duration-100 ease-linear'
                                        >
                                            {item.title}
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