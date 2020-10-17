import React, { useState, useEffect, useRef } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native'
import { Camera } from 'expo-camera'
import MaskedView from '@react-native-community/masked-view'
// Styles
import styles from './styles'
// Icons
import { MaterialIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
// Components
// import AppSpacer from '../../components/common/AppSpacer'
import TheTimer from '../../components/CameraScreen/TheTimer'
import AppMessage from '../../components/CameraScreen/AppMessage'
// Constants
import Colors from '../../utils/constants/Colors'

// Note: Setup Icon
type IconProps = {
  // name: string
  // color: string
  // size?: number
  onPress: () => any
}

const SendIcon = ({ onPress }: IconProps) => {
  return <MaterialIcons name="send" size={30} color={Colors.blue} onPress={onPress} />
}

const GoogleIcon = ({ onPress }: IconProps) => {
  return <AntDesign name="google" size={24} color="black" onPress={onPress} />
}

// Note: Setup renderMessage
interface IMessage {
  id: string
  content: string
}

type RenderMessageProps = {
  item: IMessage
}

const renderMessage = ({ item }: RenderMessageProps) => <AppMessage item={item} />

// Note: Setup CameraScreen
enum PermissionStatus {
  GRANTED = 'granted',
  UNDETERMINED = 'undetermined',
  DENIED = 'denied',
}

type ICamera = Camera | null

const CameraScreen = () => {
  // Note: State Camera
  const [hasPermission, setHasPermission] = useState(false)
  const [cameraRef, setCameraRef] = useState<ICamera>(null)
  const [type, setType] = useState<PermissionStatus>(Camera.Constants.Type.front)
  // Note: State Messages
  const [messageInput, setMessageInput] = useState('')
  const [messages, setMessages] = useState<IMessage[]>([])
  // Note: ref
  let scrollViewRef: FlatList | null

  // Methods
  const getPermisson = async () => {
    const { status } = await Camera.requestPermissionsAsync()
    setHasPermission(status === 'granted')
  }

  const sendMessage = () => {
    const _id = Math.random().toString()
    setMessages([...messages, { content: messageInput, id: _id }])
    setMessageInput('')
  }

  // Note: Methods, Sample
  const sampleTakePic = async () => {
    if (cameraRef) {
      let photo = await cameraRef.takePictureAsync()
      console.log('photo', photo)
    }
  }
  const sampleChangeCamera = () => {
    setType(
      type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back
    )
  }

  // Note: useEffect, created
  useEffect(() => {
    console.log('--- CameraScreen mount ---')
    getPermisson()
    // Note: Sample Messages Data
    setMessages([
      { content: 'hello', id: '3142' },
      { content: 'こんにちわ', id: '839279' },
    ])
  }, [])
  // Note: useEffect, Watching...

  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  return (
    <View style={styles.container}>
      <Camera
        style={{ flex: 1 }}
        type={type}
        ref={(ref) => {
          setCameraRef(ref)
        }}
      >
        <View style={styles.viewInCamera}>
          {/* Top Container */}
          <TheTimer />
          {/* Bottom Container */}
          <KeyboardAvoidingView style={styles.bottomContainer} behavior="padding">
            <FlatList
              style={styles.messagesContainer}
              data={messages}
              renderItem={renderMessage}
              ref={(ref) => {
                scrollViewRef = ref
              }}
              onContentSizeChange={() => {
                scrollViewRef?.scrollToEnd({ animated: true })
              }}
            />
            {/* Messenger Contaier */}
            <View style={styles.messengerConatiner}>
              <TextInput
                style={styles.messengerContainer__input}
                value={messageInput}
                placeholder="message..."
                onChangeText={(value) => setMessageInput(value)}
              />
              <SendIcon onPress={sendMessage} />
            </View>
          </KeyboardAvoidingView>
        </View>
      </Camera>
    </View>
  )
}

export default CameraScreen
