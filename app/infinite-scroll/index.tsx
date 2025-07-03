import { useThemeColor } from '@/hooks/useThemeColor';
import FadeImages from '@/presentation/images/FadeImages';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator } from 'react-native';

const InfiniteScrollScreen = () => {

  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const primaryColor = useThemeColor({}, 'primary');


  const loadMore = () => {
    const nowArray = Array.from({ length: 10 }, (_, index) => numbers.length + index + 1);

    setTimeout(() => {
      setNumbers([...numbers, ...nowArray]);
    }, 3000);
  };

  return (
    <ThemedView>
      <FlatList
        data={numbers}
        renderItem={({ item }) => <ListItem number={item} />}
        keyExtractor={(item) => item.toString()}

        // cuando se llega al final de la lista
        onEndReached={loadMore}
        onEndReachedThreshold={0.5} // en el 50% de la pantalla empieza a cargar mas

        // loader
        ListFooterComponent={() => (
          <View style={{ height: 150, justifyContent: "center" }}>
            <ActivityIndicator size={40} color={primaryColor} />
          </View>
        )}
      />
    </ThemedView>
  );
};
export default InfiniteScrollScreen;



interface ListItemProps {
  number: number;
}

const ListItem = ({ number }: ListItemProps) => {
  return (
    <FadeImages uri={`https://picsum.photos/id/${number}/500/400`} style={{ width: "100%", height: 400 }} />
    // <Image source={{ uri: `https://picsum.photos/id/${number}/500/400` }} style={{ width: "100%", height: 400 }} />
  );
};