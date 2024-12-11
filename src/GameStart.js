import React from 'react';

const GameStart = ({ size, setSize, start, setStart }) => {
  const checkConditions = () => {
    if (size > 1) {
      setStart(true);
      return;
    }
    alert('Size must be greater than 1');
  };

  const sizeChanger = (e) => {
    let num = e.target.value;

    if (!isNaN(num) && num.trim() !== '') {
      setSize(parseInt(num));
    } else {
      setSize(0);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Tic-Tac-Toe</h2>
        <p style={styles.subtitle}>Enter the board size and start the game!</p>

        <input
          type="text"
          placeholder="Board Size"
          value={size}
          onChange={sizeChanger}
          style={styles.input}
        />

        <button onClick={checkConditions} style={styles.button}>
          Start Game
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#2C3E50',
    color: 'white',
    fontFamily: "'Roboto', sans-serif",
  },
  card: {
    backgroundColor: '#34495E',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    width: '300px',
    animation: 'fadeIn 1s ease-in-out',
  },
  title: {
    fontSize: '2em',
    marginBottom: '20px',
    color: '#E74C3C',
  },
  subtitle: {
    fontSize: '1.2em',
    marginBottom: '30px',
    color: '#BDC3C7',
  },
  input: {
    width: '80%',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '5px',
    border: 'none',
    fontSize: '1em',
    textAlign: 'center',
    backgroundColor: '#ECF0F1',
    color: '#2C3E50',
    outline: 'none',
    transition: 'all 0.3s ease',
  },
  button: {
    backgroundColor: '#E74C3C',
    padding: '10px 20px',
    fontSize: '1.2em',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    transition: 'all 0.3s ease',
  },
};

// Add a fade-in effect for the card
const globalStyle = document.createElement('style');
globalStyle.innerHTML = `
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
document.head.appendChild(globalStyle);

export default GameStart;
