import { useState, useEffect, useCallback, useRef } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  let [length, setLength] = useState(8)
  let [numAllowed, setNumAllowed] = useState(false)
  let [charAllowed, setCharAllowed] = useState(false)

  let [password, setPassword] = useState("")
  let passRef = useRef(null)
  

  const genratePassword = useCallback(() => {
    let pass = ""
    let str = 
    "abcdefghijklmnopqrstuvwxyz"
    str += str.toUpperCase()
    if (numAllowed) {str += "1234567890"};
    if (charAllowed) {str += "`~!@#$%^&*()_-+|}{[]:;?><"};

    console.log(str)
    for (let index = 0; index < length; index++) {
      let randChar = str[Math.floor(Math.random() * str.length)]
      pass += randChar
    }
    setPassword(pass)
  },[length, numAllowed, charAllowed, setPassword])

  useEffect(() => {
    genratePassword()
  }, [length, numAllowed, charAllowed, genratePassword])

  const copyToClipboard = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 10)
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <div className='w-[100vw] h-screen bg-black flex justify-center items-center'>
        <div className="password-generator bg-slate-700 w-[500px] space-y-2 space-x-2 rounded-lg">
          <span className='block text-xl text-black font-semibold text-center'>Password Generator</span>
          <input
            className='bg-white rounded-md w-[400px] h-7 my-4 outline-none text-orange-700' 
            type="text"
            value={password}
            readOnly
            placeholder='password'
            ref={passRef}
          />
          <button 
          className='rounded-lg bg-white hover:bg-blue-950 cursor-pointer px-2 py-1 text-black'
          onClick={copyToClipboard}
          >

            Copy
          </button>
          <div className='flex text-sm gap-x-2 text-red-500'>
            <div className="flex items-center gap-x-1">
              <input 
              type="range"
              max={100}
              min={0}
              value={length}
              className=' cursor-pointer bg-red-500'
              onChange={(e) => setLength(e.target.value)}
              />
              <label>Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input 
              type="checkbox"
              defaultChecked={numAllowed}
              className=' cursor-pointer bg-red-500'
              onChange={ () => {
                setNumAllowed((prev) => !prev);
              }}
              />
              <label>NumAllowed</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input 
              type="checkbox"
              defaultChecked={charAllowed}
              className=' cursor-pointer bg-red-500'
              onChange={ () =>{
                setCharAllowed((prev) => !prev);
              }}
              />
              <label>charAllowed</label>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
