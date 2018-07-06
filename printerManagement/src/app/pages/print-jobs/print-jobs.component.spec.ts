import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintJobsComponent } from './print-jobs.component';

describe('PrintJobsComponent', () => {
  let component: PrintJobsComponent;
  let fixture: ComponentFixture<PrintJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
