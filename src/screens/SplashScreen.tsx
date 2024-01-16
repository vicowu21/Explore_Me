import React, { useEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import * as CommonImports from '../common/CommonImports';
import SplashScreenStyles from '../styles/SplashScreenStyles';
import FadeInView from '../components/FadeInView';

type SplashScreenProps = {
  navigation: StackNavigationProp<any>; // Replace 'any' with your actual navigation stack type
};

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  useEffect(() => {
    // Navigate to Welcome screen after 3 seconds
    const timer = setTimeout(() => {
      navigation.replace('Welcome'); // replace Splash with Welcome to avoid going back to Splash
    }, 3000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <CommonImports.View style={SplashScreenStyles.container}>
      <FadeInView style={{ backgroundColor: '#0B3A3D', flexDirection: 'row', alignItems: 'center' }}>
        <CommonImports.Text style={SplashScreenStyles.bigText}>E</CommonImports.Text>
        <CommonImports.Text style={SplashScreenStyles.smallText}>xplore</CommonImports.Text>
        <CommonImports.Text style={SplashScreenStyles.bigText}>M</CommonImports.Text>
        <CommonImports.Text style={SplashScreenStyles.smallText}>e</CommonImports.Text>
      </FadeInView>
    </CommonImports.View>
  );
};

export default SplashScreen;
