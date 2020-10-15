import * as React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace'
// Constants
import Colors from '../../utils/constants/Colors'

type Props = {
  content: string
  onPress: () => any
}

// export

const AppBotton = ({ content, onPress }: Props) => {
  const styles = StyleSheet.create({
    appBtn: {
      borderColor: Colors.white,
      backgroundColor: Colors.blue,
      // borderWidth: 2,
      paddingBottom: 10,
      paddingTop: 10,
      paddingLeft: 16,
      paddingRight: 16,
      borderRadius: 4,
    },
    appBtn__text: { fontSize: 20, fontWeight: 'bold', color: Colors.white },
  })

  return (
    <TouchableOpacity onPress={onPress} style={styles.appBtn}>
      <Text style={styles.appBtn__text}>{content}</Text>
    </TouchableOpacity>
  )
}

export default AppBotton
