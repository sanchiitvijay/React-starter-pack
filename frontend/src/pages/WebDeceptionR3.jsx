import React, { useState } from 'react';

const WebDeceptionR3 = () => {
  const [answer, setAnswer] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const customAlert = (msg) => {
    return (
      <div style={{
        padding: '30px',
        marginTop: '20px',
        borderRadius: '10px',
        background: 'rgba(15, 255, 0, 0.3)',
        color: '#0f0',
        border: '1px solid #0f0',
        boxShadow: '0 0 10px rgba(15, 255, 0, 0.5)',
        animation: 'fadeIn 1s both',
        fontSize: '1.8em',
      }}>
        {msg}
      </div>
    );
  };

  const checkAnswer3 = () => {
    if (answer === '20') {
      setAlertMessage('Correct! You have Unlocked the SECRET PATH !');
      // Show the SECRET PATH button by setting its display style to 'block'
      const secretPathButton = document.getElementById('secretPathButton');
      if (secretPathButton) {
        secretPathButton.style.display = 'block';
      }
    } else {
      setAlertMessage('Incorrect. Try again.');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      fontFamily: 'Orbitron, sans-serif',
      background: 'linear-gradient(135deg, #333 0%, #1a1a1a 100%)',
      color: '#0f0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    }}>
      <div style={{
        border: '1px solid #0f0',
        padding: '20px',
        borderRadius: '30px',
        boxShadow: '0 4px 8px rgba(15, 255, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '600px',
      }}>
        <div id="alertBoxContainer" style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '20px',
        }}>
          {alertMessage && customAlert(alertMessage)}
        </div>
        <h1 style={{
          fontSize: '3em',
          animation: 'typewriter 4s steps(44) 1s both',
          backgroundImage: 'linear-gradient(90deg, #0f0, #333, #0f0)',
          color: 'transparent',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textAlign: 'center',
        }}>
          Riddle 3
        </h1>
        <p style={{ fontSize: '1.2em', marginTop: '20px' }}>
          Solve this riddle to get the third part of the secret path: <br /> In a survey of 60 people, 25 liked coffee, 30 liked tea, and 15 liked both coffee and tea. How many people did not like either coffee or tea?
        </p>
        <input
          type="text"
          id="answer3"
          placeholder="Your answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          style={{ padding: '15px', margin: '15px', fontSize: '1.2em', background: '#333', border: '2px solid #0f0', color: '#0f0', borderRadius: '5px' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
          <button
            className="styled-button"
            onClick={checkAnswer3}
            style={{ padding: '15px', fontSize: '1.2em', background: '#333', border: '2px solid #0f0', color: '#0f0', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s, transform 0.3s' }}
          >
            Submit
          </button>
          <a href="secrets.html" style={{ textDecoration: 'none' }}>
            <button
              className="styled-button secret-button rounded-md ml-4"
              id="secretPathButton"
              style={{ padding: '20px', fontSize: '1.5em', cursor: 'pointer',background: '#333', border: '2px solid #0f0', animation: 'pulse 2s infinite', display: 'none' }}
            >
              SECRET PATH
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WebDeceptionR3;
