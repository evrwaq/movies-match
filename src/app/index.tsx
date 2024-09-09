import AsyncStorage from '@react-native-async-storage/async-storage'
import { useRouter } from 'expo-router'
import { useEffect } from 'react'

export default function InitialPageHandler() {
  const router = useRouter()

  useEffect(() => {
    const getUserData = async () => {
      const userData = await AsyncStorage.getItem('user')
      if (userData) {
        router.replace('/home')
      } else {
        router.replace('/login')
      }
    }
    getUserData()
  }, [router])

  return null
}
