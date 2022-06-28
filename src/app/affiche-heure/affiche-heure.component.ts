import { Component, OnInit } from '@angular/core';
import { TimeZoneComponent } from '../time-zone/time-zone.component';

@Component({
  selector: 'app-affiche-heure',
  templateUrl: './affiche-heure.component.html',
  styleUrls: ['./affiche-heure.component.css']
})
export class AfficheHeureComponent extends TimeZoneComponent implements OnInit {

  constructor() {
    super();
  }

  // ngOnInit(): void {
  // }

}
