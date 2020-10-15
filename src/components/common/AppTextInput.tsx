import * as React from 'react'
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'
// Constants
import Colors from '../../utils/constants/Colors'

type IconProps = {
  name: string
  color: string
  size?: number
  onPress: () => any
}

const ClossIcon = (props: IconProps) => {
  return <Entypo {...props} />
}

type Props = {
  value: string
  placeholder: string
  isPassword?: boolean
  onChangeText: (value: string) => void
  onPressClossBtn: () => void
}

const AppTextInput = ({
  value,
  placeholder,
  onChangeText,
  onPressClossBtn,
  isPassword = false,
}: Props) => {
  return (
    <View
      style={{
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 4,
        backgroundColor: Colors.backgroundLightGray,
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <TextInput
        style={{
          height: 50,
          flex: 1,
          color: Colors.white,
          fontSize: 16,
          fontWeight: 'bold',
        }}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isPassword}
        placeholder={placeholder}
        placeholderTextColor={Colors.darkBeige}
      />
      <ClossIcon size={20} name="circle-with-cross" color={Colors.blue} onPress={onPressClossBtn} />
    </View>
  )
}
export default AppTextInput
