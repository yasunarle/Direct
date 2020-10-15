import * as React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
// Styles
import GlobalStyles from '../utils/constants/GlobalStyles'
// Store
import { dispatch, RootState } from '../store'
// Components
import AppBotton from '../components/common/AppBotton'

export default function SettingsScreen() {
  // State
  const authUser = useSelector((state: RootState) => state.authUser)

  // Methods
  const handleLogOut = () => {
    dispatch.authUser.logOut()
  }

  return (
    <View style={styles.container}>
      <AppBotton content="log out" onPress={handleLogOut} />
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
