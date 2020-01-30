import { onErrorResumeNext } from 'rxjs';

export class Vaccine {
    public id?: string;
    public vaccineName: string;
    public description: string;
    public dose: number;
    public doseList: Array<Dose> = new Array<Dose>();

    }
export class Dose {
    id?: string;
    idVaccine: string;
    vaccineName: string;
    doseNumber: number;
    minWindowWeek: number;
    maxWindowWeek: number;
    afterVaccineName: string;
    afterVaccineDoseId: string;
    dose: string;
    site: string;
    voie: string;
}
