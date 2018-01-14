import React from 'react';
import { View, FlatList, Text} from 'react-native';
import { ListItem, FormLabel, Button,
        FormInput, FormValidationMessage } from 'react-native-elements';

export default class MovieCreateScreen extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
      title: "",
      year: "",
      duration: "",
      genre: "",
      avatar: "https://picsum.photos/300/300/?random",
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
    console.log(this.props)
    this.props.navigation.state.params.createMovie(this.state);
    this.props.navigation.goBack();
  }
  render() {
    return(
      <View>
        <FormLabel>Title</FormLabel>
        <FormInput
          onChangeText={this.handleTitleChange}
        />
        {/* <FormValidationMessage>Error message</FormValidationMessage> */}
        <FormLabel>Year</FormLabel>
        <FormInput
          onChangeText={this.handleYearChange}
        />
        <FormLabel>Genre</FormLabel>
        <FormInput
          onChangeText={this.handleGenreChange}
        />
        <FormLabel>Duration</FormLabel>
        <FormInput
          onChangeText={this.handleDurationChange}
        />
        <Button
          large
          onPress={this.handleSubmit}
          title='Create Movie'>
        </Button>
      </View>
    );
  }
}
