import * as React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
// Screens
import HomeScreen from '../screens/HomeScreen'
import TalkScreen from '../screens/TalkScreen'
import SettingsScreen from '../screens/SettingsScreen'
import SearchScreen from '../screens/SearchScreen/index'
// Types
import { BottomTabParamList, HomeParamList, TalkParamList } from '../types'

// Note: Setup
const BottomTab = createBottomTabNavigator<BottomTabParamList>()

type TabBarIconProps = { name: string; color: string }

const TabBarIcon = (props: TabBarIconProps) => {
  return <Ionicons size={30} {...props} />
}
const activeColor = '#7f5af0'

// Note: HomeScreen
const HomeStack = createStackNavigator<HomeParamList>()

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerTitle: 'ホーム' }} />
    </HomeStack.Navigator>
  )
}
// Note: TalkScreen
const TalkStack = createStackNavigator<TalkParamList>()

function TalkNavigator() {
  return (
    <TalkStack.Navigator>
      <TalkStack.Screen name="Talk" component={TalkScreen} options={{ headerTitle: 'トーク' }} />
    </TalkStack.Navigator>
  )
}
// Note: SettingsSreen
const SettingsStack = createStackNavigator()

function SettingsNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ headerTitle: 'Settings' }}
      ></SettingsStack.Screen>
    </SettingsStack.Navigator>
  )
}
// Note: Search Screen
const SearchStack = createStackNavigator()

function SearchNavigator() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ headerTitle: 'Search' }}
      />
    </SearchStack.Navigator>
  )
}

// Note: export default
export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="Home" tabBarOptions={{ activeTintColor: activeColor }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-contact" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Talk"
        component={TalkNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-search" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-cog" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  )
}
