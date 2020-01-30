import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VaccinesRoutingModule } from './vaccines-routing.module';
import { VaccinesComponent } from './vaccines.component';

import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card'; 
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material';
import {MatFormFieldModule,MatInputModule} from '@angular/material';
import {NgxPaginationModule} from 'ngx-pagination';  
import { Ng2SearchPipeModule } from 'ng2-search-filter';   
import { DeviceDetectorModule } from 'ngx-device-detector';


import { QRCodeModule } from 'angularx-qrcode';
import { NewVaccineComponent } from './components/vaccine-list/new-vaccine/new-vaccine.component';
import { NewDoseComponent } from './components/new-dose/new-dose.component';

@NgModule({
  declarations: [VaccinesComponent, NewVaccineComponent, NewDoseComponent],
  imports: [
    CommonModule,
    VaccinesRoutingModule,
    ReactiveFormsModule,FormsModule,
    QRCodeModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    DeviceDetectorModule.forRoot(),
    

    
  ],
  exports: [ NewVaccineComponent, NewDoseComponent]
})
export class VaccinesModule { }
