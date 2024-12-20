'use client'
import React from 'react'
import Link from 'next/link';
import NotificationIcon from '@/app/_assets/icons/notification-icon'
import { FaRegUser } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import useOutSideClick from '@/hooks/useOutSideClick';
import ClubPointIcon from '@/app/_assets/icons/club-point-icon';
import { PiStarFourBold } from "react-icons/pi";
import { AiOutlineShopping } from "react-icons/ai";
import { GrMapLocation } from "react-icons/gr";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaRegComment } from "react-icons/fa6";
import { BiLogOut } from "react-icons/bi";

const ButtonGroup = () => {
    const { ref, openCombo, setOpenCombo } = useOutSideClick();

    return (
        <div className='flex items-center gap-3'>
            <Link href="/" className='p-2'>
                <NotificationIcon />
            </Link>
            <div ref={ref} className='relative'>
                <button
                    onClick={() => setOpenCombo((prev) => !prev)}
                    className={`p-2.5 flex items-center ${openCombo && 'bg-[#ef394e18]'} rounded-lg gap-1`}>
                    <FaRegUser className='text-xl text-[#282828]' />
                    <IoMdArrowDropdown className='text-base text-[#424750]' />
                </button>
                {openCombo && (
                    <div
                        className='absolute top-full left-0 w-64 bg-white rounded-lg pb-2 overflow-hidden
                        shadow-[0_1px_1px_rgba(0,0,0,.14),0_4px_8px_rgba(0,0,0,.3)] flex items-start justify-start flex-col'
                    >
                        <div className='w-full'>
                            <Link
                                href="/"
                                className='w-full flex items-center justify-between border-b border-gray-200 py-4 px-4
                                transition-all duration-200 ease-linear hover:bg-[#f0f0f1]'
                            >
                                <h5 className='text-base text-[#3f4064] font-medium'>محمد گل محمدی</h5>
                                <span>
                                    <IoIosArrowBack className='text-base text-[#424242]' />
                                </span>
                            </Link>
                            <ul className='w-full flex items-center justify-start flex-col'>
                                <li
                                    className='w-full flex items-center justify-start hover:bg-[#f0f0f1] cursor-pointer
                                    transition-all duration-200 ease-linear px-4'
                                >
                                    <div className='min-w-max pl-5'>
                                        <ClubPointIcon className='size-6' />
                                    </div>
                                    <div className='w-full flex items-center justify-between border-b border-gray-200 py-3'>
                                        <h5 className='text-base text-[#3f4064] font-medium'>دیجی‌کلاب</h5>
                                        <p className='text-[11px] text-[#a1a3a8] font-bold'>
                                            <span className='text-xs text-[#3f4064] font-bold'>11</span> امتیاز</p>
                                    </div>
                                </li>
                                <li
                                    className='w-full flex items-center justify-start hover:bg-[#f0f0f1] cursor-pointer
                                    transition-all duration-200 ease-linear px-4'
                                >
                                    <div className='min-w-max pl-5'>
                                        <PiStarFourBold className='size-5 text-[#c0c2c5]' />
                                    </div>
                                    <div className='w-full flex items-center justify-between border-b border-gray-200 py-3'>
                                        <h5 className='text-base text-[#c0c2c5] font-bold'>پلاس</h5>
                                        <p className='flex items-center gap-1 text-xs text-[#b12ba4] font-medium'>
                                            خرید اشتراک
                                            <IoIosArrowBack className='text-xs text-[#b12ba4]' />
                                        </p>
                                    </div>
                                </li>
                                <li
                                    className='w-full flex items-center justify-start hover:bg-[#f0f0f1] cursor-pointer
                                    transition-all duration-200 ease-linear px-4'
                                >
                                    <div className='min-w-max pl-5'>
                                        <AiOutlineShopping className='size-6 text-[#3f4064]' />
                                    </div>
                                    <div className='w-full flex items-center justify-between border-b border-gray-200 py-3'>
                                        <h5 className='text-base text-[#3f4064] font-bold'>سفارش‌ها</h5>
                                    </div>
                                </li>
                                <li
                                    className='w-full flex items-center justify-start hover:bg-[#f0f0f1] cursor-pointer
                                    transition-all duration-200 ease-linear px-4'
                                >
                                    <div className='min-w-max pl-5'>
                                        <GrMapLocation className='size-5 text-[#3f4064]' />
                                    </div>
                                    <div className='w-full flex items-center justify-between border-b border-gray-200 py-3'>
                                        <h5 className='text-base text-[#3f4064] font-bold'>آدرس‌ها</h5>
                                    </div>
                                </li>
                                <li
                                    className='w-full flex items-center justify-start hover:bg-[#f0f0f1] cursor-pointer
                                    transition-all duration-200 ease-linear px-4'
                                >
                                    <div className='min-w-max pl-5'>
                                        <MdOutlineFavoriteBorder className='size-6 text-[#3f4064]' />
                                    </div>
                                    <div className='w-full flex items-center justify-between border-b border-gray-200 py-3'>
                                        <h5 className='text-base text-[#3f4064] font-bold'>لیست‌ها</h5>
                                    </div>
                                </li>
                                <li
                                    className='w-full flex items-center justify-start hover:bg-[#f0f0f1] cursor-pointer
                                    transition-all duration-200 ease-linear px-4'
                                >
                                    <div className='min-w-max pl-5'>
                                        <FaRegComment className='size-5 text-[#3f4064]' />
                                    </div>
                                    <div className='w-full flex items-center justify-between border-b border-gray-200 py-3'>
                                        <h5 className='text-base text-[#3f4064] font-bold'>دیدگاه‌ها و پرسش‌ها</h5>
                                    </div>
                                </li>
                                <li
                                    className='w-full flex items-center justify-start hover:bg-[#f0f0f1] cursor-pointer
                                    transition-all duration-200 ease-linear px-4'
                                >
                                    <div className='min-w-max pl-5'>
                                        <BiLogOut className='size-6 text-[#3f4064] rotate-180' />
                                    </div>
                                    <div className='w-full flex items-center justify-between py-3'>
                                        <h5 className='text-base text-[#3f4064] font-bold'>خروج از حساب کاربری</h5>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ButtonGroup