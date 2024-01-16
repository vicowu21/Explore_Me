import * as CommonImports from '../common/CommonImports';
import SignUpStyles from '../styles/SignUpStyles';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { StackNavigationProp } from '@react-navigation/stack';

const Image2 = require('../assets/Image2.png');

type LoginScreenProps = {
    navigation: StackNavigationProp<any>; // Replace 'any' with your actual navigation stack type
  };




const LoginScreen : React.FC<LoginScreenProps> = ({navigation}) => {
    const [inputName, setInputName] = CommonImports.useState<string>('');
    const [inputEmail, setInputEmail] = CommonImports.useState<string>('');
    const [inputPassword, setInputPassword] = CommonImports.useState<string>('');

     console.log(inputEmail)


    return (
        <CommonImports.View style={SignUpStyles.container} >
            <CommonImports.View style={SignUpStyles.imageContainer} >
               <CommonImports.Image style={SignUpStyles.image} source={Image2} />    
            </CommonImports.View>

            <CommonImports.View style={SignUpStyles.inputContainer} >

                    <InputField
                        placeholder="Adventurer Name"
                        text={inputName}
                        onChangeText={setInputName}
                    />

                    <InputField
                        placeholder="Password"
                        text={inputPassword}
                        onChangeText={setInputPassword}
                    />
                    <Button onPress={() => console.log("hello")} text="Login" />
                    <CommonImports.View style={SignUpStyles.textContainer}>
                        <CommonImports.Text style={SignUpStyles.text1}>Don't have an account?</CommonImports.Text>
                        <CommonImports.TouchableOpacity
                        onPress={()=> navigation.navigate('SignUpScreen')}><CommonImports.Text style={SignUpStyles.text2}>Sign Up</CommonImports.Text></CommonImports.TouchableOpacity>
                    </CommonImports.View>
            </CommonImports.View>        

        </CommonImports.View>
          
    );
    
  
}

export default LoginScreen