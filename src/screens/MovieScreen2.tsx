import { View, Button } from 'react-native'
import React from 'react'
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { useMovies } from '../hooks/useMovies';
import Slider from '../components/Slider';

type MovieScreenProps = {
  navigation: NavigationProp<ParamListBase>;
};

const MovieScreen = ({ navigation }: MovieScreenProps) => {
  const { nowPlaying, loadNextMovies } = useMovies();

  return (
    <View>
      <Slider
        backgroundColor='purple'
        orientation='vertical'
        height={600}
        width={400}
        handleScroll={loadNextMovies}
        movies={nowPlaying}
      />
    </View>
  )
}

export default MovieScreen