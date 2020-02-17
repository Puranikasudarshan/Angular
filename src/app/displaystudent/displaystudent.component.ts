import { Component, OnInit } from '@angular/core';
import { StudService } from '../stud.service'
import {Student } from '../Student';  
@Component({
  selector: 'app-displaystudent',
  templateUrl: './displaystudent.component.html',
  styleUrls: ['./displaystudent.component.css']
})
export class DisplaystudentComponent implements OnInit {

  studlist:Student[] = [];
  constructor(private stud:StudService) { }



  ngOnInit() {
    this.studlist = this.stud.display();
  }

}
