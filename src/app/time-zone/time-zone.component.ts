import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-zone',
  templateUrl: './time-zone.component.html',
  styleUrls: ['./time-zone.component.css'],
})
export class TimeZoneComponent implements OnInit {
  timezones: string[] = [
    'Europe/Paris',
    'America/New_York',
    'Europe/Amsterdam',
  ];

  constructor() {}

  ngOnInit(): void {

  }

  setTime(timezone: string){
    const date= new Date().toLocaleString('fr-FR', { timeZone: timezone });
    return date;
  }
  }



