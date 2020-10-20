import React, { useState } from 'react'
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

type Props = {
  item: IMessage
}

const AppMessage = ({ item }: Props) => {
  console.log('--- AppMessage ---')
  console.log(process.env.REACT_APP_GOOGLE_TRANSLATE_KEY)
  const [sampleState, setSampleState] = useState(null)
  const apiURL =
    'https://script.google.com/macros/s/AKfycbzxDulFYd9rpgU6i7BLpjgrWKMt80Q7b0CT7JuHOL0xghFlmovj/exec'

  // Note: Methods
  const translateMessage = async () => {
    // const translatedText = Translate('こんにちわ', {
    //   from: 'ja',
    //   to: 'en',
    // }).then((res) => {
    //   return res.text
    // })
    // console.log(translatedText)
    // const res = await axios.get(apiURL, {
    //   params: {
    //     text: 'こんにちわ',
    //     source: 'ja',
    //     target: 'en',
    //   },
    // })
    // console.log(res)
  }

  return (
    <View style={styles.container} key={item.id}>
      <Text style={styles.content}>{item.content}</Text>
      <AppSpacer height={4} />
      <View style={styles.toolsContainer}>
        {/* Google Translate */}
        <TouchableOpacity onPress={translateMessage}>
          <AntDesign name="google" size={24} color={Colors.blue} />
          <AppWidthSpacer width={4} />
          <Text style={{ color: Colors.beige }}>翻訳</Text>
        </TouchableOpacity>

        <AppWidthSpacer width={20} />
        {/* Stack My List */}
        <AntDesign name="download" size={24} color={Colors.white} />
      </View>
      <AppSpacer height={20} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // opacity: 0.3,
    // shadowOpacity: 1,
  },
  content: {
    fontSize: 18,
    color: Colors.beige,
  },
  toolsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})
export default AppMessage
