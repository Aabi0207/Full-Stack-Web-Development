import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Card from './components/card'

function App() {
  const [count, setCount] = useState(0);

  let newArr = [1, 2, 3, 4]

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <h1 className="bg-green-400 text-black font-bold mb-10">Tailwind Test</h1>

      <Card myObj={{name: "Abhishek", age: 18}} arr={newArr} btnText="Click me" />
      <Card myObj={{name: "Ashish"}} btnText="use Me" />
    </>
  );
}

export default App;
