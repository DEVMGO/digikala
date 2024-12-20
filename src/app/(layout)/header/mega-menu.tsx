'use client'
import React, { FC, useEffect, useState } from 'react'
import Link from 'next/link';
import { GrLocation } from "react-icons/gr";
import { MdMenu } from "react-icons/md";
import { RiShoppingBasketFill } from "react-icons/ri";
import OfferCardIcon from '@/app/_assets/icons/offer-card-icon';
import AmazingIcon from '@/app/_assets/icons/amazing-icon';
import FireIcon from '@/app/_assets/icons/fire-icon';
import GiftCardIcon from '@/app/_assets/icons/gift-card-icon';
import MegaMenuList from './mega-menu-list';

interface Props {
    isHovered: boolean
    handleMouseEnter: () => void
    handleMouseLeave: () => void
}

const MegaMenu: FC<Props> = ({ isHovered, handleMouseEnter, handleMouseLeave }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 160) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`w-full flex items-center justify-between px-4 transition-all duration-200 ease-linear
            transform ${isVisible ? 'h-10 translate-y-0' : 'h-0 -translate-y-10'} z-10 relative`}
        >
            <MegaMenuList {...{ isHovered, handleMouseEnter, handleMouseLeave }} />
            <div className='h-full flex items-center'>
                <button
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className='h-full flex items-center text-sm text-[#3f4064] font-bold'
                >
                    <MdMenu className='text-xl text-[#424750] ml-1' />
                    دسته‌بندی کالاها
                </button>
                <div className='flex items-center border-x border-[#e0e0e2] mr-5'>
                    <Link
                        href="/"
                        className='px-3 text-xs text-[#62666d] flex items-center gap-1'
                    >
                        <AmazingIcon />
                        شگفت‌انگیزها
                    </Link>
                    <Link
                        href="/"
                        className='px-3 text-xs text-[#62666d] flex items-center gap-1'
                    >
                        <RiShoppingBasketFill className='text-base text-[#a1a3a8]' />
                        سوپرمارکت
                    </Link>
                    <Link
                        href="/"
                        className='px-3 text-xs text-[#62666d] flex items-center gap-1'
                    >
                        <GiftCardIcon />
                        کارت هدیه
                    </Link>
                    <Link
                        href="/"
                        className='px-3 text-xs text-[#62666d] flex items-center gap-1'
                    >
                        <FireIcon />
                        پرفروش‌ترین‌ها
                    </Link>
                    <Link
                        href="/"
                        className='px-3 text-xs text-[#62666d] hidden xl:flex items-center gap-1'
                    >
                        <OfferCardIcon />
                        تخفیف‌ها و پیشنهادها
                    </Link>
                </div>
                <div className='flex items-center'>
                    <Link
                        href="/"
                        className='px-3 text-xs text-[#62666d] flex items-center gap-1'
                    >
                        سوالی دارید؟
                    </Link>
                    <Link
                        href="/"
                        className='px-3 text-xs text-[#62666d] flex items-center gap-1'
                    >
                        در دیجی‌کالا بفروشید!
                    </Link>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <GrLocation className='text-base text-[424750]' />
                <p className='text-xs text-[#3f4064]'>ارسال به تهران، تهران</p>
            </div>
        </div>
    )
}

export default MegaMenu