import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Vaccine, Dose } from 'src/app/vaccines/models/vaccine';
import { VaccineService } from 'src/app/vaccines/services/vaccine.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { duration } from 'moment';

@Component({
  selector: 'app-new-vaccine',
  templateUrl: './new-vaccine.component.html',
  styleUrls: ['./new-vaccine.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewVaccineComponent implements OnInit {
  items: Observable<any[]>;
  _vaccine: Observable<any>;
  form: FormGroup;
  vaccine: Vaccine;
  headerHide: boolean;
  doses: Array<Dose>;
  id: any;
  constructor(private fb: FormBuilder,
    private vaccineService: VaccineService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar
    ) {
    this.form = fb.group({
      vaccineName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30)
        ]
      ],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(1024)
        ]
      ],
      dose: [
        '1',
        [
          Validators.min(0),
          Validators.max(12),
        ]
      ]


    });
    this.vaccine = new Vaccine();
    this.items = this.vaccineService.getVaccines();
   
  }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(params => {
      if (params.get('id')) {
        this._vaccine = this.vaccineService.getVaccine(params.get('id'));
        this.id = params.get('id');
        console.log('Hewewrr '+this.id);
      }
    });
    this._vaccine.subscribe(value =>{
      console.log(value);
      this.vaccine = value;
      console.log('Hewewrr '+value.id);
       this.form.patchValue(this.vaccine);

    })
  }
  previousStep() {
    this.headerHide = false;
  }
  nextStep() {
    this.headerHide = true;
    console.log(this.headerHide);
    this.vaccine.vaccineName = this.form.controls.vaccineName.value;
    this.vaccine.dose = this.form.controls.dose.value as number;
    this.vaccine.description = this.form.controls.description.value;
    let dose = this.form.controls.dose.value as number;
    let length = this.vaccine.doseList.length
    if (dose >= length) {
      for (let i = 1; i <= dose - length; i++) {
        let dose = new Dose();
        dose.doseNumber = length + i;
        this.vaccine.doseList.push(dose);
        console.log('valeur de i : ', i);
        console.log('valeur de doseList : ', this.vaccine.doseList);
      }
    } else {
      for (let i = 0; i < length - dose; i++) {

        this.vaccine.doseList.pop();
        console.log('valeur de i: ', i);
        console.log('valeur de doseList : ', this.vaccine.doseList);
      }
    }

    this.headerHide = true;
  }
  newDose() {
    let dose = new Dose();
    dose.doseNumber = this.vaccine.doseList.length + 1
    this.vaccine.doseList.push(dose);
    this.form.controls.dose.setValue(this.vaccine.doseList.length)
    this.vaccine.dose = this.vaccine.doseList.length
  }
  drop(item: Dose) {
    let i = 0;
    this.vaccine.doseList.splice(item.doseNumber-1,1)
    this.vaccine.doseList.forEach(dose =>{
      
      dose.doseNumber =++i;
    });
    this.vaccine.dose = this.vaccine.doseList.length;
    this.form.controls.dose.setValue(this.vaccine.dose);
  }

  save(){
   if(!this.id){
    this.vaccineService.addVaccine(JSON.parse(JSON.stringify(this.form.value))).then(values =>{
      this._snackBar.open('Sauvegarder fait avec succes','success', {
        duration: 3000
      });
      this.router.navigate(['vaccines']);
    });
   }else{
     this.vaccineService.updateVaccine(this.id,this.form.value).then(
       values =>{
        this._snackBar.open('Mise a jour fait avec succes','success', {
          duration: 3000
        })
        this.router.navigate(['vaccines']);
       }
     );
   }
   
  }
  getDose(uid: any){
   
    this.vaccineService.getVaccine(uid).subscribe( (value: Vaccine) =>{
      this.doses = undefined;
      if(value){
        this.doses = value.doseList;
      } 
    });
   
  }
}
