//import { useState } from 'react'


import Card from './components/Card'

import './App.css'

function App() {
  
let newArray = [1,2,3,4,5,6,7,8]
  return (
    <>
     
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
      
     <Card username="prakash uppula" myarry = {newArray} />
    
     <Card/>
     <Card/>
    </>
  )
}

export default App
