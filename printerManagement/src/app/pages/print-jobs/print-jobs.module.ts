import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrintJobsComponent } from './print-jobs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { PrintJobsRoutingModule } from './print-jobs-routing.module';
import { LicensesComponent } from './licenses/licenses.component';
import { CreateJobComponent } from './create-job/create-job.component';

import { ThemeModule } from '../../@theme/theme.module';


@NgModule({
  imports: [
    CommonModule,
    PrintJobsRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    ThemeModule,
  ],
  declarations: [PrintJobsComponent, LicensesComponent, CreateJobComponent]
})
export class PrintJobsModule { }
