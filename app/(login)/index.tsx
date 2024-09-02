import { StyleSheet, View, Text, Button } from 'react-native'
import { useAuthentication } from '@/hooks/useAuthentication'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen() {
  const { signIn, signOut } = useAuthentication()
 
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      console.log(value)
    } catch (e) {
      // error reading value
    }
  };

  const cleanAsyncStorage = async () => {
    try {
      await AsyncStorage.removeItem('user')
    } catch(e) {
      // remove error
    }

  console.log('Done.')
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>Movies Match</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Button onPress={signIn} title='Login with Google'/>
        <Button onPress={signOut} title='Sign Out'/>
        <Button onPress={getData} title='Get use values'/>
        <Button onPress={cleanAsyncStorage} title='Clean async storage'/>
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
