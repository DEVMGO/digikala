import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ShoppingCard = () => {
    return (
        <div
            className='absolute top-full left-0 min-w-[25rem] bg-white flex items-start justify-start flex-col 
            rounded-lg overflow-hidden shadow-[0_1px_1px_rgba(0,0,0,.14),0_4px_8px_rgba(0,0,0,.3)]'
        >
            <div className='py-2 px-3'>
                <p className='text-xs text-[#62666d]'>2 کالا</p>
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
                            <div className='w-[6.5rem] h-11 flex items-center justify-between border border-gray-300 rounded-lg'>
                                <button className=''></button>
                                <div className='flex items-center justify-center flex-col gap-1'>
                                    <p className='text-sm text-[#ef4056]'>۲</p>
                                </div>
                                <button className=''></button>
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
                        <div className='flex items-start justify-center flex-col gap-4'>
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