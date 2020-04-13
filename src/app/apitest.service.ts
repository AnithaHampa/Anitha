import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Student} from './models/Student';
import { Observable } from 'rxjs/Observable';
import {Faculty} from './models/Faculty';
@Injectable()
export class ApitestService {
  student:string="http://localhost:3000/Students";
  faculty:string="http://localhost:3000/Faculty";
  constructor(private httpClient:HttpClient) { }
  getStudents():Observable<Student>{
    return this.httpClient.get<Student>(this.student);
  }
  getFaculty():Observable<Faculty>{
    return this.httpClient.get<Faculty>(this.faculty);
  }
 
}
