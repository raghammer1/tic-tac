import React, { useState } from 'react';
import {
  checkCol,
  checkLeftDiagonal,
  checkRightDiagonal,
  checkRow,
} from './conditionCheckers';

const TicTac = ({ size, setStart }) => {
  const n = size;

  const [arr, setArr] = useState(
    Array(n)
      .fill(0)
      .map(() => Array(n).fill(0))
  );

  const [curr, setCurr] = useState(1);

  const checkWinCondition = (rowIndex, colIndex, newArr) => {
    if (
      checkRow(rowIndex, newArr, curr) ||
      checkCol(colIndex, newArr, curr) ||
      checkLeftDiagonal(rowIndex, colIndex, newArr, curr) ||
      checkRightDiagonal(rowIndex, colIndex, newArr, curr)
    ) {
      return true;
    }
    return false;
  };

  const putSymbol = (rowIndex, colIndex) => {
    if (arr[rowIndex][colIndex] !== 0) {
      return;
    }
    const newArr = arr.map((row, rIndex) =>
      rIndex === rowIndex
        ? row.map((cell, cIndex) => (cIndex === colIndex ? curr : cell))
        : row
    );
    setArr(newArr);

    const check = checkWinCondition(rowIndex, colIndex, newArr);

    if (check) {
      alert(`Player ${curr} wins!`);
      setStart(false);
      return;
    }

    setCurr(curr === 1 ? 2 : 1);
  };

  const toHome = () => {
    setStart(false);
  };

  const resetBoard = () => {
    setArr(
      Array(n)
        .fill(0)
        .map(() => Array(n).fill(0))
    );
    setCurr(1);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>Player {curr}'s Turn</div>
      <div style={styles.buttons}>
        <button onClick={toHome} style={styles.button}>
          Back to Home
        </button>
        <button onClick={resetBoard} style={styles.button}>
          Reset Board
        </button>
      </div>

      <div
        style={{ display: 'grid', gridTemplateColumns: `repeat(${n}, 100px)` }}
      >
        {arr.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              style={{
                ...styles.cell,
                backgroundColor:
                  cell === 1 ? '#E74C3C' : cell === 2 ? '#3498DB' : '#ECF0F1',
              }}
              onClick={() => {
                putSymbol(rowIndex, colIndex);
              }}
            >
              {cell === 1 ? 'X' : cell === 2 ? 'O' : ''}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '20px',
    minHeight: '100vh',
    height: '100%',
    backgroundColor: '#2C3E50',
    color: 'white',
    fontFamily: "'Roboto', sans-serif",
    padding: '20px',
  },
  header: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#E74C3C',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#FFF',
    backgroundColor: '#34495E',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#E74C3C',
  },
  cell: {
    width: '100px',
    height: '100px',
    border: '2px solid #34495E',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '36px',
    fontWeight: 'bold',
    color: 'white',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default TicTac;
