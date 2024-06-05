import { Routes } from '@angular/router';
import { JobListComponent } from './job-list/job-list.component';
import { FavoriteJobsComponent } from './favorite-jobs/favorite-jobs.component';
import { JobDetailsComponent } from './job-details/job-details.component';

export const routes: Routes = [
  { path: 'jobs', component: JobListComponent },
  { path: 'favorites', component: FavoriteJobsComponent },
  { path: 'job/:id', component: JobDetailsComponent },
  { path: '', redirectTo: '/jobs', pathMatch: 'full' },
];
