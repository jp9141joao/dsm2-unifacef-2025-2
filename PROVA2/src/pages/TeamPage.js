import { View, Text, StyleSheet, SectionList } from 'react-native';

const agendaEquipe = [
  {
    title: '(EU)',
    data: [
      '09h00: Reunião "Daily"',
      '14h00: Reunião com cliente Carlos & Carlos',
      '16h00: Prazo final Projeto X',
    ],
  },
  {
    title: 'Jurema (chefe)',
    data: [
      '09h00: Reunião "Daily"',
      '12h00: Almoço com a direção',
      '16h00: Status equipe',
    ],
  },
  {
    title: 'Aderbal',
    data: [
      '09h00: Reunião "Daily"',
      '13h30: Visita técnica Uni-FACEF',
      '16h00: Prazo final Projeto X',
    ],
  },
];

export default function TeamPage({ route }) {

  const { nome, turma } = route.params; 

  return (
    <View style={styles.container}>

      <View style={{ alignItems: 'center', marginBottom: 20, paddingBottom: 15, borderBottomWidth: 1, borderColor: '#eee' }}>
        
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
          Agenda da Equipe
        </Text>
        <Text style={{ fontSize: 16, marginTop: 5 }}>
          Usuário: {nome}
        </Text>
        <Text style={{ color: '#666' }}>
          {turma}
        </Text>

      </View>

      <SectionList
        sections={agendaEquipe}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (

          <View style={styles.itemLista}>
            <Text style={styles.textoItem}>
              {item}
            </Text>
          </View>

        )}

        renderSectionHeader={({ section: { title } }) => (

          <View style={styles.headerSecao}>
            <Text style={styles.tituloSecao}>{title}</Text>
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
  headerSecao: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginTop: 10,
    borderRadius: 5
  },
  tituloSecao: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333'
  },
  itemLista: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  textoItem: {
    fontSize: 14,
  }

});