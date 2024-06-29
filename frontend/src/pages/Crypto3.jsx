import React from 'react'
import PTH from '../components/Home/Core/Crypto/PTH'
const Crypto3 = () => {
  const tasks=[
    "Compute the private key components dd and nn.",
    "Decrypt the ciphertext using the RSA private key.",
    "Provide the decrypted message as your answer."
  ]
  const Hints=[
    "nn is the product of two primes pp and qq. Find pp and qq.",
    "The private key dd can be found using the modular inverse of ee modulo ϕ(n)ϕ(n), where ϕ(n)=(p−1)(q−1)ϕ(n)=(p−1)(q−1).",
    "Use the private key dd to decrypt the ciphertext."
  ]
  return (
    <div className='text-white overflow-y-auto h-screen'>
        <PTH 
        ps={
            `
            You have intercepted an encrypted message that was encoded using RSA encryption. The public key used to encrypt the message is as follows:

            n=3233n=3233
            e=17e=17

            The encrypted message (ciphertext) is: 2201

            `
            }
        t={tasks}
        h={Hints}
            
            />
        </div>
  )
}

export default Crypto3