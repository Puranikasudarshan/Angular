import { Component, OnInit } from '@angular/core';
import { StudService } from '../stud.service'
import { Student } from '../Student';
import { UpdatestudentComponent } from '../updatestudent/updatestudent.component';
@Component({
  selector: 'app-displaystudent',
  templateUrl: './displaystudent.component.html',
  styleUrls: ['./displaystudent.component.css']
})
export class DisplaystudentComponent implements OnInit {

  studlist: Student[] = [];
  show: boolean = true;
  selectedStudent: Student;

  constructor(private stud: StudService) { }

  onClick(selectedStudent: Student): void {
    this.show = true;
    this.selectedStudent = selectedStudent;

  }

  onClickDelete(student:Student){
    let result:boolean = false;
    result = (this.stud.delete(student))
    if(result){
      alert("student deleted");
      this.stud.display().subscribe(data => this.studlist = data);
    }
    else{
      alert("something wrong happened");
    }
  }
  onDelete() {
    this.show = false;
  }
  

  ngOnInit() {
     this.stud.display().subscribe(data => this.studlist = data);
  }

}
