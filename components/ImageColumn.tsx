import React from 'react'
import CustomCard from './customizableCard'
import Marquee from 'react-fast-marquee'

interface props {
    data: any[]
}

const ImageColumn: React.FC<props> = ({ data }) => {
    console.log(data)
    return (
        <div className='grid grid-cols-1 w-full gap-4'>
            {data.map((image, index) => {
                return (
                    <CustomCard key={index} className='flex w-full flex-col'>
                        <div className='bg-white p-2 w-full text-black text-xl'>
                            <Marquee speed={100} >
                                {Array(5).fill(image.name).map((x, i) => <p className='mx-2' key={i}>{x}</p>)}
                            </Marquee>
                        </div>
                        <a href={image.url} className='cursor-crosshair w-full' target='_blank'><img className='object-cover w-full' src={image.url} /></a>
                    </CustomCard>
                )
            })}
        </div>
    )
}

export default ImageColumn