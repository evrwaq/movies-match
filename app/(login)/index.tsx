import { StyleSheet, View, Text, Button } from 'react-native'
import { useAuthentication } from '@/hooks/useAuthentication'


export default function LoginScreen() {
  const { signIn, signOut } = useAuthentication()
 
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>Movies Match</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Button onPress={signIn} title='Login with Google'/>
        <Button onPress={signOut} title='Sign Out'/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212',
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#F56700'
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    color: '#F56700'
  },
})
