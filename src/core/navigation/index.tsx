import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTabRouter from '@navigation/bottomTab';

const Stack = createNativeStackNavigator();

class Router extends React.Component {
  render(): React.ReactNode {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Root" component={BottomTabRouter} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Router;
