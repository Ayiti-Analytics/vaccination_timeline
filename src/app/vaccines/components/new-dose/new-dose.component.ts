import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VaccineService } from '../../services/vaccine.service';

@Component({
  selector: 'app-new-dose',
  templateUrl: './new-dose.component.html',
  styleUrls: ['./new-dose.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewDoseComponent implements OnInit {

  form: FormGroup
  constructor(private fb: FormBuilder,private vaccineService: VaccineService) {
    this.form = fb.group({
      id: ['',],
      idVaccine: ['',],
      vaccineName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30)
        ]
      ],
      doseNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(15)
        ]
      ],
      minWindowWeek: [
        0,
        [Validators.required,
          Validators.min(0),
         
        ]
      ],
      maxWindowWeek: [
        0,
        [
          Validators.min(0),
         
        ]
      ],
      afterVaccineName: [
        'Non applicable',
        [
          Validators.required,
         
        ]
      ],
      afterVaccineDoseId: [
        'Non applicable',
        [
          Validators.required,
         
        ]
      ],
      dose: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30)
        ]
      ],
      site: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30)
        ]
      ],
      
      voie: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30)
        ]
      ],


    });
  }
  ngOnInit() {
  }

}
