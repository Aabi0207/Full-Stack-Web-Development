import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorChanger from './components/ColorButton'

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className='w-full p-0 h-screen duration-200 bg-green-500 flex justify-center' style={{backgroundColor: color}} >
      <div className='bg-white rounded-lg flex space-x-5 p-7 w-[80vw] h-[7vh]
      fixed bottom-10 items-center align-center'>
        <ColorChanger color="red" method={setColor}/>
        <ColorChanger color="green" method={setColor}/>
        <ColorChanger color="blue" method={setColor}/>
        <ColorChanger color="orange" method={setColor}/>
        <ColorChanger color="cyan" method={setColor}/>
        <ColorChanger color="pink" method={setColor}/>
        <ColorChanger color="white" method={setColor}/>
        <ColorChanger color="magenta" method={setColor}/>
        <ColorChanger color="olive" method={setColor}/>
        <ColorChanger color="crimson" method={setColor}/>

      </div>
    </div>
  )
}

export default App
