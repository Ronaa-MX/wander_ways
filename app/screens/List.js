import { View, Text, Image } from "react-native";
import React from "react";
import { FIREBASE_AUTH } from '../../FirebaseConfig'
import { Button } from "react-native";

const List = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ padding: 10, margin: 10, marginEnd: 100, flexDirection: "row", alignItems: "center", flex: 1 }}>
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
        <View style={{ margin: 20, padding: 20, width: 300, height: 400, borderColor: 'black', borderWidth: 1, borderRadius: 10 }}>
          <Image
            style={{ width: 300, height: 400 }}
            resizeMode="contain"
            source={{ uri: 'https://i.redd.it/bocchi-on-the-rocks-v0-5pgzqswie05a1.png?width=1150&format=png&auto=webp&s=56c89d44a85386a6425e4464d0b5b71abaa80672' }} />
        </View>
      </View>
      <View style={{ padding: 20, justifyContent: "center", alignContent: "center", gap: 16 }}>
        <Button onPress={() => navigation.navigate('details')} title="Genereate Routes" />
        <Button onPress={() => navigation.navigate('details')} title="Plan A New Journey" />
        <Button onPress={() => navigation.navigate('details')} title="View Progress" />
      </View>

    </View >
  );
};

export default List;
