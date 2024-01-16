import * as CommonImports from '../common/CommonImports';
import  WelcomeStyles from '../styles/WelcomeStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Image1 = require('../assets/Image1.png');


type WelcomeProps = {
    navigation: StackNavigationProp<any>; // Replace 'any' with your actual navigation stack type
  };


  
const Welcome : React.FC<WelcomeProps> = ({navigation}) => {



    return (
        <CommonImports.View style={WelcomeStyles.container}>
            <CommonImports.Image style={WelcomeStyles.image} source={Image1} />
            <CommonImports.View style={WelcomeStyles.textContainer}>
                <CommonImports.Text style={WelcomeStyles.text}>Welcome!</CommonImports.Text>
                <CommonImports.Text style={WelcomeStyles.text2}>Join The Adventure</CommonImports.Text>
                <CommonImports.TouchableOpacity style={WelcomeStyles.button}
                onPress={()=> navigation.navigate('SignUpScreen')}><CommonImports.Text style={WelcomeStyles.buttonText}>Get Started</CommonImports.Text></CommonImports.TouchableOpacity>
            </CommonImports.View>    
        </CommonImports.View>
    );
}

export default Welcome