'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { IoSearch } from "react-icons/io5";
import { TbLogin } from "react-icons/tb";
import ShoppingCardIcon from '@/app/_assets/icons/shopping-card-icon';
import ButtonGroup from './_components/button-group';
import { useGetHeaderData } from './_hooks/use-header-data';
// import ShoppingCard from './shopping-card';
const ShoppingCard = dynamic(() => import("./_components/shopping-card"), {
    ssr: false,
});

const Navigation = () => {
    const isLogin = true;
    const { data } = useGetHeaderData();
    console.log("data => ", data)
    return (
        <div className='w-full min-h-[4.25rem] bg-white flex items-center justify-between py-3 md:px-4 z-20'>
            <div className='w-full flex items-center gap-5'>
                <Link href="/">
                    <Image
                        width={195}
                        height={30}
                        alt='دیجیکالا'
                        src="/digikala-logo.svg"
                    />
                </Link>
                <div className='w-full h-11 max-w-[37.5rem] bg-[#f0f0f1] rounded-lg px-4 gap-4 flex items-center'>
                    <div className=''>
                        <IoSearch className='text-[#81858b] text-2xl' />
                    </div>
                    <input
                        type="text"
                        placeholder="جستجو"
                        className='w-full h-full bg-transparent text-xs text-[#424242] outline-none border-none'
                    />
                </div>
            </div>

            <div className='min-w-max flex items-center gap-3'>
                {isLogin ?
                    <ButtonGroup />
                    :
                    <button
                        className='h-10 border border-[#e0e0e2] text-xs text-[#0c0c0c] 
                        font-bold py-2 px-4 gap-2 rounded-lg flex items-center'
                    >
                        <TbLogin className='text-[#424750] text-2xl' />
                        ورود | ثبت‌نام
                    </button>
                }
                <hr className='h-6 border-l border-[#e0e0e2]' />
                <div className='relative max-h-11 px-2'>
                    <Link href="/" className='max-h-11 flex items-center justify-center'>
                        <ShoppingCardIcon />
                    </Link>
                    <ShoppingCard />
                </div>
            </div>
        </div>
    )
}

export default Navigation