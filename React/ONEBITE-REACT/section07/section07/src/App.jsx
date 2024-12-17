import './App.css'
import Controller from './components/Controller'
import Viewer from './components/Viewer'
import { useState, useEffect } from 'react'

function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`count: ${count}`)
  }, [count]);

  const onClickButton = (value) => {
    setCount(count + value)
  }

  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count}/>
      </section>
      <section>
        <Controller onClickButton={onClickButton}/>
      </section>
    </div>
  )
}

export default App
