import { useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashbaord from './components/Dashboard/EmployeeDashbaord'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    {/* <Login /> */}
    <EmployeeDashbaord />
   </>
  )
}

export default App
