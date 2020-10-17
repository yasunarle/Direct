import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const TheTimer = () => {
  // Note: State
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)
  const [startedDate, setStartedDate] = useState(new Date())
  const [formatedTimer, setFormatedTimer] = useState('')

  // Note: Methods
  const incrementSeconds = () => {
    setSeconds((value) => value + 1)
  }
  const formateStringTimer = () => {
    const _seconds = seconds < 10 ? `0${seconds}` : `${seconds}`
    const _minutes = minutes < 10 ? `0${minutes}` : `${minutes}`
    return `${_minutes}:${_seconds}`
  }
  // Note: useEffect, created
  useEffect(() => {
    const intervalId = setInterval(incrementSeconds, 1000)
    // willUnMount()
    return () => {
      clearInterval(intervalId)
    }
  }, [])
  // Note: useEffect, watching...
  useEffect(() => {
    // console.log('- watch timer -')
    if (seconds >= 60) {
      setSeconds(0)
      setMinutes((value) => value + 1)
    }
    setFormatedTimer(formateStringTimer())
  }, [minutes, seconds])
  return (
    <View>
      <Text>{formatedTimer}</Text>
    </View>
  )
}
export default TheTimer
