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
import { useList } from "react-firebase-hooks/database";

import databaseFactory from "../factories/databaseFactory";

/*
const list = [
    { id: 1, author: 'Platão', profileImg: 'https://i2.wp.com/filosofiapop.com.br/wp-content/uploads/2015/06/plato-1.jpg', image:'https://blog.emania.com.br/wp-content/uploads/2019/01/como-tirar-foto-de-cachorro-vinculo-1024x598.jpg' },
    { id: 2, author: 'Marco Antonio', profileImg: 'https://www2.ufjf.br/pgcc/wp-content/uploads/sites/181/2008/07/Marco.jpg', image:'https://matsudapet.com.br/blog/wp-content/uploads/2019/08/shutterstock_559799125-compressed.jpg'},
    { id: 3, author: 'Sócrates', profileImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Σωκράτης%2C_Ακαδημία_Αθηνών_6616.jpg/180px-Σωκράτης%2C_Ακαδημία_Αθηνών_6616.jpg ', image:'https://blog.emania.com.br/wp-content/uploads/2019/01/como-tirar-foto-de-cachorro-foco-1024x670.jpg'},
    { id: 4, author: 'Chil do Piseiro', profileImg: 'https://gcmais.com.br/wp-content/uploads/2020/10/piseiro.jpg', image:'https://s2.glbimg.com/slaVZgTF5Nz8RWqGrHRJf0H1PMQ=/0x0:800x450/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/U/e/NTegqdSe6SoBAoQDjKZA/cachorro.jpg'},
    { id: 5, author: 'Chil do Piseiro', profileImg: 'https://gcmais.com.br/wp-content/uploads/2020/10/piseiro.jpg', image:'https://matsudapet.com.br/blog/wp-content/uploads/2019/08/shutterstock_559799125-compressed.jpg'},
    { id: 6, author: 'Chil do Piseiro', profileImg: 'https://gcmais.com.br/wp-content/uploads/2020/10/piseiro.jpg', image:'https://matsudapet.com.br/blog/wp-content/uploads/2019/08/shutterstock_559799125-compressed.jpg'}
  ]*/
  

const Home = () =>{
  const [cards, loading, erro] = useList(
    databaseFactory.createDatabaseService("firebase")
  );

    return(
      console.log(cards),
        <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={"#fff"}
      />
      <FlatList
        data={cards}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
          <CardQuote 
          author={item.val().author}
            profileImg={item.val().profileImg}
            image={item.val().image} />
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