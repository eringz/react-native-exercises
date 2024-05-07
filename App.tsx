import {View, Text, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const App = () => {
  return(
    <View>
      <Text>Width: {windowWidth}</Text>
      <Text>Height: {windowHeight}</Text>
    </View>
  )
}

export default App;