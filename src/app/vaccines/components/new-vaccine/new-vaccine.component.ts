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




  save(){
    
   if(!this.id ){
   
      this.vaccineService.addVaccine(JSON.parse(JSON.stringify(this.form.value))).then(values =>{
        this._snackBar.open('Sauvegarder fait avec succes','success', {
          duration: 3000
        });
        this.router.navigate(['vaccines','vaccine-list']);
      });
    
    
   }else{
     this.vaccineService.updateVaccine(this.id,this.form.value).then(
       values =>{
        this._snackBar.open('Mise a jour fait avec succes','success', {
          duration: 3000
        })
        this.router.navigate(['vaccines','vaccine-list']);
       }
     );
   }
   
  }
  getDose(uid: any){
   
    this.vaccineService.getDoseByVaccin(uid).subscribe( (values: Array<Dose>) =>{
      this.doses = undefined;
      if(values){
        this.doses = values;
      } 
    });
   
  }
}
