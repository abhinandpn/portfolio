
"use client"
import React, { useState } from 'react'
import data from '@/projects.json'
import CustomCard from './customizableCard'
import { h3 } from 'framer-motion/client'
import Marquee from "react-fast-marquee";
import { FaExternalLinkAlt } from 'react-icons/fa'
interface project {
    name: string
    thumbnail?: string
    description: string
    github: string
    link?: string
    stack:string[]
}

const Projects = () => {
    const [currentProject, setCurrentProject] = useState<project>(data[0])

    return (
        <section className='pb-[5rem] md:pb-[10rem]'>
            <div className='max-w-[1200px] mx-auto w-full'>
                <Marquee speed={140} >
                <div className=" flex text-3xl font-semibold my-6 gap-4">
                {Array(10).fill("PROJECTS ").map((text,index)=> (
                    <h3
                        key = {index}
                        className={`${index===0? "pl-4":""}`}
                    >
                        {text}
                    </h3>
                ))}
               </div>
               </Marquee>
                <div className='flex flex-col-reverse md:flex-row-reverse gap-6 px-4 md:px-auto items-start'>
                    <div id = "preview" className='flex w-full md:w-[50%] flex-col gap-6'>
                    <CustomCard className='w-full p-4 text-xl flex items-center justify-center'>
                            {currentProject.name}
                        </CustomCard>
                        <CustomCard className='w-full h-[300px] text-[12rem] flex items-center justify-center'>
                            {currentProject.thumbnail ? (<img src = {currentProject.thumbnail} alt = "preview" /> ): (<p className='text-xl'>NO PREVIEW</p>)}
                        </CustomCard>
                        <CustomCard hover className='p-4 w-full text-center'>{currentProject.description}</CustomCard>
                        <div className="flex gap-6">
                            {currentProject.link ? (<CustomCard hover className='p-4 w-full cursor-pointer'><a href = {currentProject.link} className='flex items-center gap-2 justify-center' target='_blank'>LINK <FaExternalLinkAlt /></a></CustomCard>):(<></>)}
                            <CustomCard hover className='p-4 w-full cursor-pointer'><a href = {currentProject.github} className='flex items-center gap-2 justify-center' target='_blank'>GITHUB <FaExternalLinkAlt /></a></CustomCard>
                        </div>
                        <div className='flex gap-4 flex-wrap'>
                        {currentProject.stack.map((s,i)=><div className='p-2 border-[1.5px] bg-white text-black rounded-lg' key = {i}>{s}</div>)}
                        </div>
                    </div>
                                        
                    <CustomCard className='w-full col-span-2 flex flex-col hover:bg-black'>
                        {data.map((Project, index) => {
                            return (
                                <a href = "#preview" key={index} onMouseEnter={() => setCurrentProject(Project)} className='grid hover:bg-white/20 cursor-crosshair w-full   text-3xl border-[1px] light-border '>
                                    <div  className='bg-white w-[100px] text-black flex items-center justify-center'>{index + 1}</div>
                                    <div className='p-4'>
                                    <p className='text-xl font-medium'>{Project.name}</p>
                                    <p className='text-xl text-gray-400'>{Project.description}</p>
                                    </div>
                                </a>
                            )
                        })}
                    </CustomCard>
                </div>
            </div>
        </section>
    )
}

export default Projects