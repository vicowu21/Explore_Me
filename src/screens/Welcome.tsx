import * as CommonImports from '../common/CommonImports';
import  WelcomeStyles from '../styles/WelcomeStyles';
const Image1 = require('../assets/Image1.png');


const Welcome = () => {

    return (
        <CommonImports.View style={WelcomeStyles.container}>
            <CommonImports.Image style={WelcomeStyles.image} source={Image1} />
            <CommonImports.View style={WelcomeStyles.textContainer}>
                <CommonImports.Text style={WelcomeStyles.text}>Welcome!</CommonImports.Text>
                <CommonImports.Text style={WelcomeStyles.text2}>Join The Adventure</CommonImports.Text>
                <CommonImports.TouchableOpacity style={WelcomeStyles.button}><CommonImports.Text style={WelcomeStyles.buttonText}>Get Started</CommonImports.Text></CommonImports.TouchableOpacity>

            </CommonImports.View>    
        </CommonImports.View>
    );
}

export default Welcome