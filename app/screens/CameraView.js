import { Camera, CameraType } from "expo-camera";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

export default function CameraView() {
  const [type, setType] = useState(CameraType.back);
  const [photoUri, setPhotoUri] = useState(null);

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
    }
  };
  const [cameraRef, setCameraRef] = useState(null);
  return (
    <View style={styles.container}>
      {photoUri ? (
        <>
          <Image
            source={{ uri: photoUri }}
            style={{ ...StyleSheet.absoluteFillObject }}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => setPhotoUri(null)}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                color: "white",
                top: "90%",
                right: "5%",
              }}
            >
              Take Another Photo
            </Text>
          </TouchableOpacity>
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
          </View>
        </Camera>
      )}
    </View>
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
  
  photoIcon: {
    width: 40,
    height: 40,
  },
});
