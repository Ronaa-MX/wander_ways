import { View, Text } from "react-native";
import React from "react";
import { FIREBASE_AUTH } from "../../FirebaseConfig";

const Details = () => {
  const auth = FIREBASE_AUTH;
  return (
    <View>
    
      <Text>Hola! {auth.currentUser.email}</Text>
    </View>
  );
};

export default Details;
