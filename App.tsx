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
// test
import './src/plugins/GoogleTranslate'

export default function App() {
  const isLoadingComplete = useCachedResources()

  if (isLoadingComplete) {
    return (
      // ノッチとかの処理をしてくれる
      <SafeAreaProvider>
        <Provider store={store}>
          <Navigation />
        </Provider>
        <StatusBar />
      </SafeAreaProvider>
    )
  }
  return null
}
