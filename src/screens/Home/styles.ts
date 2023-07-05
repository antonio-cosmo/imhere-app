import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131016',
        padding: 24,
    },
    eventName: {
        color: "#fdfcfe",
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 48
    },
    eventData: {
        color: "#6b6b6b",
        fontSize: 16
    },
    input: {
        height: 56,
        backgroundColor: "#1f1e25",
        borderRadius: 5,
        color: '#fdfcfe',
        fontSize: 16,
        padding: 16
    },
    buttonText: {
        color: '#fff',
        fontSize: 24
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31cf67',
        alignItems: "center",
        justifyContent: "center"
    }
});