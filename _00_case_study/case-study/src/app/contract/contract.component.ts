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

  // contracts: Contract[] = [
  //   {id: 1, name: "hieu",quantity: },
  // ]

}
// id:string;
// name:string;
// quantity:string;
// startDate:string;
// endDate:string;
// cost:number;
// totalPrice:number;
