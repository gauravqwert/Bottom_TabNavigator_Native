import React from "react";

import Home from "./Screens/Home";
import Notification from "./Screens/Notification";
import Profile from "./Screens/Profile";
import Search from "./Screens/Search";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { NavigationContainer } from "@react-navigation/native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        labeled={false}
        labelStyle={{ fontSize: 12 }}
        barStyle={{ backgroundColor: "tomato" }}
        activeColor="#e91e63">
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
        />

        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
        />

        <Tab.Screen
          name="Search"
          component={Search}
          options={{
          tabBarLabel: 'magnify',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={26} />
          ),
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Example 2:

// import * as React from 'react';
// import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

// function Home() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home Page</Text>
//     </View>
//   );
// }

// function Profile() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Profile Page</Text>
//     </View>
//   );
// }

// function Notifications() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Notifications Page</Text>
//     </View>
//   );
// }

// const Tab = createMaterialBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       activeColor="#e91e63"
//       labelStyle={{ fontSize: 12 }}
//       style={{ backgroundColor: 'tomato' }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="home" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Notifications"
//         component={Notifications}
//         options={{
//           tabBarLabel: 'Updates',
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="bell" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           tabBarLabel: 'Profile',
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="account" color={color} size={26} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <MyTabs />
//     </NavigationContainer>
//   );
// }
