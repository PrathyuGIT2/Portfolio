import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompactJobViewComponent } from './compact-job-view.component';

describe('CompactJobViewComponent', () => {
  let component: CompactJobViewComponent;
  let fixture: ComponentFixture<CompactJobViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompactJobViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompactJobViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
