import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {"text": ""};
    
  }
  doThing(text) {
    alert(text);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: "https://power-analyzer.github.io/power_analyzer_logo.jpg"}} style={{width: 300, height: 300}}/>
        <Text style={{fontWeight: "bold", fontSize: 20}}>Power Analyzer</Text>
        <Text>Powerfull Analytics at your fingertips.</Text>
        <Button title="Login" onPress={() => { Alert.alert("Unable to login.", "LOL. The app isn't even built yet.")}}></Button>
      </View> 
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
