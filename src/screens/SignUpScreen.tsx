import * as CommonImports from '../common/CommonImports';
import SignUpStyles from '../styles/SignUpStyles';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { StackNavigationProp } from '@react-navigation/stack';
const Image2 = require('../assets/Image2.png');
console.log("hello")

type  SignUpScreenProps ={
    navigation: StackNavigationProp<any>;
}


const SignUpScreen : React.FC<SignUpScreenProps>  = ({navigation}) => {
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
                        placeholder="Email"
                        text={inputEmail}
                        onChangeText={setInputEmail}
                    />

                    <InputField
                        placeholder="Password"
                        text={inputPassword}
                        onChangeText={setInputPassword}
                    />
                    <Button onPress={() => console.log("hello")} text="Sign Up" />
                    <CommonImports.View style={SignUpStyles.textContainer}>
                        <CommonImports.Text style={SignUpStyles.text1}>Already have an account?</CommonImports.Text>
                        <CommonImports.TouchableOpacity
                        onPress={()=>navigation.navigate('LoginScreen')}><CommonImports.Text style={SignUpStyles.text2}>Login</CommonImports.Text></CommonImports.TouchableOpacity>
                    </CommonImports.View>
            </CommonImports.View>        

        </CommonImports.View>
          
    );
    
  
}

export default SignUpScreen