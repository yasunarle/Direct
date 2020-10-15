import React, { ReactNode } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
// Constants
import Colors from '../../utils/constants/Colors'

type Props = {
  children: ReactNode
  backgroundColor: string
  height: number
}

const AppCenterContainer = ({ children, backgroundColor, height }: Props) => {
  const styles = StyleSheet.create({
    container: {
      height,
      backgroundColor,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
  return <View style={styles.container}>{children}</View>
}
export default AppCenterContainer
