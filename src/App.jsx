import React from 'react'
import Addtodo from './components/Addtodo'
import Todos from './components/Todos'
import './App.css'

function App() {
  

  return (
    <>
      <h1 className='text-3xl bg-green-600 text-white p-4 text-center'>Todo Using Redux ToolKit</h1>
      
      <Todos/>
      <Addtodo/>
    </>
  )
}

export default App
