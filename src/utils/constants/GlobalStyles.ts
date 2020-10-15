import { StyleSheet } from 'react-native'
// Constans
import Colors from './Colors'
const GlobalStyles = StyleSheet.create({
  appTitle: {
    color: Colors.lightNavy,
    fontSize: 34,
  },
  appBtn: {
    borderColor: Colors.white,
    backgroundColor: Colors.purple,
    borderWidth: 2,
    padding: 20,
    borderRadius: 4,
  },
  appBtn__text: { fontSize: 20, fontWeight: 'bold', color: Colors.white },
  appMargin: {
    width: '100%',
  },
})

export default GlobalStyles
