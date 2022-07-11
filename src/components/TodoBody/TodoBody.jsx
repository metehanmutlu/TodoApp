import React, { useState } from 'react'
import { Alert, FlatList, Modal, Text, View } from 'react-native'
import TodoCard from '../TodoCard/';
import styles from './TodoBody.style'
import { uid } from 'uid';

const TodoBody = ({ todos, setTodos }) => {
    const renderItem = ({ item }) => <TodoCard todo={item} todos={todos} setTodos={setTodos} />

    const numberOfActiveTodos = () => {
        const activeTodos = todos.filter((_todo) => !_todo.isDone)
        return activeTodos.length
    }


    return (
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
                <Text style={styles.header}>Yapılacaklar</Text>
                <Text style={styles.todoNumber}>{numberOfActiveTodos()}</Text>
            </View>
            <View style={styles.todoList}>
                <FlatList
                    data={todos}
                    renderItem={renderItem}
                    keyExtractor={() => uid(16)}
                />
            </View>
        </View>
    )
}

export default TodoBody