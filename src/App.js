import { useState } from 'react';
import './App.css';
import GameStart from './GameStart';
import TicTac from './TicTac';

function App() {
  const [size, setSize] = useState(0);
  const [start, setStart] = useState(false);
  return (
    <div className="App">
      {start === false ? (
        <GameStart
          size={size}
          setSize={setSize}
          start={start}
          setStart={setStart}
        />
      ) : (
        <TicTac size={size} setStart={setStart} />
      )}
    </div>
  );
}

export default App;
