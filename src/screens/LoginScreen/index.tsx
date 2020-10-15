import { StackScreenProps } from '@react-navigation/stack'
import * as React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
// Styles
import GS from '../../utils/constants/GlobalStyles'
import styles from './styles'
// Store
import { dispatch, RootState } from '../../store'

export default function LoginScreen() {
  const handleLogin = () => {
    dispatch.authUser.logIn()
  }
  return (
    <View style={styles.container}>
      <Text>Direct</Text>
      <TouchableOpacity onPress={handleLogin} style={GS.appBtn}>
        <Text style={GS.appBtn__text}>login</Text>
      </TouchableOpacity>
    </View>
  )
}
