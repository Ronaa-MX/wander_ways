import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './app/screens/Login';
import Details from './app/screens/Details';
import Main from './app/screens/Main';
import Profile from './app/screens/profile';

import MapView from './app/screens/MapComponent';

import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';



const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

function InsideLayout() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name="main" component={Main} />
      <InsideStack.Screen name="details" component={Details} />
      <InsideStack.Screen name="mapView" component={MapView} />
      <InsideStack.Screen name="profile" component={Profile} />
    </InsideStack.Navigator>
  )
}

export default function App() {

  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user);
      setUser(user);
    });
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {
          user ? <Stack.Screen name="Inside" component={InsideLayout} options={{ headerShown: false }} /> : <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}


