import { Component, OnInit } from '@angular/core';
import {Customer} from "./customer";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: Customer[] = [
    {id: 1, name: "hieu", birthday: "20-11-2001", gender: 1, phoneNumber: "0932566157", address: "hoi an", type: "platinum"},
    {id: 2, name: "linh", birthday: "12-06-2002", gender: 0, phoneNumber: "0957434344", address: "nha trang", type: "gold"},
    {id: 3, name: "quynh", birthday: "03-04-2001", gender: 0, phoneNumber: "096465445", address: "hue", type: "silver"},
    {id: 4, name: "viet", birthday: "06-10-2002", gender: 1, phoneNumber: "0975634545", address: "da nang", type: "member"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
