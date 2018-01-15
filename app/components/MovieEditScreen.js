import React from 'react';
import { View, FlatList, Text} from 'react-native';
import { ListItem, FormLabel, Button,
        FormInput, FormValidationMessage } from 'react-native-elements';

export default class MovieEditScreen extends React.Component {
  constructor(props){
  	super(props);
    
  	this.state = {
      key: this.props.navigation.state.params.key,
      title: this.props.navigation.state.params.title,
      year: this.props.navigation.state.params.year,
      duration: this.props.navigation.state.params.duration,
      genre: this.props.navigation.state.params.genre,
      avatar: this.props.navigation.state.params.avatar
    };
  }
  handleTitleChange = (event) => {
    this.setState(() => {
      return {
        title: event
      }
    });
  }
  handleYearChange = (event) => {
    this.setState(() => {
      return {
        year: event
      }
    });
  }
  handleDurationChange = (event) => {
    this.setState(() => {
      return {
        duration: event
      }
    });
  }
  handleGenreChange = (event) => {
    this.setState(() => {
      return {
        genre: event
      }
    });
  }
  handleSubmit = () => {
    this.props.navigation.state.params.updateMovie(this.state);
    this.props.navigation.goBack();
  }
  render() {
    const title = this.props.navigation.state.params.title;

    return(
      <View>
        <FormLabel>Title</FormLabel>
        <FormInput
          onChangeText={this.handleTitleChange}
          defaultValue={this.props.navigation.state.params.title}
        />
        {/* <FormValidationMessage>Error message</FormValidationMessage> */}
        <FormLabel>Year</FormLabel>
        <FormInput
          onChangeText={this.handleYearChange}
          defaultValue={this.props.navigation.state.params.year}
        />
        <FormLabel>Genre</FormLabel>
        <FormInput
          onChangeText={this.handleGenreChange}
          defaultValue={this.props.navigation.state.params.genre}
        />
        <FormLabel>Duration</FormLabel>
        <FormInput
          onChangeText={this.handleDurationChange}
          defaultValue={this.props.navigation.state.params.duration}
        />
        <Button
          large
          onPress={this.handleSubmit}
          title='Update Movie'>
        </Button>
      </View>
    );
  }
}
