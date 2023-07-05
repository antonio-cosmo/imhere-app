import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function Home() {
    const handleParticipantAdd = () => {
        console.log("Participante adicionado")
    }
    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do Evento
            </Text>
            <Text style={styles.eventData}>
                Quart, 5 de Julho de 2023.
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Nome do participante"
                placeholderTextColor="#6b6b6b"
            />
            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                <Text style={styles.buttonText}>
                    +
                </Text>
            </TouchableOpacity>
        </View>
    )
}