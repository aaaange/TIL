import { useState, useRef, useReducer, useCallback, createContext } from 'react'
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
    id: 2,
    isDone: false,
    content: "방 정리하기",
    date: new Date().getTime(),
  },
]

function reducer(state, action){
  switch(action.type){
    case "CREATE": 
      return [action.data, ...state];
    case "UPDATE": 
      return state.map((item) => 
        item.id === action.targetId 
          ? { ...item, isDone:!item.isDone}
          :item)
    case "DELETE":
      return state.filter(
        (item) => item.id !== action.targetId
      )
    default:
      return state;
  }
}

export const TodoContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3) // mockData 고려하여 3부터 시작

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id : idRef.current ++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      }
    })
  }, [])
  const onUpdate = useCallback((targetId) => {
    dispatch({
      type:"UPDATE",
      targetId: targetId
    })
  }, [])

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    })
  }, [])

  return (
    <div className='App'>
      <Header />
      <TodoContext.Provider value={{
        todos, onCreate, onUpdate, onDelete
      }}>
        <Editor/>
        <List/>
      </TodoContext.Provider>
    </div>
  )
}

export default App