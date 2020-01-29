import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChildrenComponent } from './children.component';
import { ChildComponent } from './components/child/child.component';
import { ChildDetailsComponent } from './components/child-details/child-details.component';

const routes: Routes = [
  { path: '', component: ChildrenComponent },
  {path: 'child', component: ChildComponent},
  {path: 'child/:id', component: ChildComponent},
  {path: 'child-details/:id', component: ChildComponent},
  {path: 'child-details', component: ChildDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildrenRoutingModule { }
