import { Component, OnInit, ElementRef } from '@angular/core';
import { tokenPayLoad, workersDetails, AuthenticationService } from '../authentication.service';
import { DepartmentService } from '../departments/Department.service';
import { Departments } from '../departments/departments';
import {AdminService} from './admin.service';
import { Workers } from './Workers';
import { Entities } from './entities.class';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
  Details: workersDetails;
  deps: Departments[];
  dep: Departments;
  ents: Entities[];
  ent: Entities;
  workers: Workers[];
  worker: Workers;
  searchTerm: string;

  department: Departments;
  constructor(private auth: AuthenticationService, private depaService: DepartmentService,
              private adm: AdminService, private elementRef: ElementRef) {

    }
    ngAfterViewInit() {
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'lightblue';
    }

  ngOnInit() {
    this.getDepart();
    this.getWorkers();
    this.getEntities();
  }
  getDepart(): any {
    // tslint:disable-next-line: no-shadowed-variable
    this.depaService.getDepartments().subscribe(departments => this.deps = departments);
}
getWorkers(): any {
  this.adm.getWorkers().subscribe(wrk => this.workers = wrk);
}
getEntities(): any {
  this.adm.getEntities().subscribe(ent => this.ents = ent);
}
Search() {
   return this.workers = this.workers.filter(res => {
     res.name.toLocaleLowerCase().match(this.worker.name.toLocaleLowerCase());
  });
}
}
