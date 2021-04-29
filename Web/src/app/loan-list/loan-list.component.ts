import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service'

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.css']
})
export class LoanListComponent implements OnInit {

  constructor( private service:SharedService ) { }

  LoanList:any=[];
  displayedColumns:string[]=['CustomerNameWithInitial', 'CustomerAddress', 'CustomerNIC', 'LoanAmount', 'LoanTerm', 'LoanInstallment'];

  ngOnInit(): void {
    this.loanList();
  }

  loanList(){
    this.service.getLoanList().subscribe(loans=>{
      this.LoanList=loans;
    })
  }

}
