import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#7da453',
        margin: 8,
        padding: 10,
        borderRadius: 10
    },
    disabledTodoContainer: {
        backgroundColor: '#37474f',
        margin: 8,
        padding: 10,
        borderRadius: 10,
    },
    todoText: {
        color: 'white',
        fontSize: 16,
    },
    disabledTodoText: {
        color: '#808080',
        fontSize: 16,
        textDecorationLine: 'line-through',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "#808080",
        borderRadius: 20,
        paddingHorizontal: 80,
        paddingVertical: 25,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        elevation: 2,
        alignItems: 'center'
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "tomato",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        color: 'white',
        fontSize: 20
    }
})