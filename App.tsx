import React, {Component} from 'react';
import {Alert, Button, StyleSheet, View} from 'react-native';

export default class ButtonBasics extends Component {
  __onPressButton() {
    Alert.alert('You tapped the button');
  }
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button onPress={this.__onPressButton} title='Press Me' />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.__onPressButton}
            title="Press Me"
            color='#841584'
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button onPress={this.__onPressButton} title="this looks great" />
          <Button onPress={this.__onPressButton} title="Ok" />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})