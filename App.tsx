import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import theme from './theme'

SplashScreen.preventAutoHideAsync()

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.GREY[100],
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default function App() {
  const [fontsLoaded] = useFonts({
    'Metropolis-Bold': require('./assets/fonts/Metropolis-Bold.otf'),
    'Metropolis-SemiBold': require('./assets/fonts/Metropolis-SemiBold.otf'),
    'Metropolis-Regular': require('./assets/fonts/Metropolis-Regular.otf'),
    'Metropolis-Medium': require('./assets/fonts/Metropolis-Medium.otf'),
    'Metropolis-Light': require('./assets/fonts/Metropolis-Light.otf'),
  })

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}
