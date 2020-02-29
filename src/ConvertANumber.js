import React, { useState, useImperativeHandle } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { checkInputLengthValidity, checkInputCharacterValidity } from './validationCheckFunctions'
import { convertBinToDes, convertDesToBin } from './convertingFunctions'


const ConvertANumber = React.forwardRef(( props, ref ) => {

  const from = props.from
  const [input, setInput] = useState('')
  const [convertedvalue, setConvertedvalue] = useState('')
  const [showplaceholder, setShowplaceholder] = useState(true)
  const [errormessage, setErrormessage] = useState('')
  const binToDes = [
                      'BINÄÄRILUVUSTA DESIMAALILUVUKSI',
                      'binääriluku',
                      'syötä binääriluku..',
                      'on desimaalilukuna: '
                    ]
  const desToBin = [
                      'DESIMAALILUVUSTA BINÄÄRILUVUKSI',
                      'desimaaliluku',
                      'syötä desimaaliluku..',
                      'on binäärilukuna: ',
                    ]

  const toggleShowPlaceholder = () => {
    if (input === '') {
      setShowplaceholder(true)
    }
  }
  useImperativeHandle(ref, () => {
    return {
      toggleShowPlaceholder
    }
  })

  const handleInputChanged = (text) => {
    setInput(text)
    const inputError = checkInputCharacterValidity(text, from)
    const lengthError = checkInputLengthValidity(text, from)
    let allErrors = ''
    if (inputError !== '') {
      allErrors = allErrors.concat(inputError).concat(' ')
    } 
    if (lengthError !== '') {
      allErrors = allErrors.concat(lengthError)
    }
    if (errormessage !== allErrors) {
      setErrormessage(allErrors)
    }
    if (allErrors === '' && text !== '') {
      const result = from === 2 ? convertBinToDes(text) : convertDesToBin(text)
      setConvertedvalue(result)
    } else {
      setConvertedvalue('')
    }
  }

  const handlePlaceholderDisplay = () => {
    if (showplaceholder) {
      setShowplaceholder(false)
    }
  }

  const resetValue = () => {
    setInput('')
    setShowplaceholder(true)
    setErrormessage('')
    setConvertedvalue('')
  }
  
  const displayErrorMessage = () => {
    if (errormessage === '') {
      return null
    } else {
      return (
        <View style={styles.errorView}>
          <Text style={styles.error}>{errormessage}</Text>
        </View>
      )
    }
  }

  const displayConvertedValue = () => {
    if (convertedvalue === '') {
      return null
    } else {
      return (
        <View style={styles.resultView}>
          <Text style={styles.justText}>{from === 2 ? binToDes[3] : desToBin[3]}</Text>
          <Text  style={styles.resultText}>{convertedvalue}</Text> 
          <TouchableOpacity>
            <Text></Text>
          </TouchableOpacity>                           
        </View>
      )
    }
  }

  const displayResetButton = () => {
    if (input === '') {
      return null
    } else {
      return (
        <View style={styles.resetView}>
          <TouchableOpacity onPress={resetValue}>
            <Text style={styles.resetText}>NOLLAA</Text>
          </TouchableOpacity>
        </View>
      )
    }
  }

  const inputTextStyling = () => {
    if (showplaceholder) {
      return styles.placeholder
    } else {
      if (errormessage === '') {
        return styles.inputText
      } else {
        return [styles.inputText, styles.errorHighlighting]
      }
    }
  }

    return (
        <View style={styles.container}>
          <Text style={styles.headerText}>{from === 2 ? binToDes[0] : desToBin[0]}</Text>
          <Text style={styles.justText}>{from === 2 ? binToDes[1] : desToBin[1]}</Text>
          <TextInput
              style={inputTextStyling()}
              onChangeText={handleInputChanged}
              placeholder={showplaceholder ? `${from === 2 ? binToDes[2] : desToBin[2]}` : null}
              onSelectionChange={handlePlaceholderDisplay}
              value={input}
          ></TextInput>
          {displayErrorMessage()}
          {displayConvertedValue()}
          {displayResetButton()}
        </View>
    )
})

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  placeholder: {
    color: 'gray',
    fontStyle: 'italic',
    height: 40,
    backgroundColor: 'white',
    width: Dimensions.get('window').width - 100,
    borderRadius: 6,
    fontSize: 18,
    textAlign: 'center'    
  },
  inputText: {
    height: 40,
    backgroundColor: 'white',
    width: Dimensions.get('window').width - 100,
    borderRadius: 6,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  justText: {
    fontSize: 17,
    textAlign: 'center'    
  },
  resultView: {
    marginTop: 10,
  },
  errorView: {
    marginTop: 10,
  },
  error: {
    fontSize: 17,
    textAlign: 'center'   
  },
  errorHighlighting: {
    color: 'red'
  },
  resetView: {
    marginTop: 10,
    backgroundColor: 'rosybrown',
    height: 35,
    borderRadius: 5,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
  resetText: {
    fontSize: 16
  },
  resultText: {
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10
  }
});


export default ConvertANumber

