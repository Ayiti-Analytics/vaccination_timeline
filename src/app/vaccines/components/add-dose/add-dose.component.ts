import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VaccineService } from '../../services/vaccine.service';
import { Observable } from 'rxjs';
import { Vaccine, Dose } from '../../models/vaccine';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-dose',
  templateUrl: './add-dose.component.html',
  styleUrls: ['./add-dose.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddDoseComponent implements OnInit {

  form: FormGroup;
  items: Observable<any[]>;
  vaccine: Vaccine;
  _vaccine: Observable<any>;
  id: any;
  doses: Array<Dose>
  constructor(private fb: FormBuilder,
    private vaccineService: VaccineService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private doseName: string,
    private _snackBar: MatSnackBar
    ) {
   
    // this.vaccine = new Vaccine();
    // this.items = this.vaccineService.getVaccines();
    // this.activateRoute.paramMap.subscribe(params => {
    //   if (params.get('id')) {
    //     this._vaccine = this.vaccineService.getVaccine(params.get('id'));
    //     this.id = params.get('id');
    //     console.log('Hewewrr '+this.id);
    //   }
    // });
    // this.form = fb.group({
    //   id: ['',],
    //   idVaccine: [this.id,],
    //   vaccineName: [
    //     '',
        
    //   ],
    //   doseNumber: [
    //     '',
    //     [
    //       Validators.required,
    //       Validators.minLength(2),
    //       Validators.maxLength(15)
    //     ]
    //   ],
    //   minWindowWeek: [
    //     0,
    //     [Validators.required,
    //       Validators.min(0),
         
    //     ]
    //   ],
    //   maxWindowWeek: [
    //     0,
    //     [
    //       Validators.min(0),
         
    //     ]
    //   ],
    //   afterVaccineId: [
    //     'Non applicable',
    //     [
    //       Validators.required,
         
    //     ]
    //   ],
    //   afterVaccineName: [
    //     'Non applicable',
    //     [
    //       Validators.required,
         
    //     ]
    //   ],
    //   afterVaccineDoseId: [
    //     'Non applicable',
    //     [
    //       Validators.required,
         
    //     ]
    //   ],
    //   dose: [
    //     '',
    //     [
    //       Validators.required,
    //       Validators.minLength(2),
    //       Validators.maxLength(30)
    //     ]
    //   ],
    //   site: [
    //     '',
    //     [
    //       Validators.required,
    //       Validators.minLength(2),
    //       Validators.maxLength(30)
    //     ]
    //   ],
      
    //   voie: [
    //     '',
    //     [
    //       Validators.required,
    //       Validators.minLength(2),
    //       Validators.maxLength(30)
    //     ]
    //   ],


    // });
  }
  ngOnInit() {
   
 
  }

}
