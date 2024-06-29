import React from 'react'

const TDHF = ({title,description,hints,fileUrl}) => {

  return (
    <div className='w-11/12  flex mx-auto mt-10  
    flex-col gap-4 text-white '>
        <h1 className='text-4xl font-bold text-center'>{title}</h1>
        <p className='text-center text-lg'>{description}</p>


      

        <a href={fileUrl} download  >
        <button  className='font-sans max-w-[180px] rounded-md px-6 py-3 text-black bg-yellow-400 hover:bg-yellow-300'>Download File</button>
        </a>

    {
        hints.length===1?
        (
            <div className='my-4'>
            <button onClick={()=>{
                document.getElementById(`para`).classList.toggle("hidden")
            }}  className='bg-yellow-400 rounded-md 
            text-black px-6 py-3 font-sans hover:bg-yellow-300
            '>Show Hint</button>
            <p id={"para"} className="hidden mt-2">{hints[0]}</p>
            </div>
        )
        :(
        <p>
            <ul>
            {hints.map((hint,index)=>(
            <li className="my-4">
                <button onClick={()=>{
                    document.getElementById(`para${index+1}`).classList.toggle("hidden")
                }} id={"button"+(index+1)} className='bg-yellow-400 rounded-md 
                text-black px-6 py-3 font-sans hover:bg-yellow-300
                '>Show Hint{" "}{index+1}</button>
                <p id={"para"+(index+1)} className="hidden mt-2">{hint}</p>
  
            </li>
        ))}
        </ul>
        </p>
    
    )
    }

   

    </div>
  )
}

export default TDHF;