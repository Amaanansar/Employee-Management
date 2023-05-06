import { Component, OnInit } from '@angular/core';
import { LogindataService } from 'src/app/logindata.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent implements OnInit {

constructor(private dataser:LogindataService,private router:Router) {

}

ngOnInit(): void {
  this.getEdata()
}
eData:any;
getEdata() {
  // this.serData = this.dataservice.getData() 
 return this.dataser.getEmpData().subscribe((data) => {this.eData = data;console.log(data)}, err =>{console.log("err",err)})
}

createNew() {
  this.router.navigate(['/createNew'])
}
delete_emp1(i:any){
  this.dataser.delete_emp(i).subscribe(
    (result)=>{console.log(result);this.getEdata();alert("Employee deleted successfully!")}
  )
}

edit(i:any,j:any) {
  this.router.navigate(['/editData',i])
  return this.dataser.dataToUpd(j)
}
}
