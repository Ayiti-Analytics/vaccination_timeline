import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VaccinesRoutingModule } from './vaccines-routing.module';
import { VaccinesComponent } from './vaccines.component';

import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card'; 


import { QRCodeModule } from 'angularx-qrcode';
import { NewVaccineComponent } from './components/new-vaccine/new-vaccine.component';
import { NewDoseComponent } from './components/new-dose/new-dose.component';
import { SharedModule } from '../shared/shared.module';
import { DoseListComponent } from './components/dose-list/dose-list.component';
import { AddDoseComponent } from './components/add-dose/add-dose.component';

@NgModule({
  declarations: [VaccinesComponent, NewVaccineComponent, NewDoseComponent, DoseListComponent, AddDoseComponent],
  imports: [
    CommonModule,
    VaccinesRoutingModule,
    ReactiveFormsModule,FormsModule,
    QRCodeModule,
    MatToolbarModule,
    MatCardModule,
    SharedModule
    

    
  ],
  exports: [ NewVaccineComponent, NewDoseComponent, DoseListComponent, AddDoseComponent]
})
export class VaccinesModule { }
