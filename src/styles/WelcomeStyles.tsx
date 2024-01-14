import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        flex: 1,
        //  justifyContent: 'center',
         alignItems: 'center',
        backgroundColor: '#F0FAFB',
        // display: 'flex',
       
    },
    textContainer: {
        marginTop: 200,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex:0.7,
        resizeMode: 'contain', 
        
    },
    text: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        
    },
    text2: {
        color: 'black',
        fontSize: 25,
        
        
    },
    button: {
        backgroundColor: '#0B3A3D',
        padding: 10,
        borderRadius: 10,
        marginTop: 100,
        color: 'white',
        fontSize: 20,
        width:210,
        height:60,
    },
    buttonText: {
        color: 'white',
        fontSize: 25,
        alignSelf: 'center'
    }

    
    
})