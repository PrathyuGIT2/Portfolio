import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.service';
import { Job } from '../models/job.model';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent implements OnInit {
  jobs: Job[] = [];

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.jobService.getJobs().subscribe(data => {
      this.jobs = data;
    });
  }
  addToFavorites(job: Job): void {
    job.isFavorite = true;
    this.jobService.addToFavorites(job);
  }

  removeFromFavorites(job: Job): void {
    job.isFavorite = false;
    this.jobService.removeFromFavorites(job);
  }

  toggleFavorite(job: Job): void {
    if (job.isFavorite) {
      this.removeFromFavorites(job);
    } else {
      this.addToFavorites(job);
    }
  }
}
