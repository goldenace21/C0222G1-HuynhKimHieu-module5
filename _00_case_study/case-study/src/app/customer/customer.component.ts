import { Component, OnInit } from '@angular/core';
import {Customer} from "./customer";
import {CustomerService} from "./customer.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Type} from "./type";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  id: number;
  customers: Customer[];
  customerInfo: FormGroup;
  customer: Customer;
  customerEdit: Customer;
  type: Type[];
  nameSearch: string;

  constructor(private customerService: CustomerService,
              private toastr: ToastrService) {}

  ngOnInit() {
    this.customers = new Array();
    this.customerService.findAll().subscribe(
      value => { this.customers = value;
        this.toastr.success('Hello world!', 'Toastr fun!');},
      error => {},
      () => {}
    )

    this.type = new Array();
    this.customerService.findAllType().subscribe(
      value => { this.type = value},
      error => {},
      () => {}
    )

    this.customerInfo = new FormGroup({
      id: new FormControl(),
      code: new FormControl('', [Validators.required, Validators.pattern("KH-\\d{4}")]),
      name: new FormControl('', [Validators.required]),
      birthday: new FormControl(),
      gender: new FormControl(),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern("\\d{9,11}")]),
      address: new FormControl('', [Validators.required]),
      type: new FormControl()
    })

  }

  createCustomer() {
    this.customer = this.customerInfo.value;
    console.log(this.customer)
    this.customerService.save(this.customer).subscribe(
      value => {},
      error => {},
      () => this.ngOnInit()
    )
  }

  idCustomer(id: number):void  {
    document.getElementById('delete-name').innerText = String(id)
    this.id = Number(id)
  }

  deleteCustomer():void {
    this.customerService.delete(this.id).subscribe(
      value => {},
      error => {},
      () => {this.ngOnInit()}
    );
  }

  formEdit(id: number):void {
    this.customerService.findById(id).subscribe(
      value => {this.customerEdit = value},
      error => {},
      () => {}
    )
    // @ts-ignore
    document.getElementById("id").value = this.customerEdit.id;
    // @ts-ignore
    document.getElementById("code").value = this.customerEdit.code;
    // @ts-ignore
    document.getElementById("name").value = this.customerEdit.name;
    // @ts-ignore
    document.getElementById("birthday").value = this.customerEdit.birthday;
    // @ts-ignore
    document.getElementById("gender").value = this.customerEdit.gender;
    // @ts-ignore
    document.getElementById("phoneNumber").value = this.customerEdit.phoneNumber;
    // @ts-ignore
    document.getElementById("phoneNumber").value = this.customerEdit.phoneNumber;
    // @ts-ignore
    document.getElementById("address").value = this.customerEdit.address;
    // @ts-ignore
    document.getElementById("type").value = this.customerEdit.type.name;
  }

  updateCustomer():void {

  }

  searchCustomer():void {
    console.log(this.nameSearch)
    this.customerService.searchByName(this.nameSearch).subscribe(
      value => {this.customers = value},
      error => {},
      () => {}
    )
  }
}
