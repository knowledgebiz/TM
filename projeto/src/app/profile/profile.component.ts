import { Component, OnInit } from '@angular/core';
import { AuthenticationService, workersDetails } from '../authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  Details: workersDetails;
  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
    this.auth.profile().subscribe(user => {
    this.Details = user;
    },
      err => {
        console.log(err);
      }
    );

  }

}
