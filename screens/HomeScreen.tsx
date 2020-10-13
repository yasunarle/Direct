import * as React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
// Types
import { BottomTabParamList } from '../types'

type Props = {
  navigation: StackNavigationProp<BottomTabParamList, 'Home'>
}
export default function HomeScreen({ navigation }: Props) {
  const goNavigate = () => {
    navigation.navigate('Settings')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <TouchableOpacity onPress={goNavigate}>
        <Text>Settings page</Text>
      </TouchableOpacity>
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
