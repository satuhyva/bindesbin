
import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Dimensions
} from 'react-native';
import ConvertANumber from './ConvertANumber'


// class App extends React.Component {

const App = () => {

  const referenceBinToDes = React.createRef()
  const referenceDesToBin = React.createRef()

  // render() {
    return (
        <View style={styles.appContainer}  onStartShouldSetResponder={evt => {
          evt.persist()
          if (!(evt.target.placeholder)) {
            referenceBinToDes.current.toggleShowPlaceholder()
            referenceDesToBin.current.toggleShowPlaceholder()
          }
        }}>
          <View style={styles.appNameView}>
            <Text style={styles.appNameText}>BINDESBIN</Text>
            <View style={styles.appDescriptionView}>
              <Text style={styles.appDescriptionText}>
                Tämän pikku sovelluksen avulla voit muuttaa binääriluvun desimaaliluvuksi tai päinvastoin. 
                Tämä sovellus selviää myös binääri- ja desimaalipisteistä.
              </Text>
            </View>
          </View>  
          <ConvertANumber
            from={2}
            ref={referenceBinToDes}
          ></ConvertANumber>   
          <ConvertANumber
            from={10}
            ref={referenceDesToBin}
          ></ConvertANumber> 
        </View>
    );
  // }
}

const styles = StyleSheet.create({
  appContainer: {
    // width: Dimensions.get('window').width,
    backgroundColor:'#d5b8b9',
    height: Dimensions.get('window').height
  },
  appNameView: {
    alignItems: 'center',
    marginTop: 10,
  },
  appNameText: {
    fontWeight: 'bold',
    fontSize: 35
  },
  appDescriptionView: {
    textAlign: 'center',
    marginTop: 5,
    width: Dimensions.get('window').width - 40,
  },
  appDescriptionText: {
    fontSize: 16,
  }
});

// AppRegistry.registerComponent('App', () => App);

export default App;