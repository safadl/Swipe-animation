import * as React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PagesComponent from "../components/PagesComponent";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "transparent" },
          headerTransparent: true,
          headerRight: () => (
            <TouchableOpacity onPress={() => alert("Added to cart!")}>
              <View
                style={{
                  // paddingHorizontal: 10,
                  // paddingVertical: 5,
                  position: "absolute",
                  right: 15,
                  top: -7,
                }}
              >
                <Entypo
                  style={{ marginRight: 5 }}
                  name="dot-single"
                  size={20}
                  color="#df3f59"
                />
              </View>
              <Feather
                style={{ marginRight: 5 }}
                name="shopping-cart"
                size={20}
                color="#000"
              />
            </TouchableOpacity>
          ),

          headerLeft: () => (
            <TouchableOpacity onPress={() => alert("")}>
              <Feather
                style={{ marginRight: 5 }}
                name="home"
                size={20}
                color="#000"
              />
            </TouchableOpacity>
          ),
        }}
        name="Bottle"
        component={PagesComponent}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
