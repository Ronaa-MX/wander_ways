import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { Divider } from '@rneui/themed';
import MedalComponent from './MedalComponent';

const ProfileScreen = () => {
    const auth = FIREBASE_AUTH;
    return (
        <View>
            <View style={{ padding: 10, justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                <View style={{ margin: 10, justifyContent: "center", alignContent: "center", alignItems: "center" }}>

                    <Image
                        resizeMode="conver"
                        source={{ uri: "https://safebooru.org//samples/4423/sample_ba5bca0f0b1730d8ce32192456787167ef1ecb0a.jpg?4613387" }}
                        style={styles.profileIcon}
                    />

                </View>
                <View style={{ padding: 5 }}>
                    <Text style={{ fontSize: 20 }}>{auth.currentUser.email}</Text>
                </View>
            </View>
            <Divider width={5} margin={20} />
            <View style={{ padding: 10, justifyContent: "center", alignContent: "center", alignItems: "flex-start" }}>
                <Text style={{ marginStart: 15, fontSize: 20 }}>MEDALS</Text>
                <View style={{ margin: 20, flexDirection: "row", alignItems: "center", marginBottom: 40, flexWrap: "wrap" }}>
                    <MedalComponent
                        medal={require("../assets/medals/medal-1.png")}
                        name="First Journey"
                        description="Complete your first journey"
                    />
                    <MedalComponent
                        medal={require("../assets/medals/medal-2.png")}
                        name="Explorer"
                        description="Complete 5 journeys"
                    />
                    <MedalComponent
                        medal={require("../assets/medals/medal-3.png")}
                        name="Adventurer"
                        description="Complete 10 journeys"
                    />
                </View>
            </View>
            <Divider width={5} margin={20} />
            <View style={{ padding: 10, justifyContent: "center", alignContent: "center", alignItems: "flex-start" }}>
                <Text style={{ marginStart: 15, fontSize: 20 }}>ARCHIVE</Text>
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
        width: 150,
        height: 150,
        borderRadius: 80,
        overflow: "hidden",
    },
});

export default ProfileScreen;