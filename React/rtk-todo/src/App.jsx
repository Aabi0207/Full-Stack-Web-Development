import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Form from "./components/Form";
import Item from "./components/Item";
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" bg-slate-800 w-full text-white flex flex-col items-center justify-center h-screen">
        <div className="mb-10">
          <Form />
        </div>
        <div className="flex flex-col space-y-3">
          <Item />
        </div>
      </div>
    </>
  );
}

export default App;
