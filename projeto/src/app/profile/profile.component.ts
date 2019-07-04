import { Component, OnInit, ElementRef } from '@angular/core';
import { AuthenticationService, workersDetails, tokenPayLoad } from '../authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  Details: workersDetails;
  credentials: tokenPayLoad = {
    id: 0,
    name: '',
    email: '',
    active: false,
    department_id: 0,
    experience_levels_id: 0 ,
  };
  constructor(private auth: AuthenticationService, private elementRef: ElementRef, private router: Router) { }

  ngOnInit() {
    this.auth.profile().subscribe(user => {
    this.Details = user;
    },
      err => {
        console.log(err);
      }
    );
  }
// tslint:disable-next-line: use-life-cycle-interface
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'lightseagreen';
  }
}
