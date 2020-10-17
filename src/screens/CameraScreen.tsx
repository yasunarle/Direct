import React, { useState, useEffect, useRef } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  TextInput,
  ScrollView,
} from 'react-native'
import { Camera } from 'expo-camera'
// Icons
import { MaterialIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
// Components
import AppSpacer from '../components/common/AppSpacer'
import TheTimer from '../components/CameraScreen/TheTimer'
import AppMessage from '../components/CameraScreen/AppMessage'
// Constants
import Colors from '../utils/constants/Colors'

// Notes Setup Icon

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

// Note: Setup CameraScreen
enum PermissionStatus {
  GRANTED = 'granted',
  UNDETERMINED = 'undetermined',
  DENIED = 'denied',
}

type ICamera = Camera | null

interface IMessage {
  id: string
  content: string
}

type RenderMessageProps = {
  item: IMessage
}
const renderMessage = ({ item }: RenderMessageProps) => <AppMessage item={item} />

// Note: サンプル => components/SampleCameraScreen

export default function CameraScreen() {
  // Note: State Camera
  const [hasPermission, setHasPermission] = useState(false)
  const [cameraRef, setCameraRef] = useState<ICamera>(null)
  const [type, setType] = useState<PermissionStatus>(Camera.Constants.Type.front)
  // Note: State Messages
  const [messageInput, setMessageInput] = useState('')
  const [messages, setMessages] = useState<IMessage[]>([])
  // ref
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
    console.log('--- mount ---')
    getPermisson()
    // Note: Sample Messages Data
    setMessages([
      { content: 'hello', id: '3142' },
      { content: 'こんにちわ', id: '839279' },
    ])
  }, [])
  // Note: useEffect, Watching...
  useEffect(() => {
    scrollViewRef?.scrollToEnd({ animated: true })
  }, [messages])

  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        type={type}
        ref={(ref) => {
          setCameraRef(ref)
        }}
      >
        <View style={{ flex: 1, paddingTop: 20 }}>
          {/* Top Container */}
          <TheTimer />
          {/* Bottom Container */}
          <KeyboardAvoidingView
            behavior="padding"
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
            }}
          >
            <FlatList
              data={messages}
              renderItem={renderMessage}
              style={{
                height: 200,
              }}
              ref={(ref) => {
                scrollViewRef = ref
              }}
            />

            {/* TextInput Contaier */}
            <View
              style={{
                minHeight: 50,
                width: '100%',
                paddingLeft: 10,
                paddingRight: 10,
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: Colors.backgroundLightNavy,
              }}
            >
              <TextInput
                style={{
                  flex: 1,
                  padding: 6,
                  backgroundColor: Colors.backgroundGray,
                  fontSize: 18,
                  borderRadius: 3,
                  marginRight: 8,
                }}
                value={messageInput}
                placeholder="message..."
                onChangeText={(value) => setMessageInput(value)}
              />

              {/* send icon */}
              <SendIcon onPress={sendMessage} />
            </View>
          </KeyboardAvoidingView>
          {/* <View
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
            }}
          >
         
          </View> */}
        </View>
      </Camera>
    </View>
  )
}
