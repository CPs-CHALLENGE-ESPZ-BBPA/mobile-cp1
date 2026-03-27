import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function Profile() {
  const router = useRouter();


  return (
    <View style={styles.container}>

      <Image
        source={require("../assets/fiap-logo.png")}
        style={styles.imagem}
      />

      <Text style={styles.nome}>Usuário</Text>
      <Text style={styles.info}>RM: 123456</Text>
      <Text style={styles.info}>usuario@fiap.com.br</Text>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>Registrar Presença</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoSecundario}>
        <Text style={styles.textoBotao}>Ver Presenças</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.logout}>Sair</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0D0D0D',
    padding: 20,
  },

  imagem: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#E83D84',
  },

  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E83D84',
    marginBottom: 10,
  },

  info: {
    fontSize: 14,
    color: '#CCCCCC',
    marginBottom: 5,
  },

  botao: {
    backgroundColor: '#E83D84',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
  },

  botaoSecundario: {
    backgroundColor: '#1A1A1A',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 10,
    width: '80%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E83D84',
  },

  textoBotao: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  logout: {
    color: '#E83D84',
    marginTop: 25,
    fontSize: 16,
  },
});