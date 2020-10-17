import * as WebBrowser from "expo-web-browser"
import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

export default function GoodTools() {
  function handleHelpPress() {
    WebBrowser.openBrowserAsync(
      "https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet"
    )
  }
  return (
    <View>
      <Text>hello world</Text>
    </View>
  )
}
