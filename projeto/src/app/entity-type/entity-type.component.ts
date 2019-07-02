import { Component, OnInit } from '@angular/core';
import {EntType} from './ent-type';
import {entTypeService} from './ent-type.service';
@Component({
  selector: 'app-entity-type',
  templateUrl: './entity-type.component.html',
  styleUrls: ['./entity-type.component.css']
})
export class EntityTypeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
