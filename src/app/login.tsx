import { StatusBar } from 'expo-status-bar'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useAuthentication } from '../hooks/useAuthentication'

export default function LoginScreen() {
  const { signIn } = useAuthentication()

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.topContainer}>
        <Text style={styles.logoTitle}>Movies Match</Text>
      </View>

      <View style={styles.bottomContainer}>
        <Pressable style={styles.button} onPress={signIn}>
          <Text style={styles.buttonText}>Login with Google</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 15,
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
  },
  logoTitle: {
    color: '#F56700',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 48,
  },
  button: {
    backgroundColor: '#F56700',
    margin: 15,
    padding: 15,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
  },
})
