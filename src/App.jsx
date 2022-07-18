import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { uid } from 'uid'
import styles from './App.style'
import TodoBody from './components/TodoBody'
import TodoFooter from './components/TodoFooter'
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])
  // const [todos, setTodos] = useState([])

  const addTodo = async (todo) => {
    const newTodos = [...todos, { title: todo, id: uid(16), isDone: false }]
    setTodos(newTodos)
    await AsyncStorage.setItem('todos', JSON.stringify(newTodos))
    setInput('')
  }

  const getTodos = async () => {
    try {
      const rawTodos = await AsyncStorage.getItem('todos')
      if (rawTodos) {
        const _todos = JSON.parse(rawTodos)
        setTodos(_todos)
      } else {
        await AsyncStorage.setItem('todos', '[]')
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTodos()
  }, [])


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