import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function Alumno(props) {
  const [mostrarInfo, setMostrarInfo] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.filaPrincipal}>
        <TouchableOpacity
          style={styles.badgeNombre}
          onPress={() => setMostrarInfo((estadoActual) => !estadoActual)}
          activeOpacity={0.8}
        >
          <Text style={styles.nombre}>{props.nombre}</Text>
        </TouchableOpacity>
        <Image
          source={{
            uri: 'https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg',
          }}
          style={styles.fotoPerfil}
        />
      </View>
      {mostrarInfo ? <Text style={styles.matricula}>{props.matricula}</Text> : null}
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
  filaPrincipal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badgeNombre: {
    flex: 1,
    backgroundColor: '#e9ecef',
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 10,
  },
  nombre: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  fotoPerfil: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  matricula: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
    marginLeft: 12,
  },
});