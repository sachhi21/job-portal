import { Component, OnInit } from '@angular/core';
import { Jobfetch } from 'src/app/mock-server.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  jobs: any = [];

  constructor(private jobService: Jobfetch) { }

  ngOnInit() {
    this.jobService.getJobs().subscribe(data => {
      this.jobs = data;
    });
  }

}
