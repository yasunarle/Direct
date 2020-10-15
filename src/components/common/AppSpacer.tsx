import * as React from 'react'
import { View } from 'react-native'

type Props = {
  height: number
}
const AppSpacer = ({ height }: Props) => {
  return (
    <View
      style={{
        height,
      }}
    ></View>
  )
}
export default AppSpacer
