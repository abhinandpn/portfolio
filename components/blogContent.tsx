import { fetchBlogs } from '@/helpers/fetchBlogs'
import React from 'react'
import CustomCard from './customizableCard'
import { section } from 'framer-motion/client'
import Marquee from 'react-fast-marquee'

interface blog {
    node: Node
}

interface Node {
    id: string
    title: string
    slug: string
    views: number
}

interface props {
    data: blog[]
}


const BlogContent: React.FC<props> = ({ data }) => {
    return (
        <section className='py-[5rem]'>
            <h3 className='px-4  text-3xl max-w-[1200px] w-full mx-auto my-6'>
     
                <Marquee>
                <div className='w-full flex gap-3'>
                {Array(10).fill(" LATEST 10 ").map((x)=> x)}
                </div>
                </Marquee>
                
            </h3>
            <div className='grid max-w-[1200px] w-full mx-auto grid-cols-1 gap-6 p-4 '>
                {data.map((d, i) => {
                    return (
                        <a key = {i} href={`https://techbyakash.hashnode.dev/${d.node.slug}`} target="_blank">
                            <CustomCard hover className='flex flex-col items-start'>

                                <div className='text-lg text-black bg-white p-1 font-medium'>{d.node.views} views</div>
                                <div className='p-4 text-xl'>
                                    {d.node.title}
                                </div>

                            </CustomCard>
                        </a>
                    )
                })}
            </div>
        </section>
    )
}

export default BlogContent