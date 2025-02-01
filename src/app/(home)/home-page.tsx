"use client"
import React from 'react'
import FullSlider from './full-slider'
import { useGetWidgetsData } from './_hooks/use-widgets'

const HomePage = () => {
    const { data } = useGetWidgetsData();
    const fullSlider = data?.data.widgets.find(item => item?.type === "full_slider");
    return (
        <main className="w-full max-w flex items-center justify-start flex-col">
            {fullSlider && <FullSlider data={fullSlider} />}
        </main>
    )
}

export default HomePage