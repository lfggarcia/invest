import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SearchSymbolScreen from '@features/search/screens/search';
import WatchListScreen from '@features/watchList/screens/List';
import GraphScreen from '@features/graph/screens/graph';

const Tab = createBottomTabNavigator();

class BottomTabRouter extends Component {
  render(): React.ReactNode {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          lazy: true,
        }}>
        <Tab.Screen name="Search" component={SearchSymbolScreen} />
        <Tab.Screen name="Watch" component={WatchListScreen} />
        <Tab.Screen name="Graph" component={GraphScreen} />
      </Tab.Navigator>
    );
  }
}

export default BottomTabRouter;
