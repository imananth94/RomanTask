import { Component, OnInit } from '@angular/core';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-roman-conversion',
  templateUrl: './roman-conversion.component.html',
  styleUrls: ['./roman-conversion.component.scss']
})
export class RomanConversionComponent implements OnInit {

  conversion_type = 'n_r';
  title = 'Number to Roman';
  hint = 'ex : 123';
  inputNumber: any; result: any; hideResult = true; error_message = '';
  inputType = 'number';
  label = 'number';
  constructor(private helperService: HelperService) { }

  ngOnInit(): void {
  }

  switch_coversion_type() {
    this.inputNumber = '';
    if (this.conversion_type == 'n_r') {
      this.conversion_type = 'r_n';
      this.title = 'Roman to Number';
      this.hint = 'ex : VII';
      this.inputType = 'text';
      this.label = 'roman number';
    }
    else {
      this.conversion_type = 'n_r';
      this.title = 'Number to Roman';
      this.hint = 'ex : 123';
      this.inputType = 'number';
      this.label = 'number';
    }
    console.log(this.title)
  }

  convert() {
    if (this.inputNumber.trim().length > 0) {
      if (this.conversion_type == 'n_r') {
        if (isNaN(this.inputNumber) || !this.helperService.isInt(this.inputNumber)) {
          this.error_message = 'Please enter a valid Number';
        }

        else if (this.inputNumber > 3000) {
          this.error_message = 'Please enter a number below 3000';
        }
        else if (this.inputNumber < 1) {
          this.error_message = 'Please enter a positive number.';
        }
        else {
          this.error_message = '';
          this.result = this.helperService.numberToRoman(this.inputNumber);
          console.log(this.result);
          this.hideResult = false;
        }
      }
      else {
        this.error_message = '';
        let res = this.helperService.romanToNumber(this.inputNumber);
        console.log(res)
        if (res == 0) {
          console.log('ashdddd')
          this.error_message = 'Please enter a valid roman number';
        }
        else {
          this.result = res;
          this.hideResult = false;
        }

      }
    }
  }

  hide_result() {
    this.hideResult = true;
    this.error_message = '';
  }

  

}
