import React from 'react'
import { KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './TodoFooter.style'

const TodoFooter = ({ input, setInput, addTodo }) => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <TextInput
                style={styles.input}
                placeholder='Yapılacak...'
                onChangeText={setInput}
                value={input}
                placeholderTextColor='#7f7f7f'
            />
            <View style={styles.divider} />
            <TouchableOpacity
                style={input ? styles.button : styles.disabledButton}
                onPress={() => { addTodo(input) }}
                disabled={!input}
            >
                <Text style={styles.buttonText}>Kaydet</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

export default TodoFooter