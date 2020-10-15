import { StyleSheet } from 'react-native'
// Contants
import Colors from '../../utils/constants/Colors'

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
  },
  mainContant: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.navy,
  },
  bottomInformation: {
    width: '100%',
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    borderTopColor: 'lightgrey',
    borderTopWidth: 0.6,
    backgroundColor: Colors.backgroundGray,
  },
})

export default styles
