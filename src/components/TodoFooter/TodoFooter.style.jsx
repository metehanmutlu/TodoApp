import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#37474f',
        margin: 15,
        marginTop: 100,
        marginBottom: 25,
        borderRadius: 10,
        flex: 3,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    input: {
        color: 'white',
        fontSize: 18
    },
    divider: {
        height: 2,
        backgroundColor: '#78909c'
    },
    button: {
        backgroundColor: "#ffa500",
        alignItems: "center",
        padding: 10,
        marginTop: 12,
        marginHorizontal: 10,
        borderRadius: 10,
    },
    disabledButton: {
        backgroundColor: '#808080',
        alignItems: "center",
        padding: 10,
        marginTop: 12,
        marginHorizontal: 10,
        borderRadius: 10,

    },
    buttonText: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center'
    }
})