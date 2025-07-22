import React from 'react'
import card from '../assests/portfolio/card.png';
import game from '../assests/portfolio/game.png';
import machinelearning from '../assests/portfolio/machinelearning.png';

const Portfolio = () => {
const projects = [
  {
    id: 1,
    src: card,
    href:'https://github.com/Ananyajainhdjsj/Greetings-Card',
  },
  {
    id: 2,
    src: game,
    href: ' https://github.com/Ananyajainhdjsj/Tic-TacToe',
  },
  {
    id: 3,
    src: machinelearning,
    href: 'https://github.com/Ananyajainhdjsj/Dropout-Students-Prediction-project',
  },
  
]
  return (
    <div name="projects" className="w-full md:h-screen bg-gradient-to-b from-black to-gray-800
     text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className='pb-8'> 
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'> 
            Projects
            </p>
          <p className='py-6'>Here are a few projects I've worked on:</p>
        </div>
      
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
  {
          projects.map(({ id, src , href }) => (




 <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={src} alt="" 
            className='rounded-md duration-200 hover:scale-105'/>
            <div className='flex items-center justify-center'>
              <button onClick={() => window.open(href, "_blank")}> Code </button>
            </div>
          </div>

          ))
        }


         
        </div>
      </div>
    </div>

  )
}

export default Portfolio