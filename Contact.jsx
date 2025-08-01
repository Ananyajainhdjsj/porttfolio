import React from 'react'

const Contact = () => {
  return (
<div id="contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>If you have any questions or inquiries, feel free to reach out!</p>
            </div>
            <div>
                <form action="https://getform.io/f/bejlxrka" className= " flex flex-col w-full md:w-1/2"
                method="POST">
                    <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" required  
                    className='p-2
                     bg-transparent border-2 rounded-md text-white focus:outline-none' />
                    <input type="email" name="email" placeholder="Your Email" required className='p-2
                     bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <textarea name="message" 
                    rows="10"
                    placeholder="Your Message" required className='p-2
                     bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                    <button className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-2 
                    rounded-md' type="submit">Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact