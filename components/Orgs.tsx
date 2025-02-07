import React from 'react'
import data from '@/orgs.json'
import CustomCard from './customizableCard'

interface org {
    start: string
    end: string
    name: string
    work: string[]
    remote: boolean
    position: string
    localtion: string
}

const Orgs = () => {
    return (
        <section className=' relative'>
            <div className='max-w-[1200px] w-full mx-auto md:my-5 text-3xl px-4  my-6 font-semibold'>Orgs</div>
            <div className='grid grid-cols-1 max-w-[1200px] w-full px-4  gap-8 items-center place-items-center mx-auto '>
                {data.map((x, i) => {
                    return (
                        <CustomCard key={i} className='grid grid-cols-1 md:grid-cols-3 w-full min-h-[300px]'>
                            <div className='border-b-[1.5px] md:border-r-[1.5px] min-h-[300px] relative light-border w-full h-full'>
                                <div className='absolute top-0 left-0 flex'>
                                    {x.remote ? (<div className=' bg-white text-black  p-2 font-medium'>Remote</div>) : (<></>)}
                                    <div className='bg-white/20 p-2 text-sm font-medium'>{x.location}</div>
                                </div>

                                <div className='w-full h-full flex flex-col items-center justify-center'><h3 className='text-3xl text-center font-medium'>
                                    {x.name}

                                    <div className='flex gap-3 mt-3 justify-center items-center  flex-wrap'>
                                        <CustomCard className='border-dashed p-2 text-sm'>{x.start}</CustomCard>
                                        {"->"}
                                        <CustomCard className='border-dashed p-2 text-sm'>{x.end}</CustomCard>
                                    </div>
                                </h3></div>
                            </div>
                            <div className='col-span-2 flex relative items-center p-4 '>
                                <div className='absolute bg-white text-black top-0 left-0 p-2 font-medium'>{x.position}</div>
                                <ul className='py-12 md:py-0'>
                                    {x.work.map((w, j) => <li key={j}>{"-> "}{w}</li>)}
                                </ul>
                            </div>
                        </CustomCard>
                    )
                })}
            </div>
        </section>
    )
}

export default Orgs