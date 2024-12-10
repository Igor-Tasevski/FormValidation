import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form01 from './Components/Form01'
import Form02 from './Components/Form02'
import SignUp from './Components/SignUp'
import ReactHookForm from './Components/ReactHookForm'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      {/*<Form01 /> */}
      {/*<Form02 /> */}
      {/*<SignUp /> */}
      <ReactHookForm />

    </div>


  )
}

export default App
