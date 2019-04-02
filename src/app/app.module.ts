import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, AuthGuard, OnlyLoggedInUsers } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserService } from './user.service';


const routes : Routes=[
  {path:'Employee',component:EmployeeComponent,canActivate:[OnlyLoggedInUsers]},
  {path:'Department',component:DepartmentComponent,canActivate:[AuthGuard]}
];
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DepartmentComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard,UserService,OnlyLoggedInUsers],
  bootstrap: [AppComponent]
})
export class AppModule { }
