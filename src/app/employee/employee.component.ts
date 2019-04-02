import { Component, OnInit } from '@angular/core';
import { Employees } from '../employees';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }
  Employeelist :Employees[]=[
    {Id:1,Name:'abcd',Age:45,Salary:67000},
    {Id:2,Name:'efgh',Age:23,Salary:30000},
    {Id:3,Name:'ijkl',Age:36,Salary:56000},
    {Id:4,Name:'mnop',Age:67,Salary:54000},
    {Id:5,Name:'qrst',Age:45,Salary:33000},
  ]

  ngOnInit() {
  }
  

}
