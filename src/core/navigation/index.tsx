import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WatchListScreen from '@features/search/screens/List';

const Stack = createNativeStackNavigator();

class Router extends React.Component {
  render(): React.ReactNode {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={WatchListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Router;
