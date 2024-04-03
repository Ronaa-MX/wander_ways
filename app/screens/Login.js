
import {
  Image,
  Linking,
  View,
  Text,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      alert("Login succesful!");
    } catch (error) {
      console.log(error);
      alert("sign in failed" + error.message);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
      alert("Registration succesful!");
    } catch (error) {
      console.log(error);
      alert("sign up failed" + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <Image
          style={{ width: 250, height: 250 }}
          resizeMode="contain"
          source={require("../assets/icons/logo.png")} />

      </View>

      <View style={{ padding: 10, marginBottom: 10 }}>
        <Text style={{ fontSize: 24 }}> Log in </Text>
      </View>

      <View style={{ margin: 20, padding: 20, width: 300, justifyContent: 'center', borderColor: 'black', borderWidth: 1, borderRadius: 10 }}>
        {/* // <View>
                //     <GoogleLogin clientId="386932037035-k8v833noqjk7m4***********.apps.googleusercontent.com">
                //         <Button title="Login with Google" />
                //     </GoogleLogin>
                // </View> */}
        <Text style={{ fontSize: 16 }}> Email </Text>
        <TextInput style={{ fontSize: 20, margin: 10, borderColor: 'black', borderWidth: 1, borderRadius: 5, textAlign: 'center' }}
          placeholder="Email"
          value={email}
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={{ fontSize: 16 }}> Password </Text>
        <TextInput style={{ fontSize: 20, margin: 10, borderColor: 'black', borderWidth: 1, borderRadius: 5, textAlign: 'center' }}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <View>
          <Text onPress={() => Linking.openURL('http://google.com')} style={{ fontSize: 12, marginTop: 1, margin: 10, textAlign: 'center', color: "blue", }}>Forgot password? </Text>
        </View>

        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View style={{ gap: 16 }}>
            <Button title="Login" onPress={() => signIn()}></Button>
            <Button title="Create Account" onPress={() => signUp()}></Button>
          </View>
        )}
      </View>
      {/* <View style={{ justifyContent: 'bottom', alignItems: 'center' }}>
                <Text style={{ fontSize: 12, marginTop: 1, margin: 10, }}>Don't have a WanderWays account? </Text>
                <Text onPress={() => Linking.openURL('http://google.com')} style={{ fontSize: 12, marginTop: 1, margin: 10, textAlign: 'center', color: "blue", }}> Register</Text>
            </View> */}
    </View >

  );
};

export default Login;
