import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function MyApp() {
  return (
    <div>
      Custom my App
    </div>
  )
}

const anotherElement = (
  <a href="https://google.com" target='_blank'>visit Google</a>
)

const reactElement = React.createElement(
  'a',
  {
    href: "https://google.com",
    target: "_blank"
  },
  "Click me to visit Google"
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <App />
    // anotherElement
    // reactElement
  // </React.StrictMode>,
)
