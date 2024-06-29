import React from 'react'
import TDHF from '../components/Home/Core/Forensics/TDHF'

const Forensics2 = () => {
  return (
    <div className='h-screen overflow-y-auto'>
    <TDHF
    title={"Memory Dump"}
    description={"Our memory just got dumped and generated a file. Can you find flags in it??"}
    hints={["Use Volatility","identify memory profile","list running processes","search for strings"]}
    fileUrl={"https://www.dl.dropboxusercontent.com/scl/fi/armbscety53zj3swynrp4/memory.zip?rlkey=eudtwh7qw42n2rs7rczw6h1om&st=mpz0lsrt&dl=0"}
   
    />

    </div>
  )
}

export default Forensics2