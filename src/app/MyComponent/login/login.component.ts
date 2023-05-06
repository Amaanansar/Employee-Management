import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';
import { LogindataService } from 'src/app/logindata.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
constructor(private dataser: LogindataService, private router: Router) {
 
}

ngOnInit(): void {
  this.dataFn()
  // this.loginSucc()
}
profileForm = new FormGroup({
  emaild : new FormControl(''),
  passwId : new FormControl(''),
});

mongo:any;
dataFn() {
  // this.serData = this.dataservice.getData() 
 return this.dataser.getData().subscribe((data) => {this.mongo = data;console.log(data)}, err =>{console.log("err",err)})
}

loginSucc() {

  if (this.profileForm.value.emaild != this.mongo[0].email) {
    alert("Please enter valid email address")
  }
  if (this.profileForm.value.passwId != this.mongo[0].pass) {
    alert("Invalid password")
  }

  if (this.profileForm.value.emaild == this.mongo[0].email && this.profileForm.value.passwId == this.mongo[0].pass) {
    console.log("jdbjdklfDN HADSOJF FUGA FJG  ")
    this.router.navigate(['/login']);
  }
  }

}
