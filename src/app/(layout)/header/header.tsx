'use client'
import React, { useState } from 'react'
import AdsHeader from './ads-header'
import Navigation from './navigation'
import MegaMenu from './mega-menu'

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
            className={`sticky top-0 right-0 w-full flex items-start justify-center flex-col
            shadow-[0_1px_0_rgba(0,0,0,.14),0_2px_0_rgba(0,0,0,.05)] bg-white ${isHovered ? 'pr-2' : 'pr-0'}`}
        >
            <AdsHeader />
            <Navigation />
            <MegaMenu {...{ isHovered, handleMouseEnter, handleMouseLeave }} />
        </header>
    )
}

export default Header