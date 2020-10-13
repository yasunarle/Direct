import * as React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
// Styles
import GlobalStyles from '../constants/GlobalStyles'
// Store
import { dispatch } from '../store'
export default function SettingsScreen() {
  const authUser = useSelector((state) => state.authUser)
  const handleLogIn = () => {
    dispatch.authUser.logIn()
  }
  return (
    <View style={styles.container}>
      {authUser.isLoggedIn ? <Text>authUser: {authUser.name}</Text> : <Text>not logged in</Text>}
      <TouchableOpacity style={GlobalStyles.appBtn} onPress={handleLogIn}>
        <Text style={GlobalStyles.appBtn__text}>Log in</Text>
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
