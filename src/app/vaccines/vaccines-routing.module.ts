import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VaccinesComponent } from './vaccines.component';
import { NewVaccineComponent } from './components/new-vaccine/new-vaccine.component';
import { VaccineListComponent } from './components/vaccine-list/vaccine-list.component';
import { VaccineDetailsComponent } from './components/vaccine-details/vaccine-details.component';

const routes: Routes = [
  {path: '', component: VaccinesComponent },
  {path: 'new-vaccine', component: NewVaccineComponent},
  {path: 'new-vaccine/:id', component: NewVaccineComponent},
  {path: 'vaccin-list', component: VaccineListComponent},
  {path: 'vaccine-details/:id', component: VaccineDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VaccinesRoutingModule { }
