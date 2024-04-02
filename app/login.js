import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Image, Text, Linking } from 'react-native';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Perform login logic here
        if (email === 'admin' && password === 'password') {
            Alert.alert('Login Successful');
        } else {
            Alert.alert('Invalid Credentials');
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ marginBottom: 10 }}>
                <Image
                    style={{ width: 200, height: 200 }}
                    resizeMode="contain"
                    source={{ uri: 'https://upload-os-bbs.hoyolab.com/upload/2022/06/12/18491187/1759943324266a43eadd8b9d174d721d_4194543142013398674.jpg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_80' }} />
                <Text style={{ fontSize: 32 }}> WanderWays </Text>
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
                    onChangeText={setEmail}
                />
                <Text style={{ fontSize: 16 }}> Password </Text>
                <TextInput style={{ fontSize: 20, margin: 10, borderColor: 'black', borderWidth: 1, borderRadius: 5, textAlign: 'center' }}
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <View>
                    <Text onPress={() => Linking.openURL('http://google.com')} style={{ fontSize: 12, marginTop: 1, margin: 10, textAlign: 'center', color: "blue", }}>Forgot password? </Text>
                </View>

                <Button title="Login" onPress={handleLogin} color={"purple"} />
            </View>
            <View style={{ justifyContent: 'bottom', alignItems: 'center' }}>
                <Text style={{ fontSize: 12, marginTop: 1, margin: 10, }}>Don't have a WanderWays account? </Text>
                <Text onPress={() => Linking.openURL('http://google.com')} style={{ fontSize: 12, marginTop: 1, margin: 10, textAlign: 'center', color: "blue", }}> Register</Text>
            </View>
        </View >

    );
};

export default Login;