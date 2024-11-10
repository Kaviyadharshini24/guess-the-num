import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Result from './Result';

const secretNum = Math.floor(Math.random()*10)+1; // Assign a value for the secret number

function App() {
  const [term, setTerm] = useState("");
  
  const handleChange = (e) => {
    setTerm(e.target.value);
  }

  return (
    <div className="container">
      <div className="head">
        <label>
          Guess the number between 1 to 10 
        </label>
      </div>
      <input 
        id="term" 
        type="text" // Corrected type here
        name="term" 
        onChange={handleChange}
      />
      <Result secretNum={secretNum} term={term} />
    </div>
  );
}

export default App;
