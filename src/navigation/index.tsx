import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useSelector } from 'react-redux'
// Navigations
import BottomTabNavigator from './BottomTabNavigator'
import LinkingConfiguration from './LinkingConfiguration'
// Types
import { RootStackParamList } from '../../types'
// Screens
import NotFoundScreen from '../screens/NotFoundScreen'
import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'
import CameraScreen from '../screens/CameraScreen'
import WebRTCScreen from '../screens/WebRTCScreen'
// Store
import { dispatch, RootState } from '../store'
// Plugins
import '../plugins/Firebase'

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  )
}

const Stack = createStackNavigator<RootStackParamList>()

function RootNavigator() {
  const authUser = useSelector((state: RootState) => state.authUser)

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {authUser.isLoggedIn ? (
        <Stack.Screen name="Root" component={BottomTabNavigator} />
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} />
      <Stack.Screen name="WebRTC" component={WebRTCScreen} />
      {/* <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="Login" component={LoginScreen} /> */}
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  )
}
