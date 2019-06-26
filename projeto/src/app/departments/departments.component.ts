import { Component, OnInit } from '@angular/core';
import {Departments} from './departments';
import {DepartmentService} from './Department.service';
@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
