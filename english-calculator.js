function engCalc (numString) {
  numString = numString.split(' ')
  var numStringArr = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty'
  ]

  var calcArr = []
  for (var i = 0; i < numString.length; i++) {
    for (var j = 0; j < numStringArr.length; j++) {
      if (numString[i] === numStringArr[j]) {
        calcArr.push(j)
      }
    }
  }

  function backToString (num) {
    for (var k = 0; k < numStringArr.length; k++) {
      if (k === num) {
        return numStringArr[k]
      }
    }
  }

  if (numString.includes('plus')) {
    var add = calcArr[0] + calcArr[1]
    console.log(numString[0] + ' plus ' + numString[2] + ' is ' + backToString(add))
  } else if (numString.includes('minus')) {
    var subtract = calcArr[0] - calcArr[1]
    console.log(numString[0] + ' minus ' + numString[2] + ' is ' + backToString(subtract))
  } else if (numString.includes('times')) {
    var product = calcArr[0] * calcArr[1]
    console.log(numString[0] + ' times ' + numString[2] + ' is ' + backToString(product))
  } else if (numString.includes('divided')) {
    var quotient = calcArr[0] / calcArr[1]
    console.log(numString[0] + ' divided by ' + numString[3] + ' is ' + backToString(quotient))
  }
}

engCalc('eighteen divided by six')

// function englishCalc (str) {
//   var num1 = strNumTranslator(str.toLowerCase().split(' ')[0])
//   // console.log("testing num1 works...",num1);
//   var num2 = strNumTranslator(str.toLowerCase().split(' ')[2])
//   // console.log("testing num2 works...",num2);
//   var res = operatorTranslator(num1, num2, str.toLowerCase().split(' ')[1])
//   // console.log("testing res works...", res);
//   // using cool new ES6 syntax for strings..
//   return `${str} is ${numStrTranslator(res)}`
// }
//
// function strNumTranslator (str) {
//   switch (str) {
//     case 'zero' :
//       return 0
//     case 'one' :
//       return 1
//     case 'two' :
//       return 2
//     case 'three' :
//       return 3
//     case 'four' :
//       return 4
//     case 'five' :
//       return 5
//     case 'six' :
//       return 6
//     case 'seven' :
//       return 7
//     case 'eight' :
//       return 8
//     case 'nine' :
//       return 9
//     case 'ten' :
//       return 10
//     case 'eleven' :
//       return 11
//     case 'twelve' :
//       return 12
//     case 'thirteen' :
//       return 13
//     case 'fourteen' :
//       return 14
//     case 'fiveteen' :
//       return 15
//     case 'sixteen' :
//       return 16
//     case 'seventeen' :
//       return 17
//     case 'eighteen' :
//       return 18
//     case 'nineteen' :
//       return 19
//     case 'twenty' :
//       return 20
//   }
// }
//
// function numStrTranslator (num) {
//   switch (num) {
//     case 0 :
//       return 'zero'
//     case 1 :
//       return 'one'
//     case 2 :
//       return 'two'
//     case 3 :
//       return 'three'
//     case 4 :
//       return 'four'
//     case 5 :
//       return 'five'
//     case 6 :
//       return 'six'
//     case 7 :
//       return 'seven'
//     case 8 :
//       return 'eight'
//     case 9 :
//       return 'nine'
//     case 10 :
//       return 'ten'
//     case 11 :
//       return 'eleven'
//     case 12 :
//       return 'twelve'
//     case 13 :
//       return 'thirteen'
//     case 14 :
//       return 'fourteen'
//     case 15 :
//       return 'fiveteen'
//     case 16 :
//       return 'sixteen'
//     case 17 :
//       return 'seventeen'
//     case 18 :
//       return 'eighteen'
//     case 19 :
//       return 'nineteen'
//     case 20 :
//       return 'twenty'
//   }
// }
//
// function operatorTranslator (num1, num2, str) {
//   switch (str) {
//     case 'plus':
//       return num1 + num2
//     case 'minus':
//       return num1 - num2
//     case 'times':
//       return num1 * num2
//     case 'divide':
//       return Math.round(num1 / num2)
//     case 'modulus':
//       return num1 % num2
//     case 'power':
//       return Math.pow(num1, num2)
//   }
// }
//
// // console.log(wordConverter("twenty"));
// console.log(englishCalc('ten divide two'))
