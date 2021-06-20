import React from "react";
import {
    View,
    Button
} from "react-native";
import {singInWithGoogle } from "../factories/authFirebase";

const Login = ({navigation}) => {
const handleLogin = () =>{
    singInWithGoogle()
        .then(result =>{
            navigation.navigate('Home');
        })
}
 return(
    <View>
        <Button title="Login" onPress={handleLogin} ></Button>
    </View>
);
}


export default Login;