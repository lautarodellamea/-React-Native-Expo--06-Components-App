import { useAnimation } from '@/hooks/useAnimation'
import { useState } from 'react'
import { View, Text, ActivityIndicator, StyleProp, ViewStyle, Image, ImageStyle, Animated } from 'react-native'

interface Props {
  uri: string

  // podemos tipar el estilo de cualquier componente en react native de esta forma
  // style: StyleProp<ViewStyle>
  style: StyleProp<ImageStyle>
}

const FadeImages = ({ uri, style }: Props) => {

  const [isLoaded, setIsLoaded] = useState(false)
  const { animatedOpacity, fadeIn } = useAnimation()


  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {
        !isLoaded && (
          <ActivityIndicator
            style={{ position: 'absolute' }}
            color="grey"
            size={40} />
        )
      }
      {/* <Text>FadeImages</Text> */}
      <Animated.Image
        source={{ uri }}
        style={[style, { opacity: animatedOpacity }]}

        // fucnion que se ejecuta cuando la imagen se ha cargado
        onLoadEnd={() => {
          fadeIn({
            duration: 2000
          })
          setIsLoaded(true)
        }}

      />
    </View>
  )
}

export default FadeImages