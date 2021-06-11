import React, { useEffect, useState } from "react";
import { StyleSheet, Vibration, Platform , Image} from "react-native";
import { Card, Paragraph, Button, Avatar } from 'react-native-paper';

const CardQuote = ({ text, author, profileImg }) => {
  
   
    const[likeButton, setLikebutton] = useState("heart-outline");

    const handleLike = ()=>{
        if(likeButton === "heart-outline"){
            setLikebutton("cards-heart")
        }else{
            setLikebutton("heart-outline")
        }
    }

  return (
    <Card>
            <Card.Title
                title={author}
                style={styles.title}
                titleStyle={{ fontSize: 18 }}
                left={() => <Avatar.Image size={42} source={{ uri: profileImg }} />}
            />
            <Card.Content style={styles.content}>
                <Paragraph style={styles.quote}>{text}</Paragraph>
            </Card.Content>
            <Card.Actions style={styles.actions}>
                <Button
                    icon="share-variant"
                    color="#541616"
                    labelStyle={{ fontSize: 24 }}
                />
                <Button
                    icon={likeButton}
                    color="#541616"
                    labelStyle={{ fontSize: 24 }}
                    onPress={handleLike}
                />
            </Card.Actions>
        </Card>
  );
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 24,
    },
    actions: {
        justifyContent: "flex-end",
        backgroundColor: '#fff',
    },
    quote: {
        fontSize: 52,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        lineHeight: '120%',
    },
    title: {
        backgroundColor: '#fff'
    }
})

export default CardQuote;
