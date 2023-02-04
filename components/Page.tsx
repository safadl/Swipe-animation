import React from "react";
import {
  Dimensions,
  View,
  StyleSheet,
  Text,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import Ionicons from "@expo/vector-icons/Ionicons";

const { height, width } = Dimensions.get("window");

const SIZE = width * 0.7;

interface PageProps {
  index: number;
  translateX: Animated.SharedValue<number>;
  source: ImageSourcePropType | undefined;
  title: string;
  price: string;
  description: string;
}

const Page: React.FC<PageProps> = ({
  index,
  translateX,
  source,
  title,
  price,
  description,
}) => {
  const inputRange = [(-index - 1) * width, index * width, (index + 1) * width];

  const rStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      inputRange,
      [-1, 1, -1],
      Extrapolate.CLAMP
    );

    const borderRadius = interpolate(
      translateX.value,
      inputRange,
      [0, SIZE / 2, 0],
      Extrapolate.CLAMP
    );

    return {
      borderRadius,
      transform: [{ scale }],
    };
  });

  const rTextStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      translateX.value,
      inputRange,
      [height / 2, 0, -height / 2],
      Extrapolate.CLAMP
    );

    const opacity = interpolate(
      translateX.value,
      inputRange,
      [-2, 1, -2],
      Extrapolate.CLAMP
    );

    return {
      opacity,
      transform: [{ translateY: translateY }],
    };
  });

  return (
    <View>
      <View style={[styles.container, { backgroundColor: `#f1f1f1` }]}>
        <View style={{ marginTop: 200 }}>
          <View style={{ alignItems: "center", elevation: 10 }}>
            <Animated.View style={[styles.square, rStyle]} />
            <Animated.View style={[styles.ImageContainer, rTextStyle]}>
              <Image style={styles.image} source={source} />
            </Animated.View>
          </View>
          <View style={[styles.textContainer]}>
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.priceText}>{price}</Text>
            <View
              style={{
                marginTop: 15,
                marginRight: 70,
              }}
            >
              <Text style={styles.description}>{description}</Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => console.log("tapped")}
        style={styles.bar}
      >
        <View
          style={{ flexDirection: "row", margin: 15, justifyContent: "center" }}
        >
          <Ionicons
            style={{ marginRight: 5 }}
            name="cart-outline"
            size={25}
            color="#fff"
          />
          <Text style={styles.barText}>Add to cart</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height: "85%",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  square: {
    width: SIZE * 0.8,
    height: SIZE * 0.8,
    backgroundColor: "#f8f8f8",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.05,
    shadowRadius: 1,
    elevation: 0.7,
  },
  text: {
    fontSize: 28,
    color: "#000",
    fontWeight: "700",
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
    alignSelf: "center",
  },
  ImageContainer: { position: "absolute", bottom: -10 },
  textContainer: { position: "absolute", top: "150%", left: 60 },
  priceText: {
    fontSize: 20,
    fontWeight: "500",
    color: "#50c681",
  },
  bar: {
    backgroundColor: "#19bf63",
    width: "50%",
    height: 50,
    justifyContent: "center",
    margin: 20,
    borderRadius: 50,
    top: 20,
    alignSelf: "center",
    alignItems: "center",
  },
  barText: {
    color: "#fff",
    fontSize: 15,
    textTransform: "uppercase",
    alignSelf: "center",
  },
  description: {
    fontSize: 15,
    color: "#b7bec1",
  },
});

export { Page };
