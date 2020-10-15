import React, { useContext, useEffect, useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import firebase from 'firebase'
// Types
import { BottomTabParamList } from '../../types'
// Store
import { dispatch, RootState } from '../store'
// Constants
import GlobalStyles from '../utils/constants/GlobalStyles'
import { auth } from '../plugins/Firebase'
// Components
import AppSpacer from '../components/common/AppSpacer'
import AppBotton from '../components/common/AppBotton'

type Props = {
  navigation: StackNavigationProp<BottomTabParamList, 'Home'>
}
export default function HomeScreen({ navigation }: Props) {
  const authUser = useSelector((state: RootState) => state.authUser)

  const [user, setUser] = useState(null)
  // Methods
  const handleLogOut = () => {
    dispatch.authUser.logOut()
  }
  const goNavigate = () => {
    navigation.navigate('Settings')
  }
  const addDB = () => {
    // firebase.firestore().collection('users').doc().set({
    //   name: 'test',
    // })
  }
  // Note: useEffect
  // useEffect(() => {
  //   // onAuthStateChanged returns an unsubscriber
  //   auth.onAuthStateChanged(async (res) => {
  //     setUser(res)
  //   })
  // }, [])
  return (
    <View style={styles.container}>
      {authUser.isLoggedIn ? (
        <Text>AuthUser Name: {authUser.name}</Text>
      ) : (
        <Text>not Logged in</Text>
      )}
      <AppSpacer height={20} />
      <AppBotton content="add data in firestore" onPress={addDB} />
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
