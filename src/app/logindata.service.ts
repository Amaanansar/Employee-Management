import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogindataService {

  constructor(private http:HttpClient) { }
  url = "http://localhost:3001/employee"
  url2 = "http://localhost:3001/edata"

  getData() {
    return this.http.get(this.url)
  }
  getEmpData() {
    return this.http.get(this.url2)
  }
  post_url1="http://localhost:3001/addNeweData"
  
  getposturldata1(i:any)  {
    return this.http.post(this.post_url1,i)
  }

  private compurl1:String="http://localhost:3001/edata"
  delete_emp(id:any){
    return this.http.delete(`${this.compurl1}/${id}`)
  }
  upda:any
  dataToUpd(i:any) {
    this.upda = i
  }

  private update_url2 : String="http://localhost:3001/edata"
    update_serfun1(id:any,data:any)
    {
      return this.http.put(`${this.update_url2}/${id}`,data)
    }
}

