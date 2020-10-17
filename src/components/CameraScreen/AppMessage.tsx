import * as React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
// Icons
import { MaterialIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
// Components
import AppWidthSpacer from '../common/AppWidthSpacer'
import AppSpacer from '../common/AppSpacer'
// Constants
import Colors from '../../utils/constants/Colors'

interface IMessage {
  id: string
  content: string
}

// Note: Setup

type Props = {
  item: IMessage
}

const AppMessage = ({ item }: Props) => {
  return (
    <View key={item.id}>
      <Text
        style={{
          fontSize: 18,
          color: Colors.beige,
        }}
      >
        {item.content}
      </Text>
      <AppSpacer height={4} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        {/* Google Translate */}
        <AntDesign name="google" size={24} color={Colors.blue} />
        <AppWidthSpacer width={4} />
        <Text style={{ color: Colors.beige }}>翻訳</Text>
        <AppWidthSpacer width={20} />
        {/* Stack My List */}
        <AntDesign name="download" size={24} color={Colors.white} />
      </View>
      <AppSpacer height={20} />
    </View>
  )
}
export default AppMessage
