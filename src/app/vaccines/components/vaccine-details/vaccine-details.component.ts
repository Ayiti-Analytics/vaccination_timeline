import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Observable } from "rxjs";
import { FormGroup } from "@angular/forms";
import { Vaccine, Dose } from "../../models/vaccine";
import { VaccineService } from "../../services/vaccine.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-vaccine-details",
  templateUrl: "./vaccine-details.component.html",
  styleUrls: ["./vaccine-details.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VaccineDetailsComponent implements OnInit {
  items: Observable<any[]>;
  _vaccine: Observable<any>;
  vaccine: Vaccine;
  doseList: Array<Dose>;
  headerHide: boolean;
  id: any;
  constructor(
    private vaccineService: VaccineService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
    this.vaccine = new Vaccine();
    this.items = this.vaccineService.getVaccines();
    this.activateRoute.paramMap.subscribe(params => {
      if (params.get("id")) {
        console.log(params.get("id"));
        this._vaccine = this.vaccineService.getVaccine(params.get("id"));
        console.log(this.vaccine);
        this.id =params.get("id")
      }
    });
  }

  ngOnInit() {
    this._vaccine.subscribe(value => {
      this.doseList = value.doseList;
    });
  }
}
