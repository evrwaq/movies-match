import { Link, useRouter } from 'expo-router'
import { useEffect } from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function InitialPageHandler() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.navigate('/home')
    }, 2400)
  }, [router])
  // useEffect(() => {
  //   const a = false;
  //   if (a) {
  //     router.replace('/login')
  //   } else {
  //     router.replace('/home')
  //   }
  // }, [router])

  return (
    <SafeAreaView>
      <Text>Initial Page</Text>
      <Link replace href="/login">
        Login
      </Link>
    </SafeAreaView>
  )
}
