import React, { useState, useEffect, useRef } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Camera } from 'expo-camera'

enum PermissionStatus {
  GRANTED = 'granted',
  UNDETERMINED = 'undetermined',
  DENIED = 'denied',
}

type ICamera = Camera | null

// Note: サンプル => components/SampleCameraScreen

export default function CameraScreen() {
  // State
  const [hasPermission, setHasPermission] = useState(false)
  const [cameraRef, setCameraRef] = useState<ICamera>(null)
  const [type, setType] = useState<PermissionStatus>(Camera.Constants.Type.front)

  // Methods
  const getPermisson = async () => {
    const { status } = await Camera.requestPermissionsAsync()
    setHasPermission(status === 'granted')
  }
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
  // useEffect
  useEffect(() => {
    getPermisson()
  }, [])

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
        {/* いろいろ要素を追加するなら View を 挟んだ方が良さそう */}
      </Camera>
    </View>
  )
}
