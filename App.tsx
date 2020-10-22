import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
// Hooks
import useCachedResources from './src/hooks/useCachedResources'
// Navigation
import Navigation from './src/navigation'
// Store
import store from './src/store'
// Translate Test
import Translate from './src/plugins/GoogleTranslate'

export default function App() {
  Translate('i should go to home', 'en', 'ja')
  Translate('私は家に帰るべきです', 'ja', 'en')
  return (
    // ノッチとかの処理をしてくれる
    <SafeAreaProvider>
      <Provider store={store}>
        <Navigation />
      </Provider>
      <StatusBar />
    </SafeAreaProvider>
  )
  // const isLoadingComplete = useCachedResources()

  // if (isLoadingComplete) {
  //   return (
  //     // ノッチとかの処理をしてくれる
  //     <SafeAreaProvider>
  //       <Provider store={store}>
  //         <Navigation />
  //       </Provider>
  //       <StatusBar />
  //     </SafeAreaProvider>
  //   )
  // }
  return null
}
