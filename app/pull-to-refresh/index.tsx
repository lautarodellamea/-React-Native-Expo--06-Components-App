import { useThemeColor } from '@/hooks/useThemeColor';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { View, Text, ScrollView, RefreshControl } from 'react-native';

const PullToRefreshScreen = () => {

  const primaryColor = useThemeColor({}, 'primary');


  const [isRefreshing, setIsRefreshing] = useState(false)

  const onRefresh = async () => {
    setIsRefreshing(true)
    await new Promise(resolve => setTimeout(resolve, 3000))
    setIsRefreshing(false)
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          colors={[primaryColor, 'red', 'orange', 'green']} // en IOS no cambia esto, podemos poner un loader personalizado si queremos
        />
      }>
      <ThemedView margin>
        <ThemedText>PullToRefreshScreen</ThemedText>


      </ThemedView>
    </ScrollView>
  );
};
export default PullToRefreshScreen;
