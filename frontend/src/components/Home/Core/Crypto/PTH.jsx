import React, { useRef } from 'react'

const PTH = ({ps,t,h,children=""}) => {
  
  return (

    <div  className='w-11/12  flex mx-auto mt-10  flex-col gap-4 text-white'>
        <h1 className='text-4xl font-bold text-center'>Problem Statement</h1>
        <p className='text-lg'>
            {ps}
        </p>

        <h2 className='text-2xl font-bold'>Tasks:</h2>


        <p>
            <ul>
            {
                t.map((task,index)=>(
                    <li>{index+1}{" "}{task}</li>
                ))
            }

            </ul>
        </p>
        
        
        <h2 className='text-2xl font-bold'>Hints:</h2>


        <p>
            <ul>

            {
                
                h.map((hint,index)=>(
                    <li className="my-4">
                        <button onClick={()=>{
                            document.getElementById(`para${index+1}`).classList.toggle("hidden")
                        }} id={"button"+(index+1)} className='bg-yellow-400 rounded-md 
                        text-black px-6 py-3 font-sans hover:bg-yellow-300
                        '>Show Hint{" "}{index+1}</button>
                        <p id={"para"+(index+1)} className="hidden mt-2">{hint}</p>
          
                    </li>
                ))

            }

            </ul>
        </p>
        

        <div>
            {children}
        </div>

    </div>
  )
}

export default PTH