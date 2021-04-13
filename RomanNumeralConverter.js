function convertToRoman(num) {
    //roman numeral equivalency
    var abcRoman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    var numRoman = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
   
    //empty string
    var romanNumeral = "";
  
    //looks through numRoman array
    for (var index = 0; index < numRoman.length; index++) {
      //calls function while indexed number < input number
      while (numRoman[index] <= num) {
        //push correct roman numeral into romanNumeral string
        romanNumeral += abcRoman[index];
        //reduce input number by number of roman numeral pushed
        num -= numRoman[index];
      }
    }
    //returns correct roman numeral
    return romanNumeral
  }
  
  console.log(convertToRoman(167))