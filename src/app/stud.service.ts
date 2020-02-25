import { Injectable } from '@angular/core';
import { Student } from './Student';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class StudService {

studlist:Student[] = [];
private url:string = "http://localhost:3000/students/";
private headers = new Headers({'Content-Type':'application/json'});

constructor(private http:HttpClient) { }

 addStudent(id:number,name:string,department:string,password:string,email:string) : boolean{
  let student:Student = new Student();
  let result:boolean = false;
  student.id  = id;
  student.name = name;
  student.department = department;
  student.password = password;
  student.email = email;
  if(this.http.post(this.url,student).subscribe()){
    result = true;
  }
  return result;
}

display(): Observable<Student[]>{
 return this.http.get<Student[]>(this.url);

}
update(student:Student):boolean{
  let result:boolean = false;
 let newUrl:string =  this.url+student.id;
      this.http.put(newUrl,{
      name: student.name,
      email: student.email,
      department: student.department
      }).subscribe(error => console.log(error));
      result = true;
  return result;
}
delete(student:Student):boolean{
let result:boolean = false;
let newUrl:string =  this.url+student.id;
if(this.http.delete(newUrl).subscribe()){
  result = true;
}

  return result;
}



  
}
