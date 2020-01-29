import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ChildrenService } from '../../services/children.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HtaBoundaries } from 'src/app/utils/hta-boundaries';
import { Observable } from 'rxjs';
import { HtaBounderiesService } from 'src/app/services/hta-bounderies.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  })
export class ChildComponent implements OnInit {
  childFormGroup: FormGroup;
   communes: Observable<any[]>;
   secCommunes: Observable<any[]>;
   model: string;
   child: Observable<any>;

  constructor(private childrenService: ChildrenService,
              fb: FormBuilder,
              private htaBoundaries: HtaBounderiesService,
              private activateRoute: ActivatedRoute,
              private router: Router) {

    this.childFormGroup = fb.group({
      firstname: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30)
        ]
      ],
      lastname: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50)
        ]
      ],
      middleName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50)
        ]
      ],
      country: [
        '',
        [
          Validators.required,
        ]
      ],
      birthPlace: [
        '',
        [
          Validators.required,
        ]
      ],
      dateOfBirth: ['', [Validators.required]],
      gender: ['', Validators.required],
      pregnencyNumber: ['', [Validators.required, Validators.min(-1), Validators.max(5)]],
      weight: ['', [Validators.required, Validators.max(6)]],
      height: ['', [Validators.required, Validators.min(10), Validators.max(50)]],
      /// Mother Fields
      motherFirstname: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30)
        ]
      ],
      motherLastname: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50)
        ]
      ],
      motherDateOfBirth: ['', [Validators.required]],
      motherIsDead: ['', [Validators.required]],
      // Legal Guardian
      guardianFirstname: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30)
        ]
      ],
      guardianLastname: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50)
        ]
      ],
      guardianOccupation: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50)
        ]
      ],
      relationShip: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50)
        ]
      ],
      guardianCity: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50)
        ]
      ],
      guardianSec: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50)
        ]
      ],
      guardianCountry: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50)
        ]
      ],
      guardianAddress: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50)
        ]
      ],
      guardianphoneNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50)
        ]
      ],
      guardianphoneNumber2: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50)
        ]
      ],
      guardianEmailAddress: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50)
        ]
      ],
      id: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50)
        ]
      ]
    });
    this.communes = this.htaBoundaries.communes;
   }

  ngOnInit() {
     this.activateRoute.paramMap.subscribe(params => {
      if (params.get('id')) {
       this.childrenService.getChild(params.get('id')).subscribe(value => {
         this.childFormGroup.patchValue(value);
       });
      }
    });
  }
  getAllSecCom() {
   console.log('Hello World', this.childFormGroup.controls.guardianCity.value);
   this.secCommunes = this.htaBoundaries.getSecCom(this.childFormGroup.controls.guardianCity.value);
  }
  saveChild() {
    if (!this.childFormGroup.controls.id) {
      this.childrenService.addChild(this.childFormGroup.value).then( data => {
        this.router.navigate(['children']);
      });
    } else {
      this.childrenService.updateChild(this.childFormGroup.value).then(data => {
        this.router.navigate(['children']);
      });
    }
  }
}
