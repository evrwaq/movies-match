import { Button, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useAuthentication } from '../hooks/useAuthentication'

export default function HomeScreen() {
  const { cleanAsyncStorage } = useAuthentication()

  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Button title="Clean Async Storage" onPress={cleanAsyncStorage} />
    </SafeAreaView>
  )
}
