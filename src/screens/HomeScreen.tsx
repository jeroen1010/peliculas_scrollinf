import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationProp, ParamListBase } from '@react-navigation/native';

type HomeScreenProps = {
  navigation: NavigationProp<ParamListBase>;
};

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Scroll de pelis nº1"
        onPress={() => navigation.navigate('Movies')}
      />
       <Button
        title="Scroll de pelis nº2" 
        onPress={() => navigation.navigate('Movies2')}
      />
      
    </View>
  )
}

export default HomeScreen