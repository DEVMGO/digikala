import React from 'react'
import AdsHeader from './ads-header'
import Navigation from './navigation'

const Header = () => {
    return (
        <header className='w-full flex items-start justify-center flex-col'>
            <AdsHeader />
            <Navigation />
        </header>
    )
}

export default Header