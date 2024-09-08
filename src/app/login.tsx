import { Button, StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useAuthentication } from '../hooks/useAuthentication'
import { StatusBar } from 'expo-status-bar'

export default function LoginScreen() {
  const { signIn } = useAuthentication()

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Text style={{ color: 'white' }}>Login</Text>
      <Button title="Login with Google" onPress={signIn} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
})
