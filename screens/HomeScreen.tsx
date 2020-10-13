import * as React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
// Types
import { BottomTabParamList } from '../types'
// Store
import { dispatch } from '../store'
// Constants
import GlobalStyles from '../constants/GlobalStyles'

type Props = {
  navigation: StackNavigationProp<BottomTabParamList, 'Home'>
}
export default function HomeScreen({ navigation }: Props) {
  const authUser = useSelector((state) => state.authUser)

  const handleLogOut = () => {
    dispatch.authUser.logOut()
  }
  const goNavigate = () => {
    navigation.navigate('Settings')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      {authUser.isLoggedIn ? <Text>authUser: {authUser.name}</Text> : <Text>not Logged in</Text>}
      <View
        style={{
          width: '100%',
          height: 50,
        }}
      ></View>
      <TouchableOpacity style={GlobalStyles.appBtn} onPress={handleLogOut}>
        <Text style={GlobalStyles.appBtn__text}>Log Out</Text>
      </TouchableOpacity>
      <View
        style={{
          width: '100%',
          height: 50,
        }}
      ></View>
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
