"use client";
import React, { useState } from 'react'
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiMongodb, SiPostgresql, SiTypescript } from "react-icons/si";
import { FaDocker, FaGitAlt, FaGolang, FaNodeJs, FaPython } from "react-icons/fa6";
import { VscTerminalBash } from 'react-icons/vsc';
import { RiNextjsFill, RiReactjsFill } from 'react-icons/ri';
import { GrMysql } from 'react-icons/gr';
import { DiRedis } from 'react-icons/di';
import { IconType } from 'react-icons';
import CustomCard from './customizableCard';

interface skill {
    name: string
    icons: React.JSX.Element
}

const Skills = () => {
    const skillset: skill[] = [
        {
            name: "Golang",
            icons: <FaGolang />
        },
        {
            name: "Javascript",
            icons: <IoLogoJavascript />
        },
        {
            name: "Typescript",
            icons: <SiTypescript />
        },
        {
            name: "Python",
            icons: <FaPython />
        },
        {
            name: "Bash",
            icons: <VscTerminalBash />
        },
        {
            name: "NodeJS",
            icons: <FaNodeJs />
        },
        {
            name: "ExpressJS",
            icons: <SiExpress />
        },
        {
            name: "ReactJS",
            icons: <RiReactjsFill />
        },
        {
            name: "NextJS",
            icons: <RiNextjsFill />
        },
        {
            name: "MongoDB",
            icons: <SiMongodb />
        },
        {
            name: "MySQL",
            icons: <GrMysql />
        },
        {
            name: "PostgreSQL",
            icons: <SiPostgresql />
        },
        {
            name: "Redis",
            icons: <DiRedis />
        },
        {
            name: "Docker",
            icons: <FaDocker />
        },

        {
            name: "Git",
            icons: <FaGitAlt />
        },

    ]

    const [currentSkill, setCurrentSkill] = useState<skill>(skillset[0])

    return (
        <section className='pb-[5rem] md:pb-[10rem]'>
            <div className='max-w-[1200px] mx-auto w-full'>
                <h3 className='text-3xl my-3 mb-6 font-semibold px-4 '>Skills</h3>
                <div className='flex flex-col md:flex-row gap-6 px-4 items-start'>
                    <div className='flex w-full md:w-[50%] flex-col gap-6'>
                        <CustomCard className='w-full h-[300px] text-[12rem] flex items-center justify-center'>
                            {currentSkill.icons}
                        </CustomCard>
                        <CustomCard className='w-full p-4 text-2xl flex items-center justify-center'>
                            {currentSkill.name}
                        </CustomCard>
                    </div>
                                        
                    <div className='w-full col-span-2 grid grid-cols-5 md:grid-cols-8 grid-row-2 hover:bg-black'>
                        {skillset.map((skill, index) => {
                            return (
                                <div key={index} onMouseEnter={() => setCurrentSkill(skill)} className='h-[100px] hover:bg-white hover:text-black cursor-crosshair w-full flex items-center justify-center text-3xl border-[1px] light-border '>
                                    {skill.icons}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills