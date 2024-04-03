import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import CameraView from "./CameraView";
import { Camera } from "expo-camera";

const MapComponent = () => {
  const [mapRegion, setMapRegion] = useState({
    latitude: 19.51,
    longitude: -99.16,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });
  const [status, setStatus] = useState("granted");
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setStatus("Permission to access location was denied");
        return;
      } else {
        console.log("Access granted!!");
        setStatus(status);
      }
    })();
  }, []);

  const watch_location = async () => {
    if (status === "granted") {
      let location = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 10000,
          distanceInterval: 80,
        },
        false,
        (location_update) => {
          console.log("update location!", location_update.coords);
        }
      );
    }
  };


  const openCamera = async () => {
    let { status } = await Camera.requestCameraPermissionsAsync();
    if (status !== "granted") {
      setStatus("Permission to access location was denied");
      return;
    } else {
      console.log("Camera Access granted!!");
      setStatus(status);
    }
  };

  const [cameraOpen, setCameraOpen] = useState(false);

  return (
    <>
      {cameraOpen ? (
        <>
        <CameraView props={{cameraOpen, setCameraOpen}}/>
        </>
      ) : (
        <>
          <View style={styles.container}>
            <MapView
              showsUserLocation
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              initialRegion={mapRegion}
            />
            <TouchableOpacity
              style={styles.photoButton}
              onPress={() => { setCameraOpen(!cameraOpen); openCamera }}
            >
              <Image
                source={require("../assets/icons/camera-265.png")}
                style={styles.photoIcon}
              />
            </TouchableOpacity>
          </View>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",

  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  photoButton: {
    position: "absolute",
    bottom: 20,
    backgroundColor: "black",
    padding: 10,
    borderRadius: 50,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  photoIcon: {
    width: 50,
    height: 50,
  },
});

export default MapComponent;
