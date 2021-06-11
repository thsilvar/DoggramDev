import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  StatusBar,
  View,
} from "react-native";
import CardQuote from "../components/card";

const list = [
    { id: 1, text: 'Hello', author: 'Platão', profileImg: 'https://i2.wp.com/filosofiapop.com.br/wp-content/uploads/2015/06/plato-1.jpg' },
    { id: 2, text: 'Wold!!!!', author: 'Marco Antonio', profileImg: 'https://www2.ufjf.br/pgcc/wp-content/uploads/sites/181/2008/07/Marco.jpg' },
    { id: 3, text: 'Ola', author: 'Sócrates', profileImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Σωκράτης%2C_Ακαδημία_Αθηνών_6616.jpg/180px-Σωκράτης%2C_Ακαδημία_Αθηνών_6616.jpg ' },
    { id: 4, text: 'Sei la', author: 'Chil do Piseiro', profileImg: 'https://gcmais.com.br/wp-content/uploads/2020/10/piseiro.jpg' },
    { id: 5, text: 'Sei la', author: 'Chil do Piseiro', profileImg: 'https://gcmais.com.br/wp-content/uploads/2020/10/piseiro.jpg' },
    { id: 6, text: 'Sei la', author: 'Chil do Piseiro', profileImg: 'https://gcmais.com.br/wp-content/uploads/2020/10/piseiro.jpg' }
  ]
  

const Home = ({}) =>{
    return(
        <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={"#fff"}
      />
      <FlatList
        data={list}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
          <CardQuote 
          author={item.author}
          text={item.text}
            profileImg={item.profileImg} />
        }
      >
      </FlatList>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      //alignItems: "center",
      //justifyContent: "center",
    },
  });

export default Home;

