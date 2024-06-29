import React from 'react'
import TDHF from '../components/Home/Core/Forensics/TDHF'

const Forensics1 = () => {
  
  return (
    <div className='h-screen overflow-y-auto'>
        <TDHF
        title={"Corrupted Image"}
        description={" We received an image that seems to be corrupted. Can you fix the image and reveal the hidden message?"}
        hints={["Heard of Magic Number???."]}
        fileUrl={"https://www.dl.dropboxusercontent.com/scl/fi/110jm766gw9sxbxcuz4j5/image.zip?rlkey=std7bxz0j4tosunbqnkckzbyo&st=to9w2i61&dl=0"}
        
        />
    </div>
  )
}

export default Forensics1