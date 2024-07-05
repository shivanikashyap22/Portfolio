import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { TbBrandJavascript } from "react-icons/tb";
import { SiReact } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import Contact from '../Contact/Contact';

const Intro = () => {
    return (
        <>
            <div className='flex justify-center '>
                <div className='w-6/12 text-center flex flex-col justify-center'>
                    <h2 className='text-5xl font-semibold py-3'>Hello World </h2>
                    <div className='text-4xl font-semibold py-3'>I'm Nikita a Developer from Noida, India</div>
                    <p className='text-xl font-semibold py-6  text-center'>Experienced MERN stack developer passionate about crafting dynamic web solutions.
                        Open to job and freelance opportunities to collaborate and innovate.</p>
                    <div className='flex items-center justify-center'>
                        <button className='flex items-center justify-center gap-1 border-2 border-slate-900 text-lg px-2 py-1 rounded-lg'>Get In Touch <MdArrowOutward className='text-lg ' /></button>
                    </div>

                </div>
            </div>
            <div className=' bg-gray-200 my-10 py-10'>
                <h2 className='text-5xl font-semibold text-center'>Skills and Tools</h2>
                <div className='text-xl font-semibold py-6 text-center'>If you know what you are looking for</div>
                <div className='flex gap-5 text-8xl py-6 justify-center'><TbBrandJavascript /><SiReact /><FaHtml5 /><FaCss3Alt /></div>
            </div>
            <div className='my-10 py-10'>
                <Contact />
            </div>
        </>
    )
}

export default Intro