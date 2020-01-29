import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-vaccine-list',
  templateUrl: './vaccine-list.component.html',
  styleUrls: ['./vaccine-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VaccineListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
