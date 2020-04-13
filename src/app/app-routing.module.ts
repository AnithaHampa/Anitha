import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home';
import {LoginComponent} from './StudentLogin';

import{ResultComponent} from './result/result.component';
import{StudentComponent} from './student/student.component';
import{StudentInfoComponent} from './student-info/student-info.component';
import{FacultyComponent} from './faculty/faculty.component';
import{StudentDetailsComponent} from './student-details/student-details.component';
import{StudentMarksComponent} from './student-marks/student-marks.component';
import{DayreportComponent} from './dayreport/dayreport.component'

import{FacultyDetailsComponent} from './faculty-details/faculty-details.component';
import { from } from 'rxjs';
import { TeacherComponent } from './teacher/teacher.component';
import { UpdateFacultyComponent } from './update-faculty/update-faculty.component';
import { DailyreportComponent } from './dailyreport/dailyreport.component';
import{TimetableComponent}from './timetable/timetable.component'


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
 {path:'res',component:ResultComponent},
 {path:'login/student',component:StudentComponent},
 {path:'stu',component:StudentInfoComponent},
 {path:'fac',component:FacultyComponent},
 {path:'ptm',component:StudentDetailsComponent},
 {path:'con',component:StudentMarksComponent},
 {path:'fac/info/day',component:DayreportComponent},
 {path:'login/daily',component:DailyreportComponent},
 {path:'login/time',component:TimetableComponent},
 
  
    

{path:'',redirectTo:'/home',pathMatch:'full'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[LoginComponent,ResultComponent,StudentComponent]
