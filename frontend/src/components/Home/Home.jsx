import React from 'react'
import { TypeAnimation } from 'react-type-animation';
const Home = () => {
  return (
      
    <div className="flex justify-center  w-10/12 mx-auto h-[100vh] items-center  ">
    <div className="flex flex-col gap-2">
      <h1 className="text-sm flex  justify-center lg:justify-start font-bold font-inter">
        <div className='mx-auto'><span className="">🛡️</span>
      <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed out once, initially
    'CTF By Securit',
    1000, // wait 1s before replacing "Mice" with "Hamsters"
    'Crack It',
    1000,
    'Win Prizes',
    1000,
    'Have Fun',
    1000,
  ]}
  wrapper="span"
  speed={50}
  style={{ fontSize: '2em', display: 'inline-block' }}
  repeat={Infinity}
/>
       {" "} <span className="text-xl">🚩</span></div> </h1>
      <p className="mt-2 max-w-[400px] text-center md:text-left">Capture The Flag (CTF) is a cybersecurity 
        competition where participants solve a series
         of challenges ranging from cryptography, web 
         exploitation, reverse engineering, to forensics 
         and more. Each challenge is designed to simulate
          real-world scenarios, allowing you to learn and
           apply various hacking techniques in a controlled 
           and ethical manner.
          </p>
    </div>


    <div className="md:block">
      
 
    </div>
  </div>
  )
}

export default Home