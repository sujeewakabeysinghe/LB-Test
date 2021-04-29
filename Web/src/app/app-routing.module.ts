import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanListComponent } from './loan-list/loan-list.component';
import { LoanRequestComponent } from './loan-request/loan-request.component';

const routes: Routes = [
  {path:'loanlist',component:LoanListComponent},
  {path:'loanrequest',component:LoanRequestComponent},
  {path:'',redirectTo: 'loanlist', pathMatch: 'full' },
  {path: '**', component:LoanListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
