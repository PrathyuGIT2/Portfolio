import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Job } from './models/job.model';

const favoriteJobsStorageKey = 'favoriteJobs'

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private apiUrl = '';
  private favoriteJobs: Job[] = [];

  constructor(private http: HttpClient) {
    this.loadFavoriteJobs();
  }

  private loadFavoriteJobs(): void {
    const favoriteJobs = localStorage.getItem(favoriteJobsStorageKey);
    this.favoriteJobs = favoriteJobs ? JSON.parse(favoriteJobs) : [];
  }

  private saveFavoriteJobs(): void {
    localStorage.setItem(favoriteJobsStorageKey, JSON.stringify(this.favoriteJobs));
  }


  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.apiUrl}/jobs`).pipe(
      map(jobs => jobs.map(job => {
        job.isFavorite = this.favoriteJobs.some(favJob => favJob.id === job.id);
        return job;
      }))
    );
  }

  getJob(id: number): Observable<Job> {
    return this.http.get<Job>(`${this.apiUrl}/jobs/${id}`);
  }

  addToFavorites(job: Job): void {
    if (!this.favoriteJobs.some(favJob => favJob.id === job.id)) {
      this.favoriteJobs.push(job);
      this.saveFavoriteJobs();
    }
  }

  removeFromFavorites(job: Job): void {
    this.favoriteJobs = this.favoriteJobs.filter(favJob => favJob.id !== job.id);
    this.saveFavoriteJobs();
  }

  getFavorites(): Job[] {
    return this.favoriteJobs;
  }
}
