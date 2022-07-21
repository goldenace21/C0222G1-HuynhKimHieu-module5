import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators} from '@angular/forms';
import {CustomValidators} from "./customer-validators";

@Component({
  selector: 'app-sig-up',
  templateUrl: './sig-up.component.html',
  styleUrls: ['./sig-up.component.css']
})
export class SigUpComponent implements OnInit {
  sigUpForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.sigUpForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(6), Validators.required]),
      passwordConfirm: new FormControl(),
      country: new FormControl('',[Validators.required]),
      age: new FormControl('',[Validators.min(18)]),
      gender: new FormControl(),
      phone: new FormControl('',[Validators.pattern("^\\+84\\d{9,10}$")])
    }, [CustomValidators.MatchValidator('password', 'passwordConfirm')])
  }

  getInfo(): void {
    console.log(this.sigUpForm.value)
  }

  get passwordMatchError() {
    return (
      this.sigUpForm.getError('mismatch')
    );
  }
}
