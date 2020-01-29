import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'children', loadChildren: () => import('./children/children.module').then(m => m.ChildrenModule) }, 
  { path: 'vaccines', loadChildren: () => import('./vaccines/vaccines.module').then(m => m.VaccinesModule) },
  { path: '', loadChildren: () => import('./vaccines/vaccines.module').then(m => m.VaccinesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
