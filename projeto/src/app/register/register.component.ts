import { Component, ElementRef, OnInit } from '@angular/core';
import { AuthenticationService, tokenPayLoad } from '../authentication.service';
import { Router } from '@angular/router';
import { Departments } from '../departments/departments';
import { DepartmentService } from '../departments/Department.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  deps: Departments[];
  dep: Departments;

  credentials: tokenPayLoad = {
    id: 0,
    name: '',
    email: '',
    password: '',
    active: false,
    entities_id: 0,
    teams_id: 0,
    experience_levels: 0,
    department_id: 0,
    position_id: 0,
    type_id: 0,
  };
  constructor(private auth: AuthenticationService, private router: Router, private elementRef: ElementRef,
              private depaService: DepartmentService) { }

// tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
    this.getDepart();
  }
  register() {
    this.auth.register(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('/login');
      },
      err => {
        console.error(err);
      }
    );
  }
  getDepart(): void {
    // tslint:disable-next-line: no-shadowed-variable
    this.depaService.getDepartment().subscribe(Departments => this.deps = Departments);
  }



  // tslint:disable-next-line: use-life-cycle-interface
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'lightseagreen';
  }
}
