import { View, Text, StyleSheet, FlatList } from 'react-native';

const listaCompromissos = [
  { id: '1', horario: '09h00', descricao: 'Reunião "Daily"' },
  { id: '2', horario: '14h00', descricao: 'Reunião com cliente Carlos & Carlos' },
  { id: '3', horario: '16h00', descricao: 'Prazo final Projeto X' },
];

export default function UserPage({ route }) {

  const { nome, turma } = route.params;

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.tituloPage}>
          (Eu) - Meus Compromissos
        </Text>
        
        <View style={{ marginTop: 10 }}>
            <Text style={styles.infoTexto}>
              Aluno: {nome}
            </Text>
            <Text style={[styles.infoTexto, { color: '#666' }]}>
              {turma}
            </Text>
        </View>
        
      </View>

      <FlatList
        data={listaCompromissos}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (

          <View style={styles.cardItem}>

            <Text style={styles.hora}>
              {item.horario}
            </Text>
            <Text style={styles.descricao}>
              {item.descricao}</Text>

          </View>

        )}
      />
    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 15,
    alignItems: 'center'
  },
  tituloPage: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000'
  },
  infoTexto: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 2
  },
  cardItem: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eee'
  },
  hora: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#007AFF', 
    marginBottom: 5
  },
  descricao: {
    fontSize: 15,
    color: '#333'
  }

});