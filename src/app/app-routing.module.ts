import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { DisplaystudentComponent } from './displaystudent/displaystudent.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';



export const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  {path:'welcome',component:WelcomeComponent},
  {path:'register',component:CreateStudentComponent },
  {path:'display',component:DisplaystudentComponent,children:[
    {path:'update',component:UpdatestudentComponent}
  ]},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
