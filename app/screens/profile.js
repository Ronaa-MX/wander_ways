import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { Divider } from '@rneui/themed';
import MedalComponent from './MedalComponent';
import { launchImageLibrary as _launchImageLibrary } from 'react-native-image-picker';
let launchImageLibrary = _launchImageLibrary;


const ProfileScreen = ({ navigation }) => {
    const auth = FIREBASE_AUTH;
    return (
        <ScrollView >
            <View style={{ padding: 10, justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                <View style={{ margin: 10, justifyContent: "center", alignContent: "center", alignItems: "center" }}>

                    <Image
                        resizeMode="conver"
                        source={require("../assets/icons/profile.png")}
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
                <View style={{ padding: 10, justifyContent: "center", alignContent: "center", alignItems: "flex-start", flexDirection: "row" }}>
                    <View>
                        <Text style={{ marginStart: 15, fontSize: 16 }}>Gallery</Text>
                        <View style={{ margin: 40, padding: 20, justifyContent: 'center' }}>
                            <TouchableOpacity
                                style={styles.profileButtons}
                                onPress={openImagePicker}
                            >
                                <Image
                                    resizeMode="conver"
                                    source={require("../assets/icons/gallery.png")}
                                    style={styles.galleryIcon}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginStart: 40 }}>
                        <Text style={{ marginStart: 15, fontSize: 16 }}>Sites Visited</Text>
                        <View style={{ margin: 40, padding: 20, justifyContent: 'center' }}>
                            <TouchableOpacity
                                style={styles.profileButtons}
<<<<<<< HEAD
                                onPress={() => navigation.navigate('progress')}
=======
                                onPress={() => navigation.navigate('details')}
>>>>>>> 7edde0c5a2c6f406883d70cf68d7f285906b0f89
                            >
                                <Image
                                    resizeMode="conver"
                                    source={require("../assets/icons/sites-visited.png")}
                                    style={styles.sitesVisitedIcon}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

        </ScrollView  >
    );
};


const openImagePicker = () => {
    const options = {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 2000,
        maxWidth: 2000,
    };

    launchImageLibrary(options, handleResponse);
};
const handleResponse = (response) => {
    if (response.didCancel) {
        console.log('User cancelled image picker');
    } else if (response.error) {
        console.log('Image picker error: ', response.error);
    } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
    }
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "flex .space-around",
        alignItems: "center",

    },
    profileButtons: {
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
    galleryIcon: {
        width: 69,
        height: 69,
    },
    sitesVisitedIcon: {
        width: 69,
        height: 69,
    },
});

export default ProfileScreen;