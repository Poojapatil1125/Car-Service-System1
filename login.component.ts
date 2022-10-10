import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData={
    emailId:'',
    password:'',
    userName:''
  }

  isadmin:any;
  constructor(private login:RegistrationService,private router:Router) { }

  ngOnInit(): void {
  }
  loginform(){
    console.log("login Button Clicked");

    if(this.loginData.emailId=='' || this.loginData.emailId==null || this.loginData.password=='' || this.loginData.password==null){

      alert("Need to fill all Fields");
      return;
    }
    else{
      console.log(this.loginData);
      this.login.getCurrentUser(this.loginData).subscribe(
        (data:any)=>{
          this.router.navigate(['loginuser']);

        },
        (error:any)=>{
              alert("Error in Credentials");
        }
      )
    }

  

    
   if(this.isadmin){

    this.router.navigate(['admin']);
   }
   else{
     this.router.navigate(['userdashboard']);
   }
       
 }
}