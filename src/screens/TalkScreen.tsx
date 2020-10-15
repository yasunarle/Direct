import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
// Types
import { BottomTabParamList } from '../../types'

// Note: Setup
type Props = StackScreenProps<BottomTabParamList, 'Talk'>

export default function TabTwoScreen({ navigation, route }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>トーク画面</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})
