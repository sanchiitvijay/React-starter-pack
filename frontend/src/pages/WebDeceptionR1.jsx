import React, { useState } from 'react';

const WebDeceptionR1 = () => {
  const [answer, setAnswer] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showProceedButton, setShowProceedButton] = useState(false);
  console.log(1.72)
  const checkAnswer1 = () => {
    if (parseFloat(answer).toFixed(2) === '1.72') {
      setAlertMessage('Correct! The SECRET path is 2 Steps away.');
      setShowProceedButton(true);
    } else {
      setAlertMessage('Wrong answer. Try again!');
    }
  };

  const customAlert = (msg) => {
    return (
      <div style={{
        padding: '30px',
        marginTop: '20px',
        borderRadius: '10px',
        background: 'rgba(15, 255, 0, 0.2)',
        color: '#0f0',
        border: '2px solid #0f0',
        textAlign: 'center',
        fontSize: '2em',
      }}>
        {msg}
      </div>
    );
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
          Riddle 1
        </h1>
        <p style={{ fontSize: '1.2em', marginTop: '20px' }}>
          Solve this riddle to get the first part of the secret path:
        </p>
        <p style={{ fontSize: '1.2em' }}>
          Evaluate the integral of <span>&#101;<sup>&#120;</sup></span> from x = 0 to x = 1.
        </p>
        <input
          type="text"
          id="answer1"
          placeholder="Round off to 2 decimal points"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          style={{ padding: '15px', margin: '15px', fontSize: '1.2em', background: '#333', border: '2px solid #0f0', color: '#0f0', borderRadius: '5px' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
          <button
            className="styled-button"
            onClick={checkAnswer1}
            style={{ padding: '15px', fontSize: '1.2em', background: '#333', border: '2px solid #0f0', color: '#0f0', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s, transform 0.3s' }}
          >
            Submit
          </button>
          {showProceedButton && (
            <button
              id="proceedButton"
              className="styled-button ml-5"
              onClick={() => window.location.href = 'h312jkl4h312jklh4jk1234jkl.html'}
              style={{ padding: '15px', fontSize: '1.2em', background: '#333', border: '2px solid #0f0', color: '#0f0', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s, transform 0.3s' }}
            >
              Proceed
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WebDeceptionR1;
