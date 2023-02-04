import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import { Page } from './Page';
import { NavigationContainer } from '@react-navigation/native';

const Drinks = [
  {
    source: require("./assets/images/pineapple.png"),
    title: 'Sweet Pineapple',
    price: '$25.99'

  },
  {
    source: require("./assets/images/lime.png"),
    title: 'Fresh Lime',
    price: '$25.99'


  },
  {
    source: require("./assets/images/cola.png"),
    title: 'Cola',
    price: '$25.99'


  },
  {
    source: require("./assets/images/energy.png"),
    title: 'Energy',
    price: '$25.99'


  },
  {
    source: require("./assets/images/jungle.png"),
    title: 'Jungle Drink',
    price: '$25.99'


  },
  {
    source: require("./assets/images/coconut.png"),
    title: 'Coconut Water',
    price: '$25.99'


  },
  {
    source: require("./assets/images/soda.png"),
    title: 'Soda',
    price: '$25.99'


  },
];


export default function App() {
  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    translateX.value = event.contentOffset.x;
  });

  return (
    <NavigationContainer>
    <Animated.ScrollView
      onScroll={scrollHandler}
      pagingEnabled
      scrollEventThrottle={16}
      horizontal
      style={styles.container}
    >
      {Drinks.map((drink, index) => {
        return (
          <Page
            key={index.toString()}
            source={drink.source}
            translateX={translateX}
            index={index}
            title={drink.title}
            price={drink.price}
          />
        );
      })}
    </Animated.ScrollView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3e566c',
  },
});