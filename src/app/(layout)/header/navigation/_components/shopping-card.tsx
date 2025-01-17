'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { RiAddFill } from "react-icons/ri";
// import { HiMiniMinus } from "react-icons/hi2";
import { HiOutlineTrash } from "react-icons/hi2";
import { useCountdownTimer } from '@/app/_utils/useCountdownTimer';
import { Cart } from '../_api/types';

interface Props {
    data?: Cart
}
const ShoppingCard = (props: Props) => {
    const isValid = true;
    const startDate = new Date(
        new Date().toLocaleDateString("en-US", { timeZone: "Asia/Tehran" }) + " 16:51"
    ).getTime();

    const { timer, countdownTimer } = useCountdownTimer(isValid, 60, startDate);

    // if (!props.data) return <p>Loading...</p>
    return (
        <div
            className='absolute top-full left-0 min-w-[25rem] bg-white flex items-start justify-start flex-col 
            rounded-lg overflow-hidden shadow-[0_1px_1px_rgba(0,0,0,.14),0_4px_8px_rgba(0,0,0,.3)]'
        >
            <div className='py-2 px-3'>
                <p className='text-xs text-[#62666d]'>{props?.data?.itemsCount} کالا</p>
            </div>
            <div className='w-full flex items-start justify-start flex-col px-3 pb-4'>
                <div className='w-full flex items-start justify-start border-b border-gray-200 gap-5 py-3'>
                    <div className='w-full min-w-[7.5rem] max-w-[7.5rem] flex items-start justify-between flex-col gap-4'>
                        <div className='size-[7.15rem] min-w-[7.15rem]'>
                            <Image
                                width={114}
                                height={114}
                                alt='محافظ ولتاژ'
                                className='w-full h-full object-contain'
                                src={`/images/layout/bargh.jpg`}
                            />
                        </div>
                        <div className='w-full flex items-center justify-end flex-col gap-3'>
                            <div className=''>
                                <p className='text-sm text-[#ef4056]'>{(isValid && timer > 0) && countdownTimer(timer)}</p>
                            </div>
                            <div className='w-[6.5rem] h-11 flex items-center justify-between border border-gray-300 rounded-lg px-2'>
                                <button className=''>
                                    <RiAddFill className='text-lg text-[#ef4056]' />
                                </button>
                                <div className='flex items-center justify-center flex-col'>
                                    <p className='text-sm text-[#ef4056]'>۲</p>
                                    <p className='text-xs text-[#858a93c0] font-semibold'>حداکثر</p>
                                </div>
                                <button className=''>
                                    {/* <HiMiniMinus className='text-lg text-[#ef4056]' /> */}
                                    <HiOutlineTrash className='text-lg text-[#ef4056]' />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex items-start justify-between flex-col gap-4'>
                        <div className='w-full flex items-start justify-start flex-col gap-4'>
                            <h3 className='text-base text-[#23254e] font-extrabold'>
                                مبدل برق هادرون مدل A10-1
                            </h3>
                            <div className='flex gap-2'>
                                <p className='size-5 bg-white border border-gray-200 rounded-full' />
                                <p className='text-xs text-[#62666d] truncate'>سفید</p>
                            </div>
                            <div className='flex gap-2'>
                                <p className='size-5 bg-white border border-gray-200 rounded-full' />
                                <p className='text-xs text-[#62666d] truncate'>ارسال دیجی‌کالا</p>
                            </div>
                            <div className='flex gap-2'>
                                <p className='size-5 bg-white border border-gray-200 rounded-full' />
                                <p className='text-xs text-[#62666d] truncate'>ارسال امروز (فعلا در شهر تهران و کرج)</p>
                            </div>
                        </div>
                        <div className='flex items-start justify-center flex-col gap-2'>
                            <div className='flex items-center gap-1'>
                                <p className='text-xs text-[#ef4056] font-bold'>۲۵۵,۵۰۰</p>
                                <p className='text-[10px] text-[#ef4056] font-bold'>تومان</p>
                                <p className='text-[10px] text-[#ef4056] font-bold'>تخفیف</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <p className='text-xl text-[#23254e] font-bold'>۹۹,۲۵۵,۵۰۰</p>
                                <p className='text-[10px] text-[#23254e] font-bold'>تومان</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full flex items-center justify-between py-4 px-3 border-t border-gray-200'>
                <div className='flex items-start justify-between flex-col gap-1'>
                    <p className='text-xs text-[#81858b]'>مبلغ قابل پرداخت</p>
                    <div className='flex items-center gap-1'>
                        <p className='text-xl text-[#23254e] font-bold'>۹۹,۲۵۵,۵۰۰</p>
                        <p className='text-[10px] text-[#23254e] font-bold'>تومان</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <Link
                        href={`/`}
                        className='h-12 bg-[#ef4056] flex items-center text-sm text-white font-semibold px-4 rounded-lg'
                    >ثبت سفارش</Link>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCard