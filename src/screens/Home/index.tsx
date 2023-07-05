import { View, Text, TextInput, TouchableOpacity, FlatList, ScrollView, Alert } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import { useState } from "react";

export function Home() {
    const [name, setName] = useState("")
    const [participants, setParticipants] = useState<string[]>([])
    const handleParticipantAdd = () => {
        if (participants.includes(name)) {
            Alert.alert('Participante existe', 'Esse participante já existe, adicione um novo!');
            return
        }

        setParticipants(prevState => [...prevState, name]);
        setName("");

    }
    const onChangeName = (name: string) => {
        setName(name);
    }
    function handleParticipantRemove(nameValue: string) {
        Alert.alert('Remove', `Deseja remover o participante ${nameValue}?`, [
            {
                text: 'Sim',
                onPress: () => {
                    setParticipants(prevState => [...prevState.filter(item => item != nameValue)])
                    Alert.alert('Desletado!')
                }
            },
            {
                text: 'Não'
            }
        ])
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
                    onChangeText={onChangeName}
                    value={name}
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

            {/* <ScrollView showsVerticalScrollIndicator={false}>
                {participants.map(participant => (
                    <Participant
                        key={participant}
                        name={participant}
                        onRemove={() => handleParticipantRemove(participant)}
                    />
                ))}
            </ScrollView> */}
        </View>
    )
}