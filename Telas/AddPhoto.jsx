import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View ,Dimensions} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing'; 



const AddPhoto = ({}) =>{

  const [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("É necessária permissão para acessar o rolo da câmera!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri });
  };

  let openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Opa, o compartilhamento não está disponível em sua plataforma`);
      return;
    }

    await Sharing.shareAsync(selectedImage.localUri);
  }; 
  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: selectedImage.localUri }} style={styles.imagemCarregada} />
        <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
          <Text style={styles.buttonText}>Share this photo</Text>
        </TouchableOpacity>
        </View>
    );
  }

  return (
    <View style={styles.container}>
       <Image source={{ uri: 'https://www.fotoefeitos.com/efectos/grandes/fotomontaje-perro-papel.jpg' }} style={styles.image} />
      <Text style={styles.instructions}>
      Para compartilhar uma foto do seu Doginho pelo celular para um amigo, basta pressionar o botão abaixo!
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
    width: 300,
    height: 300,
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
  imagemCarregada: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});

export default AddPhoto;


