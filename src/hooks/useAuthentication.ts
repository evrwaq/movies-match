import {
  GoogleSignin,
  isErrorWithCode,
  statusCodes,
} from '@react-native-google-signin/google-signin'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFirebase } from './useFirebase'
import { User } from '../models'

export function useAuthentication() {
  const { addUser } = useFirebase()

  const signIn = async () => {
    try {
      GoogleSignin.configure()
      const userInfo = await GoogleSignin.signIn()
      const user: User = {
        id: userInfo.data!.user.id,
        email: userInfo.data!.user.email,
        name: userInfo.data!.user.name!,
      }
      await AsyncStorage.setItem('user', JSON.stringify(user))
      await addUser(user)
    } catch (error) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.SIGN_IN_CANCELLED:
            // user cancelled the login flow
            break
          case statusCodes.IN_PROGRESS:
            // operation (eg. sign in) already in progress
            break
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            // play services not available or outdated
            break
          default:
          // some other error happened
        }
      } else {
        // an error that's not related to google sign in occurred
      }
    }
  }

  const signOut = async () => {
    try {
      GoogleSignin.configure()
      await GoogleSignin.signOut()
      // setState({ user: null }); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error)
    }
  }

  return {
    signIn,
    signOut,
  }
}
