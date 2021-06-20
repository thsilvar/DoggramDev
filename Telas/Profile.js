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



const Profile = () =>{
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

export default Profile;