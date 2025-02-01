'use client'
import React, { useState } from 'react'
import AdsHeader from './ads-header'
import Navigation from './navigation/navigation'
import MegaMenu from './mega-menu/mega-menu'

const Header = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        document.body.style.overflow = 'hidden';
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        document.body.style.overflow = '';
    };


    return (
        <header
            className={`sticky top-0 right-0 w-full flex items-center justify-start flex-col
            shadow-[0_1px_0_rgba(0,0,0,.14),0_2px_0_rgba(0,0,0,.05)] bg-white z-20`}
        // shadow-[0_1px_0_rgba(0,0,0,.14),0_2px_0_rgba(0,0,0,.05)] bg-white ${isHovered ? 'pr-2' : 'pr-0'}`}
        >
            <AdsHeader />
            <div
                className={`fixed top-[10.5rem] left-0 w-full h-screen bg-black/40 -z-[1] 
                ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            />
            <div className='w-full max-w-[1680px] flex items-start justify-center flex-col z-10'>
                <Navigation />
                <MegaMenu {...{ isHovered, handleMouseEnter, handleMouseLeave }} />
            </div>
        </header>
    )
}

export default Header