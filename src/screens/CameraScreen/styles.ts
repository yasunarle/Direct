import { StyleSheet } from 'react-native'
// Constants
import Colors from '../../utils/constants/Colors'
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewInCamera: { flex: 1, paddingTop: 20 },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  messengerConatiner: {
    minHeight: 50,
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.backgroundLightNavy,
  },
  messengerContainer__input: {
    flex: 1,
    padding: 6,
    backgroundColor: Colors.backgroundGray,
    fontSize: 18,
    borderRadius: 3,
    marginRight: 8,
  },
})
export default styles
