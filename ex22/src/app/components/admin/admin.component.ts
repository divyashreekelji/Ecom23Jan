import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  form!: FormGroup;
  constructor(private formbuilder:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.form = this.formbuilder.group({     

    });
  }

  logout(){
    alert("Logout Successfully..!!");
    this.router.navigateByUrl('/productPage');

  }

}
