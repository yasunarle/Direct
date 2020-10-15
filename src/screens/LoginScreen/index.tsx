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
import AppCenterContainer from '../../components/common/AppCenterContainer'
import AppSpacer from '../../components/common/AppSpacer'
import AppBotton from '../../components/common/AppBotton'
import AppTextInput from '../../components/common/AppTextInput'

export default function LoginScreen() {
  // Note: State
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isFullInputs, setIsFullInputs] = useState(false)
  // Note: Methods
  const handleLogin = () => {
    dispatch.authUser.logIn()
  }
  // Note: useEffect
  useEffect(() => {
    if (email && password) {
      setIsFullInputs(true)
      return
    }
    setIsFullInputs(false)
  }, [email, password])
  return (
    <View style={styles.container}>
      <AppCenterContainer backgroundColor={Colors.navy} height={200}>
        <Text style={GS.appTitle}>Direct</Text>
      </AppCenterContainer>
      <View style={styles.mainContant}>
        <AppSpacer height={30} />
        <Text style={styles.h1}>Login</Text>
        <AppSpacer height={40} />
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
          isPassword={true}
          value={password}
          placeholder="password"
          onChangeText={(value) => {
            setPassword(value)
          }}
          onPressClossBtn={() => {
            setPassword('')
          }}
        />
        <AppSpacer height={60} />
        <AppBotton content="Login" onPress={handleLogin} disabled={!isFullInputs} />
      </View>
      <View style={styles.bottomInformation}>
        <Text>Directは初めてですか？登録はこちら</Text>
      </View>
    </View>
  )
}
