import { Component, OnInit } from '@angular/core';
import { UserApi } from "../user-api";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'fw-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent  {

  formError:string;
  submitting = false;

  constructor(private userApi: UserApi,private router:Router) { }

  onSubmit(signInForm:NgForm){
    if(signInForm.valid){
      this.submitting = true;
      this.formError = null;

      this.userApi.signIn(signInForm.value.username,signInForm.value.password,signInForm.value.rememberMe)
      .subscribe((data)=>{
        console.log("got valid data",data);
        this.router.navigate(['/authenticated']);
      },(err)=>{
        this.submitting = false;
        console.log("got error: ",err);
        this.formError = err;
      });
    }
  }

}