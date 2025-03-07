import { useEffect } from 'react';

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';


import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';
import { allRoutes } from '@/constants/Routes';

import "../global.css"

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {


  // usando el hook useColorScheme para manejar el tema
  // const backgroundColor = useThemeColor({ light: 'red', dark: 'blue' }, 'background');
  const backgroundColor = useThemeColor({ light: '', dark: '' }, 'background');

  const colorScheme = useColorScheme();


  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ backgroundColor: backgroundColor, flex: 1 }}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>

        {/* cambiar el a modo oscuro el cel para ver la funcionalidad */}
        {/* En la vida real usaremos o nativeWind o el hook que nos da expo para manejar el tema */}
        {/* <View className='bg-light-background dark:bg-dark-background'>
          <Text className='mt-10 text-3xl text-light-primary dark:text-dark-text'>Hola Mundo</Text>
        </View> */}

        {/* <Text className='mt-10 text-3xl text-light-primary dark:text-dark-text'>Hola Mundo</Text> */}


        {/* <ThemedView margin> */}

        {/* usando mis componentes personalizados*/}
        {/* <Text className='mt-10 text-3xl text-light-primary dark:text-dark-text'>Componente personalizado</Text> */}

        {/* Usando mi componente ThemedText */}
        {/* <ThemedText type='h1' className='mt-20 text-white' numberOfLines={2}>Mi componente ThemedText Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, voluptatum!</ThemedText> */}
        {/* </ThemedView> */}





        <Stack
          screenOptions={{
            headerShadowVisible: false,
            contentStyle: {
              backgroundColor: backgroundColor
            },
            headerStyle: {
              backgroundColor: backgroundColor
            }
          }}
        >

          <Stack.Screen name="index" options={{ title: '' }} />

          {
            allRoutes.map(route => (
              <Stack.Screen key={route.name} name={route.name} options={{ title: route.title }} />
            ))
          }


        </Stack>


      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
