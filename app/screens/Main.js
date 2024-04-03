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
            source={{ uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ac03a17e-589d-4ac1-952a-4185d1070994/dfkshd7-44b072d7-a5b3-4b99-9eb9-41bb5ac7c565.png/v1/fill/w_1280,h_2255/gotou_hitori__bocchi__render_by_minhchauk1k_dfkshd7-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjI1NSIsInBhdGgiOiJcL2ZcL2FjMDNhMTdlLTU4OWQtNGFjMS05NTJhLTQxODVkMTA3MDk5NFwvZGZrc2hkNy00NGIwNzJkNy1hNWIzLTRiOTktOWViOS00MWJiNWFjN2M1NjUucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.IQD991lYBnumhBN0Z0HSpBkULmYcsEMg7Tf3_Fkq0h8' }} />
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
              source={{ uri: "https://safebooru.org//samples/4423/sample_ba5bca0f0b1730d8ce32192456787167ef1ecb0a.jpg?4613387" }}
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
