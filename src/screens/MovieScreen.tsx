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
        backgroundColor='orange'
        orientation='horizontal'
        height={350}
        width={250}
        handleScroll={loadNextMovies}
        movies={nowPlaying} //Recupera peliculas ahora en cines
      />
    </View>
  )
}

export default MovieScreen