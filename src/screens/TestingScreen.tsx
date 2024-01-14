import React from 'react';
import { View, Alert } from 'react-native';
import Button from '../components/Button'; // Adjust the path based on your project structure

const YourScreen: React.FC = () => {
  const handleButtonPress = () => {
    Alert.alert('Button Pressed');
    // Add your button press logic here
  };

  return (
    <View>
      {/* Use the TypeScript Button component with the desired text */}
      <Button onPress={handleButtonPress} text="Click Me" />
    </View>
  );
};

export default YourScreen;
