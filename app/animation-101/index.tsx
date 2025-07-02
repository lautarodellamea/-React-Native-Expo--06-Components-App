import { useAnimation } from "@/hooks/useAnimation";
import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedView from "@/presentation/shared/ThemedView";
import { useRef } from "react";
import { Animated, Easing, Text, View } from "react-native";

const Animation101Screen = () => {

  //  /*  const animatedOpacity = useRef(new Animated.Value(0)).current; // creamos un animated value que va a ir de 0 a lo que querramos
  //   const animatedTop = useRef(new Animated.Value(-100)).current;

  //   const fadeIn = () => {
  //     Animated.timing(animatedOpacity, {
  //       toValue: 1,
  //       duration: 300,
  //       useNativeDriver: true, // para acerlo acelereado por hardware
  //       /* acelerada por hardware, es decir, utilizando el motor nativo de animación del sistema operativo (iOS o Android) */
  //     }).start();

  //     Animated.timing(animatedTop, {
  //       toValue: 0,
  //       duration: 700,
  //       useNativeDriver: true,
  //       // easing: Easing.elastic(1.5)
  //       easing: Easing.bounce
  //     }).start();
  //   };

  //   const fadeOut  = () => {
  //     Animated.timing(animatedOpacity, {
  //       toValue: 0,
  //       duration: 300,
  //       useNativeDriver: true,
  //     }).start( () => animatedTop.resetAnimation());
  //     // }).start( () => animatedTop.setValue(-100));

  //     // Animated.timing(animatedTop, {
  //     //   toValue: -100,
  //     //   duration: 700,
  //     //   useNativeDriver: true,
  //     // }).start();
  //   }; */
  
  // AHORA USAREMOS PASAMOS ESTA LOGICA A UN CUSTOM HOOK Y MAS PROFESIONAL
  const { fadeIn, fadeOut, startMovingTopPosition, animatedOpacity, animatedTop } = useAnimation();


  return (
    <ThemedView margin className="justify-center items-center flex-1">
      {/* <Text>Animation101Screen</Text> */}

      <Animated.View className="bg-light-secondary dark:bg-dark-secondary rounded-xl"
        style={{ 
          width: 150,
          height: 150,
          opacity: animatedOpacity,
          transform: [{ translateY: animatedTop }]
         }}
      />

      <ThemedButton className="my-5" onPress={() => {
        console.log("FadeIn")
        fadeIn({})
        startMovingTopPosition({
          duration: 700,
          easing: Easing.bounce
        })
        
      }}> 
        FadeIn
      </ThemedButton>
      <ThemedButton className="my-5" onPress={() => {
        console.log("FadeOut")
        fadeOut({})
      }}>
        FadeOut
      </ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
