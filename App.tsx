import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Text } from 'react-native';

const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => {
  return(
    <Button
      title="Go to Jane's profile"
      onPress={() =>
      navigation.navigate('Profile', {name: 'Jane'})
    }
  />
  )
}

const ProfileScreen = ({navigation, route}) => {
  return <Text style={{color: 'green'}}>This is {route.params.name} profile </Text>
}

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Home'
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen 
          name='Profile'
          component={ProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;``