import { Component, OnInit } from '@angular/core';
import { VaccineService } from './services/vaccine.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vaccines',
  templateUrl: './vaccines.component.html',
  styleUrls: ['./vaccines.component.scss']
})
export class VaccinesComponent implements OnInit {
  items: Observable<any[]>;
  constructor(private vaccineService: VaccineService) { }

  ngOnInit() {
    this.items = this.vaccineService.getVaccines();
  }

  getQRCodeValue(id: any){
    return 'https://child-vaccinnation-tool.firebaseapp.com/vaccines/vaccine-details/'+id;
  }
}
