import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomePage({ navigation }) {

  const aluno = 'Joao Pedro Rosa de Paula';
  const curso = 'Engenharia de Software - 6 semestre';

  return (
    <View style={styles.container}>
      
      <View style={styles.card}>

        <Text style={styles.titulo}>
          Agenda de Hoje
        </Text>
        
        <Text style={styles.textoSimples}>
          {aluno}
        </Text>
        <Text style={styles.textoSimples}>
          {curso}
        </Text>

        <View style={styles.areaBotoes}>

          <TouchableOpacity 
            style={styles.botao}
            onPress={() => navigation.navigate('UserPage', { nome: aluno, turma: curso })}
          >
            <Text style={styles.textoBotao}>Meus compromissos</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.botao, { marginTop: 15 }]} 
            onPress={() => navigation.navigate('TeamPage', { nome: aluno, turma: curso })}
          >
            <Text style={styles.textoBotao}>Compromissos da equipe</Text>
          </TouchableOpacity>

        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center'
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textoSimples: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    textAlign: 'center'
  },
  areaBotoes: {
    marginTop: 30,
    width: '100%',
  },
  botao: {
    borderWidth: 1,
    borderColor: '#333',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%' 
  },
  textoBotao: {
    fontSize: 16,
    fontWeight: '500'
  }

});