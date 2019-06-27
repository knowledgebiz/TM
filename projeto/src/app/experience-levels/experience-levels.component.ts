import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService} from '../authentication.service';
@Component({
  selector: 'app-experience-levels',
  templateUrl: './experience-levels.component.html',
  styleUrls: ['./experience-levels.component.css']
})
export class ExperienceLevelsComponent implements OnInit {

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }


}
