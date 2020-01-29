import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VaccinesRoutingModule } from './vaccines-routing.module';
import { VaccinesComponent } from './vaccines.component';
import { NewVaccineComponent } from './components/new-vaccine/new-vaccine.component';
import { VaccineListComponent } from './components/vaccine-list/vaccine-list.component';
import { VaccineDetailsComponent } from './components/vaccine-details/vaccine-details.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { DoseComponent } from './components/new-vaccine/dose/dose.component';

import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [VaccinesComponent, NewVaccineComponent, VaccineListComponent, VaccineDetailsComponent, DoseComponent],
  imports: [
    CommonModule,
    VaccinesRoutingModule,
    ReactiveFormsModule,FormsModule,
    QRCodeModule
    
  ],
  exports: [NewVaccineComponent, VaccineListComponent, VaccineDetailsComponent]
})
export class VaccinesModule { }
