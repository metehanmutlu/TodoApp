import React, { useState } from 'react'
import { Modal, Pressable, Text, TouchableOpacity, View } from 'react-native'
import styles from './TodoCard.style'
import AsyncStorage from '@react-native-async-storage/async-storage';

const TodoCard = ({ todo, todos, setTodos }) => {
    const [modalVisible, setModalVisible] = useState(false)

    const handleOnPress = async () => {
        let todosCopy = [...todos]

        const newTodos = todosCopy.map((_todo) => {
            if (_todo.id === todo.id) {
                return { ..._todo, isDone: !todo.isDone }
            } else {
                return _todo
            }
        })
        // console.log(newTodos);
        setTodos(newTodos)
        await AsyncStorage.setItem('todos', JSON.stringify(newTodos))
    }

    const handleOnLongPress = () => {
        setModalVisible(true)
        // let todosCopy = [...todos]

        // const newTodos = todosCopy.filter((_todo) => _todo.id !== todo.id)
        // // console.log(newTodos);

        // setTodos(newTodos)
    }

    const deleteTodo = async () => {
        setModalVisible(!modalVisible)
        let todosCopy = [...todos]

        const newTodos = todosCopy.filter((_todo) => _todo.id !== todo.id)
        // console.log(newTodos);
        setTodos(newTodos)
        await AsyncStorage.setItem('todos', JSON.stringify(newTodos))
    }

    return (
        <View>
            <TouchableOpacity
                style={todo.isDone ? styles.disabledTodoContainer : styles.container}
                onPress={handleOnPress}
                onLongPress={handleOnLongPress}
            >
                <Text style={todo.isDone ? styles.disabledTodoText : styles.todoText}>{todo.title}</Text>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={[styles.centeredView, { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }]}>
                    <View style={styles.modalView}>
                        <TouchableOpacity onPress={() => { setModalVisible(false) }} style={styles.closeModal}>
                            <Text style={styles.closeModalText}>✖</Text>
                        </TouchableOpacity>
                        <Text style={styles.modalText}>Silmek istediğine emin misin?</Text>
                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={deleteTodo}
                        >
                            <Text style={styles.textStyle}>Evet</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default TodoCard