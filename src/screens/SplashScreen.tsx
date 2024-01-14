
import *  as  CommonImports from '../common/CommonImports';
import SplashScreenStyles from '../styles/SplashScreenStyles';
import  FadeInView from '../components/FadeInView';

const Splashscreen = () => {
  return (
    <CommonImports.View style={SplashScreenStyles.container}>
      <FadeInView style={{ backgroundColor: '#0B3A3D',flexDirection: 'row',alignItems:'center'}}> 
            <CommonImports.Text style = {SplashScreenStyles.bigText}>E</CommonImports.Text> 
            <CommonImports.Text style = {SplashScreenStyles.smallText}>xplore</CommonImports.Text>
            <CommonImports.Text  style = {SplashScreenStyles.bigText}>M</CommonImports.Text>
            <CommonImports.Text style = {SplashScreenStyles.smallText}>e</CommonImports.Text>
      </FadeInView>
    
    </CommonImports.View>
  );
};



export default Splashscreen;
