import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VaccinesComponent } from './vaccines.component';
import { NewVaccineComponent } from './components/new-vaccine/new-vaccine.component';
import { NewDoseComponent } from './components/new-dose/new-dose.component';
import { DoseListComponent } from './components/dose-list/dose-list.component';
import { AddDoseComponent } from './components/add-dose/add-dose.component';


const routes: Routes = [
  {path: '', component: DoseListComponent },
  {path: 'vaccine-list', component: VaccinesComponent },
  {path: 'new-vaccine', component: NewVaccineComponent },
  {path: 'new-vaccine/:id', component: NewVaccineComponent },
  {path: 'new-dose/:id', component: NewDoseComponent },
  {path: 'new-dose', component: NewDoseComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VaccinesRoutingModule { }
