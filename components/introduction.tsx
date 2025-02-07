import React from 'react'
import CustomCard from './customizableCard'

const Introduction = () => {
    return (
        <section className='py-[5rem] pt-[1rem] md:pt-[5rem] relative'>
            <div className='max-w-[1200px] w-full mx-auto my-5 text-3xl px-4  font-semibold m'>Intro</div>
            <div className='grid grid-cols-1 grid-rows-2 md:grid-cols-3 md:grid-rows-1 max-w-[1200px] w-full px-4  md:gap-6 items-center place-items-center mx-auto'>
                <CustomCard className='col-span-1 w-full h-full'>
                    <img src="/check.webp" className='w-full h-full  object-cover  grayscale hover:grayscale-0 trans cursor-pointer' alt="avatar" />
                </CustomCard>
                <div className='col-span-2 grid grid-cols-1 mt-8 md:mt-0 grid-rows-3 gap-4 h-full'>
                    <CustomCard className='w-full flex items-center justify-center p-6'>
                    Tech Enthusiast & Web Developer | Winner of Multiple Hackathons | Ex SDE Intern @CloudSEK, @CFT Labs and @Hackdev Technologies
                    </CustomCard>
                    <CustomCard className='w-full p-6 row-span-2 flex flex-col justify-center items-start'>
                        <div>
                            <p>Send an email {"->"} <a target='_blank' href="mailto:akashsharma2002@gmail.com" className='dark:text-white text-black font-semibold'>akashsharma2002@gmail.com</a></p>
                            <p>DM on X {"->"} <a target='_blank' href="https://x.com/heyyakash" className='dark:text-white text-black font-semibold'>@heyyakash</a></p>
                            <p>Connect on LinkedIn {"->"} <a target='_blank' href="https://www.linkedin.com/in/akash-sharma-a3536519a/" className='dark:text-white text-black font-semibold'>Akash Sharma</a></p>
                            <p>Follow on GitHub {"->"} <a target='_blank' href="https://github.com/heyyakash" className='dark:text-white text-black font-semibold'>@heyyakash</a></p>
                        </div>
                        <CustomCard className='bg-black my-3 inline-flex items-center gap-2 text-white/70 text-sm p-2 px-3 rounded-lg'>
                            <span className='bg-green-500 rounded-full h-2 w-2 animate-pulse'></span>
                            Available for work
                        </CustomCard>
                    </CustomCard>
                </div>
            </div>

        </section>
    )
}

export default Introduction