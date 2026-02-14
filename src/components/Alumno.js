import { StyleSheet, Text, View, Button } from 'react-native';

export default function Alumno(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.nombre}>{props.nombre}</Text>
      <Text style={styles.matricula}>{props.matricula}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    padding: 10,
    backgroundColor: '#f3f3f3',
    borderRadius: 5,
    marginVertical: 5,
    alignSelf: 'center',
  },
  nombre: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333',
  },
  matricula: {
    fontSize: 14,
    color: '#666',
  },
});