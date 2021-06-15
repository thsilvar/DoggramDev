import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View ,Dimensions} from 'react-native';
import * as ImagePicker from 'expo-image-picker';



const AddPhoto = ({}) =>{

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://www.fotoefeitos.com/efectos/grandes/fotomontaje-perro-papel.jpg' }} style={styles.image} />
      <Text style={styles.instructions}>
      Para compartilhar uma foto do Doginho pelo seu celular com um amigo, basta pressionar o botão abaixo!
      </Text>

      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Escolha uma foto</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').width ,
    resizeMode:'contain'
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});

export default AddPhoto;

