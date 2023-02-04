import React from "react";
import { StatusBar, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/stackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
      <StatusBar barStyle={"dark-content"} animated={true} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3e566c",
  },
});
