import { Component, OnInit, HostListener } from '@angular/core';
import { VaccineService } from './services/vaccine.service';
import { Observable } from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { MatTableDataSource } from '@angular/material/table';
import { Vaccine } from './models/vaccine';
import { DeviceDetectorService } from 'ngx-device-detector';
@Component({
  selector: 'app-vaccines',
  templateUrl: './vaccines.component.html',
  styleUrls: ['./vaccines.component.scss']
})
export class VaccinesComponent implements OnInit {
  items: Observable<any[]>;
  public innerWidth: any;
  deviceInfo = null;
  isMobile: boolean = false;
  hide: any
  filter: string;
 
  constructor(private vaccineService: VaccineService,private deviceDetectorService: DeviceDetectorService) { 
    this.deviceInfo = deviceDetectorService.getDeviceInfo();
    this.isMobile =  this.deviceDetectorService.isMobile();
    this.innerWidth = window.innerWidth;
    if(this.innerWidth <= 480){
      this.hide = true;
     } else{
       this.hide = false;
     }

  }

  ngOnInit() {
    this.items = this.vaccineService.getVaccines();
    this.innerWidth = window.innerWidth;
  }

  getQRCodeValue(id: any){
    return 'https://child-vaccinnation-tool.firebaseapp.com/vaccines/vaccine-details/'+id;
  }
  @HostListener('window:resize', ['$event'])
onResize(event) {
  this.innerWidth = window.innerWidth;
  if(this.innerWidth <= 480){
   this.hide = true;
  } else{
    this.hide = false;
  }

}
}
