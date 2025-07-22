import React from 'react'
import Boom from '../assests/boom.png';
import {MdKeyboardDoubleArrowRight} from 'react-icons/md';
import { Link } from 'react-scroll';
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white">
<div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">   

    <div className="flex flex-col justify-center h-full">   
        <h2 className='text-4xl sm:text-7xl font-bold text-white'> 
            I am Ananya,a Developer
        </h2>
        <p className='text-gray-500 py-4 max-w-md'>
            I am a Full Stack Developer with a passion for creating dynamic and responsive web applications. 
            I have experience in both front-end and back-end development, and I am always eager to learn new technologies.
        </p>
        <div>  
                        <Link to="about" smooth duration={500} offset={-80}>
            <button className='group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md  bg-gradient-to-r from-[#f3d1dc] to-[#c9a0a0] text-[#3b2f2f]cursor-pointer'>
                AboutMe!
                <span className='group-hover:rotate-90 duration-300'>
                <MdKeyboardDoubleArrowRight  size={25} className='ml-2'/>
                </span>
            </button>
             </Link>
        </div>
    </div>
    <div> 
        <img src={Boom} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full" />
    </div>
</div>
    </div>
  )
}

export default Home