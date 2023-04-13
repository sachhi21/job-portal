import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from 'src/job.model';
@Injectable({
  providedIn: 'root'
})

export class Jobfetch {

  private jobUrl = 'assets/data/jobs.json';

  constructor(private http: HttpClient) { }

  getJobs() {
    return this.http.get(this.jobUrl);
  }
}
export class JobService {

  
  private baseUrl = 'assets/data/db.json';


  constructor(private http: HttpClient) { }
 
  create(job: Job): Observable<Job> {
    return this.http.post<Job>(`${this.baseUrl}/jobs`, job);
  }
}
export class MockServerService {
  private admin = {
    email: 'admin@example.com',
    password: 'admin123'
  };

  private users = [
    {
      name: 'Sachin',
      email: 'sachin@example.com',
      password: 'sachin123'
    },
    {
      name: 'Jane',
      email: 'jane@example.com',
      password: 'jane123'
    }
  ];

  constructor() { }

  getAdmin() {
    return this.admin;
  }

  getUsers() {
    return this.users;
  }

  addUser(user: any) {
    this.users.push(user);
  }
}
