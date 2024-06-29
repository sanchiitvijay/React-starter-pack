import React from 'react'
import PTH from '../components/Home/Core/Crypto/PTH'

const Crypto5 = () => {
  const tasks=[
    "Decrypt the message using the Atbash cipher.",
    " Provide the decrypted message as your answer"
  ]

  const hints=[
    "The Atbash cipher reverses the alphabet: 'A' <-> 'Z', 'B' <-> 'Y', etc.",
    " To decrypt, simply apply the same substitution rules as used for encryption."
  ]
  return (
    <div className='overflow-y-auto h-screen'>
      <PTH
      ps={`You have intercepted a secret message that has been encrypted using the Atbash cipher. The encrypted message is:   HVXFIRG

The Atbash cipher is a substitution cipher where each letter of the alphabet is mapped to its reverse. For example, 'A' is substituted with 'Z', 'B' with 'Y', and so on.
`}
      t={tasks}
      h={hints}
      
      />


    </div>
  )
}

export default Crypto5