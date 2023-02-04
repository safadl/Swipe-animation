import React from "react";
import { StyleSheet } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { Page } from "./Page";

const Drinks = [
  {
    source: require("../assets/images/pineapple.png"),
    title: "Sweet Pineapple",
    price: "$25.99",
    description:'A sweet pineapple drink is a refreshing beverage made with juicy, ripe pineapples blended with sugar and other ingredients to create a sweet and tangy mixture.'
  },
  {
    source: require("../assets/images/lime.png"),
    title: "Fresh Lime",
    price: "$25.99",
    description:'A fresh lime drink is a zesty and tangy beverage made from freshly squeezed limes, sugar, and water. The ingredients are combined to create a tart and sweet drink that is both invigorating and thirst-quenching. '
  },
  {
    source: require("../assets/images/cola.png"),
    title: "Cola",
    price: "$25.99",
    description:'Carbonated beverage flavored with caramel, cinnamon, and other spices, and sweetened with sugar or artificial sweeteners. It is one of the most popular soft drinks in the world and is recognizable by its brown color and classic taste. '
  },
  {
    source: require("../assets/images/energy.png"),
    title: "Energy",
    price: "$25.99",
    description:'An energy drink is a type of beverage that contains caffeine, sugar, and other stimulants intended to boost energy and alertness. '
  },
  {
    source: require("../assets/images/jungle.png"),
    title: "Jungle Drink",
    price: "$25.99",
    description:'A jungle drink is a tropical, fruity beverage made with a blend of fresh, exotic fruits and juices. It typically features ingredients such as pineapples, mangoes, coconuts, and other tropical flavors.'
  },
  {
    source: require("../assets/images/coconut.png"),
    title: "Coconut Water",
    price: "$25.99",
    description:'Coconut water is a clear, slightly sweet liquid from the center of young green coconuts. It is a natural source of hydration and electrolytes, '
  },
  {
    source: require("../assets/images/soda.png"),
    title: "Soda",
    price: "$25.99",
    description:'A soda is a carbonated, sweetened soft drink that comes in a variety of flavors. It is typically made with a base of water, sugar, and flavorings.'
  },
];

export default function PagesComponent() {
  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    translateX.value = event.contentOffset.x;
  });

  return (
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
            description={drink.description}
          />
        );
      })}
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3e566c",
  },
});
