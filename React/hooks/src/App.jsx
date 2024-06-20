import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  // const counter = 15

  const addCount = () => {
    // return counter + 1    // This approach doesn't updates the ui state everywhere
    return counter < 20?setCounter(counter + 1): counter
  }

  const removeCount = () => {
    counter > 0?setCounter(counter - 1): counter;
  }

  return (
    <>
      <h1>Chia aur react</h1>
      <h2>Count: {counter}</h2>
      <button onClick={addCount}>
        Add Count {counter}
      </button>
      <br />
      <button onClick={removeCount}>
        Remove count {counter}
      </button>
    </>
  )
}

export default App
