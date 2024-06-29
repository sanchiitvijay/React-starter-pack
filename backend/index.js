const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

const apis =  {
    "imp-msg":"do you know what api format is???",
    "name": "seurit-ctf",
    "api_description": "The 'securit-api' serves as the primary interface for accessing various security-related resources and services in the 'seurit-ctf' application. This API provides endpoints that allow users to interact with different aspects of the security system, including but not limited to user authentication, data encryption, threat analysis, and vulnerability assessment. The 'securit-api' is built with flexibility in mind, allowing for easy updates and expansions as new security challenges and requirements emerge. Overall, this API plays a crucial role in maintaining the integrity, confidentiality, and availability of the security services provided by 'seurit-ctf'.",
    "route": "securit-api",
    "route_description": "The routes within this API are designed to be robust and secure, ensuring that all data transmissions are protected against potential threats. Each route corresponds to a specific functionality within the system, enabling modular and scalable integration. For instance, user-related routes handle all operations pertaining to user management, such as registration, login, and profile updates, while data-centric routes focus on tasks like encryption and decryption processes, secure data storage, and retrieval mechanisms.",
    "hint": "do u know what route actually is",
    "data": [
      {
        "link": "https://securit.pages.dev/",
        "description": "Homepage of the Securit website."
      },
      {
        "link": "https://securit.pages.dev/about",
        "description": "Information about the Securit project."
      },
      {
        "link": "https://securit.pages.dev/preamble",
        "description": "Introduction to the Securit project."
      },
      {
        "link": "https://securit.pages.dev/archives/pre",
        "description": "Archived content related to Securit."
      },
      {
        "link": "https://securit.pages.dev/join",
        "description": "Details on how to join the Securit project."
      }
    ],
    "essay_title": "The Importance of Cybersecurity and Its Tools",
  "sections": [
    {
      "title": "The Significance of Cybersecurity",
      "content": "In the digital age, where virtually every aspect of life is interconnected through technology, the importance of cybersecurity cannot be overstated. As our dependence on the internet and digital systems grows, so does the potential for cyber threats. Cybersecurity encompasses the practices, technologies, and processes designed to protect networks, devices, programs, and data from attack, damage, or unauthorized access. This essay delves into the significance of cybersecurity and explores various tools that are crucial in safeguarding our digital landscape."
    },
    {
      "title": "Key Cybersecurity Tools",
      "content": "To combat the myriad of cyber threats, a diverse array of cybersecurity tools has been developed. These tools are essential for detecting, preventing, and responding to cyber incidents. Some of the most important cybersecurity tools include:\n\n1. Antivirus and Anti-Malware Software\n2. Firewalls\n3. Intrusion Detection and Prevention Systems (IDPS)\n4. Encryption Tools\n5. Security Information and Event Management (SIEM) Systems\n6. Endpoint Protection Platforms (EPP)\n7. Vulnerability Scanners\n8. Identity and Access Management (IAM) Solutions\n\nThis section briefly describes each tool and its role in cybersecurity."
    },
    {
      "title": "The Future of Cybersecurity",
      "content": "As technology continues to advance, the cybersecurity landscape will inevitably evolve. Emerging technologies such as artificial intelligence (AI) and machine learning (ML) are increasingly being integrated into cybersecurity tools, providing enhanced capabilities for threat detection and response. Additionally, the growing adoption of the Internet of Things (IoT) presents new challenges and opportunities for cybersecurity professionals.\n\nThe future of cybersecurity will likely see a greater emphasis on proactive measures, such as threat hunting and behavior analytics, which aim to identify and mitigate threats before they can cause harm. Collaboration and information sharing among organizations, industries, and governments will also be crucial in developing comprehensive defense strategies."
    },
    {
      "title": "Conclusion",
      "content": "In conclusion, cybersecurity is an indispensable aspect of our digital world. The ever-present threat of cyber attacks necessitates the use of sophisticated tools and techniques to protect our digital assets. From basic antivirus software to advanced SIEM systems, these tools form the backbone of effective cybersecurity strategies. As cyber threats continue to evolve, so too must our defenses, ensuring that we remain one step ahead in the ongoing battle to secure our digital future."
    }
  ]
  }

  const result = {
    "name":"Securit-ctf",
    "message":"Good to see you here",
    "flag":"G00D-T0-S33-Y0U"
}

// Example route
app.get('/api-trailblazer', (req, res) => {
  res.send(apis);
});

app.get('/api-trailblazer-ans-wergrihjgnkladf', (req,res) => {
    res.send(result)
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});