import { Component, OnInit, ElementRef } from '@angular/core';
import { AuthenticationService, EntityDetails, tokenPayLoadEntity } from '../authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-entprofileedit',
  templateUrl: './profileedit.component.html',
  styleUrls: ['./profileedit.component.css']
})
export class EntityProfileEditComponent implements OnInit {
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
    this.auth.profileEnt().subscribe(user => {
      this.Details = user;
    },
      err => {
        console.log(err);
      }
    );
  }
  edit() {
    this.auth.editEnt(this.Details).subscribe(
      () => {

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
