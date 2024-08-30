import { GoogleSignin, GoogleSigninButton, isErrorWithCode, statusCodes } from '@react-native-google-signin/google-signin';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function LoginScreen() {
  GoogleSignin.configure();

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      console.log('entrou')
      const userInfo = await GoogleSignin.signIn();
      // setState({ userInfo, error: undefined });
      console.log(userInfo)
    } catch (error) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.SIGN_IN_CANCELLED:
            console.log('user cancelled the login flow')
            break;
          case statusCodes.IN_PROGRESS:
            console.log('operation (eg. sign in) already in progress')
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            console.log('play services not available or outdated')
            break;
          default:
            console.log(`some other error happened: ${error}`)
        }
      } else {
        console.log('an error that\'s not related to google sign in occurred')
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>Movies Match</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.text}>Login with Google</Text>
      </View>
      <GoogleSigninButton onPress={async() => await signIn()} />
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
