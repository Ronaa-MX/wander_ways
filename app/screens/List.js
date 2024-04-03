import { View, Text } from "react-native";
import React from "react";
import {FIREBASE_AUTH} from '../../FirebaseConfig'
import { Button } from "react-native";

const List = ({ navigation }) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button onPress={() => navigation.navigate('details')} title="Open Details"/>
        <Button onPress={() => FIREBASE_AUTH.signOut()} title="Logout"/>
        <Button onPress={() => navigation.navigate('mapView')} title="Map"/>

      
    </View>
  );
};

export default List;
