
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions
} from 'react-native';
import ConvertANumber from './ConvertANumber'

let screen = Dimensions.get('window').width
if (screen > 400) {
  screen = 400
}

const App = () => {

  const referenceBinToDes = React.createRef()
  const referenceDesToBin = React.createRef()

    return (
      <View style={styles.screen}>
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
      </View>  
    );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor:'#d5b8b9',
  },
  appContainer: {
    width: screen, 
    alignSelf: 'center',
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
    width: screen - 40,
  },
  appDescriptionText: {
    fontSize: 16,
  }
});


export default App;