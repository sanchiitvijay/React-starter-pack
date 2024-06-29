import React from 'react'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
const CH = ({part="",code="",h=[]}) => {

  const customStyle={
    ...vscDarkPlus,
    height:100,
    overflowY:"auto",
  }
  return (
    <div className=' w-11/12  flex mx-auto mt-10  
    flex-col gap-4 text-white'>
        <h1 className='text-center font-bold text-4xl'>Reverse Engineering {part}</h1>
         
         <div className='font-semibold'>Analyse the Code</div>
         {/* Wrapper For the code  */}
         
         <div className=''>
            <SyntaxHighlighter  language='cpp' style={customStyle}>{code}</SyntaxHighlighter>
         </div>


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

    </div>
  )
}

export default CH