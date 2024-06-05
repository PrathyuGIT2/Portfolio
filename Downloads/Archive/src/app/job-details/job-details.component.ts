import { Component } from '@angular/core';
import { Job } from '../models/job.model';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css',
})
export class JobDetailsComponent {
  job: Job | undefined;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private jobService: JobService
  ) {}

  ngOnInit(): void {
    const jobId = this.route.snapshot.paramMap.get('id');
    if (jobId){
      this.jobService.getJob(+jobId).subscribe((data) => {
        this.job = data;
      });
    } else {
      console.error('No job ID found in route');
      this.router.navigate(['/jobs']);
    }
  }

  addToFavorites(job: Job): void {
    this.jobService.addToFavorites(job);
  }
}
