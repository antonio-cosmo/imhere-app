import { View, Text, TextInput, TouchableOpacity, FlatList, ScrollView, Alert } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import { useState } from "react";

export function Home() {
    const [participantName, setParticipantName] = useState("");
    const [participants, setParticipants] = useState<string[]>([]);

    const handleParticipantAdd = () => {
        if (participants.includes(participantName)) {
            Alert.alert('Participante já existe', 'Adicione um novo participante!');
            return
        }

        setParticipants(prevState => [...prevState, participantName]);
        setParticipantName('');
    }

    const handleChangeParticipantName = (name: string) => {
        setParticipantName(name);
    }

    function handleParticipantRemove(name: string) {
        Alert.alert('Remove', `Deseja remover o participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => setParticipants(prevState => prevState.filter(item => item !== name))
            },
            {
                text: 'Não'
            }
        ]);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do Evento
            </Text>
            <Text style={styles.eventData}>
                Quart, 5 de Julho de 2023.
            </Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6b6b6b"
                    onChangeText={handleChangeParticipantName}
                    value={participantName}
                />
                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={participants}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <Participant
                        name={item}
                        onRemove={() => handleParticipantRemove(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
                    </Text>
                )}
            />
        </View>
    )
}