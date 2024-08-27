import { StyleSheet, View, Text } from 'react-native';

export default function MoviesCatalogScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movies Match</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    color: '#fcfcfc'
  },
})
