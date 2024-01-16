import React, { FC } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface CardViewProps {
  text: string;
  imageUrl: any;
}

const CardView: FC<CardViewProps> = ({ text, imageUrl }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      <Image source={ imageUrl } style={styles.image} />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    // alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd', // Adjust border color as needed
    borderRadius: 8,
    padding: 20,
    // marginBottom: 10,
    margin:10,
    backgroundColor: 'white', // Adjust background color as needed
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    elevation: 5,
    height:'40%',
    width: '35%',
    // marginRight: "10%"

  },
  image: {
    width: '80%',
    height: '80%',
    borderRadius: 25, // Adjust the borderRadius based on your preference
    marginRight: 10,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CardView;
