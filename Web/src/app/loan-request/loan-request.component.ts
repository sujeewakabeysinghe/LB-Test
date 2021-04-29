import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-request',
  templateUrl: './loan-request.component.html',
  styleUrls: ['./loan-request.component.css']
})
export class LoanRequestComponent implements OnInit {

  CustomerFullName:any;
  CustomerNameWithInitial:any;
  CustomerNIC:any;
  CustomerAge:any;
  CustomerAddress:any;
  LoanAmount:any;
  LoanInterest:any;
  LoanTerm:any;
  LoanInstallment:any;

  constructor( 
    private service:SharedService,
    private router:Router
    ) { }


  ngOnInit(): void {
  }

  submitRequest(){
    const loan={
      CustomerFullName:this.CustomerFullName,
      CustomerNameWithInitial:this.CustomerNameWithInitial,
      CustomerNIC:this.CustomerNIC,
      CustomerAge:this.CustomerAge,
      CustomerAddress:this.CustomerAddress,
      LoanAmount:this.LoanAmount,
      LoanInterest:this.LoanInterest,
      LoanTerm:this.LoanTerm,
      LoanInstallment:(this.LoanAmount*((this.LoanInterest+100)/100))/this.LoanTerm
    }
    this.service.submitLoanRequest(loan).subscribe(res=>{
      if(res){
        this.router.navigate(['./loanlist']);
      }
    })
  }

  test(){
    const x = (this.LoanAmount*((this.LoanInterest+100)/100))/this.LoanTerm
    console.log(x)
  }

}
