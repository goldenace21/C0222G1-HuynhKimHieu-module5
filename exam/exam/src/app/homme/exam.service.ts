import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../student/class/student";
import {Ticket} from "../ticket";
import {Home} from "../home";

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  private URL_API_HOME = "http://localhost:3000/home"
  private URL_API_TICKET = "http://localhost:3000/ticket"

  constructor(private httpClient: HttpClient) { }


  findAll(): Observable<Ticket[]> {
    return this.httpClient.get<Ticket[]>(this.URL_API_TICKET);
  }

  findAllHome(): Observable<Home[]> {
    return this.httpClient.get<Home[]>(this.URL_API_HOME);
  }

  save(ticket: Ticket): Observable<Ticket> {
    console.log(ticket)
    return this.httpClient.post(this.URL_API_TICKET, ticket);
  }

  search(place: string): Observable<Ticket[]> {
    return this.httpClient.get<Ticket[]>(this.URL_API_TICKET + "?startPlace_like=" + place)
  }

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

  findById(id: number): Observable<Ticket> {
    return this.httpClient.get<Ticket>(this.URL_API_TICKET + '/' + id);
  }

  booking(ticket: Ticket): Observable<void> {
    return this.httpClient.patch<void>(this.URL_API_TICKET+'/'+ ticket.id, ticket)
  }

}
