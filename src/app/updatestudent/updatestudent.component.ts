import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../Student';
import { StudService } from '../stud.service';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent implements OnInit {

  @Input() studentdetail: Student;
  @Output() closeComponent = new EventEmitter<string>();
  constructor(private stud: StudService) { }

  onClick(updatedDetails: Student) {
    let result = false;
    result = this.stud.update(updatedDetails);
    if (result) {
      alert("updated successfully");
    }
    else {
      alert("something went wrong");

    }
    this.closeComponent.emit("updated successfull");
  }

  ngOnInit() {
  }

}
