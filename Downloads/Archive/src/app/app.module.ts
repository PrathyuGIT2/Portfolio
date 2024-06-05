import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { FavoriteJobsComponent } from './favorite-jobs/favorite-jobs.component';
import { JobService } from './job.service';
import { RouterModule } from '@angular/router';
import { CompactJobViewComponent } from './compact-job-view/compact-job-view.component';

@NgModule({
  declarations: [
    JobListComponent,
    JobDetailsComponent,
    FavoriteJobsComponent,
    CompactJobViewComponent,
  ],
  imports: [
    HttpClientModule,
    RouterModule,
    CommonModule
  ],
  providers: [JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
