import React from 'react';
import { View, FlatList, Text, Picker} from 'react-native';
import { ListItem, FormLabel, Button,
        FormInput, FormValidationMessage } from 'react-native-elements';

export default class MovieCreateScreen extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
      key: Math.floor(new Date()) + Math.floor(Math.random() * 10000000).toString(),
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
    this.props.navigation.state.params.createMovie(this.state);
    this.props.navigation.goBack();
  }
  updatePicker = (year) => {
    this.setState(() => {
      return {
        year: year
      }
    });
  }
  render() {
    const years = ['1999', '2000', '2001', '2002', '2003', '2004'];

    return(
      <View>
        <FormLabel>Title</FormLabel>
        <FormInput
          onChangeText={this.handleTitleChange}
        />
        <FormLabel>Year</FormLabel>
        <Picker selectedValue = {this.state.year} onValueChange = {this.updatePicker}>
          {years.map((year) =>
            <Picker.Item label = {year} value = {year} />
          )}
        </Picker>
        

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
