import { Component, OnInit, ElementRef } from '@angular/core';
import { AuthenticationService, EntityDetails, tokenPayLoadEntity } from '../authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-entprofile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class EntityProfileComponent implements OnInit {
  Details: EntityDetails;
  credentials: tokenPayLoadEntity = {
    id: 0,
    name: '',
    email: '',
    active: true,
    description: '',
    website_url: '',
    entities_types_id: 0,
  };
  constructor(private auth: AuthenticationService, private elementRef: ElementRef, private router: Router) { }

  ngOnInit() {
    this.auth.profileEnt().subscribe(ent => {
    this.Details = ent;
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
