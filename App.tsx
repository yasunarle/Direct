import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
// Hooks
import useCachedResources from './hooks/useCachedResources'
// Navigation
import Navigation from './navigation'
// Store
import store from './store'

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
