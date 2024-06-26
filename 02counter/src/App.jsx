import { useState } from 'react'
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

   const addValue = () => {
    setCount((count) => count + 1)
    setCount((count) => count + 1)
  
  } ;

    const removeValue = () => {
      setCount((count) => count - 1)} ;

  return (

    <div>
     <h1> hi this my react code {count}</h1>

        <button onClick={addValue}>    ADD     </button> {" "}
          
        <button onClick={removeValue}>    Remove     </button>
       
    </div>
  )
}

export default App
