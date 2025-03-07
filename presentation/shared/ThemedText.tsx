import { View, Text, TextProps } from 'react-native'
import React from 'react'

interface Props extends TextProps {
  className?: string
  type?: 'normal' | 'h1' | 'h2' | 'semibold' | 'link'
}

const ThemedText = ({ className, type, ...rest }: Props) => {
  return (
    // className='mt-10 text-3xl text-light-primary dark:text-dark-text'
    <Text
      className={[
        type === 'normal' ? 'font-normal' : undefined,
        type === 'h1' ? 'text-3xl' : undefined,
        type === 'h2' ? 'text-2xl' : undefined,
        type === 'semibold' ? 'font-semibold' : undefined,
        type === 'link' ? 'font-normal underline' : undefined,
        className,

      ].join(' ')}
      {...rest} />


  )
}

export default ThemedText