import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [nav, setNav] = React.useState(false);

  const links = [
    { id: 1, name: 'home' },
    { id: 2, name: 'about' },
    { id: 3, name: 'projects' },
    { id: 4, name: 'skills' },
    { id: 5, name: 'experience' },
    { id: 6, name: 'contact' },

  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black/70 backdrop-blur fixed top-0 inset-x-0 z-50">
      <div>
        <h1 className="text-5xl font-bold font-signature ml-2">Ananya</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex">
        {links.map(({ id, name }) => (
          <Link key={id} to={name} smooth duration={500}>
            <li className="px-4 cursor-pointer hover:text-gray-400 capitalize">
              {name}
            </li>
          </Link>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer px-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

    
      <ul
        className={`flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 ${
          nav ? 'block' : 'hidden'
        }`}
      >
        {links.map(({ id, name }) => (
          <Link
            key={id}
            to={name}
            smooth
            duration={500}
            onClick={() => setNav(false)}
          >
            <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
              {name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
