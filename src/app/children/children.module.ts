import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ChildrenRoutingModule } from './children-routing.module';
import { ChildrenComponent } from './children.component';
import { ChildComponent } from './components/child/child.component';
import { ChildDetailsComponent } from './components/child-details/child-details.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { DateOfBirthPipe } from './pipes/date-of-birth.pipe'
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
@NgModule({
  declarations: [ChildrenComponent, ChildComponent, ChildDetailsComponent, DateOfBirthPipe],
  imports: [
    CommonModule,
    ChildrenRoutingModule,
    NgxQRCodeModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [ChildComponent]
})
export class ChildrenModule { }
