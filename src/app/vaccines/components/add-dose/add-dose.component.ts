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
  doses: Observable<Dose[]>
  constructor(private fb: FormBuilder,
    private vaccineService: VaccineService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar) {
   
    this.vaccine = new Vaccine();
    this.items = this.vaccineService.getVaccines();
    this.doses =this.vaccineService.getDoseList();
    this.activateRoute.paramMap.subscribe(params => {
      if (params.get('id')) {
        this._vaccine = this.vaccineService.getVaccine(params.get('id'));
        this.id = params.get('id');
        console.log('Hewewrr '+this.id);
      }
    });
    this.form = fb.group({
      
     
      vaccineName: [
        '',
        
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
    this._vaccine.subscribe(value =>{
      console.log(value);
      this.vaccine = value;
     
    })
  }

 
  save(){
     this.form.controls.vaccineName.setValue(this.vaccine.vaccineName);
     
     this.vaccineService.addDose(JSON.parse(JSON.stringify(this.form.value))).then(values =>{
       this._snackBar.open('Sauvegarde fait avec succes','success', {
         duration: 3000
       });
       this.router.navigate(['vaccines']);
     });
    }

}
