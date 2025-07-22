import React from 'react'
import cpp from '../assests/cpp.png';
import github from '../assests/github.png';
import javascript from '../assests/javascript.png';
import react from '../assests/react.png';
import tailwind from '../assests/tailwind.png';
import html from '../assests/html.png';
import css from '../assests/css.png';
import node from '../assests/node.png';
import graphql from '../assests/graphql.png';

const Skills = () => {
  const skills = [
    {
      id: 1,
      src: cpp,
      title: 'C++',
      style: 'shadow-blue-500',
    },
    {
      id: 2,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500',
    },
    {
      id: 3,
      src: react,
      title: 'React',
      style: 'shadow-blue-600',
    },
    {
      id: 4,
      src: tailwind,
      title: 'Tailwind CSS',
      style: 'shadow-sky-400',
    },
    {
      id: 5,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 6,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500',
    },
     {
      id: 7,
      src: node,
      title: 'Node.js',
      style: 'shadow-green-500',
    },
    {
      id: 8,
      src: graphql,
      title: 'GraphQL',
      style: 'shadow-purple-500',
    },
    {
      id: 9,
      src: github,
      title: 'GitHub',
      style: 'shadow-gray-400',
    },
  ];
  return (

    <div name="skills" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full
         text-white">

          <div>
            <p className='text-4xl font-bold
            border-b-4 border-gray-500 p-2 inline'> Skills</p>
            <p className='py-6'>  These are the technologies I've worked with</p>
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
        {
            skills.map(({ id, src, title, style }) => (
              <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt={title} className='w-20 mx-auto' />
                <p className='mt-4'>{title}</p>
              </div>
            ))
        }

        </div>
    </div>
    </div>
  );
};

export default Skills;