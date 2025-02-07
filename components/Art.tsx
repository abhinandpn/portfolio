"use client"
import React, { useEffect, useState } from 'react'
import data from '@/art.json'
import ImageColumn from './ImageColumn'

const Art = () => {
    const [arr1, setArr1] = useState<{ name: string; url: string; }[]>([])
    const [arr2, setArr2] = useState<{ name: string; url: string; }[]>([])
    const [arr3, setArr3] = useState<{ name: string; url: string; }[]>([])
    const minL = Math.ceil(data.length / 3)
    useEffect(() => {
        const newData = [...data]; // Create a copy of the data array to avoid mutating the original array
        const minL = Math.ceil(newData.length / 3);
        setArr1(newData.splice(0, minL));
        setArr2(newData.splice(0, minL));
        setArr3(newData);
    }, []);
    return (
        <section className='py-[5rem] px-2 lg:px-0'>
            <h3 className='px-4  text-3xl max-w-[1200px] w-full mx-auto my-6'>
                Art

            </h3>
            <div className='grid grid-cols-1 md:grid-cols-3 max-w-[1200px] w-full mx-auto items-start gap-6 p-4  '>
                <ImageColumn data={arr1} />
                <ImageColumn data={arr2} />
                <ImageColumn data={arr3} />
            </div>
        </section>
    )
}

export default Art