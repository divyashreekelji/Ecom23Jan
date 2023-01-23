import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UserModel } from 'src/app/UserModel';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //loginForm!: FormGroup;
  submitted = false;

  //*************
  public loginForm !: FormGroup;
  public loginObj = new UserModel();


  constructor(private formBuilder: FormBuilder,private http:HttpClient,
    private router:Router, public userService:UserService) { }

    ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        email:["",Validators.compose([Validators.required,Validators.email])],
        password:["",Validators.required]
      });
     localStorage.clear();
  }
  //get f() { return this.loginForm.controls; }
//  id:any='';

  // onSubmit(){

  //   this.userService.userLogin(this.loginForm.value).subscribe(res=>{
  //     const data=res.find((a:any)=>{
  //       return a.userName===this.loginForm.value.userName && a.password===this.loginForm.value.password;
  //     });
  //     if(data){
  //       alert("Login suceesfull");
  //       this.loginForm.reset;
  //       this.router.navigate(['/productPage']);
  //     }
  //     else{
  //       alert("Invalied creadential");
  //     }
  //   })
  // }

  // login()

  // {
  //   debugger;
   
  //   this.loginObj.userName = this.loginForm.value.email;
  // this.loginObj.password = this.loginForm.value.password;
  // this.userService.login(this.loginObj)
  // .subscribe(res=>{
  //   //alert(res.message);
  //   this.router.navigate(['/productPage']);
  //   localStorage.setItem('token',res.token);
  //   //console.log( "*********"+localStorage.setItem('token',res.token));
  //   //localStorage.setItem('userType',res.userType);
  // },err=>{
  //   alert("soomething went wrong")
  // })

  // }

  login(){

    debugger;
   
    this.loginObj.userName = this.loginForm.value.email;
  this.loginObj.password = this.loginForm.value.password;
  this.userService.login(this.loginObj)
  .subscribe(res=>{
    //alert(res.message);
    this.router.navigate(['/productPage']);
    localStorage.setItem('token',res.token);
    //console.log( "*********"+localStorage.setItem('token',res.token));
    //localStorage.setItem('userType',res.userType);
  },err=>{
    alert("something went wrong");
  })

  }

}
