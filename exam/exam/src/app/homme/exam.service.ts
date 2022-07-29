import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ticket} from "../ticket";
import {Home} from "../home";
import {environment} from "../../environments/environment";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(private httpClient: HttpClient) {}

  // findAll(): Observable<Ticket[]> {
  //   return this.httpClient.get<Ticket[]>(this.URL_API_TICKET);
  // }
  //
  // findAllHome(): Observable<Home[]> {
  //   return this.httpClient.get<Home[]>(this.URL_API_HOME);
  // }
  //
  // save(ticket: Ticket): Observable<Ticket> {
  //   console.log(ticket)
  //   return this.httpClient.post(this.URL_API_TICKET, ticket);
  // }
  //
  // search(place: string): Observable<Ticket[]> {
  //   return this.httpClient.get<Ticket[]>(this.URL_API_TICKET + "?startPlace_like=" + place)
  // }

  // findAllType(): Observable<Type[]> {
  //   return this.httpClient.get<Type[]>("http://localhost:3000/type");
  // }
  //
  //
  // searchByName(name: string):Observable<Customer[]> {
  //   if (name) {
  //     return this.httpClient.get<Type[]>(this.URL_API + "?name_like=" + name);
  //   } else {
  //     return this.httpClient.get<Customer[]>(this.URL_API);
  //   }
  // }
  //
  // delete(id: number): Observable<void> {
  //   return this.httpClient.delete<void>(this.URL_API + '/' + id);
  // }

  // findById(id: number): Observable<Ticket> {
  //   return this.httpClient.get<Ticket>(this.URL_API_TICKET + '/' + id);
  // }
  //
  // booking(ticket: Ticket): Observable<void> {
  //   return this.httpClient.patch<void>(this.URL_API_TICKET+'/'+ ticket.id, ticket)
  // }

  //connect backend
  getAllTicket(): Observable<Ticket[]> {
    return this.httpClient.get<Ticket[]>(API_URL + '/api/manager-ticket/list');
  }

  getAllHome(): Observable<Home[]> {
    return this.httpClient.get<Ticket[]>(API_URL+ "/api/manager-home/list");
  }

  create(ticket: Ticket): Observable<Ticket> {
    return this.httpClient.post(API_URL + '/api/manager-ticket/list', ticket)
  }

  booking(ticket: Ticket): Observable<void> {
    return this.httpClient.patch<void>(API_URL + '/api/manager-ticket/list' + '/' + ticket.id, ticket)
  }

  findById(id: number): Observable<Ticket> {
    return this.httpClient.get<Ticket>(API_URL + '/api/manager-ticket/list/' + id);
  }
}
