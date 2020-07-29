import React, {useState} from 'react'
import {Message} from './Message'
import './App.css'

function App() {
  var [count, setCount] = useState(1)
  var [isMorning, setMorning] = useState(false)

  return (
    <div className={`box ${isMorning ? 'dayLight' : ''}`}>
      <h1>Good {isMorning ? 'Morning' : 'Night'}</h1>
      <Message counter={count}></Message>
      <button onClick={() => setCount(++count)}>Update Counter!</button>
      <button onClick={() => setMorning(!isMorning)}>Update Day!</button>
    </div>
  );
}

export default App;
