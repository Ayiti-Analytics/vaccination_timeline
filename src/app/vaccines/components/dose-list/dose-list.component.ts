import { Component, OnInit, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material';
import { Vaccine } from '../../models/vaccine';
import { VaccineService } from '../../services/vaccine.service';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-dose-list',
  templateUrl: './dose-list.component.html',
  styleUrls: ['./dose-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DoseListComponent implements OnInit {
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
    this.items = this.vaccineService.getDoseList();
    this.innerWidth = window.innerWidth;
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
