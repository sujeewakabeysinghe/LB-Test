import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIURL='http://localhost:5488/api/'

  constructor(private http:HttpClient) { }
  
  getLoanList():Observable<any[]>{
    return this.http.get<any>(this.APIURL+'Loans');
  }

  submitLoanRequest(val:any){
    return this.http.post(this.APIURL+'/Loans', val);
  }

}
