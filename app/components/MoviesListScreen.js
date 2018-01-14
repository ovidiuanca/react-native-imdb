import React from 'react';
import { StackNavigator } from 'react-navigation';
import { View, FlatList, Text, Picker, TouchableOpacity } from 'react-native';
import { ListItem, Button } from 'react-native-elements';
import Modal from 'react-native-modal';
import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';

import styles from '../styles/modal.style';


export default class MoviesListScreen extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
      itemToDelete: {},
      modalVisible: false,
      movies: [
        {
          key: 'a',
          index: 1,
          title: 'Fight Club',
          year: '1999',
          duration: '139',
          genre: 'Drama',
          avatar: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZGY5Y2RjMmItNDg5Yy00NjUwLThjMTEtNDc2OGUzNTBiYmM1XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'
        }
      ]
    };
    this.createMovie = this.createMovie.bind(this);
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
  createMovie = (item) => {
    newState = this.state
    newState.movies.push(item)

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
  newMovie = () => {
    const createMovie = this.createMovie

    this.props.navigation.navigate('MovieCreateScreen', {createMovie});
  }
  closeModal = () => {
    this.setState(() => {
      return {
        modalVisible: false
      }
    });
  }
  openModal = (item) => {
    this.setState(() => {
      return {
        modalVisible: true,
        itemToDelete: item
      }
    });
  }
  handleDelete = () => {
    newMovies = this.state.movies;
    itemToDelete = this.state.itemToDelete;

    index = newMovies.indexOf(itemToDelete);
    newMovies.splice(index, 1);

    this.setState(() => {
      return {
        movies: newMovies
      }
    });

    this.closeModal()
  }
  render() {
    return (
      <View>
        <Button
          large
          icon={{name: 'plus-circle', type: 'font-awesome'}}
          onPress={this.newMovie}
          title='Create Movie'>
        </Button>
        <Text />
        <FlatList
          data={this.state.movies}
          extraData={this.state}
          renderItem={({item}) => (
            <ListItem roundAvatar
                      avatar={item.avatar}
                      title={item.title}
                      subtitle={`${item.year} ${item.genre} ${item.duration} min`}
                      onPress={() => this.editMovie(item)}
                      onLongPress={() => this.openModal(item)} />
          )}
        />
        <Modal isVisible={ this.state.modalVisible }
               backdropOpacity={0.7}
               animationInTiming={1000}
               animationOutTiming={1000}
               backdropTransitionInTiming={1000}
               backdropTransitionOutTiming={1000}>
          <View style={styles.modalContent}>
            <Text>Are you sure?</Text>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableOpacity onPress={this.handleDelete}>
                <View style={styles.button}>
                  <Text>Yes</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.closeModal}>
                <View style={styles.button}>
                  <Text>No</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
