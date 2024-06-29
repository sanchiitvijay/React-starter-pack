import React, { useState } from 'react';

const WebDeceptionR2 = () => {
  const [answer, setAnswer] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showProceedButton, setShowProceedButton] = useState(false);
  console.log(10.20)
  const checkAnswer2 = () => {
    if (parseFloat(answer).toFixed(2) === '10.20') {
      setAlertMessage('Correct! The SECRET path is 1 Step away.');
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
          Riddle 2
        </h1>
        <p style={{ fontSize: '1.2em', marginTop: '20px' }}>
          Solve this riddle to get the second part of the secret path: <br /> A projectile is launched at an angle of 45 degrees to the horizontal with an initial velocity of 20 m/s. Calculate the maximum height reached by the projectile. Assume no air resistance and g = 9.8 m/s².
        </p>
        <input
          type="text"
          id="answer2"
          placeholder="rounded to two decimal places"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          style={{ padding: '15px', margin: '15px', fontSize: '1.2em', background: '#333', border: '2px solid #0f0', color: '#0f0', borderRadius: '5px' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
          <button
            className="styled-button"
            onClick={checkAnswer2}
            style={{ padding: '15px', fontSize: '1.2em', background: '#333', border: '2px solid #0f0', color: '#0f0', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s, transform 0.3s' }}
          >
            Submit
          </button>
          {showProceedButton && (
            <button
              id="proceedButton"
              className="styled-button ml-4"
              onClick={() => window.location.href = '12kl3j12kl3jl12;j3kl1jlk13.html'}
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

export default WebDeceptionR2;
