import React, { useEffect } from 'react'
import { View, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { StackActions, useNavigation } from '@react-navigation/native'
import { useRouter } from 'expo-router'

const AuthLoadingScreen = () => {
  const router = useRouter()

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const user = await AsyncStorage.getItem('user')
        if (user) {
          // router.navigate('home')
        } else {
          router.navigate('login')
        }
      } catch (error) {
        console.error(error)
        // router.navigate('error')
      }
    }
    checkLoginStatus()
  }, [router])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  )
}

export { AuthLoadingScreen }
