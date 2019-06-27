import { Component, ElementRef} from '@angular/core';
import {AuthenticationService, tokenPayLoad} from '../authentication.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   credentials: tokenPayLoad = {
    id: 0,
  name: '',
  email: '',
  password: '',
  active: false,
  entities_id: 0,
  teams_id: 0,
  experience_levels_id: 0,
  department_id: 0,
  position_id: 0,
  type_id: 0,
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
// tslint:disable-next-line: use-life-cycle-interface
ngAfterViewInit() {
  this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'lightseagreen';
}

}
