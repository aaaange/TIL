import { useState } from 'react'
import './App.css'
import Editor from './components/Editor'
import Header from './components/Header'
import List from './components/List'

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "스터디 README 정리하기",
    date: new Date().getTime(),
  },
  {
    id: 3,
    isDone: false,
    content: "방 정리하기",
    date: new Date().getTime(),
  },
]

function App() {
  const [todos, setTodos] = useState(mockData);

  return (
    <div className='App'>
      <Header />
      <Editor />
      <List />
    </div>
  )
}

export default App
