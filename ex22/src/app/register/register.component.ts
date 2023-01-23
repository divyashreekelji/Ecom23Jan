import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { FormBuilder,FormGroup,Validators,FormGroupDirective,Form, FormControl,NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { IUser } from '../IUser';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UserModel } from '../UserModel';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup ;
  UserService: any;
  httpClient: any;
  submitted = false;
  registerForm!: FormGroup;
  

  //**** */
  public signUpForm !: FormGroup;
  public signupObj = new UserModel();

  constructor(private formBuilder: FormBuilder,private http:HttpClient,private dataService:UserService,private router:Router,private userService :UserService) { }

  // data ={
  //   firstName: '',
  //   lastName:'',
  //   address: '',
  //   phoneNumber: '',
  //   userName:'',
  //   email: '',
  //   password:""
  // }
  //registerForm = this.formBuilder.group({});

  ngOnInit():void {
  //   this.registerForm = this.formBuilder.group({
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     address:['', Validators.required],
  //     phoneNumber:['', Validators.required],
  //     email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
  //     userName:['', Validators.required],
  //     password: ['', [Validators.required, Validators.minLength(6)]]
  // });

  //added***********
  this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address:['', Validators.required],
      phoneNumber:['', Validators.required],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      userName:['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  signUp(){
    debugger;
    this.signupObj.firstName=this.signUpForm.value.firstName;
    this.signupObj.lastName=this.signUpForm.value.lastName;
    this.signupObj.address=this.signUpForm.value.address;
    this.signupObj.phoneNumber=this.signUpForm.value.phoneNumber;
    this.signupObj.email=this.signUpForm.value.email;
    this.signupObj.userName=this.signUpForm.value.userName;
    this.signupObj.password=this.signUpForm.value.password; 
    this.userService.signUp(this.signupObj)
  .subscribe(res=>{
    //alert(res.message);
    this.signUpForm.reset();
    this.router.navigate(['login'])
  })
  }

}




// // convenience getter for easy access to form fields
//get f() { return this.registerForm.controls; }

// submit(){

//   this.submitted=true;
//   const user:IUser=this.registerForm.value;
//   console.log("submit() "+JSON.stringify(user))
//   this.adduser(user)
//   alert("registratoin sucesfull");
//   this.registrationFormRest();
// }
// adduser(user:IUser){
//   this.userService.addUser(user).subscribe(
//         data=>{
//           //this.datasave=true;
//           console.log("value is "+data);
//         }
//       )
//     }

// signUp(){
//   this.signupObj.FullName = this.signUpForm.value.fullname;
//   this.signupObj.UserName = this.signUpForm.value.username;
//   this.signupObj.Password = this.signUpForm.value.password;
  
//   this.signupObj.Mobile = this.signUpForm.value.mobile
//   this.api.signUp(this.signupObj)
//   .subscribe(res=>{
//     alert(res.message);
//     this.signUpForm.reset();
//     this.router.navigate(['login'])
//   })

//   registrationFormRest(){
//     signUp.reset();
//   }
  



















// get firstName(){
//   return this.registerForm.get('firstName')
// }
// get laststName(){
//   return this.registerForm.get('laststName')
// }
// get address(){
//   return this.registerForm.get('address')
// }
// get phoneNumber(){
//   return this.registerForm.get('phoneNumber')
// }
// get email(){
//   return this.registerForm.get('email')
// }
// get userName(){
//   return this.registerForm.get('userName')
// }

// get password(){
//   return this.registerForm.get('password')
// }
