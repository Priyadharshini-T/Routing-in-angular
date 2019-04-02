import { Component, OnInit } from '@angular/core';
import { Departments } from '../departments';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor() { }
  DepartmentList :Departments[]=[
    {DeptId:101,DeptName:'aaa'},
    {DeptId:102,DeptName:'bbb'},
    {DeptId:103,DeptName:'ccc'},
    {DeptId:104,DeptName:'ddd'},
    {DeptId:105,DeptName:'eee'},

   
  ]


  ngOnInit() {
  }

}
