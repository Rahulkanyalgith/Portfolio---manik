import React from 'react'
import { GrNotes } from "react-icons/gr";
import myPhoto from "../AboutMe/Myphoto2.jpg"
import Resume from '../AboutMe/Resume.pdf'

const About = () => {
    return (
        <div id="About" className='md:pt-[6rem] md:pb-[2rem]  pb-[4rem] pt-[2rem] py-0 about'>
            <h2 className="text-2xl text-center dark:text-white">About Me</h2>
            <span className="block text-sm mb-[3rem] md:mb-[4rem] text-center dark:text-[#bcbac4]">My introduction</span>

            <div className="about_container md:mx-auto sm:grid-cols-[repeat(2,1fr)] max-w-[768px] mx-[1.5rem] grid gap-[1.5rem] md:gap-x-[5rem]">
                <img src={myPhoto} alt='' className='w-[200px] justify-self-center self-center rounded-lg md:w-[350px]'/>

                <div className="about_data">
                    <p className='about_description text-center md:text-start mb-[2rem] dark:text-[#bcbac4]'>
                   I’m a 3rd-year BTech student at Maharaja Surajmal Institute of Technology, Delhi University. I’ve worked on antennas, networking systems, radar, transceivers, SAW filters, and IoT-based embedded projects through internships at Nokia and DRDO. I’m passionate about solving real-world problems with technology, and my academic foundation in electronics is supported by practical experience and published research.
                    </p>

                    <a href={Resume} download={Resume}>
                        <button className='flex justify-center items-center mt-4 bg-p bg-[#8f34ea] hover:bg-[#7a26cf] text-white p-3 rounded-md font-medium w-[120px] gap-2 mx-auto md:mx-0'>
                            Resume
                            <GrNotes />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About
