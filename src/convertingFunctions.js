export const convertBinToDes = (inputText) => {
    const pieces = inputText.split('.')
    let sum = 0
    let highestPower = pieces[0].length - 1
    for (let i = 0; i <= highestPower; i++) {
      const multiplier = parseInt(pieces[0].charAt(i))
      sum = sum + multiplier * Math.pow(2, highestPower - i)
    }
    if (pieces[1]) {
      let count = pieces[1].length
      for (let i = 0; i < count; i++) {
        const multiplier = parseInt(pieces[1].charAt(i))
        sum = sum + multiplier * Math.pow(2, -(i +1))
      }    
    }
    return String(sum)
  }

  export const convertDesToBin = (inputText) => {
    const pieces = inputText.split('.')
    let sum = ''
    let result = parseInt(pieces[0])
    if (result === 0) {
      sum = '0'
    }
    let numbers = []
    if (!(result === 0)) {
      while (true) {
        let remainder = result % 2
        result = parseInt(result / 2)
        if (!(result === 0 && remainder === 0)) {
          numbers.push(remainder)
        }
        if (result === 0) {
          break
        }
      }
      const digits = numbers.length
        for (let i = digits - 1; i >= 0; i--) {
          const toAdd = numbers[i]
          const updatedSum = sum.concat(toAdd)
          sum = updatedSum
        }
    } 
    if (pieces[1]) {
      let counter = 32
      let decimal = parseFloat('0.' + pieces[1])
      sum = sum.concat('.')
      while (counter >= 0) {
        decimal = decimal * 2
        if (decimal === 1) {
          sum = sum.concat('1')
          break
        } else if (decimal > 1) {
          sum = sum.concat('1')
          decimal = decimal - 1
        } else {
          sum = sum.concat('0')
        }
        counter--
      }
    }
  
    if (sum.length > 20) {
      let fragmentedSum = sum
      let fragments = []
      while (true) {
        const beginning = fragmentedSum.substring(0, 20).concat(' \n ')
        fragments.push(beginning)
        fragmentedSum = fragmentedSum.substring(20)
        if (fragmentedSum.length <= 20) {
          fragments.push(fragmentedSum)
          break
        }
      } 
      const updatedSum = [fragments].join('').replace(/,/g, '')
      return updatedSum
    }
  
    return sum
  }

  
