import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Hello Tailwind</h1>
     <Card username = "Harleen" btnText = "Visit me"/>
     <Card username = "Ashish" />      
     <Card username = "Pratiksha" btnText = "View details" />
     
  </> //empty div also called "fragment"
  )
}

export default App
