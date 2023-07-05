import { View, Text, TextInput, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export function Home() {
    const participants = ['Rodrigo', 'Vini', 'Diego', 'Biro', 'Ana', 'Isa', 'Jack', 'Mayk', 'João'];

    const handleParticipantAdd = () => {
        console.log("Participante adicionado")
    }
    function handleParticipantRemove(name: string) {
        console.log(`Você clicou em remover o participante ${name}`);
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
                        onRemove={() => handleParticipantRemove("Rodrigo")}
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