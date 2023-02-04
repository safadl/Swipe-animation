import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PagesComponent from '../components/PagesComponent';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
      <Stack.Navigator  >
        <Stack.Screen options={{ headerStyle:{backgroundColor:'transparent'},headerTransparent:true }} name="Bottle" component={PagesComponent} />
      </Stack.Navigator>
  );
}

export default StackNavigator;