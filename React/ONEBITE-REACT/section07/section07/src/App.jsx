import './App.css'
import Controller from './components/Controller'
import Even from './components/Even';
import Viewer from './components/Viewer'
import { useState, useEffect, useRef } from 'react'

function App() {

  const [count, setCount] = useState(0);

  const isMount = useRef(false);

  // 1. Mount
  useEffect( () => {
    console.log("Mount");
  }, [])

  // 2. Update
  useEffect( () => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("Update");
  })

  const onClickButton = (value) => {
    setCount(count + value)
  }

  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count}/>
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton}/>
      </section>
    </div>
  )
}

export default App
