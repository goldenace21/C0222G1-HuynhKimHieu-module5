import { Component, OnInit } from '@angular/core';
import {Contract} from "./contract";

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  contracts: Contract[] = [
    {id: "1", name: "hieu",quantity: "2",startDate: "12-12-2001", endDate: "02-04-2021", cost: 34, totalPrice: 23},
    {id: "2", name: "hieu",quantity: "2",startDate: "12-12-2001", endDate: "02-04-2021", cost: 34, totalPrice: 23},
    {id: "3", name: "hieu",quantity: "2",startDate: "12-12-2001", endDate: "02-04-2021", cost: 34, totalPrice: 23},
  ]

}
// id:string;
// name:string;
// quantity:string;
// startDate:string;
// endDate:string;
// cost:number;
// totalPrice:number;
