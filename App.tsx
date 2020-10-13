import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
// Hooks
import useCachedResources from './hooks/useCachedResources'
// Navigation
import Navigation from './navigation'
// Store

export default function App() {
  const isLoadingComplete = useCachedResources()

  if (isLoadingComplete) {
    return (
      // ノッチとかの処理をしてくれる

      <SafeAreaProvider>
        <Navigation />
        <StatusBar />
      </SafeAreaProvider>
    )
  }
  return null
}
