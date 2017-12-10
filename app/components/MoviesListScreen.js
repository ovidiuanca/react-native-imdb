import React from 'react';
import { StackNavigator } from 'react-navigation';
import { View, FlatList, Text, Picker } from 'react-native';
import { ListItem } from 'react-native-elements';

export default class MoviesListScreen extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
      movies: [
        {
          key: 'a',
          index: 0,
          title: 'Fight Club',
          year: '1999',
          duration: '139',
          genre: 'Drama',
          avatar: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZGY5Y2RjMmItNDg5Yy00NjUwLThjMTEtNDc2OGUzNTBiYmM1XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'
        },
        {
          key: 'b',
          index: 1,
          title: 'Pulp Fiction',
          year: '1994',
          duration: '154',
          genre: 'Crime',
          avatar: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SX300.jpg'
        },
        {
          key: 'c',
          index: 2,
          title: 'The Lord of the Rings: The Fellowship of the Ring',
          year: '2001',
          duration: '134',
          genre: 'Adventure',
          avatar: 'https://images-na.ssl-images-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg'
        },
        {
          key: 'd',
          index: 3,
          title: 'American Beauty',
          year: '1999',
          duration: '120',
          genre: 'Drama',
          avatar: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'
        },
        {
          key: 'e',
          index: 4,
          title: 'Saving Private Ryan',
          year: '1998',
          duration: '168',
          genre: 'War',
          avatar: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg'
        },
        {
          key: 'a',
          index: 5,
          title: 'Test',
          year: '2015',
          duration: '111',
          genre: 'Test',
          avatar: 'https://placeimg.com/150/150/animals'
        }
      ]
    };
    this.updateMovie = this.updateMovie.bind(this);
  }
  updateMovie = (movie) => {
    newState = this.state
    newState.movies[movie.index] = movie


    this.setState(() => {
      return {
        movies: newState.movies
      }
    });
  }
  editMovie = (item) => {
    const updateMovie = this.updateMovie

    this.props.navigation.navigate('MovieEditScreen', {...item, updateMovie});
  }
  render() {
    return (
      <View>
        <FlatList
          data={this.state.movies}
          extraData={this.state}
          renderItem={({item}) => (
            <ListItem key={item.key}
                      roundAvatar
                      avatar={item.avatar}
                      title={item.title}
                      subtitle={`${item.year} ${item.genre} ${item.duration} min`}
                      onPress={() => this.editMovie(item)}/>
          )}
        />
      </View>
    );
  }
}
