import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Job } from 'src/job.model';
import { JobService } from 'src/app/mock-server.service';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.scss']
})
export class EmployerComponent {
  public jobForm: FormGroup;

  constructor(private fb: FormBuilder, private jobService: JobService) {
    this.jobForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      salary: ['', Validators.required],
      companyName: ['', Validators.required],
      companyLogo: ['']
    });
  }

  onSubmit() {
    const job: Job = {
      title: this.jobForm.value.title,
      description: this.jobForm.value.description,
      location: this.jobForm.value.location,
      salary: this.jobForm.value.salary,
      companyName: this.jobForm.value.companyName,
      companyLogo: this.jobForm.value.companyLogo
    };

    this.jobService.create(job).subscribe((response) => {
      console.log(response);
      this.jobForm.reset();
    });
  }
}
