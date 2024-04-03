import { Camera, CameraType } from "expo-camera";
import { useState, useEffect } from "react";
import * as Location from "expo-location";
import { FIREBASE_AUTH } from "../../FirebaseConfig";

import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

import {saveLocation} from './Users'

export default function CameraView({props}) {
  const [type, setType] = useState(CameraType.back);
  const [photoUri, setPhotoUri] = useState(null);
  const [locationName, setLocationName] = useState("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access location was denied");
        return;
      }

  
    })();
  }, []);

  const getReverseGeocode = async (coords) => {
    let reverseGeocode = await Location.reverseGeocodeAsync(coords);
    if (reverseGeocode.length > 0) {
      let { city, street, region, country } = reverseGeocode[0];
      setLocationName(`${street}, ${city}, ${region}, ${country}`);
      saveLocation(city,country,region,street, FIREBASE_AUTH.currentUser.uid);
    }
  };

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  const takePicture = async () => {
    if (cameraRef) {
      let photo = await cameraRef.takePictureAsync();
      console.log("Photo", photo);
      setPhotoUri(photo.uri);
      let location = await Location.getCurrentPositionAsync({});
      getReverseGeocode(location.coords);
      
 
    }
  };
  const [cameraRef, setCameraRef] = useState(null);
  return (
    <>
    
    <View style={styles.container}>
      {photoUri ? (
        <>
          <Image
            source={{ uri: photoUri }}
            style={{ ...StyleSheet.absoluteFillObject }}
          />
          
          <View style={styles.buttonContainer}>

          <TouchableOpacity
              style={styles.flipButton}
              onPress={() => {setPhotoUri(null); setLocationName(null)}}
            >
              <Image
                source={require("../assets/icons/redo.png")}
                style={styles.photoIcon}
              />
            </TouchableOpacity>
         </View>
        </>
      ) : (
        <Camera
          style={styles.camera}
          type={type}
          ref={(ref) => setCameraRef(ref)}
        >
         
          <View style={styles.buttonContainer}>
            
            <TouchableOpacity
              style={styles.flipButton}
              onPress={toggleCameraType}
            >
              <Image
                source={require("../assets/icons/flip-camera.png")}
                style={styles.photoIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.photoButton} onPress={takePicture}>
              <Image
                source={require("../assets/icons/camera.png")}
                style={styles.photoIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.backButton}
            onPress={() => {props.setCameraOpen(!props.cameraOpen)}}
          >
            
            <Image
                source={require("../assets/icons/back.png")}
                style={styles.photoIcon}
              />
           
          </TouchableOpacity>
          </View>
        </Camera>
      )}
      
    </View>
    {locationName ? <Text style={{color: "blue"}}>New visit to {locationName} saved</Text> : <></>}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 10,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "",
    color: "white",
  },
  photoButton: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 50,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    left: 0,
  },
  flipButton: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 50,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    right: 0,
  },
  backButton: {
    position: "absolute",
    top: 0,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 50,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
  },
  photoIcon: {
    width: 40,
    height: 40,
  },
});
