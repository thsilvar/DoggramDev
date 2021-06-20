import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Telas/Home';
import AddPhoto from './Telas/AddPhoto';
import Login from './Telas/Login';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home"  component={Home}  />
      <Tab.Screen name="Photo" component={AddPhoto}  />
        <Tab.Screen name="Profile" component={Login}  />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
