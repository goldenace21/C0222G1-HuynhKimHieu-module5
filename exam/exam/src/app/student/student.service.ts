import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "./class/student";
import {Class} from "./class/class";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private URL_API_STUDENT = "http://localhost:3000/student"
  private URL_API_CLASS = "http://localhost:3000/class"

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.URL_API_STUDENT);
  }

  findClassList(): Observable<Class[]> {
    return this.httpClient.get<Class[]>(this.URL_API_CLASS);
  }

  save(student: Student): Observable<Student> {
    console.log(student)
    return this.httpClient.post(this.URL_API_STUDENT, student);
  }

  // booking(id: number)

  // findAllType(): Observable<Type[]> {
  //   return this.httpClient.get<Type[]>("http://localhost:3000/type");
  // }
  //
  //
  // search(name: string):Observable<Customer[]> {
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
  //
  // findById(id: number): Observable<Customer> {
  //   return this.httpClient.get<Customer>(this.URL_API + '/' + id);
  // }
  //
  // update(customer: Customer): Observable<void> {
  //   return this.httpClient.patch<void>(this.URL_API+'/'+ customer.id, customer)
  // }
}
