import * as React from 'react'
import { View } from 'react-native'

type Props = {
  width: number
}

const AppWidthSpacer = ({ width }: Props) => {
  return <View style={{ width }} />
}

export default AppWidthSpacer
