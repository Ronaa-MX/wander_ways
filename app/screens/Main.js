import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { FIREBASE_AUTH } from '../../FirebaseConfig'
import { Button } from "react-native";
import MapComponent from './MapComponent'

const Main = ({ navigation }) => {
  return (
    <View>

      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 40 }}>
        <View style={{ padding: 10, marginEnd: 100, flexDirection: "row", alignItems: "center", flex: 1 }}>
          <Image
            style={{ width: 50, height: 50 }}
            resizeMode="contain"
            source={require("../assets/icons/logo.png")} />
          <Text style={{ fontSize: 12 }}> WanderWays </Text>
        </View>
        <View style={{ padding: 10, margin: 10, flexDirection: "row", alignItems: "center" }}>
          <Button onPress={() => FIREBASE_AUTH.signOut()} title="Menu: logout" />
        </View>
      </View>

      <View style={{ padding: 10, justifyContent: "center", alignContent: "center", alignItems: "center" }}>
        <View style={{ margin: -10, justifyContent: "center", alignContent: "center", alignItems: "center" }}>
          <TouchableOpacity
            style={styles.profileButton}
            onPress={() => navigation.navigate('profile')}
          >
            <Image
              resizeMode="conver"
              source={require("../assets/icons/profile.png")}
              style={styles.profileIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={{ margin: 15, padding: 20, width: 300, height: 400 }}>
          <MapComponent />
        </View>
      </View>
      <View style={{ padding: 20, justifyContent: "center", alignContent: "center", gap: 16 }}>
        <Button onPress={() => navigation.navigate('details')} title="Genereate Routes" />
        <Button onPress={() => navigation.navigate('details')} title="Plan A New Journey" />
        <Button onPress={() => navigation.navigate('progress')} title="View Progress" />
      </View>

    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex .space-around",
    alignItems: "center",

  },
  profileButton: {
    position: "absolute",
    bottom: -20,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 50,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  profileIcon: {
    width: 69,
    height: 69,
    borderRadius: 40,
    overflow: "hidden",
  },
});

export default Main;
