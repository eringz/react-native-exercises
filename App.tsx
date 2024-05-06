import React, {Component} from 'react';
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

export default class Touchables extends Component {
  _onPressButton() {
    Alert.alert('you tapped the button;!');
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!');
  }

  render() {
    return(
      <View>
          <TouchableHighlight
            onPress={this._onPressButton}
            underlayColor='white'
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>TouchableHighlight</Text>
            </View>
          </TouchableHighlight>
          <TouchableOpacity
            onPress={this._onPressButton}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>TouchableOpacity</Text>
            </View>
          </TouchableOpacity>
          <TouchableNativeFeedback
            onPress={this._onPressButton} 
            background={
              Platform.OS === 'android'
                ? TouchableNativeFeedback.SelectableBackground()
                : undefined
            }
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>
                TouchableNativeFeedback{' '}
                {Platform.OS !== 'android' ? '(Android only)' : ''}
              </Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableWithoutFeedback
            onPress={this._onPressButton}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableHighlight
            onPress={this._onPressButton}
            onLongPress={this._onLongPressButton}
            underlayColor='white'
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Touchable with long press</Text>
            </View>
          </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    alignItems: 'center',
  },
  button: {
    marginBottom: 30,
   
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
  }
})