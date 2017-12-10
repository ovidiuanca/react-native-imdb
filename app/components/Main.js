import React from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import email from 'react-native-email'

export default class MoviesListScreen extends React.Component {
  handleEmail = () => {

    const to = ['razvancrisan1996@gmail.com'] // string or array of email addresses
      email(to, {
          // Optional additional arguments
          // cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
          // bcc: 'mee@mee.com', // string or array of email addresses
          subject: 'Welcome to Cinema App',
          body: 'You can waste your life watching our movies!'
      }).catch(console.error)
  }
  navigateToMovies = () => {
    this.props.navigation.navigate('MoviesListScreen');
  }


  render() {
    return (
      <View>
        <Text />
        <Button
          large
          icon={{name: 'envelope', type: 'font-awesome'}}
          onPress={this.handleEmail}
          title='Send Email'>
        </Button>
        <Text />
        <Button
          large
          icon={{name: 'tv', type: 'font-awesome'}}
          onPress={this.navigateToMovies}
          title='Movies'>
        </Button>
      </View>
    );
  }
}
