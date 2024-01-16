import React, { FC } from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from 'react-native';

interface ButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  text: string;
}

const Button: FC<ButtonProps> = ({ onPress, text }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#0B3A3D',
        padding: 10,
        borderRadius: 10,
        marginTop: 50,
        color: 'white',
        fontSize: 20,
        width:210,
        height:60,
        alignSelf: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 25,
        alignSelf: 'center'
    }
});

export default Button;
