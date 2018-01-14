import React from 'react';
import { StackNavigator } from 'react-navigation';

import Main from '../components/Main';
import MoviesListScreen from '../components/MoviesListScreen';
import MovieEditScreen from '../components/MovieEditScreen';
import MovieCreateScreen from '../components/MovieCreateScreen';

export const Root = StackNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      title: 'Home'
    }
  },
  MoviesListScreen: {
    screen: MoviesListScreen,
    navigationOptions: {
      title: 'Movies List'
    }
  },
  MovieEditScreen: {
    screen: MovieEditScreen,
    navigationOptions: {
      title: 'Edit Movie'
    }
  },
  MovieCreateScreen: {
    screen: MovieCreateScreen,
    navigationOptions: {
      title: 'Create Movie'
    }
  }
});
