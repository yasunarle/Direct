import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View, TextInput } from 'react-native'
// Styles
import GS from '../../utils/constants/GlobalStyles'
import Colors from '../../utils/constants/Colors'
import styles from './styles'
// Store
import { dispatch, RootState } from '../../store'
// Components
import AppSpacer from '../../components/common/AppSpacer'
import AppBotton from '../../components/common/AppBotton'
import AppTextInput from '../../components/common/AppTextInput'

export default function LoginScreen() {
  // Note: State
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // Note: Methods
  const handleLogin = () => {
    dispatch.authUser.logIn()
  }
  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          height: 200,
          backgroundColor: Colors.navy,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={GS.appTitle}>Direct</Text>
      </View>
      <View
        style={{
          width: '100%',
          height: 0.8,
          backgroundColor: Colors.borderNavy,
        }}
      ></View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          padding: 20,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
          }}
        >
          新規アカウント登録
        </Text>
        <AppSpacer height={20} />
        <AppTextInput
          value={email}
          placeholder="メールアドレス"
          onChangeText={(value) => {
            setEmail(value)
          }}
          onPressClossBtn={() => {
            setEmail('')
          }}
        />
        <AppSpacer height={20} />
        <AppTextInput
          value={password}
          placeholder="password"
          onChangeText={(value) => {
            setPassword(value)
          }}
          onPressClossBtn={() => {
            setPassword('')
          }}
        />
        <AppSpacer height={20} />
        <AppBotton content="Login" onPress={handleLogin} />
      </View>
      {/* Bottom Footer */}
      <View
        style={{
          width: '100%',
          height: 52,
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 0,
          borderTopColor: 'lightgrey',
          borderTopWidth: 0.6,
          backgroundColor: Colors.backgroundGray,
        }}
      >
        <Text>Directは初めてですか？登録はこちら</Text>
      </View>
    </View>
  )
}
