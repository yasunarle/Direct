import * as React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
// Types
import { RootStackParamList } from '../../types'
// Constants
import AppBotton from '../components/common/AppBotton'

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const SignupScreen = ({ navigation }: Props) => {
  const handleGoLogIn = () => {
    navigation.navigate('Login')
  }
  const handleGoCamera = () => {
    navigation.navigate('Camera')
  }
  return (
    <View style={styles.container}>
      <AppBotton content="login page" onPress={handleGoLogIn} />
      <Text>sign up screen</Text>
      <AppBotton content="Camera Screen" onPress={handleGoCamera} />
    </View>
  )
}

export default SignupScreen
