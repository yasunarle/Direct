import * as React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
// Screens
import TabOneScreen from '../screens/TabOneScreen'
import TabTwoScreen from '../screens/TabTwoScreen'
import TabThreeScreen from '../screens/TabThreeScreen'
import SearchScreen from '../screens/SearchScreen/index'
// Types
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types'

// Note: Setup
const BottomTab = createBottomTabNavigator<BottomTabParamList>()

type TabBarIconProps = { name: string; color: string }

const TabBarIcon = (props: TabBarIconProps) => {
  return <Ionicons size={30} {...props} />
}
const activeColor = '#7f5af0'

// Note: TabOne
const TabOneStack = createStackNavigator<TabOneParamList>()

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabOneStack.Navigator>
  )
}
// Note: Tab Two
const TabTwoStack = createStackNavigator<TabTwoParamList>()

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  )
}
// Note: SettingsSreen
const SettingsStack = createStackNavigator()

function SettingsNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingsScreen"
        component={TabThreeScreen}
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
    <BottomTab.Navigator initialRouteName="TabOne" tabBarOptions={{ activeTintColor: activeColor }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-contact" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
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
