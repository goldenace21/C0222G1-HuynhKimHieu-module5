import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "./customer";
import {Type} from "./type";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private URL_API = "http://localhost:3000/customer"

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.URL_API);
  }

  findAllType(): Observable<Type[]> {
    return this.httpClient.get<Type[]>("http://localhost:3000/type");
  }

  save(customer: Customer): Observable<Customer> {
    console.log(customer)
    return this.httpClient.post(this.URL_API, customer);
  }
  //
  // save(todo: Todo): Observable<Todo> {
  //   return this.httpClient.post(this.URL_API, todo);
  // }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.URL_API + '/' + id);
  }

  findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.URL_API + '/' + id);
  }
  //
  // update(todo: Todo): Observable<void> {
  //   return this.httpClient.patch<void>(this.URL_API+'/'+ todo.id, todo)
  // }
}
