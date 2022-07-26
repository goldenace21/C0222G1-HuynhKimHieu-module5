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

  // changeFn($event: Event) {
  //   switch () {
  //     case"1":
  //       document.getElementById("standardRoom_ok").style.setProperty('display', 'block', 'important');
  //       document.getElementById("description_ok").style.setProperty('display', 'block', 'important');
  //       document.getElementById("floorsNumber_ok").style.setProperty('display', 'block', 'important');
  //       document.getElementById("poolArea_ok").style.setProperty('display', 'block', 'important');
  //       document.getElementById("facilityFree_ok").style.setProperty('display', 'none', 'important');
  //       break;
  //     case"2":
  //       document.getElementById("standardRoom_ok").style.setProperty('display', 'block', 'important');
  //       document.getElementById("description_ok").style.setProperty('display', 'block', 'important');
  //       document.getElementById("floorsNumber_ok").style.setProperty('display', 'block', 'important');
  //       document.getElementById("poolArea_ok").style.setProperty('display', 'none', 'important');
  //       document.getElementById("facilityFree_ok").style.setProperty('display', 'none', 'important');
  //       break;
  //     case"3":
  //       document.getElementById("standardRoom_ok").style.setProperty('display', 'none', 'important');
  //       document.getElementById("description_ok").style.setProperty('display', 'none', 'important');
  //       document.getElementById("floorsNumber_ok").style.setProperty('display', 'none', 'important');
  //       document.getElementById("poolArea_ok").style.setProperty('display', 'none', 'important');
  //       document.getElementById("facilityFree_ok").style.setProperty('display', 'block', 'important');
  //       break;
  //   }
  // }
}
