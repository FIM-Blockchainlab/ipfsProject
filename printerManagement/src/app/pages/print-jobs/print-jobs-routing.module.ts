import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PrintJobsComponent } from './print-jobs.component';

import { LicensesComponent } from './licenses/licenses.component';
import { CreateJobComponent } from './create-job/create-job.component';



const routes: Routes = [{
  path: '',
  component: PrintJobsComponent,
  children: [
    {
      path: 'create-job',
      component: CreateJobComponent,
    },
    {
      path: 'licenses',
      component: LicensesComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrintJobsRoutingModule {
}
