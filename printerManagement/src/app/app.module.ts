import { Web3ConnectorService } from './@core/utils/web3-connector.service';
import { ContractService } from './@core/utils/contract.service';
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatExpansionModule } from '@angular/material/expansion';
import { SortablejsModule } from 'angular-sortablejs';

import {MatSnackBarModule} from '@angular/material/snack-bar';



import { SnackBarComponent } from './pages/print-jobs/create-job/create-job.component'




@NgModule({
  declarations: [AppComponent,   SnackBarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatExpansionModule,
    MatSnackBarModule,
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
    SortablejsModule.forRoot({ animation: 250, forceFallback: false, handle: ".my-handle" }),
  ],
  entryComponents: [SnackBarComponent],
  bootstrap: [AppComponent],
  providers: [
    Web3ConnectorService,
    ContractService,
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppModule {
}
