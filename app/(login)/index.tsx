import { StyleSheet, View, Text, Button } from 'react-native'
import { doc, setDoc } from 'firebase/firestore'; 
import { GoogleSignin, isErrorWithCode, statusCodes } from '@react-native-google-signin/google-signin'
import { db } from '@/firebaseConfig'


export default function LoginScreen() {
  GoogleSignin.configure()
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo)
      try {
        await setDoc(doc(db, "users", userInfo.user.id), {
          email: userInfo.user.email,
          name: userInfo.user.name
        })
      } catch (error) {
        console.error(error)
      }
    } catch (error) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.SIGN_IN_CANCELLED:
            // user cancelled the login flow
            break;
          case statusCodes.IN_PROGRESS:
            // operation (eg. sign in) already in progress
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            // play services not available or outdated
            break;
          default:
          // some other error happened
        }
      } else {
        // an error that's not related to google sign in occurred
      }
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      // setState({ user: null }); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };
 
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>Movies Match</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Button  onPress={signIn} title='Login with Google'/>
        <Button  onPress={signOut} title='Sign Out'/>
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
