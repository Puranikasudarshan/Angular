import { Injectable } from '@angular/core';
import { Student } from './Student';
import { ɵangular_packages_platform_browser_platform_browser_a } from '@angular/platform-browser';
 
@Injectable({
  providedIn: 'root'
})
export class StudService {

studlist:Student[] = [];

 addStudent(id:number,name:string,department:string,password:string,email:string) : boolean{
  let student:Student = new Student();
  let result:boolean = false;
  student.studentid  = id;
  student.name = name;
  student.department = department;
  student.password = password;
  student.email = email;
  this.studlist.push(student);
  result = true;
  return result;
}

display(): Student[]{
return this.studlist;
}



  constructor() { }
}
