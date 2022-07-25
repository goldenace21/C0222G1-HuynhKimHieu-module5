import { Component, OnInit } from '@angular/core';
import {Facility} from "./facility";

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {

  facilitys: Facility[] = [
    {id: 1, name: "villa", area: 20},
    {id: 2, name: "house", area: 20},
    {id: 3, name: "room", area: 20},
    {id: 4, name: "villa", area: 20},
    {id: 5, name: "room", area: 20},
    {id: 6, name: "house", area: 20},
  ];

  constructor() { }

  ngOnInit() {
  }
}
