import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("f") signUpForm: NgForm;
  defaultValue: string = "pet";
  message: string = "";
  genders: string[] = ["Male", "Female", 'Others'];
  user = {
     username: "",
     email: "",
     secret: "",
     answer: "",
     gender: ""
  }
  submitted:boolean = false;

  suggestUserName() {
    const suggestedName = 'Superuser'; 
    this.signUpForm.form.patchValue(
     {
      userData:{
        username: suggestedName
      }
     }
    )
  }

  // onSubmit(form: NgForm ){
  //   console.log(form)
  // }
  onSubmit(){
    this.submitted = true;
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.secret = this.signUpForm.value.secret;
    this.user.answer = this.signUpForm.value.message;
    this.user.gender = this.signUpForm.value.gender;

    this.signUpForm.reset()
  }
}
