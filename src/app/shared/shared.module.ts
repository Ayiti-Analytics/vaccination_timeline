import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material';
import {MatFormFieldModule,MatInputModule} from '@angular/material';
import {NgxPaginationModule} from 'ngx-pagination';  
import { Ng2SearchPipeModule } from 'ng2-search-filter';   
import { DeviceDetectorModule } from 'ngx-device-detector';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    DeviceDetectorModule,
    DeviceDetectorModule.forRoot()
  ],
  exports: [CommonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    DeviceDetectorModule]
})
export class SharedModule { }
