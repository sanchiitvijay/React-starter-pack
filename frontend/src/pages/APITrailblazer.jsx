import React from 'react'

const APITrailblazer = () => {
  const response = {
    "name": "seurit-ctf",
    "route": "securit-api",
    "api_description": "The 'securit-api' serves as the primary interface for accessing various security-related resources and services in the 'seurit-ctf' application. This API provides endpoints that allow users to interact with different aspects of the security system, including but not limited to user authentication, data encryption, threat analysis, and vulnerability assessment. The 'securit-api' is built with flexibility in mind, allowing for easy updates and expansions as new security challenges and requirements emerge. Overall, this API plays a crucial role in maintaining the integrity, confidentiality, and availability of the security services provided by 'seurit-ctf'.",
    "route_description": "The routes within this API are designed to be robust and secure, ensuring that all data transmissions are protected against potential threats. Each route corresponds to a specific functionality within the system, enabling modular and scalable integration. For instance, user-related routes handle all operations pertaining to user management, such as registration, login, and profile updates, while data-centric routes focus on tasks like encryption and decryption processes, secure data storage, and retrieval mechanisms.",
    "hint": "do u know what route actually is",
    "data": [
      { "link": "https://securit.pages.dev/", "description": "Homepage of the Securit website." },
      { "link": "https://securit.pages.dev/about", "description": "Information about the Securit project." },
      { "link": "https://securit.pages.dev/preamble", "description": "Introduction to the Securit project." },
      { "link": "https://securit.pages.dev/archives/pre", "description": "Archived content related to Securit." },
      { "link": "https://securit.pages.dev/join", "description": "Details on how to join the Securit project." }
    ]
  };

  return (
    <div>
        <div>Do you know what is the format of response from server side?</div>
        <pre>
          {JSON.parse(response, null, 2)}
        </pre>
    </div>
  )
}

export default APITrailblazer
