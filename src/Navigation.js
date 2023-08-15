import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Landing from './screens/Landing';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import OfferDetail from './screens/OfferDetail';
import Profile from './screens/Profile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      activeColor="#5775F1"
      inActiveColor="#828282"
      barStyle={{
        backgroundColor: '#FFFFFF',
        height: 70,
        justifyContent: 'center',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        borderLeftWidth: 0.2,
        borderRightWidth: 0.2,
        position: 'absolute',
        overflow: 'hidden',
      }}
      options={{tabBarColor: '#FFFFFF'}}>
      <Tab.Screen
        name="Offers"
        component={OfferDetail}
        options={{
          tabBarLabel: 'Offers',
          tabBarIcon: ({color}) => 
            <MaterialCommunityIcons name="label-percent" color={color} size={26} />
          ,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen
        name="Landing"
        options={{headerShown: false}}
        component={Landing}
      />
      <Stack.Screen
        name="MyTabs"
        component={MyTabs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
