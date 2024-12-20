import React from 'react'
import Image from 'next/image'

const AdsHeader = () => {
    return (
        <div className='w-full h-[3.75rem] bg-gray-200'>
            <Image
                src='/images/layout/baner.jpg'
                width={1540}
                height={60}
                alt='baner-header'
                className='w-full h-full object-cover'
            />
        </div>
    )
}

export default AdsHeader