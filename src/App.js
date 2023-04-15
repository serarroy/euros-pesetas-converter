
import { useState } from 'react';
import './App.css';

function App() {
  const EUROS_PESETAS = 166.386;
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  const agregarInput = (e) => {
    setInput(input + e.target.value); /* Concatenamos el input anterior con el nuevo valor */
  };

  const calcular = (e) => {
    setResult(Math.round((input * EUROS_PESETAS) * 100) / 100)
  }

  const reset = () => {
    setInput('')
    setResult('')
  }
  return (
    <div className="App">
      <div className='main-container'>
        <div className='input-container'>
          <label>EUROS</label>
          <div className='result'>
            {input}
          </div>
        </div>
        <div className='input-container'>
          <label>PESETAS</label>
          <div className='result'>
            {result}
          </div>
        </div>
        <div className='keyboard'>
          <button value='7' onClick={agregarInput}>7</button>
          <button value='8' onClick={agregarInput}>8</button>
          <button value='9' onClick={agregarInput}>9</button>
          <button value='4' onClick={agregarInput}>4</button>
          <button value='5' onClick={agregarInput}>5</button>
          <button value='6' onClick={agregarInput}>6</button>
          <button value='1' onClick={agregarInput}>1</button>
          <button value='2' onClick={agregarInput}>2</button>
          <button value='3' onClick={agregarInput}>3</button>
          <button value='0' onClick={agregarInput}>0</button>
          <button value='.' onClick={agregarInput}>.</button>
          <button onClick={reset}>C</button>
        </div>
        <div className='calcular'>
            <button className='calcular-btn' onClick={calcular}>CALCULAR</button>
          </div>
      </div>
    </div>
  );
}

export default App;
