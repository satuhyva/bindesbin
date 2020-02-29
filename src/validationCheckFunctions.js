export const checkInputLengthValidity = (inputText, from) => {
    let error = ''
    if (inputText.length > 18) {
        error = 'Liian pitkä luku!'
    }
    if (from !== 2) {
      const pieces = inputText.split('.')
      const maximum = Number.MAX_SAFE_INTEGER.toString()
      if (pieces[0].length >= maximum.length) {
        error = error.concat('Liian suuri luku!')
      } else if (pieces[1] && pieces[1].length >= maximum.length) {
        error = error.concat('Liikaa desimaaleja!')
      }
    }
  
    return error
  }

  

export const checkInputCharacterValidity = (inputText, from) => {

  let iterator = inputText[Symbol.iterator]()
  let character = iterator.next()
  let erotinOnJo = false
  let error = false

  while (!character.done) {
    if (character.value === '.') {
      if (erotinOnJo) {
        error = true
        break
      }
      else {
        erotinOnJo = true
      }
    }
    if (from === 2) {
      if (character.value !== '0' && character.value !== '1' && character.value !== '.') {
        error = true
        break
      }
    } else {
      if (character.value !== '0' && character.value !== '1'
          && character.value !== '2' && character.value !== '3'
          && character.value !== '4' && character.value !== '5'
          && character.value !== '6' && character.value !== '7'
          && character.value !== '8' && character.value !== '9'
          && character.value !== '.') {
            error = true
        break
      }
    }
    character = iterator.next()
  }
  if (error) {
    error = from === 2 ? 'Binääriluvussa voi olla vain nollia ja ykkösiä ja erottimena yksi piste!'
    : 'Desimaaliluvussa voi olla vain numeroita 0-9 ja erottimena yksi piste!'
  } else {
    error = ''
  }
  return error
}






