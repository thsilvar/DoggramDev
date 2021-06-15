
import * as React from 'react';
import { Button, View,AppRegistry } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Telas/Home';
import AddPhoto from './Telas/AddPhoto';
import Profile from './Telas/Profile';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();


function A() {
  return <View />;
}

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Doggram"
        component={Home}
        options={{ tabBarLabel: 'Home!' }}
      />
    </HomeStack.Navigator>
  );
}
function PhotoStarkScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Doggram"
        component={AddPhoto}
        options={{ tabBarLabel: 'Home!' }}
      />
    </HomeStack.Navigator>
  );
}

function ProfileStarkScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Doggram"
        component={Profile}
        options={{ tabBarLabel: 'Home!' }}
      />
    </HomeStack.Navigator>
  );
}



export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home"  component={HomeStackScreen}  />
      <Tab.Screen name="Photo" component={PhotoStarkScreen}  />
        <Tab.Screen name="Profile" component={ProfileStarkScreen}  />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
