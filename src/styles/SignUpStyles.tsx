import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F0FAFB',
        // display: 'flex',
        // flexDirection: 'row'
      },
      imageContainer: {
        flex: 0.5,
        alignItems: 'center',
      },
      inputContainer: {
        flex: 0.7,
        
      },
      
      image: {
        // flex:0.2,
        resizeMode: 'contain', 
        
    },
    textContainer: {
      flex: 0.8,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text1: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
    },
    text2: {
        color: '#0B3A3D',
        fontSize: 25,
        fontWeight:'normal'
    }
})