import { Component, OnInit } from '@angular/core';
import {StudentService} from "./student.service";
import {Student} from "./class/student";
import {FormControl, FormGroup} from "@angular/forms";
import {Class} from "./class/class";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: Student[];
  studentForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    gender: new FormControl(),
    class: new FormControl()
  });

  classList: Class[];
  student: Student;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    // this.studentService.findAllClass().subscribe(value => console.log(value));

    this.studentService.findAll().subscribe(
      value => {
        this.students = value
      },
      error => {
      },
      () => {
      }
    )

  this.studentService.findClassList().subscribe(
    value => this.classList = value
  )
  }


  formEdit(id: number) {
  }

  idStudent(id: number) {

  }

  deleteStudent() {

  }

  createStudent() {
    this.student = this.studentForm.value;
    console.log(this.student)
    this.studentService.save(this.student).subscribe(
      value => {},
      error => {},
      () => this.ngOnInit()
    )
  }
}
