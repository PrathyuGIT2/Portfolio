import { Component } from '@angular/core';
import { Job } from '../models/job.model';
import { JobService } from '../job.service';

@Component({
  selector: 'app-favorite-jobs',
  templateUrl: './favorite-jobs.component.html',
  styleUrl: './favorite-jobs.component.css'
})
export class FavoriteJobsComponent {
  favoriteJobs: Job[] = [];

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.favoriteJobs = this.jobService.getFavorites();
  }
}
