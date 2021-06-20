import React, { Component, useState } from "react";
import {
    View,
    Button
} from "react-native";
import { useEffect } from "react";
import { auth,singInWithGoogle } from "../factories/authFirebase";
import Home from "./Home"

const Login = ({}) => {
const handleLogin = () =>{
    singInWithGoogle()
        .then(result =>{
            {{Home}}
        })
}
 return(
    <View>
        <Button title="Login" onPress={handleLogin} ></Button>
    </View>
);
}


export default Login;