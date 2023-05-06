import { Component, OnInit } from '@angular/core';
import { LogindataService } from 'src/app/logindata.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {

  constructor(private dataser:LogindataService,private router:Router) {
  }
  
  data:any
  ngOnInit(): void {
    this.data = this.dataser.upda
  }
  emp1= new FormGroup({
    Name1:new FormControl(this.dataser.upda.name,Validators.required),
    Age1:new FormControl(this.dataser.upda.age,Validators.required),
    jd:new FormControl(this.dataser.upda.jd,Validators.required),
    id:new FormControl(this.dataser.upda.id,Validators.required),
  })


  onUpdateemployee() {
    this.dataser.update_serfun1(this.data._id,this.emp1.value).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['/login'])})
  }
}
