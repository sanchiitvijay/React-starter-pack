import React from 'react'
import PTH from '../components/Home/Core/Crypto/PTH'

const Crypto4 = () => {
  const tasks=[
    "Compute Alice's public value \( A \) and Bob's public value \( B \).",
    "Compute the shared secret key using Alice's private key and Bob's public value.",
    "Compute the shared secret key using Bob's private key and Alice's public value.",
    "Verify that both computed shared secret keys are equal."
  ];
  const hints=[
    "Alice's public value \( A \) is computed as \( A = g^a \mod p \).",
    "Bob's public value \( B \) is computed as \( B = g^b \mod p \).",
    "The shared secret key can be computed as \( s = B^a \mod p \) for Alice, and \( s = A^b \mod p \) for Bob.",
  ]
  return (
    <div className='overflow-y-auto h-screen'>
      <PTH
      ps={`
        Alice and Bob are using the Diffie-Hellman key exchange to securely share a secret key. The public parameters are:

- Prime number \( p = 23 \)
- Base \( g = 5 \)

Alice chooses a private key \( a = 6 \) and Bob chooses a private key \( b = 15 \).
        `}

        t={tasks}
        h={hints}
      
      />      
    </div>
  )
}

export default Crypto4