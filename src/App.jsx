import React, { useState } from 'react'
import { View } from 'react-native'
import { uid } from 'uid'
import styles from './App.style'
import TodoBody from './components/TodoBody'
import TodoFooter from './components/TodoFooter'

const App = () => {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([{ title: 'Coding', id: uid(16), isDone: false }, { title: 'Reading', id: uid(16), isDone: false }])
  // const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([...todos, { title: todo, id: uid(16), isDone: false }])
    setInput('')
  }

  return (
    <View style={styles.container}>
      <TodoBody todos={todos} setTodos={setTodos} />
      <TodoFooter
        input={input}
        setInput={setInput}
        addTodo={addTodo}
      />
    </View>
  )
}

export default App