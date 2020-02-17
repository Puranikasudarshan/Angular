import { Component, OnInit } from '@angular/core';
import { Student } from '../Student';
import {StudService } from '../stud.service';
@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  private studentid:number;
  private name:string;
  private email:string;
  private password:string;
  private department:string;


  constructor(private stud:StudService) {
 }
 onClick(){
 let result:boolean =  this.stud.addStudent(this.studentid,this.name,this.email,this.password,this.department);
 if(result){
   alert("student inserted successfully");
   this.clearFields();
 } 
 else{
   alert("something went wrong");
 }

 }
 private clearFields(){
  this.studentid = null;
  this.name = "";
  this.email = "";
  this.password = "";
  this.department = "";
 }

  ngOnInit() {
  }

}
