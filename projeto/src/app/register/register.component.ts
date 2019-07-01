import { Component, ElementRef, OnInit } from '@angular/core';
import { AuthenticationService, tokenPayLoad } from '../authentication.service';
import { Router } from '@angular/router';
import { Departments } from '../departments/departments';
import { DepartmentService } from '../departments/Department.service';
import {Exp} from '../experience-levels/exp';
import {expService} from '../experience-levels/exp-service.service';
import {Type} from '../type/type';
import {TypeService} from '../type/type-service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  deps: Departments[];
  dep: Departments;
  exps: Exp[];
  exp: Exp;
  types: Type[];
  type: Type;

  credentials: tokenPayLoad = {
    id: 0,
    name: '',
    email: '',
    password: '',
    department_id: 0,
    experience_levels_id: 0 ,
    active: true
  };
  constructor(private auth: AuthenticationService, private router: Router, private elementRef: ElementRef,
              private depaService: DepartmentService, private expSer: expService, private typeser: TypeService) { }

// tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
    this.getDepart();
    this.getExp();

  }
  register() {
    this.auth.register(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('/profile');
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
  getExp(): void {
    // tslint:disable-next-line: no-shadowed-variable
    this.expSer.getExp().subscribe(exp => this.exps = exp);
  }
  getType(): void {
    // tslint:disable-next-line: no-shadowed-variable
    this.typeser.getType().subscribe(type => this.types = type);
  }


  // tslint:disable-next-line: use-life-cycle-interface
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'lightseagreen';
  }
}
