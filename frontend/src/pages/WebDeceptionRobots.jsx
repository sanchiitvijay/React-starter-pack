import React, { useEffect } from 'react'

const WebDeceptionRobots = () => {
    useEffect(() => {
        // Content of the text file
        const textContent = 'User-agent: * \n Route to Proceed: /riddle1.html';
    
        // Create a Blob containing the text
        const blob = new Blob([textContent], { type: 'text/plain' });
    
        // Create a URL for the Blob
        const url = window.URL.createObjectURL(blob);
    
        // Create a temporary <a> element to trigger the download
        const a = document.createElement('a');
        a.href = url;
        a.download = 'robots.txt'; // File name
    
        // Append <a> to the document body and simulate click to trigger download
        document.body.appendChild(a);
        a.click();
    
        // Clean up: Remove the temporary <a> and revoke the URL
        return () => {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
        };
      }, []); 
    
      return (
        <div>
          <h1>Check Your Downloads For The Next Hint</h1>
        
        </div>
      );
}

export default WebDeceptionRobots