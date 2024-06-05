import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Job } from '../models/job.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compact-job-view',
  templateUrl: './compact-job-view.component.html',
  styleUrl: './compact-job-view.component.css'
})
export class CompactJobViewComponent {
  @Input() job: Job | undefined;
  @Input() showFavoriteIcon = false;
  @Output() favoriteToggled = new EventEmitter<Job>();

  constructor(private router: Router) {}

  toggleFavorite(e: Event) {
    e.stopPropagation();
    this.favoriteToggled.emit(this.job);
  }

  navigateToDetails() {
    this.router.navigate(['/job', this.job?.id]);
  }
}
