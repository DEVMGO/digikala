import Link from 'next/link'
import React from 'react'

const Navigation = () => {
    return (
        <div className='w-full min-h-[4.25rem]'>
            <div className='flex items-center gap-5'>
                <Link href="/"></Link>
                <div className='w-full h-11 max-w-[37.5rem] bg-[#f0f0f1] rounded-lg px-4 gap-4'>
                    <input
                        type="text"
                        placeholder="جستجو"
                        className='w-full h-full bg-transparent text-xs text-[#81858b] outline-none border-none'
                    />
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Navigation