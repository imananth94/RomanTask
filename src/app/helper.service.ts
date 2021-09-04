import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HelperService {

  numeralCodes = [["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],         // Ones
  ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],   // Tens
  ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"], // hundreds
  ["", "M", "MM", "MMM", "MMMM"]];  // thousands

  constructor() { }

  numberToRoman(num: any) {
    var numeral = "";
    var digits = num.toString().split('').reverse();
    for (var i = 0; i < digits.length; i++) {
      numeral = this.numeralCodes[i][parseInt(digits[i])] + numeral;
    }
    return numeral;
  }

  romanToNumber(str1: any) {
    if (str1 == null) return -1;
    var num = this.char_to_int(str1.charAt(0));
    var pre, curr;

    for (var i = 1; i < str1.length; i++) {
      curr = this.char_to_int(str1.charAt(i));
      pre = this.char_to_int(str1.charAt(i - 1));
     if(curr == 0){
        return 0;
     }
      if (curr <= pre) {
        num += curr;
      } else {
        num = num - pre * 2 + curr;
      }
    }

    return num;
  }

  char_to_int(c: any) {
    switch (c) {
      case 'I': return 1;
      case 'V': return 5;
      case 'X': return 10;
      case 'L': return 50;
      case 'C': return 100;
      case 'D': return 500;
      case 'M': return 1000;
      default: return 0;
    }
  }

 

  isInt(n:any) {
    return n % 1 === 0;
  }
}
