import { Component, ElementRef} from '@angular/core';
import {AuthenticationService, tokenPayLoad,tokenPayLoadEntity} from '../authentication.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  entLogin: boolean = false;
  userLogin: boolean = true;

   credentials: tokenPayLoad = {
    id: 0,
  name: '',
  email: '',
  password: '',
  active: false,
  department_id: 0,
  experience_levels_id: 0 ,
   };
   credentialsEntity: tokenPayLoadEntity = {
    id: 0,
    name: '',
    password: '',
    email: '',
    active: true,
    description: '',
    website_url: '',
    entities_types_id: 0,
  };
  constructor(private auth: AuthenticationService, private router: Router, private elementRef: ElementRef) { }
login() {
  this.auth.login(this.credentials).subscribe(
    () => {
      this.router.navigateByUrl('/profile');
    },
    err => {
      console.error(err);
    }
  );
}
loginEnt() {
  this.auth.loginEnt(this.credentialsEntity).subscribe(
    () => {
      this.router.navigateByUrl('/profileEnt');
    },
    err => {
      console.error(err);
    }
  );
}

toggleEditform(){
this.entLogin = !this.entLogin;
this.userLogin = !this.userLogin;
}

// tslint:disable-next-line: use-life-cycle-interface
ngAfterViewInit() {
  this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'lightseagreen';
}

}
