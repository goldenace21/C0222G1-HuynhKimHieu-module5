import { Component, OnInit } from '@angular/core';
import {ExamService} from "./exam.service";
import {Ticket} from "../ticket";
import {Home} from "../home";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-homme',
  templateUrl: './homme.component.html',
  styleUrls: ['./homme.component.css']
})
export class HommeComponent implements OnInit {
  startPlace: string;
  endPlace: string;
  ticket: Ticket;
  bookingTicket: Ticket;
  tickets: Ticket[];
  homes: Home[];
  homeForm = new FormGroup({
    id: new FormControl(),
    startPlace: new FormControl('', [Validators.required]),
    endPlace: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
    startTime: new FormControl('', [Validators.required, Validators.pattern("\\d{2}:\\d{2}")]),
    quantity: new FormControl('', [Validators.required, Validators.min(1)]),
    price: new FormControl('', [Validators.required, Validators.pattern("[1-9]{1}[\\d]*")]),
    home: new FormControl('', [Validators.required])
  });
  place: string;

  constructor(private examService: ExamService) { }

  ngOnInit() {
    this.getAllTicket();
    this.getAllHome();
  }
  getAllTicket() {
    this.examService.getAllTicket().subscribe(tickets => {
      this.tickets = tickets;
      console.log(this.tickets)
    });
  }

  getAllHome() {
    this.examService.getAllHome().subscribe(
      value => {
        this.homes = value;
        console.log(value)
      },
      error => {},
      () => {}
    )
  }


  formEdit(id: number) {

  }

  // idItem(id: number) {
  //   this.examService.findById(id).subscribe(
  //     value => this.bookingTicket = value,
  //   )
  //   this.startPlace = this.bookingTicket.startPlace;
  //   this.endPlace = this.bookingTicket.endPlace;
  //   console.log(this.bookingTicket)
  //   if( this.bookingTicket.quantity = 0) {
  //
  //   }
  // }
  //
  // createTicket() {
  //   this.examService.save(this.homeForm.value).subscribe(
  //     value => {},
  //     error => {},
  //     () => { this.ngOnInit()}
  //   )
  // }
  //
  // booking() {
  //   console.log(this.bookingTicket)
  //   this.bookingTicket.quantity = this.bookingTicket.quantity -1
  //   this.examService.booking(this.bookingTicket).subscribe(
  //     value => {},
  //     error => {},
  //     () => { this.ngOnInit()},
  //   )
  // }
  //
  // search() {
  //   this.examService.search(this.place).subscribe(
  //     value => { this.tickets = value},
  //     error => {},
  //     () => {}
  //   )
  // }
  booking() {
    this.examService.booking(this.bookingTicket).subscribe(
      value => {},
      error => {},
      () => { this.ngOnInit()}
    )
  }

  idItem(id: number) {
    this.examService.findById(id).subscribe(
      value => { this.bookingTicket = value ;
        this.startPlace = this.bookingTicket.startPlace;
        this.endPlace = this.bookingTicket.endPlace},
      error => {},
      () => {}
    )
  }

  search() {

  }

  createTicket() {
    this.examService.create(this.homeForm.value).subscribe(
      value => {},
      error => {},
      () => { this.ngOnInit() }
    )
  }
}
