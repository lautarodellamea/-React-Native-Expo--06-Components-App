import { View, Text, Switch, Pressable, Platform } from 'react-native'
import React from 'react'
import ThemedText from './ThemedText'
import { useThemeColor } from '@/hooks/useThemeColor'

interface Props {
  text?: string
  value: boolean
  className?: string

  onValueChange: (value: boolean) => void
}

const isAndroid = () => Platform.OS === 'android'

const ThemedSwitch = ({ text, value, className, onValueChange }: Props) => {

  const switchActiveColor = useThemeColor({}, 'primary');

  return (
    <View
      className={`flex flex-row items-center justify-between active:opacity-80 ${className}`}
    // onPress={() => onValueChange(!value)} // esto en IOS brinca el switch (deberiamos tomar la referencia del elemento, etc. algunas cosas funcionan mejor en IOS que en Android y viceversa), poner un Pressable en vez de View pero esto rompe la animacion del switch
    >
      {text ? <ThemedText type='h2'>{text}</ThemedText> : <View />}
      <Switch
        value={value}
        onValueChange={onValueChange}
        // ios_backgroundColor={value ? switchActiveColor : ''} // esto solo para IOS
        thumbColor={isAndroid() ? switchActiveColor : ''}
        trackColor={{
          false: 'grey',
          true: switchActiveColor
        }}
      />
    </View>
  )
}

export default ThemedSwitch