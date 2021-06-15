
import React, { Component, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    Platform,
    ScrollView,
    Alert,
} from "react-native";
import { ImagePicker, showImagePicker } from "react-native-image-picker";

class AddPhoto extends Component {
    state = {
        image: null,
        comment: "",
    };

    pickImage = () => {
        ImagePicker.showImagePicker(
            {
                title: "Escolha a imagem",
                maxHeight: 600,
                maxWidth: 800,
            },
            (res) => {
                if (!res.didCancel) {
                    this.setState({ image: { uri: res.uri, base64: res.data } });
                }
            }
        );
    };
    save = async () => {
        Alert.alert("Imagem Adicionada!", this.state.comment);
    };

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.container}>Compartilhe uma imagem</Text>
                    <View style={styles.imageContainer}>
                        <Image source={this.state.image} style={styles.image} />
                    </View>
                    <TouchableOpacity onPress={this.pickImage} style={styles.buttom}>
                        <Text style={styles.buttomText}>Escolha a foto</Text>
                    </TouchableOpacity>
                    <TextInput
                        placeholder="Algum comentatrio para a foto?"
                        style={styles.input}
                        value={this.comment}
                        onChangeText={(comment) => this.setState({ comment })}
                    />
                    <TouchableOpacity onPress={this.save} style={styles.buttom}>
                        <Text style={styles.buttomText}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        marginTop: Platform.OS === "ios" ? 30 : 10,
        fontWeight: "bold",
    },

    image: {
        width: Dimensions.get("window"),
        height: Dimensions.get("window") * 3 / 4,
        resizeMode: 'center',
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: "#4286f4"
    },
    buttomText: {
        fontSize: 20,
        color: '#FFF',
    },
    input: {
        marginTop: 20,
        width: "90%",
    },
});

export default AddPhoto;