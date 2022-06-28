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
    'America/Los_Angeles',
  ];

  constructor() {}

  ngOnInit(): void {

  }

  setTime(timezone: string):string {
    const date:string= new Date().toLocaleString('fr-FR', { timeZone: timezone });
    setInterval(()=> {this.setTime(timezone)},1000);
    return date;
  }
}



