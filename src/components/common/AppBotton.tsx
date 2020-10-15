import * as React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace'
// Constants
import Colors from '../../utils/constants/Colors'

type Props = {
  disabled?: boolean
  content: string
  onPress: () => any
}

// Note: Export
const AppBotton = ({ content, onPress, disabled = false }: Props) => {
  const styles = StyleSheet.create({
    appBtn: {
      borderColor: Colors.white,
      backgroundColor: disabled ? Colors.darkBeige : Colors.blue,
      paddingBottom: 10,
      paddingTop: 10,
      paddingLeft: 16,
      paddingRight: 16,
      borderRadius: 4,
    },
    appBtn__text: { fontSize: 20, fontWeight: 'bold', color: Colors.white },
  })

  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} style={styles.appBtn}>
      <Text style={styles.appBtn__text}>{content}</Text>
    </TouchableOpacity>
  )
}

export default AppBotton
