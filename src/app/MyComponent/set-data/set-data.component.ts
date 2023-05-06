import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { LogindataService } from 'src/app/logindata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-data',
  templateUrl: './set-data.component.html',
  styleUrls: ['./set-data.component.css']
})

export class SetDataComponent implements OnInit {

  constructor( private ser:LogindataService,private router:Router) { }
  
  ngOnInit(): void {
  

  }

  emp1= new FormGroup({
    Name1:new FormControl("",Validators.required),
    Age1:new FormControl("",Validators.required),
    jd:new FormControl("",Validators.required),
    id:new FormControl("",Validators.required),
  })

  onaddemployee()  {
    console.log("bababbabababab")
    this.ser.getposturldata1(this.emp1.value).subscribe(
      (res)=>{
        console.log(res)
      }
    )
    this.router.navigate(['/login'])
  }  
}