import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  ionicForm: FormGroup;
  isSubmitted = false;
  constructor(public formBuilder: FormBuilder) { }
  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      input_id1: [''],
      input_id2: [''],
      input_id3: ['', Validators.required]
    })
  }
  
  get errorControl() {
    return this.ionicForm.controls;
  }
  submitForm() {
    this.isSubmitted = true;
   if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else { 
      alert(JSON.stringify(this.ionicForm.value));
    }
  }
}