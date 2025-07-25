import React from 'react'
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedin} from 'react-icons/fa';
import{HiMail} from 'react-icons/hi';

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: "https://github.com/Ananyajainhdjsj",
        },
        {
            id: 2,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: "https://www.linkedin.com/in/ananya-jain1234/",
        },
        {
            id: 3,
            child: (
                <>
                    Email <HiMail size={30} />
                </>
            ),
            href: "mailto:ankikianya2@gmail.com",
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: './ananyaresume.pdf',
            style: 'rounded-tr-md',
            download: true,
        },

    ];
  return (
    <div className='flex flex-col top-[35%] left-0 fixed  z-40'>
        <ul>
            {links.map(({ id, child, href, style, download }) => (
                <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] duration-300 hover:bg-gray-300 rounded-md ${style}`}>
                    <a href={href} className='flex justify-between items-center w-full text-black' download={download} target="_blank" rel="noreferrer">
                        {child}
                    </a>
                </li>
            ))}
            
        </ul>

    </div>
  );
};

export default SocialLinks